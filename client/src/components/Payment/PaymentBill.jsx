import React from 'react'
import { StyleConfig } from '../../utils/StyleConfig'
import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';

const PaymentBill = ({ orderData }) => {

    const styles = StyleConfig()
    const shipping = orderData?.shipping?.toFixed(2);
    const { ConvertCurrency } = useGetCurrencyConversion();

    return (
        <div className="col-lg-12">
            <div className='Drones-product-summery !bg-[#fff]'>
                <div className='col-md-12'>
                    <div className='Drones-product-summery-sub1'>
                        <h3>Summary</h3>
                        <h5>Esytimate Shipping and Tax</h5>
                        <span>Enter your destination to get a shipping estimate.</span>
                    </div>
                </div>
                <div>
                    <div className='Drones-product-summery-sub2'>
                        <h5>Apply Discount Code</h5>
                        <hr />
                        <div className="col-md-12">
                            <div className='Drones-Product-subtotal'>
                                <strong>Subtotal</strong>
                                <p>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(orderData?.subTotalPrice)}</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-shipping'>
                                <div className='Drones-Product-shipping-sub'>
                                    <strong>Shipping</strong><br />
                                    <span>(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</span>
                                </div>
                                <p>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(shipping)}</p>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-tax'>
                                <strong>Discount</strong>
                                <p>{ConvertCurrency(orderData?.discountPrice) ? `${styles?.currency?.Symbol}` + ConvertCurrency(orderData.discountPrice) : '-'}</p>
                            </div>
                        </div>
                        {/* <div className="col-md-12">
                            <div className='Drones-Product-gst'>
                                <strong>GST (10%) </strong>
                                <p>$1.91</p>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className='Drones-Product-order-total'>
                                <strong>Order Total</strong>
                                <p>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(orderData?.totalPrice)}</p>
                            </div>
                        </div>
                        <br />

                        <div className='col-md-12 Drones-product-summery-end'>
                            <div className='Drones-product-summery-end-image'>
                                <img src="/DronesHomepage/primary 1.png" alt="" />
                            </div>
                            <p>own it now, up to 6 months interest free learn more</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentBill