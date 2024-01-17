import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const CartButtons = ({ removeFun, title }) => {
    const dispatch = useDispatch()
    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-5 continueshopping-button">
                        <Link to={"/products?search=all%20products"}>Continue Shopping</Link>
                    </div>
                    <div className="col-md-5 ClearShoppingCart-button">
                        <button onClick={() => { dispatch(removeFun) }}>{title}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartButtons