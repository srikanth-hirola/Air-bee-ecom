import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import { getAllCategories } from '../../../../redux/actions/category';
import { server } from '../../../../server';

export const MiscellaneousConfig = () => {
    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error, siteConfigData } = useSelector((state) => state.siteConfig)
    const [logo, setLogo] = useState();
    const [currency, setCurrency] = useState({});
    const [paymentMethods, setPaymentMethods] = useState({
        INR: [],
        USD: []
    });
    const [displayEventProducts, setDisplayEventProducts] = useState(true);


    const dispatch = useDispatch();

    const styles = StyleConfig();

    useEffect(() => {
        if (success) {
            toast.success("Site Configuration Updated Successfully")
        }
        if (error) {
            toast.error(error.response.data.message)
        }
        dispatch(getAllSiteConfig())
        dispatch(getAllCategories())
    }, [success, error, dispatch])

    useEffect(() => {
        setLogo(siteConfigData?.logo)

        setCurrency(siteConfigData?.currency)
        setPaymentMethods(siteConfigData?.paymentMethods)
        setDisplayEventProducts(siteConfigData?.displayEventProducts)

    }, [siteConfigData])

    const handleLogoChange = (e, name) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                if (name === "logo") {
                    setLogo(base64Image);
                }
            };
            reader.readAsDataURL(file);
        }
    };


    const handleImageUpload = async (e, name) => {
        e.preventDefault();
        if (name === "logo") {
            if (logo?.url) {
                toast.error("No Image File is Uploaded")
                return
            }
            handleImageUploadAPI(logo, name)
        }
    }


    const handleImageUploadAPI = async (imageBe, name) => {
        try {
            setLogoLoading(true)
            await axios.post(`${server}/site/site-config-logo`, { image: imageBe, name })
            toast.success("Uploaded Image Successfully")
            setLogoLoading(false);
            dispatch(getAllSiteConfig())
        } catch (error) {
            setLogoLoading(false)
            toast.error(error.response.data.message)
        }
    }

    const handleCurrencyChange = (e) => {
        const index = e.target.value;
        setCurrency(CurrencyArr[index])
        if (CurrencyArr[index].code === "INR") {
            let paymentMethod = InrPayments.filter((val) => paymentMethods?.INR.includes(val))
            setPaymentMethods({ ...paymentMethods, INR: paymentMethod })
        } else {
            let paymentMethod = UsdPayments.filter((val) => paymentMethods?.USD.includes(val))
            setPaymentMethods({ ...paymentMethods, USD: paymentMethod })
        }
    }

    const handleCurrencySubmit = async (e) => {
        e.preventDefault();
        if (currency.code === "INR") {
            if (paymentMethods.INR.length === 0) {
                toast.error("At least One Payment Method should be given")
                return;
            }
        } else {
            if (paymentMethods.USD.length === 0) {
                toast.error("At least One Payment Method should be given")
                return;
            }
        }
        try {
            setLogoLoading(true)
            await axios.put(`${server}/site/site-config-currency`, { currency, paymentMethods })
            toast.success("Updated Currency & Payment methods Successfully")
            setLogoLoading(false);
            dispatch(getAllSiteConfig())
        } catch (error) {
            setLogoLoading(false)
            toast.error(error.response.data.message)
        }
    }

    const CurrencyArr = [{
        code: "INR",
        Symbol: '₹'
    }, {
        code: "USD",
        Symbol: '$'
    }]

    const InrPayments = ["RazorPay", "Stripe", "COD"];
    const UsdPayments = ["PayPal", "Stripe", "COD"];

    const handlePaymentMethodINRChange = (e, name) => {
        let updatedMethods = { ...paymentMethods }
        if (e.target.checked) {
            updatedMethods.INR.push(name)
        } else {
            updatedMethods.INR = updatedMethods.INR.filter((val) => val !== name)
        }
        setPaymentMethods(updatedMethods)
    }

    const handlePaymentMethodUSDChange = (e, name) => {
        let updatedMethods = { ...paymentMethods }
        if (e.target.checked) {
            updatedMethods.USD.push(name)
        } else {
            updatedMethods.USD = updatedMethods.USD.filter((val) => val !== name)
        }
        setPaymentMethods(updatedMethods)
    }


    return (
        <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center outer1-div" >
            <div className="w-[97%] flex justify-center border-1 rounded h-fit" >
                <div className='w-full px-8 py-4 '>
                    {/* logo config starts here */}
                    <div className='mb-3 flex space-x-3 mt-12'>
                        <div className='border-1 rounded w-6/12 py-3 px-4'>
                            <label className='w-[255px] pb-3'>Logo<span className="text-red-500">*</span></label><br />
                            <input type='file' onChange={(e) => { handleLogoChange(e, "logo") }} accept="image/*" />
                            {logo && <><div className='w-[122px] my-3 border-1 rounded'><img src={logo?.url ? logo?.url : logo} alt='logo' className='w-full' /></div><br />
                                {logoLoading ?
                                    <button
                                        className='w-[150px] h-[40px] rounded bg-green-500 text-white'>Loading...</button>
                                    :
                                    <button
                                        className='w-[150px] h-[40px] rounded bg-green-500 text-white' onClick={(e) => { handleImageUpload(e, "logo") }}>Upload Logo</button>}
                            </>
                            }
                        </div>
                    </div>
                    {/* logo config ends here */}

                    {/* Currency type config starts here */}
                    <div className='border-1 rounded py-3 px-4'>
                        <div className='my-6  '>
                            <label>Currency Type<span className="text-red-500">*</span></label><br />
                            <select className='border-1 rounded w-[150px] px-2 py-1 mt-3' onChange={handleCurrencyChange}>
                                {CurrencyArr.map((curr, index) => (
                                    <option key={index} value={index} selected={currency.code === curr.code ? true : false}>{curr.code}</option>
                                ))}
                            </select>
                            {/* {logoLoading ? <button style={{ background: styles?.mainColor?.toggleBtnMain ? styles?.mainColor?.mainColorPicker : styles?.mainColor?.mainColor, color: styles?.buttonFontColor?.toggleBtnButtonFont ? styles?.buttonFontColor?.buttonFontColorPicker : styles?.buttonFontColor?.buttonFontColor }}
 className='w-[200px] h-[40px] rounded ml-3' >Loading...</button> : <button style={{ background: styles?.mainColor?.toggleBtnMain ? styles?.mainColor?.mainColorPicker : styles?.mainColor?.mainColor, color: styles?.buttonFontColor?.toggleBtnButtonFont ? styles?.buttonFontColor?.buttonFontColorPicker : styles?.buttonFontColor?.buttonFontColor }}
 className='w-[200px] h-[40px] rounded ml-3' onClick={handleCurrencySubmit}>Update Currency</button>} */}
                        </div>
                        {/* Currency type config ends here */}

                        {/* Accepted Payment Methods config starts here */}
                        <div className='my-12 '>
                            <label>Accepted Payment Methods<span className="text-red-500">*</span></label><br />
                            <div className='flex space-x-24 my-10'>
                                {currency.code === "INR" && InrPayments?.map((methods, index) => (
                                    <div key={index} className='flex items-center' >
                                        <input type='checkbox' className='w-[15px] h-[15px]' onChange={(e) => handlePaymentMethodINRChange(e, methods)} checked={paymentMethods?.INR.includes(methods) ? true : false} /><label className='mx-2'>{methods}</label>
                                    </div>
                                ))}
                                {currency.code === "USD" && UsdPayments?.map((methods, index) => (
                                    <div key={index} className='flex items-center' >
                                        <input type='checkbox' className='w-[15px] h-[15px]' onChange={(e) => handlePaymentMethodUSDChange(e, methods)} checked={paymentMethods?.USD.includes(methods) ? true : false} /><label className='mx-2'>{methods}</label>
                                    </div>
                                ))}
                            </div>
                            {logoLoading ? <button
                                className='w-[400px] h-[40px] rounded bg-green-500 text-white'  >Loading...</button> : <button
                                    className='w-[400px] h-[40px] rounded bg-green-500 text-white' onClick={handleCurrencySubmit}>Update Currency & Payment Config</button>}
                        </div>
                        {/* Accepted Payment Methods config ends here */}
                    </div>
                    {/* Currency type config ends here */}

                    {/* Event Offer Enable Disable starts here*/}
                    {/* <div className='my-8 border-1 rounded py-6 px-3 '>
                        <div className='flex justify-between'>
                            <label>Display Event Products In Home Page</label>
                            <ToggleSwitch display={displayEventProducts} setDisplay={setDisplayEventProducts} name="displayEventProducts" />
                        </div>
                    </div> */}
                    {/* Event Offer Enable Disable ends here*/}

                </div>
            </div>
        </div>
    )
}
