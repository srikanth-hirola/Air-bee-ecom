import React, { useEffect, useState } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import {  useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { getAllOrdersOfShop } from '../../../redux/actions/order';
import { server } from '../../../server';
import toast from 'react-hot-toast';
import { StyleConfig } from '../../../utils/StyleConfig';
import useGetCurrencyConversion from '../../../hooks/Site-config/useGetCurrencyConversion';

const OrderDetails = () => {
    const { ConvertCurrency } = useGetCurrencyConversion()
    const { orders } = useSelector((state) => state.order);
    const { seller } = useSelector((state) => state.seller);
    const dispatch = useDispatch();
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const styles = StyleConfig();

    const [orderID, setOrderID] = useState();
    const [shipmentID, setShipmentID] = useState();

    const [packageDimension, setPackageDimension] = useState({
        length: null,
        breadth: null,
        height: null,
        weight: null,
    });

    const handleChangeDimension = (e) => {
        const { name, value } = e.target;
        setPackageDimension({ ...packageDimension, [name]: value });
    };

    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllOrdersOfShop(seller._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const [shippingDataSeller, setShippingDataSeller] = useState();

    const data = orders && orders.find((item) => item._id === id);


    useEffect(() => {
        const shippingData = data && data.sellerCart.find((val) => val.sellerID === seller._id);
        setShippingDataSeller(shippingData)
    }, [data, seller._id]);

    useEffect(() => {
        setPackageDimension({
            length: shippingDataSeller?.length,
            breadth: shippingDataSeller?.breadth,
            height: shippingDataSeller?.height,
            weight: shippingDataSeller?.weight,
        })
        if (shippingDataSeller?.shippingOrderDetails?.order_id) {
            setOrderID(shippingDataSeller?.shippingOrderDetails.order_id);
            setShipmentID(shippingDataSeller?.shippingOrderDetails.shipment_id);
        }
    }, [shippingDataSeller])



    const orderUpdateHandler = async (e) => {
        const products = shippingDataSeller?.products;
        await axios
            .put(
                `${server}/order/update-order-status/${id}`,
                {
                    status, products
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success('Order updated!');
                navigate('/shop/dashboard-orders');
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const refundOrderUpdateHandler = async (e, productID) => {
        await axios
            .put(
                `${server}/order/order-refund-success/${id}`,
                {
                    status,
                    productID,
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success('Order updated!');
                dispatch(getAllOrdersOfShop(seller._id));
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const handleCreateShipmentOrder = async (e) => {
        e.preventDefault();
        if (
            packageDimension.length === null ||
            packageDimension.breadth === null ||
            packageDimension.height === null ||
            packageDimension.weight === null
        ) {
            toast.error('All Fields of Package Dimenison is Required!');
        } else {
            await axios
                .post(`${server}/shipping/creat-shipment-order`, {
                    data,
                    packageDimension,
                    shippingDataSeller
                })
                .then((response) => {
                    if (response.data.Status === "Success") {
                        toast.success('Shipment Order Created Successfully');
                        dispatch(getAllOrdersOfShop(seller._id));
                    } else {
                        toast.error('Shipment Order Failed to create');
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    const handleGoBack = () =>{
        navigate(-1)
    }

    return (
        <div className={`py-4 min-h-screen ${styles.section}`}>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <BsFillBagFill size={30} color="#0156FF" />
                    <h1 className="pl-2 text-[24px] mt-3">Order Details</h1>
                </div>
                {/* <Link to={"/shop/dashboard-orders"}> */}
                    <div
                        className={`${styles.button} !bg-[#fce1e6] !rounded-[4px] text-[#fff] font-[600] !h-[45px] text-[18px]`} onClick={handleGoBack}
                    >
                        Order List
                    </div>
                {/* </Link> */}
            </div>

            <div className="w-full flex items-center justify-between pt-6">
                <h5 className="text-[#00000084] m-0 text-[15px]">
                    Order ID: <span>#{data?._id?.slice(0, 8)}</span>
                </h5>
                <h5 className="text-[#00000084] m-0 text-[15px]">
                    Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
                </h5>
            </div>

            {/* order items */}
            <br />
            <br />
            {data &&
                data?.cart.map((item, index) => (
                    <div className="w-full flex items-start mb-5">
                        <img
                            src={`${item.showInputs
                                ? item.selectedColor.image?.url
                                : item.selectedColor.mainImage?.url
                                }`}
                            alt=""
                            className="w-[80x] h-[80px]"
                        />
                        <div className="w-full">
                            <h5 className="pl-3 text-[20px] fw-medium">{item.name}</h5>
                            <h5 className="pl-3 text-[18px] fw-light">
                                SKU : {item.selectedColor.SKU}
                            </h5>
                            <h5 className="pl-3 text-[18px] text-[#00000091] fw-normal">
                                {styles?.currency?.Symbol}&nbsp;{ConvertCurrency(item.finalPrice)} x {item.qty}
                            </h5>
                            {item?.selectedColor?.haveAttributes
                                && <p className="pl-3 text-[18px] text-[#00000091]">
                                    {item.colorAttribute?.name} :{' '}
                                    {item.colorAttribute?.value.valName}
                                </p>}
                            {item.status === 'Processing refund' ||
                                item.status === 'Refund Success' ||
                                item.status === 'Rejected refund' ? (
                                <>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
                                    >
                                        {['Processing refund', 'Rejected refund', 'Refund Success']
                                            .slice(
                                                [
                                                    'Processing refund',
                                                    'Rejected refund',
                                                    'Refund Success',
                                                ].indexOf(item.status)
                                            )
                                            .map((option, index) => (
                                                <option value={option} key={index}>
                                                    {option}
                                                </option>
                                            ))}
                                    </select>
                                    {item.status === 'Processing refund' && (
                                        <div
                                            className={`${styles.button} mt-5 !bg-[#FCE1E6] !rounded-[4px] text-[#fff] font-[600] !h-[45px] text-[18px]`}
                                            onClick={(e) => {
                                                refundOrderUpdateHandler(e, item._id);
                                            }}
                                        >
                                            Update Status
                                        </div>
                                    )}
                                </>
                            ) : null}
                        </div>
                    </div>
                ))}

            <div className="border-t w-full text-right flex justify-between">
                <h5 className="pt-3 text-[18px]">
                    <strong className='fw-medium'>Shipping: </strong><span className='fw-light'>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(shippingDataSeller?.response?.orders?.rate)}</span>
                </h5>
                <h5 className="pt-3 text-[18px]">
                    <strong className='fw-medium'>Total Price: </strong><span className='fw-light'>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(shippingDataSeller?.subTotalPrice + shippingDataSeller?.response?.orders?.rate)}</span>
                </h5>
                <h5 className="pt-3 text-[18px]">
                    <strong className='fw-medium'>{data?.paymentInfo?.type}</strong>
                </h5>
            </div>
            <div className="border-t w-full">
                <h5 className="pt-3 text-[17px] fw-medium mb-1">
                    Delivery Info:
                </h5>
                <div className="pt-1 text-[17px] fw-light">
                    <p className='mb-1'><strong className='fw-medium '>Courier Name:</strong> {shippingDataSeller?.response?.orders?.courier_name}</p>
                    <p className='mb-1'><strong className='fw-medium'>Estimated Delivery: </strong>{shippingDataSeller?.response?.orders?.etd}</p>
                </div>
            </div>
            <br />
            <br />
            <div className="w-full 800px:flex items-center">
                {data?.shipping_is_billing ? <div className="w-full 800px:w-[60%]">
                    <h4 className="pt-3 text-[18px] font-[600] mb-2">Shipping Address:</h4>
                    <p className="pt-3 text-[18px] font-[300] mb-2">
                        {data?.BillingAddress.billingaddress1}
                    </p>
                    <p className=" text-[18px] font-[300] mb-2">{data?.BillingAddress.billingaddress2}
                    </p>
                    <p className=" text-[18px] font-[300] mb-2">{data?.BillingAddress.newCountry}</p>
                    <p className=" text-[18px] font-[300] mb-2">{data?.BillingAddress.newState}</p>
                    <p className=" text-[18px] font-[300] mb-2">{data?.BillingAddress.newCity} - {data?.BillingAddress.billingzipCode}</p>
                    <p className=" text-[18px] font-[300] mb-2">{data?.BillingAddress?.billinguserphonenumber}</p>
                    <p className=" text-[18px] font-[300] mb-2">{data?.BillingAddress?.billinguserEmail}</p>
                </div> :
                    <div className="w-full 800px:w-[60%]">
                        <h4 className="pt-3 text-[20px] font-[600]">Shipping Address:</h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.shippingAddress.shippingaddress1}
                        </h4>
                        <h4 className=" text-[20px]">{data?.shippingAddress.shippingaddress2}
                        </h4>
                        <h4 className=" text-[20px]">{data?.shippingAddress.newCountryshipping}</h4>
                        <h4 className=" text-[20px]">{data?.shippingAddress.newStateshipping}</h4>
                        <h4 className=" text-[20px]">{data?.shippingAddress.newCityshipping} - {data?.BillingAddress.shippingzipCode}</h4>
                        <h4 className=" text-[20px]">{data?.shippingAddress?.shippinguserphonenumber}</h4>
                        <h4 className=" text-[20px]">{data?.shippingAddress?.shippinguserEmail}</h4>
                    </div>}

                <div className="w-full 800px:w-[40%]">
                    <h4 className="pt-3 text-[18px] font-[600]">Payment Info:</h4>
                    <p className='text-[18px] font-[300] mb-2'>
                        Status:{' '}
                        {data?.paymentInfo?.status ? data?.paymentInfo?.status : 'Not Paid'}
                    </p>
                </div>
            </div>
            <br />
            <br />
            {!orderID && (
                <>
                    <div className="my-4 flex space-x-3">
                        <div>
                            <label className="pb-1 font-[500]">
                                Package Length In Centemeter
                                <span className="text-red-500">*</span>
                            </label>
                            <br />
                            <input
                                type="number"
                                className="border-1 border-grey rounded p-1 w-60"
                                name="length"
                                value={packageDimension.length} readOnly
                                onChange={handleChangeDimension}
                            />
                        </div>
                        <div>
                            <label className="pb-1 font-[500]">
                                Package Breadth In Centemeter
                                <span className="text-red-500">*</span>
                            </label>
                            <br />
                            <input
                                type="number"
                                className="border-1 border-grey rounded p-1 w-60"
                                name="breadth"
                                value={packageDimension.breadth} readOnly
                                onChange={handleChangeDimension}
                            />
                        </div>
                        <div>
                            <label className="pb-1 font-[500]">
                                Package Height In Centemeter
                                <span className="text-red-500">*</span>
                            </label>
                            <br />
                            <input
                                type="number"
                                className="border-1 border-grey rounded p-1 w-60"
                                name="height"
                                value={packageDimension.height} readOnly
                                onChange={handleChangeDimension}
                            />
                        </div>
                        <div>
                            <label className="pb-1 font-[500]">
                                Package Weight In Kilograms
                                <span className="text-red-500">*</span>
                            </label>
                            <br />
                            <input
                                type="number"
                                className="border-1 border-grey rounded p-1 w-60"
                                name="weight" readOnly={true}
                                onChange={handleChangeDimension}
                                value={packageDimension.weight}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            class="bg-green-500 text-white p-2 rounded"
                            onClick={handleCreateShipmentOrder}
                        >
                            Create Shipment Order
                        </button>
                    </div>
                </>
            )}
            {orderID && (
                <div>
                    <h5>Shipment Order Created</h5>
                    <p>
                        ID : <span>{orderID}</span>
                    </p>
                    <p>
                        Shipment ID : <span>{shipmentID}</span>
                    </p>
                </div>
            )}

            <h4 className="pt-3 text-[20px] font-[600]">Order Status:</h4>
            {data?.status !== 'Processing refund' &&
                data?.status !== 'Refund Success' && (
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-[200px]  border h-[35px] rounded-[5px]"
                    >
                        {[
                            'Processing',
                            'Transferred to delivery partner',
                            'Shipping',
                            'Received',
                            'On the way',
                            'Delivered',
                        ]
                            .slice(
                                [
                                    'Processing',
                                    'Transferred to delivery partner',
                                    'Shipping',
                                    'Received',
                                    'On the way',
                                    'Delivered',
                                ].indexOf(data?.status)
                            )
                            .map((option, index) => (
                                <option value={option} key={index}>
                                    {option}
                                </option>
                            ))}
                    </select>
                )}


            <div
                className={`${styles.button} mt-5 !bg-[#FCE1E6] !rounded-[4px] text-[#fff] font-[600] !h-[45px] text-[16px] `}
                onClick={
                    data?.status !== 'Processing refund'
                        ? orderUpdateHandler
                        : refundOrderUpdateHandler
                }
            >
                Update Status
            </div>
        </div>
    );
};

export default OrderDetails;
