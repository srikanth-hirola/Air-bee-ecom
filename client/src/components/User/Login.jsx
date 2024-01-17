import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { server } from '../../server';
import toast from 'react-hot-toast';
import { StyleConfig } from '../../utils/StyleConfig';

const Login = () => {

    const styles = StyleConfig()

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [visible, setVisible] = useState(false);
    const visible = false;

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(
                `${server}/user/login-user`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                toast.success("Login Success!");
                console.log(res)
                if (res?.data?.user?.role === "Admin") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/");
                }
                window.location.reload(true);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    const handleForgetPassword = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Email is required");
            return
        }
        navigate(`/forget-password?email=${email}`)
    }



    return (
        <div className='SignUpPage-content'>
            <h4>Log in</h4>
            <p>Thank you for visiting us! Add your name and email to sign up to our newsletter!</p>
            <form className="space-y-6" onSubmit={handleSubmit}>

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
                <div className={`${styles.noramlFlex} justify-between`}>
                    <div className={`${styles.noramlFlex} items-center`}>
                        <input
                            type="checkbox"
                            name="remember-me"
                            id="remember-me"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded my-auto"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <p
                            className="font-medium mb-0 cursor-pointer text-blue-600 hover:text-blue-500" onClick={handleForgetPassword}
                        >
                            Forgot your password?
                        </p>
                    </div>
                </div>
                <button type="submit">Log in</button>
                <div className={`${styles.noramlFlex} w-full`}>
                    <p className='mb-0'>Not have any account?</p>
                    <Link to="/sign-up" className="text-blue-600 pl-2">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login