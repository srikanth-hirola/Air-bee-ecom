import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../../server';

const CountDownBottom = ({ data }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        if (
            typeof timeLeft.days === 'undefined' &&
            typeof timeLeft.hours === 'undefined' &&
            typeof timeLeft.min === 'undefined' &&
            typeof timeLeft.sec === 'undefined'
        ) {
            axios.delete(`${server}/event/delete-shop-event/${data?._id}`);
        }
        return () => clearTimeout(timer);
    });

    function calculateTimeLeft() {
        const difference = +new Date(data.Finish_Date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                sec: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    const timerComponents = Object.keys(timeLeft).map((interval, i) => {
        if (!timeLeft[interval]) {
            return null;
        }

        return (
            // <span className="text-[25px] text-[#475ad2]">
            //     {timeLeft[interval]} {interval}{" "}
            // </span>
            <div className="col-sm-3 col-md-3" key={i}>
                <div className='Drones-deals-days'>
                    <h5>{timeLeft[interval]}</h5>
                    <p>{interval}</p>
                </div>
            </div>
        );
    });


    return (
        <div>
            {timerComponents.length ? (
                <div className="row">
                    {timerComponents}
                </div>
            ) : (
                <span className="text-[red] text-[25px]">Time's Up</span>
            )}
        </div>
    );
}

export default CountDownBottom