import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import ImagesUpload from '../About/ImagesUpload';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { FooterMappingContent } from './FooterMappingContent';
import FooterContent from './FooterContent';

const FooterConfig = () => {
    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error, siteConfigData } = useSelector((state) => state.siteConfig);
    const [uploadedImages, setUploadedImages] = useState([]);


    useEffect(() => {
        setUploadedImages(siteConfigData?.footerImages);
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
    const styles = StyleConfig()


    return (
        <div className='w-[90%] mx-auto'>
            <ImagesUpload name={"footerImages"} logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={1} />
            <hr />
            <FooterMappingContent logoLoading={logoLoading} styles={styles} setLogoLoading={setLogoLoading} />
            <hr />
            <FooterContent logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={2} />
            <hr />
        </div>
    )
}

export default FooterConfig