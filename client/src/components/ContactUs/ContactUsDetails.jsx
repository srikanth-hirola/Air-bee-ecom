import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyleConfig } from '../../utils/StyleConfig';
import toast from 'react-hot-toast';
import axios from 'axios';
import { server } from '../../server';

export const ContactUsDetails = () => {
    const styles = StyleConfig();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
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
        if (!form.name || !form.phone || !form.email) {
            toast.error('Required Fields need to be filled!')
        } else {
            try {
                setBtnLoading(true)
                await axios.post(`${server}/form/contact`, { form });
                toast.success("Sent Contact Details Successfully")
            } catch (error) {
                toast.error(error?.message)
            } finally {
                setBtnLoading(false)
            }
        }
    }



    return (
        <>
            <div className="breadcrump-contactUs">
                <div className='container'>
                    <div className='row'>
                        <div className=" col-lg-8 col-md-12 col-sm-12 ">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb ">
                                    <li class="breadcrumb-item"><Link to="/" className='text-black'>Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Contact US</li>

                                </ol>
                            </nav>
                            <div className='contact1-heading-text'>
                                <h1>Contact Us</h1>
                                <p>We love hearing from you, our Shop customers.
                                    Please contact us and we will make sure to get back to you as soon as we possibly can.</p>

                                <div className='contactus1-name'>
                                    <form className='row' onSubmit={!btnLoading ? handleSubmit : null}>
                                        <div className='col-md-6 contact-name'>
                                            <label htmlFor="">Your Name<span>*</span></label>
                                            <input type="text" placeholder='Your Name' name='name' value={form.name} onChange={handleChange} required />
                                        </div>
                                        <div className='col-md-6 contact-name'>
                                            <label htmlFor="">Your Email<span>*</span></label>
                                            <input type="email" placeholder='Your Email' name='email' value={form.email} onChange={handleChange} required />
                                        </div>
                                        <div className='col-md-6 contact-name'>
                                            <label htmlFor="">Your Phone Number<span>*</span></label>
                                            <input type="text" placeholder='Your Phone' name='phone' value={form.phone} onChange={handleChange} required />
                                        </div>
                                        <div className='col-md-12 contact-mindset'>
                                            <label htmlFor="">What’s on your mind?</label>
                                            <textarea placeholder='Jot us a note and we’ll get back to you as quickly as possible' name='message' value={form.message} onChange={handleChange} />
                                        </div>
                                        <div className='contact-submit'>
                                            <button type="submit">{btnLoading ? "Loading..." : "Submit"}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 col-12 contact1-address-shoppage'>
                            <div className='contactdetails-map'>
                                <div className='contact1-address row'>
                                    <div className='col-md-2 col-lg-2 col-sm-2 col-2 icon1'>
                                        <img src="/DronesHomepage/mapicon.png" alt="pic" />
                                    </div>
                                    <div className='col-md-10 col-lg-10 col-sm-10 col-10'>
                                        <h6>Address:</h6>
                                        <p>{styles?.contactUsDetails?.address}</p>
                                    </div>
                                </div>
                                <div className='contact1-address row'>
                                    <div className='col-md-2 col-lg-2 col-sm-2 col-2 icon1'>
                                        <img src="/DronesHomepage/phoneicon.png" alt="pic" />
                                    </div>
                                    <div className='col-md-10 col-lg-10 col-sm-10 col-10'>
                                        <h6>Phone:</h6>
                                        <p>{styles?.contactUsDetails?.phone}</p>
                                    </div>
                                </div>
                                <div className='contact1-address row'>
                                    <div className='col-md-2 col-lg-2 col-sm-2 col-2 icon1'>
                                        <img src="/DronesHomepage/clockicon.png" alt="pic" />
                                    </div>
                                    <div className='col-md-10 col-lg-10 col-sm-10 col-10'>
                                        <h6>We Are Open:</h6>
                                        <p>{styles?.contactUsDetails?.timings}</p>
                                    </div>
                                </div>
                                <div className='contact1-address row'>
                                    <div className='col-md-2 col-lg-2 col-sm-2 col-2 icon1'>
                                        <img src="/DronesHomepage/mailicon.png" alt="pic" />
                                    </div>
                                    <div className='col-md-10 col-lg-10 col-sm-10 col-10'>
                                        <h6>Email:</h6>
                                        <Link to={`mailto:${styles?.contactUsDetails?.email}`}>{styles?.contactUsDetails?.email}</Link>
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
