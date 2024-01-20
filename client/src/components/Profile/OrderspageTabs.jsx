import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { getAllOrdersOfUser } from '../../redux/actions/order';
import { useDispatch, useSelector } from 'react-redux';
import OrderCards from './Cards/OrderCards';


const OrderspageTabs = () => {
    const { user } = useSelector((state) => state.user);
    const { orders } = useSelector((state) => state.order);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllOrdersOfUser(user._id));
    }, [dispatch, user._id]);


    const [key, setKey] = useState('All Orders');
    return (
        <>
            <div className='OrderspageTabs-parent'>
                <h3>My Orders</h3>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="All Orders" title="All Orders">
                        <div className="row">
                            {orders?.length > 0 ?
                                orders?.map((order, i) => (
                                    <React.Fragment key={i}>
                                        <OrderCards order={order} />
                                        <hr />
                                    </React.Fragment>
                                ))
                                : <p>No Order Found</p>}
                        </div>
                    </Tab>
                    <Tab eventKey="Refunds" title="Refunds">
                        <div className="row ">
                            <div className=" col-md-12">
                                <div className='Orderspage-tabs-active-parent'>
                                    <div className='Orderspage-tabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='Orderspage-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='Orderspage-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='Orderspage-tabs-active-text2'>
                                        <p>Order Status : <span className='Orderspage-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='Orderspage-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='Orderspage-ordered-item-parent'>
                                    <div className='Orderspage-product-image-parent'>
                                        <div className='Orderspage-product-image'>
                                            <img src="./DronesHomepage/orderspageimages1.png" alt="" />
                                        </div>
                                        <div className='Orderspage-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='Orderspage-product-button'>
                                        <Link to="/orderDetails">
                                            <button>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className=" col-md-12">
                                <div className='Orderspage-tabs-active-parent'>
                                    <div className='Orderspage-tabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='Orderspage-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='Orderspage-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='Orderspage-tabs-active-text2'>
                                        <p>Order Status : <span className='Orderspage-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='Orderspage-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='Orderspage-ordered-item-parent'>
                                    <div className='Orderspage-product-image-parent'>
                                        <div className='Orderspage-product-image'>
                                            <img src="./DronesHomepage/orderspageimages2.png" alt="" />
                                        </div>
                                        <div className='Orderspage-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='Orderspage-product-button'>
                                        <Link to="/orderDetails">
                                            <button>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className=" col-md-12">
                                <div className='Orderspage-tabs-active-parent'>
                                    <div className='Orderspage-tabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='Orderspage-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='Orderspage-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='Orderspage-tabs-active-text2'>
                                        <p>Order Status : <span className='Orderspage-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='Orderspage-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='Orderspage-ordered-item-parent'>
                                    <div className='Orderspage-product-image-parent'>
                                        <div className='Orderspage-product-image'>
                                            <img src="./DronesHomepage/orderspageimages3.png" alt="" />
                                        </div>
                                        <div className='Orderspage-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='Orderspage-product-button'>
                                        <Link to="/orderDetails">
                                            <button>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                </Tabs>
            </div>
        </>

    )
}

export default OrderspageTabs