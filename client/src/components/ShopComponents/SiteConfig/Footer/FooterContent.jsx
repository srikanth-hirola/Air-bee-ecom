import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';
import MainImage from '../Features.jsx/MainImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SelectContentImgModal } from '../modals/SelectContentImgModal';

const FooterContent = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const [curindex, setCurIndex] = useState(0);

    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setFooterContent(styles?.footerContent)
    }, [styles?.footerContent])


    const [footerContent, setFooterContent] = useState({})

    const socialIconsStructure = {
        url: ''
    }

    const appsStructure = {
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
                <h5 className='font-semibold'>Feature Section One</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, footerContent, "footerContent", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <MainImage title={"Logo"} featureSecOne={footerContent} logoLoading={logoLoading} setFeatureSecOne={setFooterContent} uploadedImages={uploadedImages} key={1} name={"logo"} />
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Summary</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={footerContent?.summary} name='summary' placeholder='Enter Summary' onChange={(e) => { handleChange({ value: e.target.value, key: 'summary', myState: footerContent, setMyState: setFooterContent }) }} />
                </div>

                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Social Icons</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: socialIconsStructure, state: footerContent, setState: setFooterContent, key: "socialIcons" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {footerContent?.socialIcons?.length > 0 &&
                        <div className='flex flex-wrap gap-3'>
                            {footerContent?.socialIcons?.map((achivement, i) => (
                                <div className='flex flex-col gap-2 items-center' key={i}>
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
                                                    <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "socialIcons", i) }}>
                                                        <FontAwesomeIcon icon={faUpload} />
                                                    </label>
                                                </div>
                                                {achivement?.image?.url &&
                                                    <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />
                                                }
                                            </>
                                        }
                                        <button onClick={() => handleRemoveFromArray({ index: i, state: footerContent, setState: setFooterContent, key: 'socialIcons' })} className='bg-red-200 p-2 rounded-tr rounded-br absolute rounded-tl-none  mb-[2px] cursor-pointer z-50' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                                    </div>
                                    <input className='border-1 rounded px-2 py-2 w-full' type='text' placeholder='Enter Feature Title' value={achivement?.url} onChange={(e) => handleChange({ value: e.target.value, key: 'socialIcons', myState: footerContent, setMyState: setFooterContent, index: i, arrObj: "url" })} />
                                </div>
                            ))}
                        </div>
                    }

                </div>
                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Applications</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: appsStructure, state: footerContent, setState: setFooterContent, key: "apps" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {footerContent?.apps?.length > 0 &&
                        <div className='flex flex-wrap gap-3'>
                            {footerContent?.apps?.map((achivement, i) => (
                                <div className='flex flex-col gap-2 items-center' key={i}>
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
                                                    <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "apps", i) }}>
                                                        <FontAwesomeIcon icon={faUpload} />
                                                    </label>
                                                </div>
                                                {achivement?.image?.url &&
                                                    <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />
                                                }
                                            </>
                                        }
                                        <button onClick={() => handleRemoveFromArray({ index: i, state: footerContent, setState: setFooterContent, key: 'apps' })} className='bg-red-200 p-2 rounded-tr rounded-br absolute rounded-tl-none  mb-[2px] cursor-pointer z-50' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                                    </div>
                                    <input className='border-1 rounded px-2 py-2 w-full' type='text' placeholder='Enter Feature Title' value={achivement?.url} onChange={(e) => handleChange({ value: e.target.value, key: 'apps', myState: footerContent, setMyState: setFooterContent, index: i, arrObj: "url" })} />
                                </div>
                            ))}
                        </div>
                    }

                </div>

                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Copyright</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={footerContent?.copyright} name='copyright' placeholder='Enter Copyright' onChange={(e) => { handleChange({ value: e.target.value, key: 'copyright', myState: footerContent, setMyState: setFooterContent }) }} />
                </div>
                <div className='my-4 flex w-full gap-3 flex-wrap'>
                    <div className='my-2 w-[48%]'>
                        <label className='font-semibold text-xs mb-2'>Credits Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={footerContent?.credits?.title} name='credits' placeholder='Enter credits title' onChange={(e) => { handleChange({ value: e.target.value, key: 'credits.title', myState: footerContent, setMyState: setFooterContent }) }} />
                    </div>
                    <div className='my-2 w-[48%]'>
                        <label className='font-semibold text-xs mb-2'>Credits URL</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={footerContent?.credits?.url} name='credits' placeholder='Enter credits url' onChange={(e) => { handleChange({ value: e.target.value, key: 'credits.url', myState: footerContent, setMyState: setFooterContent }) }} />
                    </div>
                </div>

            </div>
            <SelectContentImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setFooterContent} layout={footerContent} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} curindex={curindex} />

        </div>
    )
}

export default FooterContent