import React from 'react'

const CartBill = ({
    handleSubmit,
    totalPrice,
    couponRefTotal,
    shipping,
    subTotalPrice,
    couponCode,
    setCouponCode,
    discountPercentenge,
    showCoupan,
    styles
}) => {


    return (
        <div className="col-lg-12">
            <div className='Drones-product-summery'>
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
                                <p>{styles?.currency?.Symbol}&nbsp;{subTotalPrice}</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-shipping'>
                                <div className='Drones-Product-shipping-sub'>
                                    <strong>Shipping</strong><br />
                                    <span>(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</span>
                                </div>
                                <p>{styles?.currency?.Symbol}&nbsp;{shipping?.toFixed(2)}</p>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-tax'>
                                <strong>Discount</strong>
                                <p>- {discountPercentenge ? `${styles?.currency?.Symbol}` + discountPercentenge.toString() : null}</p>
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
                                <p>{styles?.currency?.Symbol}&nbsp;{totalPrice}</p>
                            </div>
                        </div>
                        <br />
                        {showCoupan &&
                            <form onSubmit={(e) => handleSubmit(e, couponRefTotal)}>
                                <input
                                    type="text"
                                    className={`${styles.input} h-[40px] pl-2`}
                                    placeholder="Coupoun code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    required
                                />
                                <div className='col-md-12 DronesCart-checkout-button mt-3'>
                                    <button
                                        className={`w-full h-[40px] border border-[#f63b60] text-center text-[#f63b60] rounded-[3px] mt-8 cursor-pointer`}
                                        style={{ color: styles?.mainColor }}
                                        required
                                        value=""
                                        type="submit"
                                    >Apply code</button>
                                </div>
                            </form>}


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

export default CartBill