import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import toast from 'react-hot-toast';
import { server } from '../../../server';
import Loader from '../../../utils/Loader';
import ReturnOrderModal from './Modals/ReturnOrderModal';
import UpdateModel from './Modals/UpdateModel';
import { StyleConfig } from '../../../utils/StyleConfig';
import { getAllOrdersOfShop } from '../../../redux/actions/order';
import { getAllReturnShipmentOrders, getAllShipmentOrders } from '../../../redux/actions/shipping';
import useGetCurrencyConversion from '../../../hooks/Site-config/useGetCurrencyConversion';


const ReturnOrders = () => {
    const { seller } = useSelector((state) => state.seller);
    const { returnShippingOrders } = useSelector((state) => state.shipping);
    const { isLoadingShipping } = useSelector((state) => state.shipping);
    const { orders, isLoading } = useSelector((state) => state.order);
    const { ConvertCurrency } = useGetCurrencyConversion();

    const styles = StyleConfig();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrdersOfShop(seller._id));
        dispatch(getAllReturnShipmentOrders(seller._id));
    }, [seller, dispatch]);

    const [foundOrders, setFoundOrders] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [returnModalShow, setReturnModalShow] = useState(false);

    const returnModalOrderData = null;
    const orderDetails = null;
    const orderProducts = [];
    const orderID = null;

    useEffect(() => {
        const handleSearchOrders = async () => {
            let arr = [];
            // eslint-disable-next-line array-callback-return
            await orders.map((val) => {
                // const found = shippingOrders?.find(
                //     (val) => val?.channel_order_id === id
                // );
                // if (found) {
                const foundSeller = val?.sellerCart?.find(
                    (val) => val?.sellerID === seller?._id
                );
                // 416469095
                if (foundSeller) {
                    const found = returnShippingOrders?.find(
                        (value) => value?.channel_order_id === foundSeller?.shippingOrderDetails?.order_id
                    );
                    if (found) {
                        arr.push({
                            shipDetails: found,
                            orderDetails: foundSeller,
                            id: val._id,
                        });
                    }

                }
                // }
            });
            setFoundOrders(arr);
        };

        handleSearchOrders();
    }, [orders, returnShippingOrders, seller?._id]);

    const handleShipNow = async (e, orderID, shipmentID) => {
        e.preventDefault();
        try {
            const sellerID = seller._id;
            await axios.post(`${server}/shipping/request-pickup`, {
                sellerID,
                orderID,
                shipmentID,
            });
            toast.success('Requested Successfully for Shipment Pickup');
            dispatch(getAllOrdersOfShop(seller._id));
            dispatch(getAllShipmentOrders(seller._id));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleGenerateAWB = async (e, orderID, shippmentID, courierID) => {
        e.preventDefault();
        try {
            const sellerID = seller._id;
            await axios.post(`${server}/shipping/generateReturnAWB`, {
                orderID,
                shippmentID,
                courierID,
                sellerID,
            });
            toast.success('generated return awb successfully');
            dispatch(getAllOrdersOfShop(seller._id));
            dispatch(getAllShipmentOrders(seller._id));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const cancelOrder = async (e, orderID, id) => {
        e.preventDefault();
        try {
            const sellerID = seller._id;
            await axios.post(`${server}/shipping/cancelShipmentOrder`, {
                sellerID,
                orderID,
                id,
            });

            toast.success('Shipment Order Canceled Successfully');
            dispatch(getAllOrdersOfShop(seller._id));
            dispatch(getAllShipmentOrders(seller._id));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleAssignCourier = async (e, returnOrderID, orderID
    ) => {
        e.preventDefault();
        try {
            const sellerID = seller._id;
            await axios.post(`${server}/shipping//get-return-order-shippingCharge`, {
                returnOrderID,
                orderID,
                sellerID
            });
            dispatch(getAllOrdersOfShop(seller._id));
            dispatch(getAllShipmentOrders(seller._id));
        } catch (error) {
            toast.error(error.response.data.message);
        }

    }

    return (
        <>
            {isLoading && isLoadingShipping ? (
                <Loader />
            ) : (
                <div className="w-full mx-6 my-6">
                    <div className="w-full">
                        <div className="w-full rounded my-2 bg-[#f4f4f4] p-4 flex justify-between">
                            <p className="text-xs font-semibold mb-0">Order Details</p>
                            <p className="text-xs font-semibold mb-0">Customer Details</p>
                            <p className="text-xs font-semibold mb-0">Package Details</p>
                            <p className="text-xs font-semibold mb-0">Payment</p>
                            <p className="text-xs font-semibold mb-0">Pickup Address</p>
                            <p className="text-xs font-semibold mb-0">Status</p>
                            <p className="text-xs font-semibold mb-0">Shipping Details</p>
                            <p className="text-xs font-semibold mb-0">Action</p>
                        </div>
                        {foundOrders?.length > 0 &&
                            foundOrders?.map((order, index) => (
                                <div className="w-full rounded my-2 bg-[#f4f4f4] p-4 ">
                                    <div key={index} className="flex justify-between">
                                        <div className="order-detail width">
                                            <p className="text-xs">
                                                <span className="font-semibold">ID : </span>
                                                {order?.shipDetails?.id}
                                            </p>
                                            <p className="text-xs">
                                                <span className="font-semibold">SHIPPMENT ID : </span>
                                                {order?.orderDetails?.shippingOrderDetails?.shipment_id}
                                            </p>
                                            <p className="text-xs">
                                                <span className="font-semibold">
                                                    CHANNEL ORDER_ID :{' '}
                                                </span>
                                                {order?.shipDetails?.channel_order_id}
                                            </p>
                                            <p className="text-xs">
                                                <span className="font-semibold">CHANNEL_ID : </span>
                                                {order?.shipDetails?.channel_id}
                                            </p>
                                            <p className="text-xs">
                                                {order?.shipDetails?.created_at}
                                            </p>
                                        </div>
                                        <div className="package width">
                                            <p className="text-xs">
                                                <span className="font-semibold">Dead weight : </span>
                                                {order?.shipDetails?.shipments[0].weight}kg
                                            </p>
                                            <p className="text-xs">
                                                {order?.shipDetails?.shipments[0].length} x {order?.shipDetails?.shipments[0].height} x {order?.shipDetails?.shipments[0].breadth}
                                            </p>
                                            <p className="text-xs">
                                                <span className="font-semibold">
                                                    Volumetric weight :{' '}
                                                </span>
                                                {order?.shipDetails?.shipments[0].volumetric_weight}kg
                                            </p>
                                        </div>
                                        <div className="customer-detail width">
                                            <p className="text-xs">
                                                {order?.shipDetails?.customer_name}
                                            </p>
                                            <p className="text-xs">
                                                {order?.shipDetails?.customer_email}
                                            </p>
                                            <p className="text-xs">
                                                {order?.shipDetails?.customer_phone}
                                            </p>
                                        </div>
                                        <div className="payment ">
                                            <p className="text-xs">{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(order?.shipDetails?.total)}</p>
                                            <p
                                                className={`text-xs font-semibold rounded-sm ${order?.shipDetails?.payment_method === 'cod'
                                                    ? 'text-red-600 bg-red-200'
                                                    : 'text-green-600 bg-green-200'
                                                    }  w-fit p-1 px-2`}
                                            >
                                                {order?.shipDetails?.payment_method}
                                            </p>
                                        </div>
                                        <div className="addreses w-[125px]">
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_person_name
                                                }
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_person_phone
                                                }
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_person_email
                                                }
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_location}
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_code}
                                            </p>
                                            {/* <p className="text-xs mb-1">
                                                {order?.shipDetails?.state} -{' '}
                                                {order?.shipDetails?.pin_code}
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_address_detail.phone}
                                            </p> */}
                                        </div>
                                        <div className="status width">
                                            <p
                                                className={`text-xs font-semibold rounded-sm text-green-600 bg-green-200 w-fit p-1 px-2`}
                                            >
                                                {order?.shipDetails?.status}
                                            </p>
                                        </div>
                                        <div className="courier">
                                            {order?.orderDetails?.returnOrderResponse ? <>
                                                <p className="text-xs mb-1">
                                                    {order?.orderDetails?.returnOrderResponse?.courier_name}
                                                </p>
                                                <p className="text-xs mb-1">
                                                    <strong>ETD : </strong>
                                                    {order?.orderDetails?.returnOrderResponse?.etd}
                                                </p>
                                                <p className="text-xs mb-1">
                                                    <strong>Shipping : </strong>
                                                    {styles?.currency?.Symbol}&nbsp;{ConvertCurrency(order?.orderDetails?.returnOrderResponse?.rate)}
                                                </p> </> :
                                                <button
                                                    className="text-white bg-blue-600 p-1 rounded-sm text-xs"
                                                    onClick={(e) => handleAssignCourier(e, order?.shipDetails?.id, order?.id)}
                                                >
                                                    Assign Courier
                                                </button>}
                                        </div>
                                        <div className="courier flex flex-col gap-2">
                                            <button
                                                className="text-white bg-blue-600 p-1 rounded-sm text-xs"
                                                onClick={(e) => {
                                                    handleGenerateAWB(
                                                        e,
                                                        order?.id,
                                                        order?.orderDetails?.shippingOrderDetails
                                                            ?.shipment_id,
                                                        order?.orderDetails?.returnOrderResponse
                                                            ?.courier_company_id
                                                    );
                                                }}
                                            >
                                                Generate AWB
                                            </button>
                                            {order?.orderDetails?.awbDetails ? (
                                                <button
                                                    className="text-white bg-blue-600 p-1 rounded-sm text-xs"
                                                    onClick={(e) => {
                                                        handleShipNow(
                                                            e,
                                                            order?.id,
                                                            order?.orderDetails?.shippingOrderDetails
                                                                ?.shipment_id
                                                        );
                                                    }}
                                                >
                                                    Ship now
                                                </button>
                                            ) : (
                                                <button className="text-white bg-blue-600 p-1 rounded-sm text-xs opacity-20">
                                                    Ship now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 rounded">
                                        <button
                                            className="w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs"
                                            onClick={() => setModalShow(true)}
                                        >
                                            Edit Order
                                        </button>
                                        <button
                                            className="w-fit p-1 bg-red-300 text-red-600 border-1 border-red-600 font-semibold rounded-sm text-xs"
                                            onClick={(e) => {
                                                cancelOrder(e, order?.shipDetails?.id, order?.id);
                                            }}
                                        >
                                            Cancel Order
                                        </button>
                                        <UpdateModel
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                    <ReturnOrderModal
                        show={returnModalShow}
                        onHide={() => setReturnModalShow(false)}
                        orderItems={returnModalOrderData}
                        orderDetails={orderDetails}
                        orderProducts={orderProducts}
                        orderID={orderID}
                    />
                </div>
            )}
        </>
    );
};

export default ReturnOrders;
