import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { StyleConfig } from '../../../utils/StyleConfig';
import { server } from '../../../server';
import toast from 'react-hot-toast';
import Loader from '../../../utils/Loader';


const Couriers = () => {
    const { seller } = useSelector((state) => state.seller);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [couriers, setCouriers] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);

    // const styles = StyleConfig();

    useEffect(() => {

        setCouriers(seller?.couriers);

        async function getCouriers() {
            try {
                const { data } = await axios.get(
                    `${server}/shipping/getCouriers/${seller._id}`
                );
                setData(data.couriers);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error(error.response.data.message);
            }
        }

        getCouriers();
    }, [seller]);

    const handleCheckedCourier = (e, id) => {
        const { checked } = e.target;
        const updatedCouriers = [...couriers];
        if (checked) {
            updatedCouriers.push(id);
        } else {
            const index = updatedCouriers.findIndex(val => val === id);
            if (index !== -1) {
                updatedCouriers.splice(index, 1);
            }
        }
        setCouriers(updatedCouriers);
    };

    const handleSubmitCouriers = async (e) => {
        e.preventDefault();
        setBtnLoading(true)
        try {
            const sellerID = seller._id;
            await axios.post(`${server}/shipping/selected-couriers`, { couriers, sellerID });
            toast.success("Couriers Added to shop Successfully")
            setBtnLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);
            setBtnLoading(false)
        }
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {data?.length > 0 ? (
                        <div className="w-full mx-6 my-6">
                            <div className="w-full">
                                <div className="w-full rounded my-2 bg-[#f4f4f4] p-4 flex justify-between">
                                    <p className="text-xs font-semibold mb-0 ">Courier ID</p>
                                    <p className="text-xs font-semibold mb-0 ">Name</p>
                                    <p className="text-xs font-semibold mb-0 ">Min Weight(kg)</p>
                                    <p className="text-xs font-semibold mb-0 ">Real Time Tracking</p>
                                    <p className="text-xs font-semibold mb-0 ">Select</p>
                                </div>
                                <div className='h-[500px] overflow-scroll'>
                                    {data?.map((val, index) => (
                                        <div className="w-full rounded my-2 bg-[#f4f4f4] px-4 py-2" key={index}>
                                            <div
                                                key={index}
                                                className="flex justify-between item-center"
                                            >
                                                <p className="mb-0 w-[50px]">{val.id}</p>
                                                <p className="mb-0 text-left w-[200px]">{val.name}</p>
                                                <p className="mb-0 w-[200px]">{val.min_weight}</p>
                                                <p className="mb-0 w-[200px]">{val.realtime_tracking}</p>
                                                <input type="checkbox" onChange={(e) => { handleCheckedCourier(e, val.id) }} checked={couriers.includes(val.id) ? true : false} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {!btnLoading ? <button className='bg-[#fcb800] py-2 px-4 font-semibold text-white rounded' onClick={handleSubmitCouriers}>Submit</button>
                                    : <button className='bg-[#fcb800] py-2 px-4 font-semibold text-white rounded'>Loading...</button>
                                }
                            </div>
                        </div>
                    ) : (
                        <p>No Couriers Available</p>
                    )}
                </>
            )}
        </>
    );
};

export default Couriers;
