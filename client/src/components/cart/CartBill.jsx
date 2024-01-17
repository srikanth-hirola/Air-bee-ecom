import React from 'react'

const CartBill = () => {
    return (
        <div className="col-lg-4">
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
                                <p>$13,644.00</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-shipping'>
                                <div className='Drones-Product-shipping-sub'>
                                    <strong>Shipping</strong><br />
                                    <span>(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</span>
                                </div>
                                <p>$13.00</p>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-tax'>
                                <strong>Tax</strong>
                                <p>$1.91</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-gst'>
                                <strong>GST (10%) </strong>
                                <p>$1.91</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className='Drones-Product-order-total'>
                                <strong>Order Total</strong>
                                <p>$13,644.00</p>
                            </div>
                        </div>
                        <div className='col-md-12 DronesCart-addtocart-button'>
                            <button>Add To Cart</button>
                        </div>
                        <div className='col-md-12 DronesCart-checkout-button'>
                            <button>Check out </button>
                        </div>
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