import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { StyleConfig } from '../../../utils/StyleConfig';
import { server } from '../../../server';
import toast from 'react-hot-toast';
import { getAllSiteConfig } from '../../../redux/actions/siteConfig';
import { DeleteImgConfirmModal } from '../../../Pages/Shop/Gallery/Modal/DeleteImgConfirmModal';

export const ProductGallery = () => {
    const [logoLoading, setLogoLoading] = useState(false)

    const [productImagesGallery, setProductImagesGallery] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalDeleteId, setModalDeleteId] = useState('');
    const styles = StyleConfig();

    const dispatch = useDispatch();

    useEffect(() => {
        setUploadedImages(styles?.productImagesGallery)
    }, [styles?.productImagesGallery])

    const handleLogoChange = (e) => {
        const files = e.target.files;
        const updatedState = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result;
                    updatedState.push(base64Image);

                    if (updatedState.length === files.length) {
                        setProductImagesGallery(updatedState);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const handleImageUploadAPI = async () => {
        if (productImagesGallery.length > 0) {
            try {
                setLogoLoading(true)
                await axios.put(`${server}/site/site-config-imgs-upload`, { allImages: productImagesGallery, name: 'productImagesGallery' })
                toast.success("Uploaded Image Successfully")
                setProductImagesGallery([])
                setLogoLoading(false);
                dispatch(getAllSiteConfig())
            } catch (error) {
                setLogoLoading(false)
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("No Image is selected to upload")
        }
    }

    const handleRemoveImage = (e, index) => {
        e.preventDefault();
        let updatedState = [...productImagesGallery];
        updatedState = updatedState.filter((val, index1) => index1 !== index)
        setProductImagesGallery(updatedState)
    }

    const handleDeleteConfirmModel = (e, public_id) => {
        e.preventDefault();
        setModalShow(true);
        setModalDeleteId(public_id)
    }

    return (
        <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center outer1-div" >
            <div className="w-[97%] flex justify-center border-1 rounded h-fit" >
                <div className='w-full px-8 py-4 '>

                    <div>
                        <input type='file' multiple onChange={(e) => handleLogoChange(e)} />
                        <div className='flex flex-wrap gap-3 my-4'>
                            {productImagesGallery?.length > 0 && productImagesGallery.map((val, index) => (
                                <div className='w-[130px] h-[80px] rounded overflow-hidden object-contain group relative border-1'>
                                    <button onClick={(e) => handleRemoveImage(e, index)} className=' hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full w-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]' >
                                        <i class="fa-solid fa-trash fa-1x"></i>
                                    </button>
                                    <img src={val} alt='bannerImage' className='w-full h-full group-hover:opacity-20' />
                                </div>
                            ))}
                        </div>
                        {logoLoading ? <button style={{ background: styles?.mainColor?.toggleBtnMain ? styles?.mainColor?.mainColorPicker : styles?.mainColor?.mainColor, color: styles?.fontColor?.toggleBtnFont ? styles?.fontColor?.fontColorPicker : styles?.fontColor?.fontColor }} className='w-[150px] h-[40px] rounded'>Loading...</button> : <button style={{ background: styles?.mainColor?.toggleBtnMain ? styles?.mainColor?.mainColorPicker : styles?.mainColor?.mainColor, color: styles?.fontColor?.toggleBtnFont ? styles?.fontColor?.fontColorPicker : styles?.fontColor?.fontColor }} className='w-[150px] h-[40px] rounded' onClick={handleImageUploadAPI}>Upload Images</button>}
                    </div>

                    <div className='flex flex-wrap gap-3 my-4'>
                        {uploadedImages?.length > 0 && uploadedImages.map((val, index) => (
                            <div className='w-[130px] h-[80px] rounded overflow-hidden object-contain group relative border-1'>
                                <button onClick={(e) => handleDeleteConfirmModel(e, val.public_id)} className=' hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full w-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]' >
                                    <i class="fa-solid fa-trash fa-1x"></i>
                                </button>
                                <img src={val?.url} alt='bannerImage' className='w-full h-full group-hover:opacity-20' />
                            </div>))}
                    </div>


                    <DeleteImgConfirmModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        modalDeleteId={modalDeleteId}
                        setModalShow={setModalShow}
                        objName='productImagesGallery'
                    />
                </div>
            </div>
        </div>
    )
}
