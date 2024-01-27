import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { Link, useParams } from 'react-router-dom'
import { getAllOrdersOfUser } from '../../redux/actions/order';
import axios from 'axios';
import { server } from '../../server';
import toast from 'react-hot-toast';
import { StyleConfig } from '../../utils/StyleConfig';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';
import DronesHeader from '../Headers/DronesHeader';
import DronesHeader2 from '../Headers/DronesHeader2';
import DronesFooter from '../DronesHomepage/DronesFooter';

const OrderDetails = () => {
    const { ConvertCurrency } = useGetCurrencyConversion()

    const { orders } = useSelector((state) => state.order);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [rating, setRating] = useState(1);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllOrdersOfUser(user._id));
    }, [dispatch, user._id]);

    const data = orders && orders.find((item) => item._id === id);

    const reviewHandler = async (e) => {
        await axios
            .put(
                `${server}/product/create-new-review`,
                {
                    user,
                    rating,
                    comment,
                    productId: selectedItem?._id,
                    orderId: id,
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success(res.data.message);
                dispatch(getAllOrdersOfUser(user._id));
                setComment('');
                setRating(null);
                setOpen(false);
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    const refundHandler = async (e, productID) => {
        e.preventDefault();
        await axios
            .put(`${server}/order/order-refund/${id}`, {
                status: 'Processing refund',
                productID,
            })
            .then((res) => {
                toast.success(res.data.message);
                dispatch(getAllOrdersOfUser(user._id));
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const styles = StyleConfig();


    return (
        <>
        <DronesHeader/>
        <DronesHeader2/>
            <div className='OrderDetails-parent'>
                <div className="row">
                    <div className=" col-md-12">
                        <div className='Orderspage-tabs-active-parent'>
                            <div className='Orderspage-tabs-active-text1'>
                                <h6>Order no:#{data?._id?.slice(0, 8)}</h6>
                                <p>Order Date : <span className='Orderspage-Orderdate'>{data?.createdAt?.slice(0, 10)}</span></p>
                                <p>Estimated Delivery Date : <span className='Orderspage-Estimated-date'>{data?.sellerCart[0]?.response?.orders?.etd}</span></p>
                            </div>
                            <div className='Orderspage-tabs-active-text2'>
                                <p>Order Status : <span className='Orderspage-oder-status'>Inprogress</span></p>
                                <p>Payment Method : <span className='Orderspage-paymentMethod'>Cash On Delivery</span></p>
                            </div>
                        </div>

                        {/* order-item */}


                        <div className='Orderspage-ordered-item-parent'>
                            <div className='Orderspage-product-button'>
                                <Link to="/orderspage">
                                    <button>Back To Orders</button>
                                </Link>
                            </div>
                            {data &&
                                <div className='flex flex-col gap-4'>
                                    {data?.cart.map((item, index) => (
                                        <div className='Orderspage-product-image-parent' key={index}>
                                            <div className='Orderspage-product-image'>
                                                <img src={`${item.showInputs
                                                    ? item.selectedColor.image?.url
                                                    : item.selectedColor.mainImage?.url
                                                    }`} alt="product" />
                                            </div>
                                            <div className='Orderspage-product-text'>
                                                <h6>{item?.name}</h6>
                                                <p>SKU : <span>{item?.showInputs
                                                    ? item?.selectedColor?.varientSKU
                                                    : item?.selectedColor?.SKU}</span></p>
                                                <p>Qty : <span>{item?.qty}</span></p>
                                                <p>Total : <span>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(item?.finalPrice) * item?.qty}</span></p>
                                                {item?.selectedColor?.haveAttributes
                                                    && <p className="pl-3 text-[18px] text-[#00000091]">
                                                        {item.colorAttribute?.name} :{' '}
                                                        {item.colorAttribute?.value.valName}
                                                    </p>}
                                            </div>
                                            <div className='d-flex flex-column '>
                                                <h5 className="pl-3 text-[20px] text-[#00000091]">
                                                    {item?.status}
                                                </h5>
                                                {item?.status === 'Delivered' && (
                                                    <div
                                                        className={`${styles.button} text-white`}
                                                        onClick={(e) => {
                                                            refundHandler(e, item._id);
                                                        }}
                                                    >
                                                        Give a Refund
                                                    </div>
                                                )}
                                                {!item?.isReviewed && item?.status === 'Delivered' ? (
                                                    <div
                                                        className={`${styles.button} text-[#fff]`}
                                                        onClick={() => setOpen(true) || setSelectedItem(item)}
                                                    >
                                                        Write a review
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    ))}
                                </div>}
                        </div>
                        <div>
                        </div>
                    </div>


                    {/* review popup */}
                    {open && (
                        <div className="w-full fixed top-0 left-0 h-screen bg-[#0005] z-50 flex items-center justify-center">
                            <div className="w-[50%] h-min bg-[#fff] shadow rounded-md p-3">
                                <div className="w-full flex justify-end p-3">
                                    <RxCross1
                                        size={30}
                                        onClick={() => setOpen(false)}
                                        className="cursor-pointer"
                                    />
                                </div>
                                <h2 className="text-[30px] font-[500] font-Poppins text-center">
                                    Give a Review
                                </h2>
                                <br />
                                <div className="w-full flex">
                                    <img
                                        src={`${selectedItem?.images[0]?.url}`}
                                        alt="product"
                                        className="w-[80px] h-[80px]"
                                    />
                                    <div>
                                        <div className="pl-3 text-[20px]">{selectedItem?.name}</div>
                                        <h4 className="pl-3 text-[20px]">
                                            {styles?.currency?.Symbol}&nbsp;{ConvertCurrency(selectedItem?.discountPrice)} x {selectedItem?.qty}
                                        </h4>
                                    </div>
                                </div>

                                <br />
                                <br />

                                {/* ratings */}
                                <h5 className="pl-3 text-[20px] font-[500]">
                                    Give a Rating <span className="text-red-500">*</span>
                                </h5>
                                <div className="flex w-full ml-2 pt-1">
                                    {[1, 2, 3, 4, 5].map((i) =>
                                        rating >= i ? (
                                            <AiFillStar
                                                key={i}
                                                className="mr-1 cursor-pointer"
                                                color="rgb(246,186,0)"
                                                size={25}
                                                onClick={() => setRating(i)}
                                            />
                                        ) : (
                                            <AiOutlineStar
                                                key={i}
                                                className="mr-1 cursor-pointer"
                                                color="rgb(246,186,0)"
                                                size={25}
                                                onClick={() => setRating(i)}
                                            />
                                        )
                                    )}
                                </div>
                                <br />
                                <div className="w-full ml-3">
                                    <label className="block text-[20px] font-[500]">
                                        Write a comment
                                        <span className="ml-1 font-[400] text-[16px] text-[#00000052]">
                                            (optional)
                                        </span>
                                    </label>
                                    <textarea
                                        name="comment"
                                        id=""
                                        cols="20"
                                        rows="5"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="How was your product? write your expresion about it!"
                                        className="mt-2 w-[95%] border p-2 outline-none"
                                    ></textarea>
                                </div>
                                <div
                                    className={`${styles.button} text-white text-[20px] ml-3`}
                                    onClick={rating > 1 ? reviewHandler : null}
                                >
                                    Submit
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="col-md-12">
                        <div className='OrderDetails-Shipping-details'>
                            <div className='OrderDetails-Shipping-details-sub1'>
                                <h6>Shipping : <span>{styles?.currency?.Symbol}&nbsp;{data?.shipping}</span></h6>
                            </div>
                            <div className=' OrderDetails-Shipping-details-sub1'>
                                <h6>Total Price : <span>{styles?.currency?.Symbol}&nbsp;{data?.totalPrice}</span></h6>
                            </div>
                            <div className='OrderDetails-Shipping-details-sub1'>
                                <h6>{data?.paymentInfo?.type}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='OrderDetails-additional-info'>
                        <div className="col-md-12">
                            <div className="row">
                                {data?.shipping_is_billing ?
                                    <div className="col-md-8">
                                        <div className='OrderDetails-delivery-address'>
                                            <h6>Shipping Address :</h6>
                                            <p>{data?.BillingAddress.billingaddress1}</p>
                                            <p>{data?.BillingAddress.billingaddress2}</p>
                                            <p>{data?.BillingAddress.newCountry}</p>
                                            <p>{data?.BillingAddress.newState}</p>
                                            <p>{data?.BillingAddress.newCity} - {data?.BillingAddress.billingzipCode}</p>
                                            <p>{data?.BillingAddress?.billinguserphonenumber}</p>
                                            <p>{data?.BillingAddress?.billinguserEmail}</p>
                                            <div className='OrderDetails-delivery-address-buttons'>
                                                <Link to="/inbox">
                                                    <div className={`bg-black p-3 rounded text-white`}>Send Message</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="col-md-8">
                                        <div className='OrderDetails-delivery-address'>
                                            <h6>Shipping Address :</h6>
                                            <p>{data?.shippingAddress.shippingaddress1}</p>
                                            <p>{data?.shippingAddress.shippingaddress2}</p>
                                            <p>{data?.shippingAddress.newCountryshipping}</p>
                                            <p>{data?.shippingAddress.newStateshipping}</p>
                                            <p>{data?.shippingAddress.newCityshipping} - {data?.BillingAddress.shippingzipCode}</p>
                                            <p>{data?.shippingAddress?.shippinguserphonenumber}</p>
                                            <p>{data?.shippingAddress?.shippinguserEmail}</p>
                                            <div className='OrderDetails-delivery-address-buttons'>
                                                <Link to="/">
                                                    <div className={`bg-black p-3 rounded text-white`}>Send Message</div>
                                                </Link>
                                                <button>Cancel Order</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="col-md-4">
                                    <div className='OrderDetails-paymentStatus'>
                                        <h6>Payment Info :</h6>
                                        <p>Status : <span>{data?.paymentInfo?.status ? data?.paymentInfo?.status : 'Not Paid'}</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DronesFooter/>
        </>
    )
}

export default OrderDetails