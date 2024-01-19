import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

import { StyleConfig } from '../../../utils/StyleConfig';
import { server } from '../../../server';
import toast from 'react-hot-toast';
import Loader from '../../../utils/Loader';
import AddressModal from './Modals/AddressModal';


const PickupAddres = () => {
    const { seller } = useSelector((state) => state.seller);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [selectedLocation, setSelcetedLocation] = useState({})

    const styles = StyleConfig();

    useEffect(() => {
        setSelcetedLocation(seller?.pickupLocation);
        async function getPickUpLocations() {
            try {
                const { data } = await axios.get(
                    `${server}/shipping/getPickupLocations/${seller._id}`
                );
                setData(data.locations);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error(error.response.data.message);
            }
        }
        getPickUpLocations();
    }, [seller]);


    const handleSubmitLocation = async (e) => {
        e.preventDefault();
        setBtnLoading(true);
        try {
            const sellerID = seller._id;
            await axios.post(`${server}/shipping/set-default-pickup`, { selectedLocation, sellerID })
            setBtnLoading(false);
            toast.success("Updated default Shop Pickup Address")
        } catch (error) {
            setBtnLoading(false);
            toast.error(error.response.data.message);
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
                                <div className='flex justify-end'>
                                    <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className=' rounded text-white py-2 px-4 font-semibold' onClick={() => setModalShow(true)}>Add New Pickup Location</button>
                                    <AddressModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                                <div className="w-full rounded my-2 bg-[#f4f4f4] p-4 flex justify-between">
                                    <p className="text-xs font-semibold mb-0 ">Address Nickname</p>
                                    <p className="text-xs font-semibold mb-0 ">Address Details</p>
                                    <p className="text-xs font-semibold mb-0 ">Contact Info</p>
                                </div>
                                <div>
                                    {data?.map((val, index) => (
                                        <div className="w-full rounded my-2 bg-[#f4f4f4] p-4 ">
                                            <div key={index} className="flex justify-between">
                                                <div className="order-detail flex h-fit  width">
                                                    <input type='radio' className='mr-2 w-[20px]' value={selectedLocation} onChange={() => setSelcetedLocation(val)} checked={selectedLocation?.pickup_location === val.pickup_location ? true : false} />
                                                    <p className="text-xs mb-0">
                                                        {val?.pickup_location}
                                                    </p>
                                                </div>
                                                <div className="package width">
                                                    <p className="text-xs mb-1">
                                                        {val?.address}
                                                    </p>
                                                    {val?.address2 && <p className="text-xs mb-1">
                                                        {val?.address2}
                                                    </p>}
                                                    <p className="text-xs mb-1">
                                                        {val?.city}
                                                    </p>
                                                    <p className="text-xs mb-1">
                                                        {val?.state}
                                                    </p>
                                                    <p className="text-xs mb-1">
                                                        {val?.pin_code}
                                                    </p>
                                                    <p className="text-xs mb-1">
                                                        {val?.country}
                                                    </p>
                                                </div>
                                                <div className="customer-detail width">
                                                    <p className="text-xs mb-1">
                                                        {val?.name}
                                                    </p>
                                                    <p className="text-xs mb-1">
                                                        {val?.phone}
                                                    </p>
                                                    <p className="text-xs mb-1">
                                                        {val?.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {!btnLoading ? <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className=' py-2 px-4 font-semibold text-white rounded' onClick={handleSubmitLocation}>Submit</button>
                                    : <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className=' py-2 px-4 font-semibold text-white rounded'>Loading...</button>
                                }
                            </div>
                        </div>
                    ) : (
                        <p>No Pickup Address Added</p>
                    )}
                </>
            )}
        </>
    );
}

export default PickupAddres