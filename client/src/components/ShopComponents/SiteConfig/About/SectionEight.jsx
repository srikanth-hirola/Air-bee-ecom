import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SelectContentImgModal } from '../modals/SelectContentImgModal';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const SectionEight = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const [curindex, setCurIndex] = useState(0);

    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        console.log(styles?.aboutUsSecEight)
        setAboutUsSecEight(styles?.aboutUsSecEight)
    }, [styles?.aboutUsSecEight])


    const [aboutUsSecEight, setAboutUsSecEight] = useState({})

    const clientsStructure = {
        public_id: '',
        url: ''
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
                <h5 className='font-semibold'>Section Eight</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, aboutUsSecEight, "aboutUsSecEight", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Tag Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecEight?.tagTitle} name='tagTitle' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'tagTitle', myState: aboutUsSecEight, setMyState: setAboutUsSecEight }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecEight?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: aboutUsSecEight, setMyState: setAboutUsSecEight }) }} />
                </div>
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Summary</label><br />
                    <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={aboutUsSecEight?.summary} name='title' placeholder='Enter Summary' onChange={(e) => { handleChange({ value: e.target.value, key: 'summary', myState: aboutUsSecEight, setMyState: setAboutUsSecEight }) }} />
                </div>
                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Clients</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: clientsStructure, state: aboutUsSecEight, setState: setAboutUsSecEight, key: "clients" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {aboutUsSecEight?.clients?.length > 0 &&
                        <div className='flex flex-wrap gap-3'>
                            {aboutUsSecEight?.clients?.map((achivement, i) => (
                                <div key={i} className='flex justify-between items-start h-[100px] w-[180px] relative group border-1 rounded'>

                                    {logoLoading ? <>
                                        <p className='absolute inset-0 flex justify-center items-center '>Loading...</p>
                                        {achivement?.image?.url && <img src={achivement?.image?.url} alt='icon' className='w-full h-full opacity-10 ' />}</>
                                        :
                                        <>
                                            <div className="images-delete-btn hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]">
                                                <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "clients", i) }}>
                                                    <FontAwesomeIcon icon={faUpload} />
                                                </label>
                                            </div>
                                            {achivement?.image?.url && <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />}
                                        </>}
                                    <button onClick={() => handleRemoveFromArray({ index: i, state: aboutUsSecEight, setState: setAboutUsSecEight, key: 'clients' })} className='bg-red-200 p-2 rounded-tr rounded-br absolute rounded-tl-none  mb-[2px] cursor-pointer z-50' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                                </div>
                            ))}
                        </div>
                    }

                </div>

            </div>
            <SelectContentImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setAboutUsSecEight} layout={aboutUsSecEight} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} curindex={curindex} />

        </div>
    )
}

export default SectionEight