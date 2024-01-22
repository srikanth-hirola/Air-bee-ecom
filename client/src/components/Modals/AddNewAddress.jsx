import React, { useState } from 'react';
import { Modal } from 'antd';
import { Country, State, City } from 'country-state-city';
import { updatUserAddress } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const AddNewAddress = ({ open, showModal, setOpen }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
    };


    const [country, setCountry] = useState();
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [billingaddress1, setBillingAddress1] = useState('');
    const [billingaddress2, setBillingAddress2] = useState('');
    const [billingzipCode, setBillingZipCode] = useState(null);
    const [addressType, setAddressType] = useState("");
    const [billinguserName, setBillingUserName] = useState("");
    const [billinguserEmail, setBillingUserEmail] = useState("");
    const [billinguserphonenumber, setBillinguserPhoneNumber] = useState(null);
    const dispatch = useDispatch();

    const addressTypeData = [
        {
            name: "Default",
        },
        {
            name: "Home",
        },
        {
            name: "Office",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (addressType === "" || country === "" || state === "" || city === "" || billingzipCode === null || billinguserphonenumber === null || billingaddress1 === "" || billingaddress2 === "" || billinguserName === "" || billinguserEmail === "") {
            toast.error("Please fill all the fields!");
        } else {
            dispatch(
                updatUserAddress(
                    country,
                    state,
                    city,
                    billingaddress1,
                    billingaddress2,
                    billinguserName,
                    billinguserEmail,
                    billinguserphonenumber,
                    billingzipCode,
                    addressType
                )
            );
            setOpen(false);
            setCountry("");
            setState("");
            setCity("");
            setBillingAddress1("");
            setBillingAddress2("");
            setBillingUserName("");
            setBillingUserEmail("");
            setBillingZipCode(null);
            setBillinguserPhoneNumber(null);
            setAddressType("");
        }
    };


    const handleChangeCountry = (e) => {
        const { name, value } = e.target;
        if (name === 'country') {

            setCountry(value);
        } else if (name === 'state') {
            const found = State.getStatesOfCountry(country).find(
                (val) => val.isoCode === value
            );
            console.log(found, "statebilling")

            setState(value);
        } else {
            City.getCitiesOfState(country, state).find(
                (val) => val.name === value
            );
            setCity(value);
        }
    };


    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                pop up 1 - congratulations
            </Button> */}
            <Modal
                title=""
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                footer={null}
                onCancel={handleCancel}
                className='AddNewAddress-popup-Modal'
            >
                <div className='AddNewAddress-parent'>
                    <h2>Add New Address</h2>
                    <form onSubmit={handleSubmit}>
                        {/* full name */}

                        <label className='form-label' htmlFor="Full Name">Full Name</label>
                        <input className='form-control' type="text" value={billinguserName}
                            required
                            onChange={(e) => setBillingUserName(e.target.value)} />

                        {/* email */}

                        <label className='form-label' htmlFor="Email">Email</label>
                        <input className='form-control' type="email" value={billinguserEmail}
                            required
                            onChange={(e) => setBillingUserEmail(e.target.value)} />

                        {/* phone number */}

                        <label className='form-label' htmlFor=" Phone Number">Phone Number</label>
                        <input className='form-control' type="number"
                            required
                            value={billinguserphonenumber}
                            onChange={(e) => setBillinguserPhoneNumber(e.target.value)} />

                        {/* country */}

                        <label className='form-label' htmlFor="Country">Country</label><br />
                        <select id="" value={country}
                            name="country"
                            onChange={handleChangeCountry}>
                            <option className="block pb-2" value="">
                                Choose your country
                            </option>
                            {Country &&
                                Country.getAllCountries().map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                        <br />

                        {/* state */}

                        <label className='form-label' htmlFor="State">State</label><br />
                        <select value={state}
                            name="state"
                            onChange={handleChangeCountry} id="">
                            <option className="block pb-2" value="">
                                Choose your state
                            </option>
                            {State &&
                                State.getStatesOfCountry(country).map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select><br />

                        {/* city */}

                        <label className='form-label' htmlFor="City">City</label><br />
                        <select value={city}
                            name="city"
                            onChange={handleChangeCountry} id="">
                            <option className="block pb-2" value="">
                                Choose your city
                            </option>
                            {City &&
                                City.getCitiesOfState(country, state).map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                        <br />
                        <label className='form-label' htmlFor="Flat House no,Building Company Apartment">Flat House no, Building Company Apartment</label>
                        <input className='form-control' type="address"
                            required
                            value={billingaddress1}
                            onChange={(e) => setBillingAddress1(e.target.value)} />
                        <label className='form-label' htmlFor="Area Street Sector Village">Area Street Sector Village</label>
                        <input className='form-control' value={billingaddress2}
                            onChange={(e) => setBillingAddress2(e.target.value)}
                            required />
                        <label className='form-label' htmlFor="Zip Code">Zip Code</label>
                        <input className='form-control' type="number"
                            value={billingzipCode}
                            onChange={(e) => setBillingZipCode(e.target.value)}
                            required />

                        {/* address type */}

                        <label className='form-label' htmlFor="Address Type">Address Type</label><br />
                        <select name="" id="" value={addressType}
                            onChange={(e) => setAddressType(e.target.value)}>
                            <option value="" className="block border pb-2">
                                Choose your Address Type
                            </option>
                            {addressTypeData &&
                                addressTypeData.map((item, index) => (
                                    <option
                                        className="block pb-2"
                                        key={index}
                                        value={item.name}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </Modal>
        </>
    );
};
export default AddNewAddress;