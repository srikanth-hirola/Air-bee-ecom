import React, { useState } from 'react'
import useImagesHandler from '../../../../hooks/Site-config/useImagesHandler';
import { DeleteImgConfirmModal } from '../../../../Pages/Shop/Gallery/Modal/DeleteImgConfirmModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ImagesUpload = ({ logoLoading, setLogoLoading, uploadedImages, name }) => {
    const { handleImageUploadAPI, handleLogoChange, handleRemoveImage } = useImagesHandler()
    const [allImages, setAllImages] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalDeleteId, setModalDeleteId] = useState('');



    const handleDeleteConfirmModel = (e, public_id) => {
        e.preventDefault();
        setModalShow(true);
        setModalDeleteId(public_id)
    }


    return (
        <>
            <div className='flex flex-wrap gap-3 my-4'>
                {uploadedImages?.length > 0 && uploadedImages.map((val, index) => (
                    <div className='w-[130px] h-[80px] rounded overflow-hidden object-contain group relative border-1'>
                        <button onClick={(e) => handleDeleteConfirmModel(e, val.public_id)} className=' hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full w-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]' >
                            <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
                        </button>
                        <img src={val?.url} alt='bannerImage' className='w-full h-full group-hover:opacity-20' />
                    </div>))}
            </div>

            <div>
                <input type='file' multiple onChange={(e) => handleLogoChange({ e, setAllImages })} />
                <div className='flex flex-wrap gap-3 my-4'>
                    {allImages?.length > 0 && allImages.map((val, index) => (
                        <div key={index} className='w-[130px] h-[80px] rounded overflow-hidden object-contain group relative border-1'>
                            <button onClick={(e) => handleRemoveImage({ e, index, allImages, setAllImages })} className=' hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full w-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]' >
                                <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
                            </button>
                            <img src={val} alt='bannerImage' className='w-full h-full group-hover:opacity-20' />
                        </div>
                    ))}
                </div>
                {logoLoading ? <button
                    className='w-[150px] h-[40px] rounded bg-green-500 text-white'>Loading...</button> : <button
                        className='w-[150px] h-[40px] rounded bg-green-500 text-white' onClick={() => handleImageUploadAPI({ allImages, name: name, setAllImages, setLogoLoading })}>Upload Images</button>}
            </div>
            <DeleteImgConfirmModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalDeleteId={modalDeleteId}
                setModalShow={setModalShow}
                objName={name}
            />
        </>
    )
}

export default ImagesUpload