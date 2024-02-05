import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { server } from '../../server';

const DronesQuotes = ({ content }) => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        item: '',
        details: '',
        qty: null
    })
    const [btnLoading, setBtnLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedState = {
            ...form
        };
        updatedState[name] = value;
        setForm(updatedState)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.email || !form.item || !form.qty) {
            toast.error('Required Fields need to be filled!')
        } else {
            try {
                setBtnLoading(true)
                await axios.post(`${server}/form/inquiry`, { form });
                toast.success("Sent Inquiry Successfully")
            } catch (error) {
                console.log(error)
                toast.error(error?.message)
            } finally {
                setBtnLoading(false)
            }
        }
    }



    return (
        <>
            <div className='DronesQuotes-parent'>
                <div className='DronesQuotes-parent-bg-image' style={{
                    backgroundImage: `url(${content?.BannerImage?.image?.url})`
                }}>
                    <div className='row' >
                        <div className="col-md-6">
                            <div className='DronesQuotes-sub-left'>
                                {content?.title && <h5>{content?.title}</h5>}
                                {content?.subTitle
                                    && <p>{content?.subTitle}</p>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='DronesQuotes-sub-right'>
                                <form onSubmit={!btnLoading ? handleSubmit : null}>
                                    {content?.form?.heading && <h6>{content?.form?.heading}</h6>}
                                    <input className='Drones-Quotes-input1 mb-3' onChange={handleChange} name='name' type="text" value={form.name} placeholder='Name' required /><br />
                                    <div className='mb-3 flex justify-between w-[91%]'>
                                        <input className='Drones-Quotes-input1 !w-[48%]' onChange={handleChange} name='phone' value={form.phone} type="text" placeholder='Phone Number' required /><br />
                                        <input className='Drones-Quotes-input1 !w-[48%]' onChange={handleChange} name='email' value={form.email} type="text" placeholder='Email' required /><br />
                                    </div>
                                    <input className='Drones-Quotes-input1' onChange={handleChange} type="text" name='item' value={form.item} placeholder='What item You need ?' /><br />
                                    <textarea name="details" value={form.details} cols="25" onChange={handleChange} rows="3"></textarea><br />
                                    <div className='DronesQuotes-sub-right-dropdown'>
                                        <input className='Drones-Quotes-input2' type="number" onChange={handleChange} name='qty' value={form.qty} placeholder='Quantity' required />
                                    </div>
                                    {content?.form?.buttonTitle && <button type='submit'>{btnLoading ? "Loading..." : `${content?.form?.buttonTitle}`}</button>}
                                </form>
                            </div>
                        </div>


                    </div>
                </div>


            </div >
        </>

    )
}

export default DronesQuotes;