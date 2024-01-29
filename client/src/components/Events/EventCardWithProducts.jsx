import React, { useEffect, useState } from 'react'
import CountDown from './CountDown';
import axios from 'axios';
import { server } from '../../server';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ProductCardMiddleware from '../ProductCards/ProductCardMiddleware';
const EventCardWithProducts = ({ data1 }) => {


    const [data, setData] = useState([]);


    useEffect(() => {
        if (data1?.slug !== null) {
            axios
                .get(`${server}/event/get-all-event-products/${data1?.slug}`)
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
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-3 p-0">
                            <div className='DronesProductsRow1-sub1-text-parent'>
                                <div className='DronesProductsRow1-sub1-text'>
                                    <h4>Deals and offers</h4>
                                    <p>{data1?.name}</p>
                                </div>
                                <div className='DronesProductsRow1-sub1-timer'>
                                    <div className="col-md-12">
                                        <CountDown data={data1} />
                                    </div>
                                    <div className='DronesProductRow1Timer-button'>
                                        <Link to={`/event/${data1?.slug}`}>Show More</Link>
                                    </div>
                                </div>

                            </div>
                            {/* <Link className='bg-[#fa8232] text-white px-3 py-2'>View All</Link> */}
                        </div>
                        <div className="col-md-12 col-lg-9">
                            <div className="row">
                                {data?.length > 0 ?
                                    data?.slice(0, 4)?.map((item, i) => (
                                        <div className=" col-sm-6 col-md-3 col-lg-3 " key={i}>
                                            <ProductCardMiddleware data1={item} />
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