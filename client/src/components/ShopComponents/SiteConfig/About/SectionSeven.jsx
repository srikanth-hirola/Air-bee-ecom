import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const SectionSeven = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange()
    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setAboutUsSecSeven(styles?.aboutUsSecSeven)
    }, [styles?.aboutUsSecSeven])

    const [aboutUsSecSeven, setAboutUsSecSeven] = useState({})

    const achivementStructure = {
        title: '',
        subTitle: ''
    }

    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Section Seven</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, aboutUsSecSeven, "aboutUsSecSeven", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Tag Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecSeven?.tagTitle} name='tagTitle' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'tagTitle', myState: aboutUsSecSeven, setMyState: setAboutUsSecSeven }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecSeven?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: aboutUsSecSeven, setMyState: setAboutUsSecSeven }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Summary</label><br />
                    <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecSeven?.summary} name='title' placeholder='Enter Summary' onChange={(e) => { handleChange({ value: e.target.value, key: 'summary', myState: aboutUsSecSeven, setMyState: setAboutUsSecSeven }) }} />
                </div>
                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Achivements</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: achivementStructure, state: aboutUsSecSeven, setState: setAboutUsSecSeven, key: "achivements" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {aboutUsSecSeven?.achivements?.length > 0 &&
                        aboutUsSecSeven?.achivements?.map((achivement, i) => (
                            <div key={i} className='flex justify-between items-end'>
                                <div className='w-[48%]'>
                                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                                    <input className='border-1 rounded px-2 py-2 w-full' value={achivement?.title} onChange={(e) => { handleChange({ value: e.target.value, key: 'achivements', myState: aboutUsSecSeven, setMyState: setAboutUsSecSeven, index: i, arrObj: "title" }) }} />
                                </div>
                                <div className='w-[48%]'>
                                    <label className='font-semibold text-xs mb-2'>Sub Title</label><br />
                                    <input className='border-1 rounded px-2 py-2 w-full' value={achivement?.subTitle} onChange={(e) => { handleChange({ value: e.target.value, key: 'achivements', myState: aboutUsSecSeven, setMyState: setAboutUsSecSeven, index: i, arrObj: "subTitle" }) }} />
                                </div>
                                <button onClick={() => handleRemoveFromArray({ index: i, state: aboutUsSecSeven, setState: setAboutUsSecSeven, key: 'achivements' })} className='bg-red-200 p-2 rounded mb-[2px] cursor-pointer' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                            </div>
                        ))}
                </div>

            </div>
        </div>
    )
}

export default SectionSeven