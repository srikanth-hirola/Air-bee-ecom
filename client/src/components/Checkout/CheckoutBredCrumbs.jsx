import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutBredCrumbs = () => {
    return (
        <div className='Checkoutpage-sub1-text-sub1'>
            <p><Link to={"/"} className='text-black'>Home /</Link></p>
            <p> Shopping Cart /</p>
            <p>Checkout Process</p>
        </div>
    )
}

export default CheckoutBredCrumbs