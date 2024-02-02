import React, { useEffect, useState } from 'react'
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import { SelectContentImgModal } from '../modals/SelectContentImgModal';
import toast from 'react-hot-toast';
import BannerCornerContent from './BannerCornerContent';
import BannerTextContent from './BannerTextContent';


const MainBanner = ({ uploadedImages, logoLoading, setLogoLoading }) => {

    // const { handleChange } = useHandleChange()
    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');
    const { hanldeSubmit } = useSaveLayoutContent()
    const [curindex, setCurIndex] = useState(0);
    const styles = StyleConfig();
    const { handleChange, handleAddToArray, handleRemoveFromArray } = useHandleChange()


    useEffect(() => {
        setMainBannerContent(styles?.MainBannerContent)
    }, [styles?.MainBannerContent])

    const [MainBannerContent, setMainBannerContent] = useState({})

    const bannersStructure = {
    }

    const handleSelectImgModal = (e, name, index) => {
        e.preventDefault();
        setSelectedModalShow(true);
        setModalLaayoutName(name);
        setCurIndex(index)
    }

    const handleImageUpload = async (e, layoutContent, layoutName, setLogoLoading) => {
        e.preventDefault();
        if (MainBannerContent?.banners?.length === 0) {
            toast.error("No Image File is Uploaded")
            return
        }
        let val = ValidateImagesUpload(MainBannerContent?.banners);
        if (!val) {
            await hanldeSubmit(e, layoutContent, layoutName, setLogoLoading)
        }
    }

    function ValidateImagesUpload(images) {
        let ver = false;
        for (let i = 0; i < images?.length; i++) {
            if (!images[i]?.image?.url) {
                console.log(images[i])
                toast.error(`No Image File uploaded for position ${i + 1}`)
                ver = true;
            }
        }
        return ver
    }


    return (
        <>
            <div className='my-4'>
                <div className='flex justify-between'>
                    <label className='font-semibold text-xs mb-2'>Banner Slides</label>
                    <FontAwesomeIcon icon={faPlus} onClick={() => handleAddToArray({ structure: bannersStructure, state: MainBannerContent, setState: setMainBannerContent, key: "banners" })} className='text-blue-500 p-2 rounded-full border-2 cursor-pointer border-blue-500' />
                </div>
                {MainBannerContent?.banners?.length > 0 &&
                    <div className='flex flex-wrap gap-3'>
                        {MainBannerContent?.banners?.map((achivement, i) => (
                            <div key={i} className='flex justify-between items-start h-[100px] w-[180px] relative group border-1 rounded'>

                                {logoLoading ? <>
                                    <p className='absolute inset-0 flex justify-center items-center '>Loading...</p>
                                    {achivement?.image?.url && <img src={achivement?.image?.url} alt='icon' className='w-full h-full opacity-10 ' />}</>
                                    :
                                    <>
                                        <div className="images-delete-btn hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]">
                                            <label className='rounded bg-blue-400 p-2' onClick={(e) => { handleSelectImgModal(e, "banners", i) }}>
                                                <FontAwesomeIcon icon={faUpload} />
                                            </label>
                                        </div>
                                        {achivement?.image?.url && <img src={achivement?.image?.url} alt='icon' className='w-full h-full group-hover:opacity-10 object-cover' />}
                                    </>}
                                <button onClick={() => handleRemoveFromArray({ index: i, state: MainBannerContent, setState: setMainBannerContent, key: 'banners' })} className='bg-red-200 p-2 rounded-tr rounded-br absolute rounded-tl-none  mb-[2px] cursor-pointer z-50' ><FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /></button>
                            </div>
                        ))}
                    </div>
                }
                <SelectContentImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setMainBannerContent} layout={MainBannerContent} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} curindex={curindex} />
            </div>
            <hr />
            <BannerTextContent MainBannerContent={MainBannerContent} setMainBannerContent={setMainBannerContent} handleChange={handleChange} key={1} />
            <BannerCornerContent MainBannerContent={MainBannerContent} setMainBannerContent={setMainBannerContent} handleChange={handleChange} key={2} />
            {logoLoading ?
                <button className='bg-green-500 text-white rounded w-[200px] py-2' >{logoLoading ? "Loading..." : "Update"}</button>
                : <button className='bg-green-500 text-white rounded w-[200px] py-2' onClick={(e) => handleImageUpload(e, MainBannerContent, "MainBannerContent", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
        </>
    )
}

export default MainBanner