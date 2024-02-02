import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const ContactContent = () => {

    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error } = useSelector((state) => state.siteConfig);
    const { handleChange } = useHandleChange
    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();

    useEffect(() => {
        setContactSecOne(styles?.contactSecOne)
    }, [styles?.contactSecOne])


    const [contactSecOne, setContactSecOne] = useState({})

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
            <div className='my-10'>
                <div className='flex justify-between'>
                    <h5 className='font-semibold'>Form Section</h5>
                    {logoLoading ?
                        <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                        : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, contactSecOne, "contactSecOne", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
                </div>
                <div className='pb-4'>
                    <div className='my-4'>
                        <lable className='font-semibold'>Title <span className="text-red-500">*</span></lable><br />
                        <input type='text' name='title' className='border-1 rounded px-2 py-2 mt-2' value={contactSecOne?.title} onChange={handleChange} />
                    </div>
                    <div className='my-4'>
                        <lable className='font-semibold'>Summary <span className="text-red-500">*</span></lable><br />
                        <input type='text' name='summary' className='border-1 rounded px-2 py-2 mt-2' value={contactSecOne?.summary} onChange={handleChange} />
                    </div>
                    <div className='my-4'>
                        <lable className='font-semibold'>Button Title <span className="text-red-500">*</span></lable><br />
                        <input type='text' name='btnTitle' className='border-1 rounded px-2 py-2 mt-2' value={contactSecOne?.btnTitle} onChange={handleChange} required />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContactContent