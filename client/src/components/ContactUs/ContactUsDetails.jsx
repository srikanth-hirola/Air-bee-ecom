import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUsDetails = () => {
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
                                    <form className='row'>
                                        <div className='col-md-6 contact-name'>
                                            <label htmlFor="">Your Name<span>*</span></label>
                                            <input type="text" placeholder='Your Name' />
                                        </div>
                                        <div className='col-md-6 contact-name'>
                                            <label htmlFor="">Your Email<span>*</span></label>
                                            <input type="text" placeholder='Your Email' />
                                        </div>
                                        <div className='col-md-6 contact-name'>
                                            <label htmlFor="">Your Phone Number<span>*</span></label>
                                            <input type="text" placeholder='Your Phone' />
                                        </div>
                                        <div className='col-md-12 contact-mindset'>
                                            <label htmlFor="">What’s on your mind?<span>*</span></label>
                                            <textarea placeholder='Jot us a note and we’ll get back to you as quickly as possible' />
                                        </div>
                                        <div className='contact-submit'>
                                            <input type="submit" title='submit' />
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
                                        <p>1234 Street Adress City Address</p>
                                    </div>
                                </div>
                                <div className='contact1-address row'>
                                    <div className='col-md-2 col-lg-2 col-sm-2 col-2 icon1'>
                                        <img src="/DronesHomepage/phoneicon.png" alt="pic" />
                                    </div>
                                    <div className='col-md-10 col-lg-10 col-sm-10 col-10'>
                                        <h6>Phone:</h6>
                                        <p>+91 9959521721</p>
                                    </div>
                                </div>
                                <div className='contact1-address row'>
                                    <div className='col-md-2 col-lg-2 col-sm-2 col-2 icon1'>
                                        <img src="/DronesHomepage/clockicon.png" alt="pic" />
                                    </div>
                                    <div className='col-md-10 col-lg-10 col-sm-10 col-10'>
                                        <h6>We Are Open:</h6>
                                        <p>Monday - Thursday: 9:00 AM - 5:30 PM
                                            Friday 9:00 AM - 6:00 PM
                                            Saturday: 11:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                                <div className='contact1-address row'>
                                    <div className='col-md-2 col-lg-2 col-sm-2 col-2 icon1'>
                                        <img src="/DronesHomepage/mailicon.png" alt="pic" />
                                    </div>
                                    <div className='col-md-10 col-lg-10 col-sm-10 col-10'>
                                        <h6>Email:</h6>
                                        <Link to="">indu27@gmail.com</Link>
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