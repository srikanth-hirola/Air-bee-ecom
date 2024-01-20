import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

const RefundTabs = () => {
    const [key, setKey] = useState('Active');
    return (
        <>
            <div className='RefundTabs-parent'>
                <h3>My Refunds</h3>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="Active" title="Active">
                        <div className="row">
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages1.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <hr />
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='Orderspage-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='Orderspage-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='Orderspage-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages2.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <hr />
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages3.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Cancelled" title="Cancelled">
                        <div className="row ">
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages1.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages2.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages3.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Completed" title="Completed">
                        <div className="row ">
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages1.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages2.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className=" col-md-12">
                                <div className='RefundTabs-active-parent'>
                                    <div className='RefundTabs-active-text1'>
                                        <h6>Order no : #123456789</h6>
                                        <p>Order Date : <span className='RefundTabs-Orderdate'>2 June 2023</span> <span className='Orderspage-Order-time'>2:40 PM</span></p>
                                        <p>Estimated Delivery Date : <span className='RefundTabs-Estimated-date'>8 June 2023.</span></p>
                                    </div>
                                    <div className='RefundTabs-active-text2'>
                                        <p>Order Status : <span className='RefundTabs-oder-status'>Inprogress</span></p>
                                        <p>Payment Method : <span className='RefundTabs-paymentMethod'>Cash On Delivery</span></p>
                                    </div>
                                </div>

                                {/* order-item */}

                                <div className='RefundTabs-ordered-item-parent'>
                                    <div className='RefundTabs-product-image-parent'>
                                        <div className='RefundTabs-product-image'>
                                            <img src="./DronesHomepage/orderspageimages3.png" alt="" />
                                        </div>
                                        <div className='RefundTabs-product-text'>
                                            <h6>Black Printed T-shirt</h6>
                                            <p>Colour : <span>Black</span></p>
                                            <p>Qty : <span>1</span></p>
                                            <p>Total : <span>$ 23.00</span></p>
                                        </div>
                                    </div>
                                    <div className='RefundTabs-product-button'>
                                        <Link to="/refundStatus">
                                            <button>View Status</button>
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

export default RefundTabs