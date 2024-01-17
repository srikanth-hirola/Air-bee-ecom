import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlist";
import { addTocart } from "../redux/actions/cart";
import { toast } from "react-hot-toast";

const useProductCardHandler = ({ data1, setClick, data, setData, selectedColor, setSelectedColor, selectedAttr, setSelectedAttr, setSoldOut }) => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const { allEvents } = useSelector((state) => state.events);
    const { cart } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        if (wishlist && wishlist?.find((i) => i?._id === data1?._id)) {
            setClick(true);
        } else {
            setClick(false);
        }

        const productInEvents = allEvents?.find((event) =>
            event.productArray.some((item) => item?._id === data1?._id)
        );

        if (productInEvents) {
            const productData = productInEvents?.productArray?.find(
                (item) => item?._id === data1?._id
            );

            const updatedProductData = { ...productData };

            if (updatedProductData?.showInputs) {
                updatedProductData.colorInputs = updatedProductData?.colorInputs?.map(
                    (val) => ({
                        ...val,
                        discountPrice: val?.eventPrice,
                        stock: val?.eventStock,
                    })
                );
            } else {
                updatedProductData.discountPrice = updatedProductData?.eventPrice;
                updatedProductData.stock = updatedProductData?.eventStock;
            }
            setData(updatedProductData);
        } else {
            setData(data1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wishlist, allEvents, data1]);

    useEffect(() => {
        if (data?.showInputs) {
            setSelectedColor(data?.colorInputs[0])
        } else {
            setSelectedColor(data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    useEffect(() => {
        const initialSelectedAttr = selectedColor?.attributes.map((val) => ({
            name: val?.name,
            value: val?.values[0],
        }));

        if (selectedColor?.attributeStock) {
            setSoldOut(selectedColor?.attributes[0]?.values[0]?.sold_out)
        } else {
            setSoldOut(selectedColor?.sold_out)
        }

        setSelectedAttr(initialSelectedAttr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedColor]);

    const loopCheck = async (data) => {
        const result = await data?.filter((val) => {
            return val?.attrId === selectedAttr[0]?.value?._id;
        });
        return result[0];
    };

    const removeFromWishlistHandler = ({ data, click }) => {
        setClick(!click);
        dispatch(removeFromWishlist(data));
    };

    const addToWishlistHandler = ({ data, click }) => {
        setClick(!click);
        dispatch(addToWishlist(data));
    };

    const addToCartHandler = async ({ id, setWarning, count, active }) => {
        const isItemExists =
            cart &&
            // eslint-disable-next-line array-callback-return
            cart.filter((i) => {
                if (i?._id === id && i?.selectedColor?._id === selectedColor?._id) {
                    return i;
                }
            });

        setWarning();

        if (isItemExists?.length > 0) {
            const areAttributesEqual = await loopCheck(isItemExists);

            if (areAttributesEqual) {
                const currentValue = areAttributesEqual?.qty;
                const updatedQty = currentValue + count;

                const stockLimit = selectedColor?.attributeStock
                    ? selectedAttr[0]?.value?.stock
                    : selectedColor?.stock;

                if (data?.maxOrderQuantity && updatedQty > data?.maxOrderQuantity) {
                    setWarning('Reached Max Order Quantity!');
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
                    }
                }
            } else {
                const cartData = {
                    ...data,
                    qty: count,
                    colorAttribute: selectedAttr[0],
                    attrId: selectedAttr[0]?.value?._id,
                    selectedColor: selectedColor,
                    active: active,
                    status: '',
                    finalPrice: selectedColor?.discountPrice,
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
                    attrId: selectedAttr[0]?.value?._id,
                    selectedColor: selectedColor,
                    active: active,
                    status: '',
                    finalPrice: selectedColor?.discountPrice,
                    // newStock: selectedColor?.stock,
                };
                dispatch(addTocart(cartData));
                toast.success('Item added to cart successfully!');
            } else {
                alert('Select number of items');
            }
        }
    };

    const getDiscountPrice = ({ data }) => {
        if (data?.showInputs) {
            return data?.colorInputs[0]?.originalPrice === 0
                ? data?.colorInputs[0]?.originalPrice
                : data?.colorInputs[0].discountPrice;
        } else {
            return data?.originalPrice === 0
                ? data?.originalPrice
                : data?.discountPrice
        }
    }

    const getOriginalPrice = ({ data }) => {
        if (data?.showInputs) {
            return data?.colorInputs[0]?.originalPrice
                ? data?.colorInputs[0]?.originalPrice : null
        } else {
            return data?.originalPrice ? data?.originalPrice : null
        }
    }

    return { loopCheck, removeFromWishlistHandler, addToWishlistHandler, addToCartHandler, getDiscountPrice, getOriginalPrice }
}

export default useProductCardHandler