import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const NewsLetterConfig = () => {

    const [logoLoading, setLogoLoading] = useState(false);
    const { success, error } = useSelector((state) => state.siteConfig);
    const { handleChange } = useHandleChange()
    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();

    useEffect(() => {
        setNewsLetter(styles?.newsLetter)
    }, [styles?.newsLetter,])

    const [newsLetter, setNewsLetter] = useState({})


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
                    <h5 className='font-semibold'>News Letter Section</h5>
                    {logoLoading ?
                        <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                        : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, newsLetter, "newsLetter", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
                </div>
                <div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={newsLetter?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: newsLetter, setMyState: setNewsLetter }) }} />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Sub Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={newsLetter?.subTitle} name='subTitle' placeholder='Enter Sub Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'subTitle', myState: newsLetter, setMyState: setNewsLetter }) }} />
                    </div>
                    <div className='my-2 pb-4'>
                        <label className='font-semibold text-xs mb-2'>Button Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={newsLetter?.btnTitle} name='btnTitle' placeholder='Enter button Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'btnTitle', myState: newsLetter, setMyState: setNewsLetter }) }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsLetterConfig