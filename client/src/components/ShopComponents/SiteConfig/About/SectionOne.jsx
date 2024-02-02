import React, { useEffect, useState } from 'react'
import { SelectImgModal } from '../modals/SelectImageModal';
import ImageSelect from './ImageSelect';
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const SectionOne = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setAboutUsSecOne(styles?.aboutUsSecOne)
    }, [styles?.aboutUsSecOne])

    const [aboutUsSecOne, setAboutUsSecOne] = useState({})



    const handleSelectImgModal = (e, name) => {
        e.preventDefault();
        setSelectedModalShow(true);
        setModalLaayoutName(name);
    }




    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Section One</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, aboutUsSecOne, "aboutUsSecOne", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Tag Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecOne?.tagTitle} name='tagTitle' placeholder='Enter Tag Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'tagTitle', myState: aboutUsSecOne, setMyState: setAboutUsSecOne }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Tag Image</label><br />
                    <div className='w-[180px] h-[100px]'>
                        <ImageSelect handleSelectImgModal={handleSelectImgModal} logoLoading={logoLoading} name={"tagImage"} image={aboutUsSecOne?.tagImage?.image?.url} />
                    </div>
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecOne?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: aboutUsSecOne, setMyState: setAboutUsSecOne }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Summary</label><br />
                    <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecOne?.summary} name='title' placeholder='Enter Summary' onChange={(e) => { handleChange({ value: e.target.value, key: 'summary', myState: aboutUsSecOne, setMyState: setAboutUsSecOne }) }} />
                </div>
                <div className='my-2 flex justify-between'>
                    <div className='w-[48%]'>
                        <label className='font-semibold text-xs mb-2 '>Button Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecOne?.button?.title} name='button.title' placeholder='Enter Button Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'button.title', myState: aboutUsSecOne, setMyState: setAboutUsSecOne }) }} />
                    </div>
                    <div className='w-[48%]'>
                        <label className='font-semibold text-xs mb-2 '>Button URL</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecOne?.button?.link} name='button.link' placeholder='Enter Button URL' onChange={(e) => { handleChange({ value: e.target.value, key: 'button.link', myState: aboutUsSecOne, setMyState: setAboutUsSecOne }) }} />
                    </div>
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Banner Image</label><br />
                    <div className='w-[180px] h-[100px]'>
                        <ImageSelect handleSelectImgModal={handleSelectImgModal} logoLoading={logoLoading} name={"BannerImage"} image={aboutUsSecOne?.BannerImage?.image?.url} />
                    </div>
                </div>
            </div>
            <SelectImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setAboutUsSecOne} layout={aboutUsSecOne} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} />
        </div>
    )
}

export default SectionOne