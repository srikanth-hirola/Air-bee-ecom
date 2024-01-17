import React, { useEffect, useState } from 'react'
import CountDown from './CountDown';
import axios from 'axios';
import { server } from '../../server';
import toast from 'react-hot-toast';
import EventCardHome from '../ProductCards/EventCardHome';

const EventCardWithProducts = ({ data1 }) => {


    const [data, setData] = useState([]);


    useEffect(() => {
        if (data1?._id !== null) {
            axios
                .get(`${server}/event/get-all-event-products/${data1?._id}`)
                .then((result) => {
                    if (result.data.Status === 'Success') {
                        setData(result.data.events[0].productArray);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                });
        }
    }, [data1]);

    return (
        <>
            <div className='DronesProductsRow1-parent'>
                <div className="">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='DronesProductsRow1-sub1-text-parent'>
                                <div className='DronesProductsRow1-sub1-text'>
                                    <h4>Deals and offers</h4>
                                    <p>{data1?.name}</p>
                                </div>
                                <div className='DronesProductsRow1-sub1-timer'>
                                    <div className="col-md-12">
                                        <CountDown data={data1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {data?.length > 0 ?
                                    data?.slice(0, 4)?.map((item, i) => (
                                        <div className=" col-sm-6 col-md-3">
                                            <EventCardHome data1={item} />
                                        </div>
                                    ))
                                    : <p>No Event Products Available</p>}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default EventCardWithProducts