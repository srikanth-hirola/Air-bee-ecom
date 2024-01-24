import React from 'react'

const CartHeadings = () => {
    return (
        <div className="row Drones-cart-Headings">
            <div className="col-md-7 Drones-cart-Headings-item">
                <p >Item</p>
            </div>
            <div className="col-md-5">
                <div className="row">
                    <div className="col-3 Drones-cart-Headings-price">
                        <p>price</p>
                    </div>
                    <div className="col-4 Drones-cart-Headings-qty">
                        <p>Qty</p>
                    </div>
                    <div className="col-5 Drones-cart-Headings-subtotal">
                        <p>Subtotal</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartHeadings