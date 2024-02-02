import React, { useEffect, useState } from 'react'
import { SelectImgModal } from '../modals/SelectImageModal';
import ImageSelect from './ImageSelect';
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const SectionThree = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');

    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setAboutUsSecThree(styles?.aboutUsSecThree)
    }, [styles?.aboutUsSecThree])

    const [aboutUsSecThree, setAboutUsSecThree] = useState({})

    const handleSelectImgModal = (e, name) => {
        e.preventDefault();
        setSelectedModalShow(true);
        setModalLaayoutName(name);
    }


    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Section Three</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, aboutUsSecThree, "aboutUsSecThree", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecThree?.tagTitle} name='tagTitle' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'tagTitle', myState: aboutUsSecThree, setMyState: setAboutUsSecThree }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Tag Image</label><br />
                    <div className='w-[180px] h-[100px]'>
                        <ImageSelect handleSelectImgModal={handleSelectImgModal} logoLoading={logoLoading} name={"tagImage"} image={aboutUsSecThree?.tagImage?.image?.url} />
                    </div>
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Summary One</label><br />
                    <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecThree?.summary1} name='title' placeholder='Enter Summary One' onChange={(e) => { handleChange({ value: e.target.value, key: 'summary1', myState: aboutUsSecThree, setMyState: setAboutUsSecThree }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Summary Two</label><br />
                    <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecThree?.summary2} name='title' placeholder='Enter Summary Two' onChange={(e) => { handleChange({ value: e.target.value, key: 'summary2', myState: aboutUsSecThree, setMyState: setAboutUsSecThree }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Banner Image</label><br />
                    <div className='w-[180px] h-[100px]'>
                        <ImageSelect handleSelectImgModal={handleSelectImgModal} logoLoading={logoLoading} name={"BannerImage"} image={aboutUsSecThree?.BannerImage?.image?.url} />
                    </div>
                </div>
            </div>
            <SelectImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setAboutUsSecThree} layout={aboutUsSecThree} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} />
        </div>
    )
}

export default SectionThree