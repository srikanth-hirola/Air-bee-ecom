import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import { getAllCategories } from '../../../../redux/actions/category';
import ImagesUpload from '../About/ImagesUpload';
import FeaturesSecOne from './FeaturesSecOne';
import FeaturesSecTwo from './FeaturesSecTwo';

const FeaturesConfig = () => {
    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error, siteConfigData } = useSelector((state) => state.siteConfig);
    const [uploadedImages, setUploadedImages] = useState([]);


    useEffect(() => {
        setUploadedImages(siteConfigData?.featureImages);
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
            <ImagesUpload name={"featureImages"} logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={1} />
            <hr />
            <FeaturesSecOne logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={2} />
            <hr />
            <FeaturesSecTwo logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={3} />
            <hr />
        </div>
    )
}

export default FeaturesConfig