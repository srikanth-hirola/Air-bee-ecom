import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SelectContentImgModal } from '../modals/SelectContentImgModal';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const SectionTen = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const [curindex, setCurIndex] = useState(0);

    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setAboutUsSecTen(styles?.aboutUsSecTen)
    }, [styles?.aboutUsSecTen])

    const [aboutUsSecTen, setAboutUsSecTen] = useState({})

    const featuresStructure = {
        image: {
            public_id: '',
            url: ''
        },
        title: '',
        summary: ''
    }

    const handleSelectImgModal = (e, name, index) => {
        e.preventDefault();
        setSelectedModalShow(true);
        setModalLaayoutName(name);
        setCurIndex(index)
    }



    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Section Ten</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, aboutUsSecTen, "aboutUsSecTen", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Features</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: featuresStructure, state: aboutUsSecTen, setState: setAboutUsSecTen, key: "features" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {aboutUsSecTen?.features?.length > 0 &&
                        <div className='flex flex-wrap gap-3'>
                            {aboutUsSecTen?.features?.map((achivement, i) => (
                                <div className='relative border-1 rounded p-2 flex flex-col items-center gap-3 w-[23%]' key={i}>
                                    <button onClick={() => handleRemoveFromArray({ index: i, state: aboutUsSecTen, setState: setAboutUsSecTen, key: 'features' })} className='bg-red-200 p-2  rounded-br absolute left-0 top-0 rounded-tl-none  mb-[2px] cursor-pointer z-50' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                                    <div className='flex relative justify-between items-start h-[60px] w-[60px]  group border-1 rounded-full overflow-hidden mt-3'>
                                        {logoLoading ? <>
                                            <p className='absolute inset-0 flex justify-center items-center '>Loading...</p>
                                            {achivement?.image?.url && <img src={achivement?.image?.url} alt='icon' className='w-full h-full opacity-10 ' />}</>
                                            :
                                            <>
                                                <div className="images-delete-btn hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]">
                                                    <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "features", i) }}>
                                                        <FontAwesomeIcon icon={faUpload} />
                                                    </label>
                                                </div>
                                                {achivement?.image?.url && <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />}
                                            </>}

                                    </div>
                                    <div className='flex flex-col gap-3 w-full'>
                                        <input className='border-1 rounded px-2 py-2 w-full' ype='text' value={achivement?.title} name='features' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'features', myState: aboutUsSecTen, setMyState: setAboutUsSecTen, index: i, arrObj: 'title' }) }} />
                                        <input className='border-1 rounded px-2 py-2 w-full' ype='text' value={achivement?.summary} name='features' placeholder='Enter Summary' onChange={(e) => { handleChange({ value: e.target.value, key: 'features', myState: aboutUsSecTen, setMyState: setAboutUsSecTen, index: i, arrObj: 'summary' }) }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                </div>

            </div>
            <SelectContentImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setAboutUsSecTen} layout={aboutUsSecTen} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} curindex={curindex} />

        </div>
    )
}

export default SectionTen