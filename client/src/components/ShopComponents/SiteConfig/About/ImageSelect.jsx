import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const ImageSelect = ({ logoLoading, image, handleSelectImgModal, name }) => {

    return (
        <div className='border-1 rounded h-full w-full  group relative'>
            {logoLoading ? <>
                <p className='absolute inset-0 flex justify-center items-center '>Loading...</p>
                {image && <img src={image} alt='pic' className='w-full h-full opacity-10 ' />}</>
                :
                <>
                    <div className="images-delete-btn hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]">
                        <label className='rounded bg-blue-400 p-2' onClick={(e) => handleSelectImgModal(e, name)}>
                            <FontAwesomeIcon icon={faUpload} />
                        </label>
                    </div>
                    {image && <img src={image} alt='logo' className='w-full h-full group-hover:opacity-10 ' />}
                </>}
        </div>
    )
}

export default ImageSelect