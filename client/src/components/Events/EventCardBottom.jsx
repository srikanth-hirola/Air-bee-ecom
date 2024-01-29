import React from 'react'
import CountDownBottom from './CountDownBottom';
import { Link } from 'react-router-dom';

const EventCardBottom = ({ data1 }) => {

    return (
        <>
            <div className="DronesDealsoftheDay-parent">
                <div className='DronesDealsoftheDay-sub-parent' style={{ backgroundImage: `url('DronesHomepage/HomeBanner1.png')` }}>                    <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <div className='DronesDealsoftheDay-sub1'>
                            <div className='DronesDeals-image'>
                                <img src="/DronesHomepage/image 128.png" alt="event" />
                            </div>
                            <h3>Deals of the Day</h3>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <div className='DronesDealsoftheDay-sub2'>
                            <div className="row">
                                <div className="col-md-9 col-lg-9">
                                    <CountDownBottom data={data1} />
                                </div>
                                <div className="col-md-3 event-btn-bottom">
                                    <Link to={`/event/${data1?.slug}`}>
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default EventCardBottom