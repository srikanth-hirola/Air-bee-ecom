import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SelectContentImgModal } from '../modals/SelectContentImgModal';

const IndustriesContent = ({ uploadedImages, logoLoading, setLogoLoading }) => {

    const { handleChange } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const [curindex, setCurIndex] = useState(0);


    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setIndustriesContent(styles?.industriesContent)
    }, [styles?.industriesContent])


    const [industriesContent, setIndustriesContent] = useState({})

    const industriesStructure = {
        title: '',
    }

    const handleSelectImgModal = (e, name, index) => {
        e.preventDefault();
        setSelectedModalShow(true);
        setModalLaayoutName(name);
        setCurIndex(index)
    }

    const handleAddToArray = ({ structure, state, setState }) => {
        const updatedState = JSON.parse(JSON.stringify(state));
        updatedState?.industries?.push(structure)
        updatedState?.icons?.push({})
        setState(updatedState)
    }

    const handleRemoveFromArray = ({ index, state, setState }) => {
        const updatedState = JSON.parse(JSON.stringify(state));
        updatedState?.industries.splice(index, 1)
        updatedState?.icons.splice(index, 1)
        setState(updatedState)
    }


    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Form Section</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, industriesContent, "industriesContent", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Industries</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => {
                            handleAddToArray({ structure: industriesStructure, state: industriesContent, setState: setIndustriesContent, key: "industries" });
                        }} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {industriesContent?.industries?.length > 0 &&
                        <div className='flex flex-wrap gap-3 my-3'>
                            {industriesContent?.industries?.map((achivement, i) => (
                                <div className='flex flex-col gap-6 items-center border-1 p-2 rounded relative' key={i}>
                                    <div className='flex gap-2'>
                                        <div className='flex justify-between items-start h-[100px] w-[180px] relative group border-1 rounded'>

                                            {logoLoading ?
                                                <>
                                                    <p className='absolute inset-0 flex justify-center items-center '>Loading...</p>
                                                    {achivement?.image?.url &&
                                                        <img src={achivement?.image?.url} alt='icon' className='w-full h-full opacity-10 ' />
                                                    }
                                                </>
                                                :
                                                <>
                                                    <div className="images-delete-btn hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]">
                                                        <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "industries", i) }}>
                                                            <FontAwesomeIcon icon={faUpload} />
                                                        </label>
                                                    </div>
                                                    {achivement?.image?.url &&
                                                        <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />
                                                    }
                                                </>
                                            }

                                        </div>
                                        <div className='flex justify-between items-start h-[100px] w-[180px] relative group border-1 rounded'>

                                            {logoLoading ?
                                                <>
                                                    <p className='absolute inset-0 flex justify-center items-center '>Loading...</p>
                                                    {industriesContent?.icons[i]?.image?.url &&
                                                        <img src={industriesContent?.icons[i]?.image?.url} alt='icon' className='w-full h-full opacity-10 ' />
                                                    }
                                                </>
                                                :
                                                <>
                                                    <div className="images-delete-btn hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]">
                                                        <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "icons", i) }}>
                                                            <FontAwesomeIcon icon={faUpload} />
                                                        </label>
                                                    </div>
                                                    {industriesContent?.icons[i]?.image?.url &&
                                                        <img src={industriesContent?.icons[i]?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />
                                                    }
                                                </>
                                            }
                                        </div>
                                        <button onClick={() =>
                                            handleRemoveFromArray({ index: i, state: industriesContent, setState: setIndustriesContent, key: 'industries' })
                                        }
                                            className='bg-red-200 p-2 rounded-tr rounded-br absolute rounded-tl-none  mb-[2px] cursor-pointer z-50 top-0 left-0' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                                    </div>
                                    <input className='border-1 rounded px-2 py-2 w-full' type='text' placeholder='Enter Title' value={achivement?.title} onChange={(e) => handleChange({ value: e.target.value, key: 'industries', myState: industriesContent, setMyState: setIndustriesContent, index: i, arrObj: "title" })} />
                                </div>
                            ))}
                        </div>
                    }

                </div>
                <SelectContentImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setIndustriesContent} layout={industriesContent} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} curindex={curindex} />

            </div>

        </div>
    )
}

export default IndustriesContent