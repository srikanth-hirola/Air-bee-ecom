import React from 'react'
import { Link } from 'react-router-dom'

export const OrderPlace = () => {
    return (
        <>
            <div className="order-place-instant">
                <div className="order-place-instant-sub">
                    <div className="container">
                        <div className="row order-place-instant-text">
                            <div className="">
                                <div className="order-place-img">
                                    <img src="/DronesHomepage/CheckCircle.png" alt="" />
                                </div>
                                <div className="order-place-text">
                                    <h3>Your order is successfully place</h3>
                                    <p>Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
                                </div>
                                <div className='order-button'>
                                    <Link to="/" className="order-place-button1 ">
                                        <img src="/DronesHomepage/Stack.png" alt="" />
                                        <h6>Go To Dashboard</h6>
                                    </Link>
                                    <Link to="/orderspage" className="order-place-button2">
                                        <h6>View Order</h6>
                                        <img src="/DronesHomepage/ArrowRight.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
