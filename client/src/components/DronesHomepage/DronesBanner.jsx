import React from 'react'
import DronesBannerSwiper from './DronesBannerSwiper'
import Categories from '../categories/Categories'
import { Link } from 'react-router-dom'

const DronesBanner = () => {
    return (
        <>
            <div className="DronesBanner-parent">
                <div className="container">
                    <div className="row">
                        <Categories />
                        <div className='col-md-6'>
                            <DronesBannerSwiper />
                        </div>
                        <div className="col-md-3">
                            <div className='Drone-banner-sub-end'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className='Drone-banner-sub-user'>
                                            <div className='Drone-banner-sub-user-image-parent'>
                                                <div className='Drone-banner-sub-user-image'>
                                                    <img src="./DronesHomepage/Avatar.png" alt="" />
                                                </div>
                                                <p>Hi,user let's get started</p>
                                            </div>
                                            <button className='Droner-banner-sub-user-button1'>Join now</button>
                                            <button className='Droner-banner-sub-user-button2'><Link to={"/login"}>Log in</Link></button>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className='DronesBanner-sub2'>
                                            <div className='DronesBanner-sub2-content'>
                                                <p>Get US $ 10 off with a new supplier</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className='DronesBanner-sub3'>
                                            <div className='DronesBanner-sub3-content'>
                                                <p>Send quotes with supplier preferences</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DronesBanner