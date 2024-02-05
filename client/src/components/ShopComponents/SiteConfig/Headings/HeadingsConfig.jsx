import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import HeadingsContent from './HeadingsContent';

const HeadingsConfig = () => {

    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error } = useSelector((state) => state.siteConfig);


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
            <HeadingsContent logoLoading={logoLoading} setLogoLoading={setLogoLoading} key={2} />
            <hr />
        </div>
    )
}

export default HeadingsConfig