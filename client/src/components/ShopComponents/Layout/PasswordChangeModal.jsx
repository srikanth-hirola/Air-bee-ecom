import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { StyleConfig } from '../../../utils/StyleConfig';
import { server } from '../../../server';
import toast from 'react-hot-toast';

const PasswordChangeModal = (props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const styles = StyleConfig();

    const passwordChangeHandler = async (e) => {
        e.preventDefault();

        await axios
            .put(
                `${server}/shop/update-seller-password`,
                { oldPassword, newPassword, confirmPassword, id: props.sellerId },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success(res.data.message);
                logoutHandler();
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const logoutHandler = async () => {
        axios.get(`${server}/shop/logout`, {
            withCredentials: true,
        });
        window.location.reload();
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="w-full px-5">
                    <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
                        Change Password
                    </h1>
                    <div className="w-full">
                        <form

                            onSubmit={passwordChangeHandler}
                            className="flex flex-col items-center"
                        >
                            <div className=" w-[100%] 800px:w-[50%] mt-5">
                                <label className="block pb-2">Enter your old password</label>
                                <input
                                    type="password"
                                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                    required
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>
                            <div className=" w-[100%] 800px:w-[50%] mt-2">
                                <label className="block pb-2">Enter your new password</label>
                                <input
                                    type="password"
                                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className=" w-[100%] 800px:w-[50%] mt-2">
                                <label className="block pb-2">
                                    Enter your confirm password
                                </label>
                                <input
                                    type="password"
                                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <input
                                    className={`w-[95%] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                                    required
                                    value="Update"
                                    type="submit" style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PasswordChangeModal;
