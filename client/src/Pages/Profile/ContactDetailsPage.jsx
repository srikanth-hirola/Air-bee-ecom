import React, { useEffect, useState } from 'react'
import AddNewAddress from '../../components/Modals/AddNewAddress';
import SideBar from '../../components/Profile/SideBar';
import DronesHeader from '../../components/Headers/DronesHeader';
import { useSelector } from 'react-redux';
import AddressCards from '../../components/Profile/Cards/AddressCards';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';
import DronesHeader2 from '../../components/Headers/DronesHeader2';

const ContactDetailsPage = () => {
    const { user } = useSelector((state) => state.user);

    const [addressData, setAddressData] = useState([]);

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    useEffect(() => {
        setAddressData(user?.addresses)
    }, [user])


    return (
        <>
            <DronesHeader />
            <DronesHeader2 />
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
                                        {addressData?.length > 0 ?
                                            addressData?.map((address, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <AddressCards address={address} />
                                                </div>
                                            ))

                                            : <p>No Address Saved</p>
                                        }



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DronesFooter />
        </>

    )
}

export default ContactDetailsPage