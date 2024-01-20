import React from 'react'
import { Link } from 'react-router-dom'

const OrderCards = ({ order }) => {
    return (
        <div className=" col-md-12">
            <div className='Orderspage-tabs-active-parent'>
                <div className='Orderspage-tabs-active-text1'>
                    <h6>Order ID : #{order?._id.slice(0, 8)}</h6>
                    <p>Order Date : <span className='Orderspage-Orderdate'>{order?.createdAt?.slice(0, 10)}</span></p>
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
    )
}

export default OrderCards