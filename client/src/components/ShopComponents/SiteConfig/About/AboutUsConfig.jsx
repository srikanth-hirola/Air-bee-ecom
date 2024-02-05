import React, { useEffect, useState } from 'react'
import SectionOne from './SectionOne'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import { getAllCategories } from '../../../../redux/actions/category';
import ImagesUpload from './ImagesUpload';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import SectionSeven from './SectionSeven';
import SectionEight from './SectionEight';
import SectionNine from './SectionNine';
import SectionTen from './SectionTen';

const AboutUsConfig = () => {
    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error, siteConfigData } = useSelector((state) => state.siteConfig);
    const [uploadedImages, setUploadedImages] = useState([]);


    useEffect(() => {
        setUploadedImages(siteConfigData?.aboutUsImages);
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
            <ImagesUpload name={"aboutUsImages"} logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={1} />
            <hr />
            <SectionOne logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={2} />
            <hr />
            <SectionTwo logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={3} />
            <hr />
            <SectionThree logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={4} />
            <hr />
            <SectionFour logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={5} />
            <hr />
            <SectionFive logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={6} />
            <hr />
            <SectionSix logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={7} />
            <hr />
            <SectionSeven logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={8} />
            <hr />
            <SectionEight logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={9} />
            <hr />
            <SectionNine logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={10} />
            <hr />
            <SectionTen logoLoading={logoLoading} setLogoLoading={setLogoLoading} uploadedImages={uploadedImages} key={11} />
            <hr />
        </div>
    )
}

export default AboutUsConfig