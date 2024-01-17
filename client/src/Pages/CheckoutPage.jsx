import React from 'react'
import CheckoutpageCart from '../components/Checkout/CheckoutpageCart';
import { ContactProduct1 } from '../components/Checkout/ContactProduct1';
import CheckoutBredCrumbs from '../components/Checkout/CheckoutBredCrumbs';


const CheckoutPage = () => {
    return (
        <>
            <div className='Checkoutpage-parent'>
                <div className="Checkoutpage-sub1">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 col-lg-8">
                                <div className='Checkoutpage-sub1-text-parent'>
                                    <CheckoutBredCrumbs />
                                    <div className='Checkoutpage-sub1-text-sub2'>
                                        <h3>Checkout</h3>
                                        {/* <button>Sign In</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="row">
                                    <div className='col-6 Checkoutpage-shipping'>
                                        <p>Shipping</p>
                                    </div>
                                    <div className='col-6 Checkoutpage-Review'>
                                        <p>Review & Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Checkoutpage-content">
                            <div className="row">
                                <div className="col-md-6 col-lg-8">
                                    <h5>Shipping Address</h5>
                                    <hr />
                                    <div className='Checkoutpage-content-sub1'>
                                        <form action="">
                                            {/* email */}
                                            <label className='form-label' htmlFor="Email Address">Email Address</label>
                                            <input className='form-control' type="email" />
                                            <p className='text-muted'>You can create an account after checkout.</p>
                                            <hr />
                                            {/* first name */}

                                            <label className='form-label' htmlFor="First Name">First Name</label>
                                            <input className='form-control' type="text" />

                                            {/* last name */}
                                            <label className='form-label' htmlFor="Last Name">Last Name</label>
                                            <input className='form-control' type="text" />
                                            <label className='form-label' htmlFor="Company">Company</label>
                                            <input className='form-control' type="text" />
                                            {/* street address */}
                                            <label className='form-label' htmlFor="Street Address">Street Address</label>
                                            <input className='form-control' type="text" /><br />
                                            <input className='form-control' type="text" />
                                            {/* city */}
                                            <label className='form-label' htmlFor="City">City</label>
                                            <input className='form-control' type="text" />
                                            {/* state/Province */}
                                            <label className='form-label' htmlFor="State/Province">State/Province</label><br />
                                            <select name="Please, select a region, state or province" id="Please, select a region, state or province">
                                                <option value="State/Province">Please, select a region, state or province</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tamilnadu">Tamilnadu</option>
                                            </select>

                                            {/* Zip/Postal Code */}
                                            <label className='form-label' htmlFor="Zip/Postal Code">Zip/Postal Code</label>
                                            <input className='form-control' type="text" />
                                            {/* Country */}
                                            <label className='form-label' htmlFor="Country">Country</label>
                                            <select name="Country" id="Country">
                                                <option value="State/Province">United States</option>
                                                <option value="Karnataka">India</option>
                                                <option value="Telangana">Australia</option>
                                                <option value="Tamilnadu">Newzealand</option>
                                            </select>
                                            {/* phone number */}
                                            <label className='form-label' htmlFor="Phone Number">Phone Number</label>
                                            <input className='form-control' type="number" />
                                            <hr />
                                        </form>

                                        <div className='Checkoutpage-standardRate'>
                                            <div className='Checkoutpage-standardRate-text1'>
                                                <h5>Standard Rate</h5>
                                                <div className='Checkoutpage-standardRate-input-parent'>
                                                    <input type="radio" />
                                                    <p >
                                                        Pricing depends on item; staff will contact. Cost: $21.00</p>
                                                </div>
                                            </div>
                                            <div className='Checkoutpage-standardRate-text2'>
                                                <strong>$ 21.00</strong>
                                            </div>
                                        </div>
                                        <div className='Checkoutpage-Pickup-store'>
                                            <div className='Checkoutpage-Pickup-store-text1'>
                                                <h5>Pickup From Store</h5>
                                                <div className='Checkoutpage-standardRate-input-parent'>
                                                    <input type="radio" />
                                                    <p>1234 Street Adress City Address, 1234</p>
                                                </div>
                                            </div>
                                            <div className='Checkoutpage-Pickup-store-text2'>
                                                <strong>$ 21.00</strong>
                                            </div>
                                        </div>
                                        <div className='Chcekout-Page-NextButton'>
                                            <button>Next</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <CheckoutpageCart />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ContactProduct1 />
        </>

    )
}

export default CheckoutPage