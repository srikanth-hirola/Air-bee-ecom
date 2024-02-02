import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import { getAllCategories } from '../../../../redux/actions/category';
import ImagesUpload from '../About/ImagesUpload';
import MainBanner from './MainBanner';

const BannerConfig = () => {
    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error, siteConfigData } = useSelector((state) => state.siteConfig);
    const [uploadedImages, setUploadedImages] = useState([]);


    useEffect(() => {
        setUploadedImages(siteConfigData?.bannerImages);
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
        dispatch(getAllCategories())
    }, [success, error, dispatch])


    return (
        <div className='w-[90%] mx-auto'>
            <ImagesUpload name={"bannerImages"} logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={1} />
            <hr />
            <MainBanner logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={2} />
        </div>
    )
}

export default BannerConfig