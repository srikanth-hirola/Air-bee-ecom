import React, { useEffect, useState } from 'react'
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import ImagesUpload from '../About/ImagesUpload';
import TestimonialContent from './TestimonialContent';

const TestimonialsConfig = () => {
    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error, siteConfigData } = useSelector((state) => state.siteConfig);
    const [uploadedImages, setUploadedImages] = useState([]);


    useEffect(() => {
        setUploadedImages(siteConfigData?.testimonialsImages);
    }, [siteConfigData])

    const dispatch = useDispatch();

    useEffect(() => {
        if (success) {
            toast.success("Site Configuration Updated Successfully")
        }
        if (error) {
            toast.error(error.response.data.message)
        }
        dispatch(getAllSiteConfig())
    }, [success, error, dispatch])


    return (
        <div className='w-[90%] mx-auto'>
            <ImagesUpload name={"testimonialsImages"} logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={1} />
            <hr />
            <TestimonialContent logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={2} />
            <hr />
        </div>
    )
}

export default TestimonialsConfig