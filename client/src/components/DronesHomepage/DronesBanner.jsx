import React, { memo } from 'react'
import DronesBannerSwiper from './DronesBannerSwiper'
import Categories from '../categories/Categories'
import LoggedIn from '../Banner/LoggedIn'

const DronesBanner = memo(({ content }) => {

    return (
        <>
            <div className="DronesBanner-parent">
                <div className="row">
                    <Categories />
                    <div className='col-md-6'>
                        <DronesBannerSwiper content={content} />
                    </div>
                    <div className="col-md-3">
                        <div className='Drone-banner-sub-end'>
                            <div className="row">
                                <div className="col-sm-4 col-md-12">
                                    <LoggedIn />
                                </div>

                                {content?.sideContentOne &&
                                    <div className="col-sm-4 col-md-12">
                                        <div className='DronesBanner-sub2'>
                                            <div className='DronesBanner-sub2-content'>
                                                <p>{content?.sideContentOne}</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {content?.sideContentTwo &&
                                    <div className="col-sm-4 col-md-12">
                                        <div className='DronesBanner-sub3'>
                                            <div className='DronesBanner-sub3-content'>
                                                <p>{content?.sideContentTwo}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default DronesBanner