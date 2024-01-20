import React from 'react'
import { Link } from 'react-router-dom'

const RefundStatus = () => {
    return (
        <>
            <div className='RefundStatus-parent'>
                <div className="row">
                    <div className=" col-md-12">
                        <div className='RefundTabs-active-parent'>
                            <div className='RefundTabs-active-text1'>
                                <h6>Order no:#123456789</h6>
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
                            <div className='RefundTabs-product-button'>
                                <Link to="/orderspage">
                                    <button>Back To Refunds</button>
                                </Link>
                            </div>
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
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='RefundStatus-Shipping-details'>
                            <div className='RefundStatus-Shipping-details-sub1'>
                                <p>Shipping : <span>$ 12.00</span></p>
                            </div>
                            <div className=' RefundStatus-Shipping-details-sub1'>
                                <p>Total Price : <span>$ 12.00</span></p>
                            </div>
                            <div className='RefundStatus-Shipping-details-sub1'>
                                <p>Cash On Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className='RefundStatus-additional-info'>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className='RefundStatus-delivery-address'>
                                        <h6>Shipping Address :</h6>
                                        <p>#247,10th cross, Prasanna Layout,Herohalli cross</p>
                                        <p>Sri Lakshmi Venkateshwara Bar</p>
                                        <p>India</p>
                                        <p>Karnataka</p>
                                        <p>Bengaluru - 560091</p>
                                        <p>894651329</p>
                                        <p>gtgkjasl@gmail.com</p>
                                        <div className='RefundStatus-delivery-address-buttons'>
                                            <button>Send Message</button>
                                            <button>Cancel Refund</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='RefundStatus-paymentStatus'>
                                        <h6>Refund Info :</h6>
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

export default RefundStatus;