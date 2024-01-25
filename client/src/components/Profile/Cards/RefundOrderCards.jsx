import React from 'react'
import { Link } from 'react-router-dom'
import { StyleConfig } from '../../../utils/StyleConfig'
import useGetCurrencyConversion from '../../../hooks/Site-config/useGetCurrencyConversion';

const RefundOrderCards = ({ order }) => {
    const styles = StyleConfig();
    const { ConvertCurrency } = useGetCurrencyConversion();



    return (
        <div className=" col-md-12">
            <div className='Orderspage-tabs-active-parent'>
                <div className='Orderspage-tabs-active-text1'>
                    <h6>Order ID : #{order?._id.slice(0, 8)}</h6>
                    <p>Order Date : <span className='Orderspage-Orderdate'>{order?.createdAt?.slice(0, 10)}</span></p>
                    <p>Estimated Delivery Date : <span className='Orderspage-Estimated-date'>{order?.sellerCart[0]?.response?.orders?.etd}</span></p>
                </div>
                <div className='Orderspage-tabs-active-text2'>
                    <p>Order Status : <span className='Orderspage-oder-status'>{order?.status}</span></p>
                    <p>Payment Method : <span className='Orderspage-paymentMethod'>{order?.paymentInfo?.type}</span></p>
                </div>
                <div className='Orderspage-product-button'>
                    <Link to={`/user/order/${order?._id}`}>
                        <button>View Details</button>
                    </Link>
                </div>
            </div>

            {/* order-item */}

            {order?.cart?.map((item, i) => (
                <div className='Orderspage-ordered-item-parent' key={i}>
                    <div className='Orderspage-product-image-parent'>
                        <div className='Orderspage-product-image'>
                            <img src={`${item.showInputs
                                ? item.selectedColor.image?.url
                                : item.selectedColor.mainImage?.url
                                }`} alt="product" />
                        </div>
                        <div className='Orderspage-product-text'>
                            <h6>{item.name}</h6>
                            <p>SKU : <span>{item.showInputs
                                ? item?.selectedColor?.varientSKU
                                : item.selectedColor.SKU}</span></p>
                            <p>Qty : <span>{item?.qty}</span></p>
                            <p>Total : <span>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(item?.finalPrice) * item?.qty}</span></p>
                        </div>
                    </div>

                </div>
            ))}

            <div>
            </div>
        </div>
    )
}

export default RefundOrderCards