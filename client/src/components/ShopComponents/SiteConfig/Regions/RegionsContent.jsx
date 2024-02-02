import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { SelectContentImgModal } from '../modals/SelectContentImgModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

const RegionsContent = ({ uploadedImages, logoLoading, setLogoLoading }) => {

    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const [curindex, setCurIndex] = useState(0);


    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setRegionsContent(styles?.regionsContent)
    }, [styles?.regionsContent])


    const [regionsContent, setRegionsContent] = useState({})

    const regionsStructure = {
        title: '',
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
                <h5 className='font-semibold'>Form Section</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, regionsContent, "regionsContent", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>

                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Regions</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: regionsStructure, state: regionsContent, setState: setRegionsContent, key: "regions" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {regionsContent?.regions?.length > 0 &&
                        <div className='flex flex-wrap gap-3'>
                            {regionsContent?.regions?.map((achivement, i) => (
                                <div className='flex flex-col gap-2 items-center ' key={i}>
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
                                                    <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "regions", i) }}>
                                                        <FontAwesomeIcon icon={faUpload} />
                                                    </label>
                                                </div>
                                                {achivement?.image?.url &&
                                                    <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />
                                                }
                                            </>
                                        }
                                        <button onClick={() => handleRemoveFromArray({ index: i, state: regionsContent, setState: setRegionsContent, key: 'regions' })} className='bg-red-200 p-2 rounded-tr rounded-br absolute rounded-tl-none  mb-[2px] cursor-pointer z-50' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                                    </div>
                                    <input className='border-1 rounded px-2 py-2 w-full' type='text' placeholder='Enter Title' value={achivement?.title} onChange={(e) => handleChange({ value: e.target.value, key: 'regions', myState: regionsContent, setMyState: setRegionsContent, index: i, arrObj: "title" })} />
                                    <hr />
                                </div>
                            ))}
                        </div>
                    }

                </div>
                <SelectContentImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setRegionsContent} layout={regionsContent} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} curindex={curindex} />

            </div>

        </div>
    )
}

export default RegionsContent