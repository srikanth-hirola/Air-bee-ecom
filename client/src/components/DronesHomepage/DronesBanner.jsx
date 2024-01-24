import React from 'react'
import DronesBannerSwiper from './DronesBannerSwiper'
import Categories from '../categories/Categories'
import LoggedIn from '../Banner/LoggedIn'

const DronesBanner = () => {
    return (
        <> 
            <div className="DronesBanner-parent">
                    <div className="row">
                        <Categories />
                        <div className='col-md-6'>
                            <DronesBannerSwiper />
                        </div>
                        <div className="col-md-3">
                            <div className='Drone-banner-sub-end'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <LoggedIn />
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
        </>
    )
}

export default DronesBanner