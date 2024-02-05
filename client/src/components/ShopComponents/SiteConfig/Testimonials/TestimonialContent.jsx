import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SelectContentImgModal } from '../modals/SelectContentImgModal';
import MainImage from '../Features.jsx/MainImage';

const TestimonialContent = ({ uploadedImages, logoLoading, setLogoLoading }) => {

    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const [curindex, setCurIndex] = useState(0);


    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setTestimonialContent(styles?.testimonialContent)
    }, [styles?.testimonialContent])


    const [testimonialContent, setTestimonialContent] = useState({})

    const testimonialsStructure = {
        title: '',
        subTitle: '',
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
                <h5 className='font-semibold'>Form Section</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, testimonialContent, "testimonialContent", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <MainImage title={"Main Image"} featureSecOne={testimonialContent} logoLoading={logoLoading} setFeatureSecOne={setTestimonialContent} uploadedImages={uploadedImages} key={1} name={"MainImage"} />
                <MainImage title={"Background Image"} featureSecOne={testimonialContent} logoLoading={logoLoading} setFeatureSecOne={setTestimonialContent} uploadedImages={uploadedImages} key={1} name={"bgImage"} />
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Title</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={testimonialContent?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: testimonialContent, setMyState: setTestimonialContent }) }} />
                </div>
                <div className='my-2'>
                    <div className='flex justify-between'>
                        <label className='font-semibold text-xs mb-2'>Testimonials</label>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: testimonialsStructure, state: testimonialContent, setState: setTestimonialContent, key: "testimonials" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                    </div>
                    {testimonialContent?.testimonials?.length > 0 &&
                        <div className='flex flex-wrap gap-3'>
                            {testimonialContent?.testimonials?.map((achivement, i) => (
                                <div className='flex flex-col gap-2 items-center w-full' key={i}>
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
                                                    <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "testimonials", i) }}>
                                                        <FontAwesomeIcon icon={faUpload} />
                                                    </label>
                                                </div>
                                                {achivement?.image?.url &&
                                                    <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />
                                                }
                                            </>
                                        }
                                        <button onClick={() => handleRemoveFromArray({ index: i, state: testimonialContent, setState: setTestimonialContent, key: 'testimonials' })} className='bg-red-200 p-2 rounded-tr rounded-br absolute rounded-tl-none  mb-[2px] cursor-pointer z-50' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                                    </div>
                                    <input className='border-1 rounded px-2 py-2 w-full' type='text' placeholder='Enter Title' value={achivement?.title} onChange={(e) => handleChange({ value: e.target.value, key: 'testimonials', myState: testimonialContent, setMyState: setTestimonialContent, index: i, arrObj: "title" })} />
                                    <input className='border-1 rounded px-2 py-2 w-full' type='text' placeholder='Enter Sub Title' value={achivement?.subTitle} onChange={(e) => handleChange({ value: e.target.value, key: 'testimonials', myState: testimonialContent, setMyState: setTestimonialContent, index: i, arrObj: "subTitle" })} />
                                    <textarea className='border-1 rounded px-2 py-2 w-full' type='text' placeholder='Enter Summary' value={achivement?.summary} onChange={(e) => handleChange({ value: e.target.value, key: 'testimonials', myState: testimonialContent, setMyState: setTestimonialContent, index: i, arrObj: "summary" })} />
                                    <hr />
                                </div>
                            ))}
                        </div>
                    }

                </div>
                <SelectContentImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setTestimonialContent} layout={testimonialContent} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} curindex={curindex} />

            </div>

        </div>
    )
}

export default TestimonialContent