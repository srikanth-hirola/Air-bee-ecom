import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { AiOutlineEye } from 'react-icons/ai';
import { getAllOrdersOfShop } from '../../../redux/actions/order';
import { getAllShipmentOrders } from '../../../redux/actions/shipping';
import { StyleConfig } from '../../../utils/StyleConfig';
import toast from 'react-hot-toast';
import { server } from '../../../server';
import Loader from '../../../utils/Loader';
import UpdateModel from '../../../components/ShopComponents/Shipment/Modals/UpdateModel';
import ReturnOrderModal from '../../../components/ShopComponents/Shipment/Modals/ReturnOrderModal';
import TrackingModal from '../../../components/ShopComponents/Shipment/Modals/TrackingModal';
import useGetCurrencyConversion from '../../../hooks/Site-config/useGetCurrencyConversion';

const ShipOrders = () => {
    const { seller } = useSelector((state) => state.seller);
    const { shippingOrders } = useSelector((state) => state.shipping);
    const { isLoadingShipping } = useSelector((state) => state.shipping);
    const { orders, isLoading } = useSelector((state) => state.order);
    const { ConvertCurrency } = useGetCurrencyConversion();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrdersOfShop(seller._id));
        dispatch(getAllShipmentOrders(seller._id));
    }, [seller, dispatch]);

    const [foundOrders, setFoundOrders] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [returnModalShow, setReturnModalShow] = useState(false);

    const [returnModalOrderData, setReturnModalOrderData] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    const [orderProducts, setOrderProducts] = useState([]);
    const [orderID, setOrderID] = useState(null);

    const [updateAddressType, setUpdateAddressType] = useState(true);
    const [addressUpdatedData, setAddressUpdatedData] = useState({});
    const [trackingState, setTrackingState] = useState(false);
    const [trackingData, setTrackingData] = useState([]);

    const styles = StyleConfig();

    useEffect(() => {
        const handleSearchOrders = async () => {
            let arr = [];
            // eslint-disable-next-line array-callback-return
            await orders.map((val) => {
                const id = val?._id?.slice(0, 8);
                const found = shippingOrders?.find(
                    (val) => val?.channel_order_id === id
                );
                if (found) {
                    const foundSeller = val?.sellerCart?.find(
                        (val) => val?.sellerID === seller?._id
                    );
                    if (foundSeller) {
                        arr.push({
                            shipDetails: found,
                            orderDetails: foundSeller,
                            id: val._id,
                        });
                    }
                }
            });
            setFoundOrders(arr);
        };

        handleSearchOrders();
    }, [orders, seller?._id, shippingOrders]);

    useEffect(() => {
        console.log(foundOrders);
    }, [foundOrders]);

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
            await axios.post(`${server}/shipping/generateAWB`, {
                orderID,
                shippmentID,
                courierID,
                sellerID,
            });
            toast.success('generated awb successfully');
            dispatch(getAllOrdersOfShop(seller._id));
            dispatch(getAllShipmentOrders(seller._id));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const downloadInvoice = async (e, orderID) => {
        e.preventDefault();
        try {
            const sellerID = seller._id;
            const { data } = await axios.post(`${server}/shipping/generateInvoice`, {
                sellerID,
                orderID,
            });

            const a = document.createElement('a');
            a.href = data.invoiceURL;
            a.download = 'invoice.pdf';
            document.body.appendChild(a);

            a.click();

            document.body.removeChild(a);

            toast.success('Invoice Downloaded');
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

    const downloadLabel = async (e, shipmentID) => {
        e.preventDefault();
        try {
            const sellerID = seller._id;
            const { data } = await axios.post(`${server}/shipping/generateLabel`, {
                sellerID,
                shipmentID,
            });

            const a = document.createElement('a');
            a.href = data.label_url;
            a.download = 'invoice.pdf';
            document.body.appendChild(a);

            a.click();

            document.body.removeChild(a);

            toast.success('Label Downloaded');
            dispatch(getAllOrdersOfShop(seller._id));
            dispatch(getAllShipmentOrders(seller._id));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };


    const getAWBTracking = async (e, awbCode, id) => {
        try {
            const sellerID = seller._id;
            const { data } = await axios.post(`${server}/shipping/awb-tracking`, {
                sellerID, awbCode
            })
            const curState = data?.tracking_data?.shipment_track[0]?.current_Status;
            const activity = data?.tracking_data?.shipment_track_activities;

            const ind = foundOrders.findIndex((val) => val?.shipDetails?.id === id);
            const updatedArr = [...foundOrders]
            updatedArr[ind].currentStatus = curState;
            updatedArr[ind].awbTrackingActivity = activity;
            setFoundOrders(updatedArr)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const handleModel2 = (e, data, order, products, id) => {
        e.preventDefault();
        setReturnModalShow(true);
        setReturnModalOrderData(data);
        setOrderDetails(order)
        setOrderProducts(products)
        setOrderID(id)
    }

    const handleUpdateCustomerModal = async (e, data) => {
        e.preventDefault();
        setModalShow(true)
        setUpdateAddressType(true);
        setAddressUpdatedData(data)
    }

    const handleUpdatePickupModal = async (e, data) => {
        e.preventDefault();
        setModalShow(true)
        setUpdateAddressType(false)
        setAddressUpdatedData(data)
    }



    const handleTrackingModal = (e, data) => {
        e.preventDefault();
        setTrackingState(true);
        setTrackingData(data)
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
                                        <div className="customer-detail w-[125px]">
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
                                        <div className="package width">
                                            <p className="text-xs">
                                                <span className="font-semibold">Dead weight : </span>
                                                {order?.shipDetails?.shipments[0].weight}kg
                                            </p>
                                            <p className="text-xs">
                                                {order?.shipDetails?.shipments[0].dimensions} (cm)
                                            </p>
                                            <p className="text-xs">
                                                <span className="font-semibold">
                                                    Volumetric weight :{' '}
                                                </span>
                                                {order?.shipDetails?.shipments[0].volumetric_weight}kg
                                            </p>
                                        </div>

                                        <div className="payment width">
                                            <p className="text-xs">{styles?.currency?.Symbol} {ConvertCurrency(order?.shipDetails?.total)}</p>
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
                                                {order?.shipDetails?.pickup_address_detail.pickup_code}
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_address_detail.address}
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_address_detail.state} -{' '}
                                                {order?.shipDetails?.pickup_address_detail.pin_code}
                                            </p>
                                            <p className="text-xs mb-1">
                                                {order?.shipDetails?.pickup_address_detail.phone}
                                            </p>
                                        </div>
                                        <div className="status width">
                                            <p
                                                className={`text-xs font-semibold rounded-sm text-green-600 bg-green-200 w-fit p-1 px-2`}
                                            >
                                                {order?.shipDetails?.status}
                                            </p>
                                        </div>
                                        <div className="courier">
                                            <p className="text-xs mb-1">
                                                {order?.orderDetails?.response?.orders?.courier_name}
                                            </p>
                                            <p className="text-xs mb-1">
                                                <strong>ETD : </strong>
                                                {order?.orderDetails?.response?.orders?.etd}
                                            </p>
                                            <p className="text-xs mb-1">
                                                <strong>Shipping : </strong>
                                                {styles?.currency?.Symbol} {ConvertCurrency(order?.orderDetails?.response?.orders?.rate)}
                                            </p>
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
                                                        order?.orderDetails?.response?.orders
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
                                                <button className="text-white bg-blue-600 p-1 rounded-sm text-xs opacity-20 ">
                                                    Ship now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 rounded">
                                        <button
                                            className="w-fit p-1 bg-green-200 border-1 border-green-600 text-green-600 font-semibold rounded-sm text-xs"
                                            onClick={(e) => {
                                                downloadInvoice(e, order?.shipDetails?.id);
                                            }}
                                        >
                                            Download Invoice
                                        </button>
                                        {order?.orderDetails?.awbDetails &&
                                            <button
                                                className="w-fit p-1 bg-green-200 border-1 border-green-600 text-green-600 font-semibold rounded-sm text-xs"
                                                onClick={(e) => {
                                                    downloadLabel(e, order?.orderDetails?.shippingOrderDetails?.shipment_id);
                                                }}
                                            >
                                                Download Label
                                            </button>
                                        }
                                        <button
                                            className="w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs"
                                            onClick={(e) => { handleUpdateCustomerModal(e, order?.shipDetails) }}
                                        >
                                            Update Customer Delivery Address
                                        </button>
                                        <button
                                            className="w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs"
                                            onClick={(e) => { handleUpdatePickupModal(e, order?.shipDetails) }}
                                        >
                                            Updated Pickup Location
                                        </button>
                                        <button
                                            className="w-fit p-1 bg-red-300 text-red-600 border-1 border-red-600 font-semibold rounded-sm text-xs"
                                            onClick={(e) => {
                                                cancelOrder(e, order?.shipDetails?.id, order?.id);
                                            }}
                                        >
                                            Cancel Order
                                        </button>
                                        <button
                                            className="w-fit p-1 bg-red-300 text-red-600 border-1 border-red-600 font-semibold rounded-sm text-xs"
                                            onClick={(e) => { handleModel2(e, order?.shipDetails?.products, order?.shipDetails, order?.orderDetails?.products, order?.id) }}
                                        >
                                            Return Order
                                        </button>
                                        {order?.orderDetails?.awbDetails && <><button
                                            className="w-fit p-1 bg-blue-200 text-blue-600 border-1 border-blue-600 font-semibold rounded-sm text-xs"
                                            onClick={(e) => getAWBTracking(e, order?.orderDetails?.awbDetails?.response?.data?.awb_code, order?.shipDetails?.id)}
                                        >
                                            Get Tracking Status
                                        </button>
                                            {order?.currentStatus && <p className="text-xs mb-1"><strong>status : </strong>{order?.currentStatus}</p>}
                                            {order?.awbTrackingActivity && <AiOutlineEye size={20} className='cursor-pointer' onClick={(e) => { handleTrackingModal(e, order?.awbTrackingActivity) }} />}</>}
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
                    <TrackingModal
                        show={trackingState}
                        onHide={() => setTrackingState(false)}
                        trackingData={trackingData}
                    />
                    <UpdateModel
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        updateAddressType={updateAddressType}
                        addressUpdatedData={addressUpdatedData}
                    />
                </div>
            )}
        </>
    );
};

export default ShipOrders;
