import React, { useEffect, useState } from 'react'
import MainImage from '../Features.jsx/MainImage';
import { StyleConfig } from '../../../../utils/StyleConfig';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';

const QuoteContent = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange } = useHandleChange()


    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setQuoteContent(styles?.quoteContent)
    }, [styles?.quoteContent])


    const [quoteContent, setQuoteContent] = useState({})




    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Form Section</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, quoteContent, "quoteContent", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <MainImage featureSecOne={quoteContent} logoLoading={logoLoading} setFeatureSecOne={setQuoteContent} uploadedImages={uploadedImages} key={1} title="Background Image" name={"BannerImage"} />
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={quoteContent?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: quoteContent, setMyState: setQuoteContent }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Sub Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={quoteContent?.subTitle} name='title' placeholder='Enter Sub Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'subTitle', myState: quoteContent, setMyState: setQuoteContent }) }} />
                </div>
                <div className='my-4'>
                    <label className='font-semibold text-xs mb-2'>Form</label><br />
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Heading</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={quoteContent?.form?.heading} name='form.heading' placeholder='Enter Form Heading' onChange={(e) => { handleChange({ value: e.target.value, key: 'form.heading', myState: quoteContent, setMyState: setQuoteContent }) }} />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Button Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={quoteContent?.form?.buttonTitle} name='form.buttonTitle' placeholder='Enter Button Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'form.buttonTitle', myState: quoteContent, setMyState: setQuoteContent }) }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default QuoteContent