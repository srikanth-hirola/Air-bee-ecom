import React, { useState, useEffect } from 'react';

const DronesProductsRow1 = () => {
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
      <div className='DronesProductsRow1-parent'>
        <div className="">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className='DronesProductsRow1-sub1-text-parent'>
                <div className='DronesProductsRow1-sub1-text'>
                  <h4>Deals and offers</h4>
                  <p>Hygiene equipments</p>
                </div>
                <div className='DronesProductsRow1-sub1-timer'>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-3">
                        <div className='DronesProductsRow1-sub1-timer-sub'>
                          <h5>{addLeadingZero(time.days)}</h5>
                          <p>Days</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className='DronesProductsRow1-sub1-timer-sub'>
                          <h5>{addLeadingZero(time.hours)}</h5>
                          <p>Hours</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className='DronesProductsRow1-sub1-timer-sub'>
                          <h5>{addLeadingZero(time.minutes)}</h5>
                          <p>Min</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className='DronesProductsRow1-sub1-timer-sub'>
                          <h5>{addLeadingZero(time.seconds)}</h5>
                          <p>Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-9">
              <div className="row">
                <div className=" col-sm-6 col-md-3">
                  <div className='DronesProductsRow1-card-parent'>
                    <div className="card">
                      <div className='DronesProductsRow1-card-image'>
                        <img src="./DronesHomepage/products-row-2.png" alt="" />
                      </div>
                      <div className="card-body">
                        <p>Drone Parts</p>
                        <button>-25%</button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className='DronesProductsRow1-card-parent'>
                    <div className="card">
                      <div className='DronesProductsRow1-card-image'>
                        <img src="./DronesHomepage/products-row-3.png" alt="" />
                      </div>
                      <div className="card-body">
                        <p>Drone Parts</p>
                        <button>-25%</button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className='DronesProductsRow1-card-parent'>
                    <div className="card">
                      <div className='DronesProductsRow1-card-image'>
                        <img src="./DronesHomepage/products-row-4.png" alt="" />
                      </div>
                      <div className="card-body">
                        <p>Drone Parts</p>
                        <button>-25%</button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className='DronesProductsRow1-card-parent'>
                    <div className="card">
                      <div className='DronesProductsRow1-card-image'>
                        <img src="./DronesHomepage/products-row-5.png" alt="" />
                      </div>
                      <div className="card-body">
                        <p>Drone Parts</p>
                        <button>-25%</button>
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

export default DronesProductsRow1