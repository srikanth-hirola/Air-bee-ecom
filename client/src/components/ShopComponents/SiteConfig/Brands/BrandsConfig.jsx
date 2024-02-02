import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import ImagesUpload from '../About/ImagesUpload';
import BrandImages from './BrandImages';

const BrandsConfig = () => {

    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error, siteConfigData } = useSelector((state) => state.siteConfig);
    const [uploadedImages, setUploadedImages] = useState([]);


    useEffect(() => {
        setUploadedImages(siteConfigData?.brandImages);
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
            <ImagesUpload name={"brandImages"} logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={1} />
            <hr />
            <BrandImages logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={2} />
        </div>
    )
}

export default BrandsConfig