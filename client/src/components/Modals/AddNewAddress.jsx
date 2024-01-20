import React, { useState } from 'react';
import { Modal } from 'antd';

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
                    <form action="">
                        {/* full name */}

                        <label className='form-label' htmlFor="Full Name">Full Name</label>
                        <input className='form-control' type="text" />

                        {/* email */}

                        <label className='form-label' htmlFor="Email">Email</label>
                        <input className='form-control' type="email" />

                        {/* phone number */}

                        <label className='form-label' htmlFor=" Phone Number">Phone Number</label>
                        <input className='form-control' type="tele" />

                        {/* country */}

                        <label className='form-label' htmlFor="Country">Country</label><br />
                        <select name="" id="">
                            <option value="Choose Your Country">Choose Your Country</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="England">England</option>
                        </select>
                        <br />

                        {/* state */}

                        <label className='form-label' htmlFor="State">State</label><br />
                        <select name="" id="">
                            <option value="Choose Your Country">Choose Your State</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="England">England</option>
                        </select><br />

                        {/* city */}

                        <label className='form-label' htmlFor="City">City</label><br />
                        <select name="" id="">
                            <option value="Choose Your Country">Choose Your City</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="England">England</option>
                        </select>
                        <br />
                        <label className='form-label' htmlFor="Flat House no,Building Company Apartment">Flat House no, Building Company Apartment</label>
                        <input className='form-control' type="text" />
                        <label className='form-label' htmlFor="Area Street Sector Village">Area Street Sector Village</label>
                        <input className='form-control' type="text" />
                        <label className='form-label' htmlFor="Zip Code">Zip Code</label>
                        <input className='form-control' type="text" />

                        {/* address type */}

                        <label className='form-label' htmlFor="Address Type">Address Type</label><br />
                        <select name="" id="">
                            <option value="Choose Your Address Type">Choose Your Address Type</option>
                            <option value="Home">Home</option>
                            <option value="Office">Office</option>
                        </select>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </Modal>
        </>
    );
};
export default AddNewAddress;