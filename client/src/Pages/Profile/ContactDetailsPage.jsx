import React, { useState } from 'react'
import AddNewAddress from '../../components/Modals/AddNewAddress';
import SideBar from '../../components/Profile/SideBar';
import DronesHeader from '../../components/Headers/DronesHeader';

const ContactDetailsPage = () => {

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    return (
        <>
            <DronesHeader />
            <AddNewAddress key={2} open={open} setOpen={setOpen} showModal={showModal} />
            <div className='ContactDetails-parent'>
                {/* <div className='ContactDetails-sub1'>
                    <p>Home</p>
                    <p>My Account</p>
                    <p>Personal Info </p>
                </div> */}
                <div className='ContactDetails-main-content'>
                    <div className="row">
                        <div className="col-md-12 col-lg-3">
                            <SideBar />
                        </div>
                        <div className='col-md-12 col-lg-9'>
                            <div className='ContactDetails-sub3'>
                                <div className='ContactDetails-sub3-headings'>
                                    <h3>Contact Details</h3>
                                </div>
                                <div className='ContactDetails-sub1-text'>
                                    <h5>Address</h5>
                                    <button onClick={showModal}>Add new</button>
                                </div>
                                <div className="ContactDetails-Address-details-parent">
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className='ContactDetails-Address-details-sub'>
                                                <h5>Jhanvi Shah</h5>
                                                <span>654132054</span>
                                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                                    derasar, Vijaynagar road
                                                </p>
                                                <div className='ContactDetails-Address-details-sub-buttons'>
                                                    <button className='ContactDetails-Address-details-sub-buttons1'>Home</button>
                                                    <button className='ContactDetails-Address-details-sub-buttons2'>Default billing address</button>
                                                </div>
                                                <div className='ContactDetails-Address-details-sub-footer'>
                                                    <button className='ContactDetails-Address-details-sub-footer-button1'>Remove</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Edit</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Set as Default</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='ContactDetails-Address-details-sub'>
                                                <h5>Jhanvi Shah</h5>
                                                <span>654132054</span>
                                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                                    derasar, Vijaynagar road
                                                </p>
                                                <div className='ContactDetails-Address-details-sub-buttons'>
                                                    <button className='ContactDetails-Address-details-sub-buttons1'>Home</button>
                                                    <button className='ContactDetails-Address-details-sub-buttons2'>Default billing address</button>
                                                </div>
                                                <div className='ContactDetails-Address-details-sub-footer'>
                                                    <button className='ContactDetails-Address-details-sub-footer-button1'>Remove</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Edit</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Set as Default</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='ContactDetails-Address-details-sub'>
                                                <h5>Jhanvi Shah</h5>
                                                <span>654132054</span>
                                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                                    derasar, Vijaynagar road
                                                </p>
                                                <div className='ContactDetails-Address-details-sub-buttons'>
                                                    <button className='ContactDetails-Address-details-sub-buttons1'>Home</button>
                                                    <button className='ContactDetails-Address-details-sub-buttons2'>Default billing address</button>
                                                </div>
                                                <div className='ContactDetails-Address-details-sub-footer'>
                                                    <button className='ContactDetails-Address-details-sub-footer-button1'>Remove</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Edit</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Set as Default</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='ContactDetails-Address-details-sub'>
                                                <h5>Jhanvi Shah</h5>
                                                <span>654132054</span>
                                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                                    derasar, Vijaynagar road
                                                </p>
                                                <div className='ContactDetails-Address-details-sub-buttons'>
                                                    <button className='ContactDetails-Address-details-sub-buttons1'>Home</button>
                                                    <button className='ContactDetails-Address-details-sub-buttons2'>Default billing address</button>
                                                </div>
                                                <div className='ContactDetails-Address-details-sub-footer'>
                                                    <button className='ContactDetails-Address-details-sub-footer-button1'>Remove</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Edit</button>
                                                    <button className='ContactDetails-Address-details-sub-footer-button2'>Set as Default</button>
                                                </div>
                                            </div>
                                        </div>

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

export default ContactDetailsPage