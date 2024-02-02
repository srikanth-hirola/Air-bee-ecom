import React, { useEffect, useState } from 'react'
import { StyleConfig } from '../../../../utils/StyleConfig';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import toast from 'react-hot-toast';
import ContactContent from './ContactContent';

const ContactConfig = () => {
    const styles = StyleConfig();
    const [logoLoading, setLogoLoading] = useState(false)
    const { saveLayoutContent } = useSaveLayoutContent()

    const [contactUs, setContactUs] = useState({
        address: '',
        phone: '',
        timings: '',
        email: ''
    })

    useEffect(() => {
        setContactUs(styles?.contactUsDetails)
    }, [styles?.contactUsDetails])

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedState = JSON.parse(JSON.stringify(contactUs));
        updatedState[name] = value;
        setContactUs(updatedState)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!contactUs.address || !contactUs.phone || !contactUs.timings || !contactUs.email) {
            toast.error("All Contact Us Field are required")
        } else {
            saveLayoutContent(contactUs, "contactUsDetails", setLogoLoading)
        }
    }


    return (
        <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center outer1-div" >
            <div className='w-full'>
                <div className="w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3" >
                    <div className='w-full px-8 py-4 '>
                        <label className='mb-2'>Enter Contact Us Details</label>
                        <div className='my-4'>
                            <lable className='font-semibold'>Address <span className="text-red-500">*</span></lable><br />
                            <input type='text' name='address' className='border-1 rounded px-2 py-2 mt-2' value={contactUs?.address} onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <lable className='font-semibold'>Phone <span className="text-red-500">*</span></lable><br />
                            <input type='text' name='phone' className='border-1 rounded px-2 py-2 mt-2' value={contactUs?.phone} onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <lable className='font-semibold'>Timings <span className="text-red-500">*</span></lable><br />
                            <input type='text' name='timings' className='border-1 rounded px-2 py-2 mt-2' value={contactUs?.timings} onChange={handleChange} required />
                        </div>
                        <div className='my-4'>
                            <lable className='font-semibold'>Email <span className="text-red-500">*</span></lable><br />
                            <input type='email' name='email' className='border-1 rounded px-2 py-2 mt-2' value={contactUs?.email} onChange={handleChange} required />
                        </div>
                        {logoLoading ?
                            <button
                                className='w-[250px] h-[40px] rounded bg-green-500 text-white'>Loading...</button>
                            :
                            <button
                                className='w-[250px] h-[40px] rounded bg-green-500 text-white' onClick={handleSubmit}>Update Contact Info</button>}
                    </div>
                </div>
                <ContactContent />
            </div>
        </div>
    )
}

export default ContactConfig