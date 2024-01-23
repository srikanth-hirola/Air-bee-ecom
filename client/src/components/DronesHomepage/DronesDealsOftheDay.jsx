import React, { useState, useEffect } from 'react';

const DronesDealsOftheDay = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-01-12') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [time, setTime] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };
    return (
        <>
            <div className="DronesDealsoftheDay-parent">
                <div className='DronesDealsoftheDay-sub-parent' style={{ backgroundImage: `url('DronesHomepage/HomeBanner1.png')` }}>                    <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <div className='DronesDealsoftheDay-sub1'>
                            <div className='DronesDeals-image'>
                                <img src="/DronesHomepage/image 128.png" alt="" />
                            </div>
                            <h3>Deals of the Day</h3>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <div className='DronesDealsoftheDay-sub2'>
                            <div className="row">
                                <div className="col-md-9 col-lg-9">
                                    <div className="row">
                                        <div className="col-sm-3 col-md-3">
                                            <div className='Drones-deals-days'>
                                                <h3>{addLeadingZero(time.days)}</h3>
                                                <p>Days</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-md-3">
                                            <div className='Drones-deals-days'>
                                                <h3>{addLeadingZero(time.hours)}</h3>
                                                <p>Hours</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-md-3">
                                            <div className='Drones-deals-days'>
                                                <h3>{addLeadingZero(time.minutes)}</h3>
                                                <p>Min</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 col-md-3">
                                            <div className='Drones-deals-days'>
                                                <h3>{addLeadingZero(time.seconds)}</h3>
                                                <p>Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default DronesDealsOftheDay;
