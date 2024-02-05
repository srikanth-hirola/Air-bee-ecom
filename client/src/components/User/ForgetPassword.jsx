import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import OtpInput from 'react-otp-input';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { StyleConfig } from '../../utils/StyleConfig';
import { server } from '../../server';
import toast from 'react-hot-toast';
import DronesHeader from '../Headers/DronesHeader';
import DronesFooter from '../DronesHomepage/DronesFooter';

const ForgetPassword = () => {
    const [searchParams] = useSearchParams();
    const [otp, setOtp] = useState(null);
    const [timer, setTimer] = useState(120);
    const [resendBtn, setResendBtn] = useState(false);

    const [email, setEmail] = useState('');

    const [otpScreen, setOtpScreen] = useState(true)

    const [enterOtpScreen, setEnterOtpScreen] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('')
    // const [visible, setVisible] = useState(false);
    const visible = false;

    const navigate = useNavigate();


    const styles = StyleConfig();

    const timeCountDown = () => {
        var timeleft = 120;
        var downloadTimer = setInterval(function () {
            timeleft--;
            setTimer(timeleft);
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                handleDeleteOTP();
            }
        }, 1000);
    };


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const params = {};
        for (const [key, value] of urlParams.entries()) {
            params[key] = value;
        }
        setEmail(params?.email)


        // const url = `${server}/user/forget-password?${new URLSearchParams(params)}`;
        // const searchApiCall = async () => {
        //     try {
        //         const { data } = await axios.get(url);
        //         setIsLoading(false)
        //         setData(data.products)
        //     } catch (error) {
        //         toast.error(error.response.data.message)
        //     }
        // }

        // console.log(url)

        // searchApiCall()

    }, [searchParams])


    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${server}/user/forget-password`, { email });
            setEnterOtpScreen(true)
            timeCountDown()
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    }

    const handleOTP = async (e) => {
        e.preventDefault();
        const otpVer = otpValidation(otp);
        if (otpVer) {
            try {
                await axios.post(`${server}/user/otpVer`, {
                    email, otp
                })
                setOtpScreen(false);
                setEnterOtpScreen(false)
                setResendBtn(false)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
    };

    const otpValidation = (num) => {
        if (num.length < 4) {
            toast.error('OTP should be 4 digit');
            return false;
        } else {
            return true;
        }
    };

    const handleDeleteOTP = async () => {
        try {
            await axios.post(`${server}/user/resetOTP`, {
                email,
            })
            setResendBtn(true);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password is not matching")
        }
        try {
            await axios.post(`${server}/user/changePassword`, {
                email,
                password
            })
            toast.success("password Changes Successfully")
            navigate('/login')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    return (
        <>
            <DronesHeader />
            <div className="h-[89vh] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
                        Forget password?
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    {otpScreen && <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handelSubmit}>
                            <p className='text-center'>Send OTP to mail address?</p>
                            <p className='text-sm font-semibold text-center'>{email && email}</p>
                            <div className='flex justify-center'>
                                {!enterOtpScreen && <button type='submit' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className='py-2 px-3 rounded '>send</button>}
                                {resendBtn && (
                                    <button type='submit' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className='py-2 px-3 rounded '>
                                        Resend
                                    </button>
                                )}
                            </div>
                        </form>
                        {enterOtpScreen &&
                            <>
                                <div className='flex justify-center mt-3'>
                                    <p className="otpExpire mb-0">OTP expires in : {timer}</p>
                                </div>
                                <div className="forgetOtp my-4">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={4}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                </div>

                                <div className='flex justify-center mt-4'>
                                    <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className='py-2 px-3 rounded ' onClick={handleOTP}>Submit</button>
                                </div>
                            </>}
                    </div>}
                    {!otpScreen &&
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <form onSubmit={handleChangePassword}>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            type={visible ? "text" : "password"}
                                            name="password"
                                            autoComplete="current-password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                        {/* {visible ? (
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                    )} */}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Confirm Password<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            type={visible ? "text" : "password"}
                                            name="confirmPassword"
                                            autoComplete="current-password"
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                        {/* {visible ? (
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                    )} */}
                                    </div>
                                </div>
                                <div className='flex justify-center mt-4'>
                                    <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className='py-2 px-3 rounded ' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>}
                </div>
            </div>
            <DronesFooter />
        </>
    )
}


export default ForgetPassword