import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../redux/actions/cart";
import axios from "axios";
import { server } from "../server";
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlist";

const useProductDetails = ({ data, selectedColor, selectedAttr, count, click, active, setMainImg, setSelectedAttr, setLimited, setSoldOut, setCount, setWarning, setClick }) => {
    const { products } = useSelector((state) => state.products);
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        const main = data?.mainImage;
        const multi = data?.images;

        let imgarr = []
        imgarr.push(main)

        // eslint-disable-next-line array-callback-return
        multi?.map((vel) => {
            imgarr.push(vel)
        });
        if (data?.showInputs) {
            data?.colorInputs?.map((item) => (
                imgarr.push(item?.image)
            ))
        }
        setMainImg(imgarr);
    }, [data?.colorInputs, data?.images, data?.mainImage, data?.showInputs, setMainImg]);

    useEffect(() => {
        const initialSelectedAttr = selectedColor.attributes.map((val) => ({
            name: val.name,
            value: val.values[0],
        }));

        setSelectedAttr(initialSelectedAttr);
    }, [selectedColor, setSelectedAttr]);

    useEffect(() => {
        const hasLimitedStock =
            selectedColor.haveAttributes &&
            selectedColor.attributeStock &&
            selectedAttr.some((val) => active ? Number(val?.value?.eventStock) < 7 : val.value.stock < 7);

        const soldOutStock = selectedColor.haveAttributes && selectedColor.attributeStock &&
            selectedAttr.some((val) => active ? Number(val?.value?.eventStock) === 0 : val.value.stock === 0);

        const hasLimitedStockByColor = !selectedColor.haveAttributes &&
            !selectedColor.attributeStock && active ? Number(selectedColor?.eventStock) < 7 : selectedColor?.stock < 7;

        const soldOutStockByColor = !selectedColor.haveAttributes &&
            !selectedColor.attributeStock && active ? Number(selectedColor?.eventStock) === 0 : selectedColor?.stock === 0;

        if (hasLimitedStock || hasLimitedStockByColor) {
            if (soldOutStock || soldOutStockByColor) {
                setLimited('Sold Out');
                setSoldOut(true);
            } else {
                setLimited('Limited Stocks');
                setSoldOut(false);
            }
        } else {
            setLimited('');
            setSoldOut(false);
        }
    }, [active, selectedAttr, selectedColor, setLimited, setSoldOut]);

    const handleHighlight = ({ attrIndex, valIndex, selectedAttributeIndices, setSelectedAttributeIndices }) => {
        const newSelectedIndices = [...selectedAttributeIndices];
        newSelectedIndices[attrIndex] = valIndex;
        setSelectedAttributeIndices(newSelectedIndices);
    };

    const handleAttrSelect = (value, index) => {
        setLimited('');
        setCount(1);
        setWarning();
        const updatedAttr = [...selectedAttr];
        // updatedAttr[index].value = value;
        updatedAttr[index] = {
            ...updatedAttr[index],
            value: value,
        };
        setSelectedAttr(updatedAttr);
    };

    const incrementCount = () => {
        const maxQuantity = data.maxOrderQuantity;
        const stockLimit =
            selectedColor?.attributes[0]?.name !== '' && selectedColor.attributeStock
                ? active ? Number(selectedAttr[0]?.value.eventStock) : selectedAttr[0]?.value.stock
                : active ? Number(selectedAttr[0]?.eventStock) : selectedColor?.stock;
        if (maxQuantity && count >= maxQuantity) {
            setWarning('Reached Max Order Quantity!');
            toast.error('Reached Max Order Quantity!')

        } else if (count >= stockLimit) {
            setWarning('Reached Stock Limit!');
            toast.error('Reached Stock Limit!')
        } else {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        setWarning();
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const removeFromWishlistHandler = (data) => {
        setClick(!click);
        dispatch(removeFromWishlist(data));
    };

    const addToWishlistHandler = (data) => {
        setClick(!click);
        dispatch(addToWishlist(data));
    };

    const totalReviewsLength =
        products &&
        products.reduce((acc, product) => acc + product.reviews.length, 0);

    const totalRatings =
        products &&
        products.reduce(
            (acc, product) =>
                acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
            0
        );

    const avg = totalRatings / totalReviewsLength || 0;

    const averageRating = avg.toFixed(2);


    const loopCheck = async (data) => {
        const result = await data.filter((val) => {
            return val.attrId === selectedAttr[0].value._id;
        });
        return result[0];
    };

    const addToCartHandler = async ({ e, id }) => {
        e.preventDefault();
        const isItemExists =
            cart &&
            // eslint-disable-next-line array-callback-return
            cart.filter((i) => {
                if (i._id === id && i.selectedColor._id === selectedColor._id) {
                    return i;
                }
            });
        setWarning();
        if (isItemExists.length > 0) {
            const areAttributesEqual = await loopCheck(isItemExists);

            if (areAttributesEqual) {
                const currentValue = areAttributesEqual.qty;
                const updatedQty = currentValue + count;

                const stockLimit = selectedColor.attributeStock
                    ? active ? selectedAttr[0]?.value.eventStock : selectedAttr[0]?.value.stock
                    : active ? selectedColor?.eventStock : selectedColor?.stock;

                if (data.maxOrderQuantity && updatedQty > data.maxOrderQuantity) {
                    setWarning('Reached Max Order Quantity!');
                    toast.error('Reached Max Order Quantity!')
                } else {
                    if (stockLimit >= updatedQty) {
                        const updatedCartData = {
                            ...areAttributesEqual,
                            qty: updatedQty,
                        };
                        dispatch(addTocart(updatedCartData));
                        toast.success('Cart updated');
                    } else {
                        setWarning('Reached Stock Limit!');
                        toast.error('Reached Stock Limit!')
                    }
                }
            } else {
                const cartData = {
                    ...data,
                    qty: count,
                    colorAttribute: selectedAttr[0],
                    attrId: selectedAttr[0].value._id,
                    selectedColor: selectedColor,
                    active: active,
                    status: '',
                    finalPrice: active ? selectedColor.eventPrice : selectedColor.discountPrice,
                };
                dispatch(addTocart(cartData));
                toast.success('Item added to cart successfully!');
            }
        } else {
            if (count > 0) {
                const cartData = {
                    ...data,
                    qty: count,
                    colorAttribute: selectedAttr[0],
                    attrId: selectedAttr[0].value._id,
                    selectedColor: selectedColor,
                    active: active,
                    status: '',
                    finalPrice: active ? selectedColor.eventPrice : selectedColor.discountPrice,
                    // newStock: selectedColor?.stock,
                };
                dispatch(addTocart(cartData));
                toast.success('Item added to cart successfully!');
            } else {
                alert('Select number of items');
            }
        }
    };

    const handleSelectCourierPartner = async ({ e, postCode, setBtnLoading, setDeliveryDate }) => {
        e.preventDefault();
        if (postCode === null) {
            toast.error("Post Code is required");
        } else {
            const exp = /^[0-9]+$/;
            if (exp.test(postCode)) {
                setBtnLoading(true)
                await axios.post(`${server}/shipping/get-available-courier`, { weight: data.packageWeight, delivery_postcode: postCode, sellerId: data.shop._id, cod: 0 })
                    .then((response) => {
                        setBtnLoading(false);
                        if (response.data.status === 200 || response.data.status === 201) {
                            console.log(response.data.orders);
                            setDeliveryDate(response.data.orders.etd)
                            // setShippingCHarge(response.data.orders.rate)
                        } else {
                            setDeliveryDate()
                            toast.error("Delivery is not available for that Post Code")
                        }
                    })
                    .catch((e) => {
                        setBtnLoading(false);
                        toast.error(e.response.data.message)
                    })
            } else {
                setBtnLoading(false);
                toast.error("Post Code should contains only numbers")
            }
        }
    }

    const getDiscountPrice = ({ data, active }) => {
        let price;
        if (data?.showInputs) {
            if (active) {
                price = data?.colorInputs[0]?.originalPrice === 0
                    ? data?.colorInputs[0]?.originalPrice
                    : data?.colorInputs[0].eventPrice;
            } else {
                price = data?.colorInputs[0]?.originalPrice === 0
                    ? data?.colorInputs[0]?.originalPrice
                    : data?.colorInputs[0].discountPrice;
            }
        } else {
            if (active) {
                price = data?.originalPrice === 0
                    ? data?.originalPrice
                    : data?.eventPrice
            } else {
                price = data?.originalPrice === 0
                    ? data?.originalPrice
                    : data?.discountPrice
            }
        }
        let convertedPrice = price
        return convertedPrice
    }

    const getOriginalPrice = ({ data }) => {
        let price;
        if (data?.showInputs) {
            price = data?.colorInputs[0]?.originalPrice
                ? data?.colorInputs[0]?.originalPrice : null
        } else {
            price = data?.originalPrice ? data?.originalPrice : null
        }
        let convertedPrice = price
        return convertedPrice
    }

    return { handleSelectCourierPartner, getDiscountPrice, getOriginalPrice, handleHighlight, handleAttrSelect, incrementCount, decrementCount, removeFromWishlistHandler, addToWishlistHandler, averageRating, addToCartHandler }
}

export default useProductDetails