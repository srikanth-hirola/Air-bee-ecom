import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/product';
import { getAllEvents } from '../../redux/actions/event';
import { Link } from 'react-router-dom';
import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';

const CartProductCards = ({
    data1,
    quantityChangeHandler,
    removeFromCartHandler, styles
}) => {
    const dispatch = useDispatch();
    const { ConvertCurrency } = useGetCurrencyConversion()

    const { allProducts } = useSelector((state) => state.products);
    const { allEvents } = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllEvents())
    }, [dispatch])

    useEffect(() => {
        if (allProducts?.length > 0 && data1) {
            finalCheck(data1)
            setValue(data1.qty);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data1, allProducts, allEvents]);

    const [dataFound, setDataFound] = useState();
    const [value, setValue] = useState();

    const finalCheck = async (data) => {
        const event = allEvents?.find((event) =>
            event.productArray.some((item) => item._id === data._id)
        );
        const NotEventFound = allProducts?.find((item) => item._id === data._id);

        if (event) {
            const foundedProduct = event?.productArray.find((product) => (product._id === data._id))
            EventProduct(foundedProduct, data)
        } else if (NotEventFound) {
            NotEventProduct(NotEventFound, data)
        } else {
            removeFromCartHandler(data)
        }
    }

    const EventProduct = async (foundProduct, passedProduct) => {
        let event = true;
        if (passedProduct?.showInputs) {
            varientCheck(foundProduct, passedProduct, event)
        } else {
            noVarientCheck(foundProduct, passedProduct, event)
        }
    }

    const NotEventProduct = async (foundProduct, passedProduct) => {
        let event = false;
        if (passedProduct?.showInputs) {
            varientCheck(foundProduct, passedProduct, event)
        } else {
            noVarientCheck(foundProduct, passedProduct, event)
        }
    }

    const noVarientCheck = (foundProduct, passedProduct, event) => {

        const attrId = passedProduct?.attrId;
        const selectedColor = passedProduct?.selectedColor;
        const currentDisPrice = event ? foundProduct?.eventPrice : foundProduct?.discountPrice;
        if (selectedColor && selectedColor.haveAttributes) {
            const foundAttr = foundProduct?.attributes[0]?.values.find((val) => val._id === attrId)
            if (foundAttr) {
                let tempAttr = {
                    name: foundProduct?.attributes[0]?.name,
                    value: foundAttr
                }
                let temp = {
                    ...passedProduct,
                    selectedColor: foundProduct,
                    finalPrice: currentDisPrice * passedProduct?.qty,
                    maxOrderQuantity: foundProduct?.maxOrderQuantity,
                    colorAttribute: tempAttr,
                    active: event,
                };
                setDataFound(temp)
                quantityChangeHandler(temp);
            } else {
                removeFromCartHandler(passedProduct)
            }
        } else {
            let temp = {
                ...passedProduct,
                selectedColor: foundProduct,
                finalPrice: currentDisPrice * passedProduct?.qty,
                maxOrderQuantity: foundProduct?.maxOrderQuantity,
                active: event,
            };
            setDataFound(temp)
            quantityChangeHandler(temp);
        }
    }

    const varientCheck = (foundProduct, passedProduct, event) => {
        const attrId = passedProduct?.attrId;
        const selectedColor = passedProduct?.selectedColor;
        const foundVarient = foundProduct?.colorInputs.find((val) => val._id === selectedColor._id)
        if (foundVarient) {
            const currentDisPrice = event ? foundVarient?.eventPrice : foundVarient?.discountPrice;

            if (foundVarient?.haveAttributes) {
                const foundAttr = foundVarient?.attributes[0]?.values.find((val) => val._id === attrId)
                if (foundAttr) {
                    let tempAttr = {
                        name: foundVarient?.attributes[0]?.name,
                        value: foundAttr
                    }
                    let temp = {
                        ...passedProduct,
                        selectedColor: foundVarient,
                        finalPrice: currentDisPrice * passedProduct?.qty,
                        maxOrderQuantity: foundProduct?.maxOrderQuantity,
                        colorAttribute: tempAttr,
                        active: event,
                    };
                    setDataFound(temp)
                    quantityChangeHandler(temp);
                } else {
                    removeFromCartHandler(passedProduct)
                }
            } else {
                let temp = {
                    ...passedProduct,
                    selectedColor: foundVarient,
                    finalPrice: currentDisPrice * passedProduct?.qty,
                    maxOrderQuantity: foundProduct?.maxOrderQuantity,
                    active: event,
                };
                setDataFound(temp)
                quantityChangeHandler(temp);
            }
        } else {
            removeFromCartHandler(passedProduct)
        }
    }


    let totalPrice = dataFound?.active
        ? dataFound?.selectedColor.eventPrice * value
        : +dataFound?.selectedColor.discountPrice * value;

    // let totalPrice = dataFound?.finalPrice

    const increment = (e, data) => {
        e.preventDefault();
        const maxQuantity = data.maxOrderQuantity;
        let stockLimit = null;
        if (
            data.selectedColor.haveAttributes &&
            data.selectedColor.attributeStock
        ) {
            stockLimit = data.active
                ? data.colorAttribute?.value.eventStock
                : data.colorAttribute?.value.stock;
        } else {
            stockLimit = data.active
                ? data.selectedColor?.eventStock
                : data.selectedColor?.stock;
        }

        if (maxQuantity && value >= maxQuantity) {
            toast.error('Reached Max Order Quantity!');
        } else if (value >= stockLimit) {
            toast.error('Reached Stock Limit!');
        } else {
            setValue(value + 1);
            const updateCartData = { ...data, qty: value + 1 };
            quantityChangeHandler(updateCartData);
            setDataFound(updateCartData);
        }
    };

    // const decrement = (e, data) => {
    //     setValue(value === 1 ? 1 : value - 1);
    //     const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    //     quantityChangeHandler(updateCartData);
    //     setDataFound(updateCartData);
    // };
    const decrement = (e, data) => {
        const updatedValue = value - 1;
        setValue(updatedValue);

        if (updatedValue === 0) {
            // If the updated value is zero, remove the product from the cart
            removeFromCartHandler(data);
        } else {
            // Otherwise, update the cart with the new quantity
            const updateCartData = { ...data, qty: updatedValue };
            quantityChangeHandler(updateCartData);
            setDataFound(updateCartData);
        }
    };





    return (
        <>
            {dataFound && (

                <div className="row align-items-center">
                    <hr />
                    <div className="col-md-7">
                        <Link to={`${`/product/${data1?.slug}`}`}>
                            <div className="Dronescrat-product">
                                <div className='Dronescrat-product-sub'>
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className='Drones-Product-image'>
                                                <img src={`${dataFound?.selectedColor?.mainImage?.url ? dataFound?.selectedColor?.mainImage?.url : dataFound?.selectedColor?.image?.url}`} alt="product" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className='Drones-Product-desc'>
                                                <p>{dataFound?.name}</p>
                                                <p>{dataFound?.selectedColor?.SKU}</p>
                                                {dataFound?.selectedColor?.haveAttributes && (
                                                    <h4 className="font-[400] text-[15px] text-[#00000082]">
                                                        {dataFound?.colorAttribute?.name} : {dataFound?.colorAttribute?.value.valName}
                                                    </h4>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <div className="Drones-product-details-sub">
                            <div className="row">
                                <div className="col-3 col-sm-3 col-md-3">
                                    <div className='Drones-Product-price'>
                                        <p>{styles?.currency?.Symbol}&nbsp;{dataFound.active
                                            ? ConvertCurrency(dataFound.selectedColor.eventPrice)
                                            : ConvertCurrency(dataFound.selectedColor.discountPrice)}{' '}
                                            {/* * {value} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3">
                                    <div className='Drones-Product-quantity'>

                                        <div className='Drones-addtocart-buttons'>
                                            <button className='increment-button' onClick={(e) => decrement(e, dataFound)}>-</button>
                                            <p className='m-0'>{dataFound.qty}</p>
                                            <button className='increment-button' onClick={(e) => increment(e, dataFound)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 Drones-Product-subtotal-parent">
                                    {dataFound?.showInputs ? (
                                        <VarientAttr
                                            data={dataFound}
                                            value={value}
                                            totalPrice={totalPrice}
                                            styles={styles} removeFromCartHandler={removeFromCartHandler} ConvertCurrency={ConvertCurrency}
                                        />
                                    ) : (
                                        <SingleAttr
                                            data={dataFound}
                                            value={value}
                                            totalPrice={totalPrice}
                                            styles={styles} removeFromCartHandler={removeFromCartHandler} ConvertCurrency={ConvertCurrency}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CartProductCards

const VarientAttr = ({ data, value, totalPrice, styles, removeFromCartHandler, ConvertCurrency }) => {
    return (
        <div className="row Drones-Product-subtotal">
            <div className="col-6 Drones-Product-subtotal-content ">
                <p>{styles?.currency?.Symbol} {ConvertCurrency(totalPrice)}</p>
            </div>
            <div className="col-6 images-section">
                <div className='Drones-Product-subtotal-sub2'>
                    <div className='Drones-Product-subtotal-sub2-image1'>
                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d5d7e0", fontSize: '20px' }} onClick={() => removeFromCartHandler(data)} />
                    </div>
                </div>
            </div>

        </div>
    )
}

const SingleAttr = ({ data, value, totalPrice, styles, removeFromCartHandler, ConvertCurrency }) => {

    return (
        <div className="row Drones-Product-subtotal">
            <div className="col-6 Drones-Product-subtotal-content ">
                <p>{styles?.currency?.Symbol} {ConvertCurrency(totalPrice)}</p>
            </div>
            <div className="col-6 images-section">
                <div className='Drones-Product-subtotal-sub2'>
                    <div className='Drones-Product-subtotal-sub2-image1'>
                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d5d7e0", fontSize: '20px' }} onClick={() => removeFromCartHandler(data)} />
                    </div>

                </div>
            </div>

        </div>
    )
}