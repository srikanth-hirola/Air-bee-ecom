import React, { useState } from 'react'
import ImageSelect from '../About/ImageSelect'
import { SelectImgModal } from '../modals/SelectImageModal'

const MainImage = ({ logoLoading, featureSecOne, uploadedImages, setFeatureSecOne, title, name }) => {

    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [modalLayoutName, setModalLaayoutName] = useState('');

    const handleSelectImgModal = (e, name) => {
        e.preventDefault();
        setSelectedModalShow(true);
        setModalLaayoutName(name);
    }

    return (
        <div className='my-2'>
            <label className='font-semibold text-xs mb-2'>{title}</label><br />
            <div className='w-[180px] h-[100px]'>
                <ImageSelect handleSelectImgModal={handleSelectImgModal} logoLoading={logoLoading} name={name} image={featureSecOne?.[name]?.image?.url} />
            </div>
            <SelectImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setFeatureSecOne} layout={featureSecOne} uploadedImages={uploadedImages} name={modalLayoutName} multiple={false} />

        </div>
    )
}

export default MainImage