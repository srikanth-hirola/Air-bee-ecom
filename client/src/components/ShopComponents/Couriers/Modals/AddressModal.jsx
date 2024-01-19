import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { StyleConfig } from '../../../../utils/StyleConfig';
import toast from 'react-hot-toast';
import { server } from '../../../../server';

const AddressModal = (props) => {
    const { seller } = useSelector((state) => state.seller);

    const styles = StyleConfig();


    const [formData, setFormData] = useState({
        pickup_location: '',
        name: '',
        email: '',
        phone: null,
        address: '',
        address_2: '',
        city: '',
        state: '',
        country: '',
        pin_code: null,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            // eslint-disable-next-line no-useless-escape
            const exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            if (exp.test(value)) {
                setFormData({ ...formData, [name]: value })
            }
        }
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const vali = Validation();
            if (vali) {
                const sellerId = seller._id;
                await axios.post(`${server}/shipping/add-pickup-address`, { sellerId, formData });
                toast.success("Added Pickup Address Successfully")
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const Validation = () => {
        if (formData.pickup_location === '' || formData.name === '' || formData.email === '' || formData.phone === null || formData.address === '' || formData.city === '' || formData.state === '' || formData.country === '' || formData.pin_code === '') {
            toast.error("All Fields are required");
            return false
        } else {
            return true
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add PickUp Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h4>Contact Info</h4>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>Address Nickname<span className="text-red-500">*</span></label>
                            <input name='pickup_location' className='border-1 rounded px-2 py-1' placeholder='Enter Address NickName' type='text' onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>Contact Name<span className="text-red-500">*</span></label>
                            <input name='name' className='border-1 rounded px-2 py-1' placeholder='Enter Contact Name' type='text' onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>Phone<span className="text-red-500">*</span></label>
                            <input name='phone' className='border-1 rounded px-2 py-1' placeholder='Enter Phone Numbere' type='number' onChange={handleChange} />
                        </div>

                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>email<span className="text-red-500">*</span></label>
                            <input name='email' className='border-1 rounded px-2 py-1' placeholder='Enter Email Id' type='email' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h4>Address Details</h4>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>Address Line 1 <span className="text-red-500">*</span></label>
                            <input name='address' className='border-1 rounded px-2 py-1' placeholder='Enter Address Line 1' type='text' onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>Address Line 2</label>
                            <input name='address_2' className='border-1 rounded px-2 py-1' placeholder='Enter Address Line 2' type='text' onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>Pincode<span className="text-red-500">*</span></label>
                            <input name='pin_code' className='border-1 rounded px-2 py-1' placeholder='Enter Pincode' type='number' onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>City<span className="text-red-500">*</span></label>
                            <input name='city' className='border-1 rounded px-2 py-1' placeholder='Enter City Name' type='text' onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>State<span className="text-red-500">*</span></label>
                            <input name='state' className='border-1 rounded px-2 py-1' placeholder='Enter State Name' type='text' onChange={handleChange} />
                        </div>
                        <div className='mb-2'>
                            <label className='mr-2 w-[180px]'>Country<span className="text-red-500">*</span></label>
                            <input name='country' className='border-1 rounded px-2 py-1' placeholder='Enter Country Name' type='text' onChange={handleChange} />
                        </div>
                    </div>
                    <button type='submit' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className=' rounded text-white py-2 px-4 font-semibold'>Save Address</button>
                </form>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default AddressModal