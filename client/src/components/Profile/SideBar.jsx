import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='ContactDetails-sub2'>
            <h3>Hello Jhanvi</h3>
            <p>Welcome to your Account</p>
            <div className='ContactDetails-sub2-list'>
                <div className="row">
                    <div className="col-md-12">
                        <div className='ContactDetails-sub2-list-content'>
                            <div className='ContactDetails-sub2-list-content-image'>
                                <img src="DronesHomepage/userimage.png" alt="" />
                            </div>
                            <Link to="/profilepage">
                                <p>Profile</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='ContactDetails-sub2-list-content'>
                            <div className='ContactDetails-sub2-list-content-image'>
                                <img src="DronesHomepage/my orders.png" alt="" />
                            </div>
                            <Link to='/orderspage'>
                                <p>My orders</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='ContactDetails-sub2-list-content'>
                            <div className='ContactDetails-sub2-list-content-image'>
                                <img src="DronesHomepage/refund.png" alt="" />
                            </div>
                            <Link to="/refundpage">
                                <p>Refunds</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='Profilepage-sub2-list-content'>
                            <div className='Profilepage-sub2-list-content-image'>
                                <img src="DronesHomepage/addresshome.png" alt="" />
                            </div>
                            <Link to="/contactDetailsPage">
                                <p>Address</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='ContactDetails-sub2-list-content'>
                            <div className='ContactDetails-sub2-list-content-image'>
                                <img src="DronesHomepage/sign out.png" alt="" />
                            </div>
                            <p>Sign Out</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar