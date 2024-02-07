import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { server } from '../../server';
import toast from 'react-hot-toast';
import { StyleConfig } from '../../utils/StyleConfig';
import { RxAvatar } from 'react-icons/rx';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleFileInputChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        axios
            .post(`${server}/user/create-user`, { name, email, password, avatar })
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setPassword("");
                setAvatar();
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            })
            .finally(() => {
                setLoading(false)
            })
    };
    const styles = StyleConfig();


    return (
        <div className='SignUpPage-content'>
            <h4>Sign Up</h4>
            <p>Thank you for visiting us! Add your name and email to sign up to our newsletter!</p>
            <form className="space-y-6" onSubmit={handleSubmit}>

                <label className='form-label' htmlFor="name">Full Name</label>
                <input className='form-control' placeholder='Enter Your Full Name' type="text"
                    name="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <label className='form-label' htmlFor="email">Email address</label>
                <input className='form-control' placeholder='Enter Your email' type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-control' type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' />

                <div>
                    <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                    ></label>
                    <div className="mt-2 flex items-center">
                        <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                            {avatar ? (
                                <img
                                    src={avatar}
                                    alt="avatar"
                                    className="h-full w-full object-cover rounded-full"
                                />
                            ) : (
                                <RxAvatar className="h-8 w-8" />
                            )}
                        </span>
                        <label
                            htmlFor="file-input"
                            className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                        >
                            <span>Upload Image</span>
                            <input
                                type="file"
                                name="avatar"
                                id="file-input"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleFileInputChange}
                                className="sr-only"
                            />
                        </label>
                    </div>
                </div>
                {loading ? <button type="button">Loading...</button> : <button type="submit">Sign Up</button>}

                <div className={`${styles.noramlFlex} w-full`}>
                    <p className='mb-0'>Already have an account?</p>
                    <Link to="/login" className="text-blue-600 pl-2">
                        Sign In
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp