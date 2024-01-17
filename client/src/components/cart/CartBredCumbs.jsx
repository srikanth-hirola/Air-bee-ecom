import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CartBredCumbs = () => {

    const location = useLocation();

    return (
        <div className='DronesCart-parent-home-text'>
            <span><Link to={"/"}>Home /</Link></span>
            <span>{location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2, location.pathname.length)}</span>
        </div>
    )
}

export default CartBredCumbs