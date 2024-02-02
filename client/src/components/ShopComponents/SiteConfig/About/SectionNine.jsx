import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const SectionNine = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange();
    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setAboutUsSecNine(styles?.aboutUsSecNine)
    }, [styles?.aboutUsSecNine])

    const [aboutUsSecNine, setAboutUsSecNine] = useState({})

    const faqStructure = {
        title: '',
        summary: ''
    }



    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Section Nine</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, aboutUsSecNine, "aboutUsSecNine", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Tag Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecNine?.tagTitle} name='tagTitle' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'tagTitle', myState: aboutUsSecNine, setMyState: setAboutUsSecNine }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecNine?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: aboutUsSecNine, setMyState: setAboutUsSecNine }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Summary</label><br />
                    <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecNine?.summary} name='title' placeholder='Enter Summary' onChange={(e) => { handleChange({ value: e.target.value, key: 'summary', myState: aboutUsSecNine, setMyState: setAboutUsSecNine }) }} />
                </div>
                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Clients</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: faqStructure, state: aboutUsSecNine, setState: setAboutUsSecNine, key: "faqs" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {aboutUsSecNine?.faqs?.length > 0 &&
                        aboutUsSecNine?.faqs?.map((achivement, i) => (
                            <div key={i} className='flex justify-between items-end'>
                                <div className='w-[48%]'>
                                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                                    <input className='border-1 rounded px-2 py-2 w-full' value={achivement?.title} onChange={(e) => { handleChange({ value: e.target.value, key: 'faqs', myState: aboutUsSecNine, setMyState: setAboutUsSecNine, index: i, arrObj: "title" }) }} />
                                </div>
                                <div className='w-[48%]'>
                                    <label className='font-semibold text-xs mb-2'>Sub Title</label><br />
                                    <input className='border-1 rounded px-2 py-2 w-full' value={achivement?.summary} onChange={(e) => { handleChange({ value: e.target.value, key: 'faqs', myState: aboutUsSecNine, setMyState: setAboutUsSecNine, index: i, arrObj: "summary" }) }} />
                                </div>
                                <button onClick={() => handleRemoveFromArray({ index: i, state: aboutUsSecNine, setState: setAboutUsSecNine, key: 'faqs' })} className='bg-red-200 p-2 rounded mb-[2px] cursor-pointer' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                            </div>
                        ))}


                </div>

            </div>

        </div>
    )
}

export default SectionNine