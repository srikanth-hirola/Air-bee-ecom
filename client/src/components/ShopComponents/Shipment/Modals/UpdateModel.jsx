import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { server } from '../../../../server';
import toast from 'react-hot-toast';
import { getAllOrdersOfShop } from '../../../../redux/actions/order';
import { getAllShipmentOrders } from '../../../../redux/actions/shipping';


const UpdateModel = (props) => {

    const { seller } = useSelector((state) => state.seller)

    const styles = StyleConfig();

    const [formData, setFormData] = useState({});

    useEffect(() => {
        props.updateAddressType ? setFormData({
            order_id: props?.addressUpdatedData?.id,
            shipping_customer_name: props?.addressUpdatedData?.customer_name,
            shipping_phone: props?.addressUpdatedData?.customer_phone,
            shipping_address: props?.addressUpdatedData?.customer_address,
            shipping_address_2: props?.addressUpdatedData?.customer_address_2,
            shipping_city: props?.addressUpdatedData?.customer_city,
            shipping_state: props?.addressUpdatedData?.customer_state,
            shipping_country: props?.addressUpdatedData?.customer_country,
            shipping_pincode: props?.addressUpdatedData?.customer_pincode
        }) : setFormData({
            order_id: [props?.addressUpdatedData?.id],
            pickup_location: ''
        })
    }, [props])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = isObjectEmpty(formData);
        if (!res) {
            try {
                const sellerID = seller._id;
                const addressType = props.updateAddressType;
                await axios.post(`${server}/shipping/update-delivery-address`, { sellerID, formData, addressType })
                addressType ? toast.success("Updated Customer Address")
                    : toast.success("Updated Pickup Location")
                dispatch(getAllOrdersOfShop(seller._id));
                dispatch(getAllShipmentOrders(seller._id));

            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            toast.error("All fields are mandatory")
        }
    }

    function isObjectEmpty(obj) {
        for (const key in obj) {
            if (key !== "shipping_address_2") {
                if (obj.hasOwnProperty(key) && !obj[key]) {
                    return true;
                }
            }
        }
        return false;
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {props?.updateAddressType ? <><Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Customer Address Update
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer Name<span className="text-red-500">*</span></label>
                            <input type='text' name='shipping_customer_name' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_customer_name} onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer Phone<span className="text-red-500">*</span></label>
                            <input type='text' name='shipping_phone' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_phone} onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer Address<span className="text-red-500">*</span></label>
                            <input type='text' name='shipping_address' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_address} onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer Address 2</label>
                            <input type='text' name='shipping_address_2' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_address_2} onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer City<span className="text-red-500">*</span></label>
                            <input type='text' name='shipping_city' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_city} onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer State<span className="text-red-500">*</span></label>
                            <input type='text' name='shipping_state' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_state} onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer PinCode<span className="text-red-500">*</span></label>
                            <input type='text' name='shipping_pincode' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_pincode} onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-semibold w-[250px]'>Shipping Customer Country<span className="text-red-500">*</span></label>
                            <input type='text' name='shipping_country' className='border-1 py-1 px-2 rounded text-sm' value={formData?.shipping_country} onChange={handleChange} />
                        </div>
                    </form>
                </Modal.Body></> : <><Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Pickup Address Update
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <form>
                            <div className='mb-2'>
                                <label className='text-sm font-semibold w-[250px]'>Pickup Address Nick Name<span className="text-red-500">*</span></label>
                                <input type='text' name='pickup_location' className='border-1 py-1 px-2 rounded text-sm' placeholder='Eg : Primary' value={formData?.pickup_location} onChange={handleChange} />
                            </div>
                        </form>
                    </form>
                </Modal.Body></>}
            <div>
                <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className='py-2 ml-4 mb-4 w-[150px] text-white rounded' onClick={handleSubmit}>Update</button>
            </div>
            {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
        </Modal>
    );
};

export default UpdateModel;
