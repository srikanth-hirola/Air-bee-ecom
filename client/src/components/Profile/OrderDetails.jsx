import React from 'react'


import { Link } from 'react-router-dom'

const OrderDetails = () => {
    return (
        <>
            <div className='OrderDetails-parent'>
                <div className="row">
                    <div className=" col-md-12">
                        <div className='Orderspage-tabs-active-parent'>
                            <div className='Orderspage-tabs-active-text1'>
                                <h6>Order no:#123456789</h6>
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
                            <div className='Orderspage-product-button'>
                                <Link to="/orderspage">
                                    <button>Back To Orders</button>
                                </Link>
                            </div>
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
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='OrderDetails-Shipping-details'>
                            <div className='OrderDetails-Shipping-details-sub1'>
                                <p>Shipping : <span>$ 12.00</span></p>
                            </div>
                            <div className=' OrderDetails-Shipping-details-sub1'>
                                <p>Total Price : <span>$ 12.00</span></p>
                            </div>
                            <div className='OrderDetails-Shipping-details-sub1'>
                                <p>Cash On Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className='OrderDetails-additional-info'>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className='OrderDetails-delivery-address'>
                                        <h6>Shipping Address :</h6>
                                        <p>#247,10th cross, Prasanna Layout,Herohalli cross</p>
                                        <p>Sri Lakshmi Venkateshwara Bar</p>
                                        <p>India</p>
                                        <p>Karnataka</p>
                                        <p>Bengaluru - 560091</p>
                                        <p>894651329</p>
                                        <p>gtgkjasl@gmail.com</p>
                                        <div className='OrderDetails-delivery-address-buttons'>
                                            <button>Send Message</button>
                                            <button>Cancel Order</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='OrderDetails-paymentStatus'>
                                        <h6>Payment Info :</h6>
                                        <p>Status : <span>Not Paid</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails