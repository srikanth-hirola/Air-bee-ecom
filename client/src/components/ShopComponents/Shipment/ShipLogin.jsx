import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyleConfig } from '../../../utils/StyleConfig';
import { server, shipRocketURL } from '../../../server';
import toast from 'react-hot-toast';

const ShipLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { seller } = useSelector((state) => state.seller);

    const styles = StyleConfig();

    const navigate = useNavigate();

    const handleShipRocketLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${shipRocketURL}/auth/login?email=${email}&password=${password}`
            );
            await axios
                .put(
                    `${server}/shop/shipment-data-update`,
                    { shipment: data, sellerID: seller._id },
                    { withCredentials: true }
                )
                .then((res) => {
                    toast.success('Shipment Login Success!');
                    navigate('/dashboard');
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                });
        } catch (e) {
            if (e.response.status === 422) {
                toast.error('email and password fileds are required');
            } else if (e.response.status === 400) {
                toast.error('email or password filed is incorrect');
            } else {
                toast.error('failed to login');
            }
        }
    };

    return (
        <div className='rounded-lg p-10 login-shipment-page'>
            <h1 className='text-2xl pb-2'>Login to ShipRocket API</h1>
            <label className='mb-1'>Email ID</label>
            <br />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 rounded border-gray-300 w-full mb-4 h-[30px]"
            />
            <br />
            <label className='mb-1'>Password</label>
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 rounded border-gray-300 w-full mb-4 h-[30px]"
            />
            <br />
            <button
                onClick={handleShipRocketLogin} 
                style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                className=" rounded w-full h-[30px] bg-[#0D6EFD] text-light"
            >
                Submit
            </button>
        </div>
    );
};

export default ShipLogin;
