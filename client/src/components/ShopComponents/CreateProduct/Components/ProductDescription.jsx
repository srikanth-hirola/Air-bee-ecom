import React, { useState } from 'react'
import { StyleConfig } from '../../../../utils/StyleConfig';
import { SelectImgModal } from '../Modal/SelectImgModal';

export const ProductDescription = ({ productDetails, setProductDetails }) => {
    const styles = StyleConfig();

    console.log(productDetails)

    const [selectedModalShow, setSelectedModalShow] = useState(false)
    const [modalLayoutName, setModalLaayoutName] = useState('');

    const [contentIndex, setContentIndex] = useState(0);

    const handleSelectImgModal = (e, name, index) => {
        e.preventDefault();
        setModalLaayoutName(name);
        setContentIndex(index)
        setSelectedModalShow(true);
    }

    const handleAddDescription = (e) => {
        e.preventDefault();
        let updatedState = JSON.parse(JSON.stringify(productDetails));
        updatedState.push({
            img: {
                public_id: '',
                url: ''
            },
            content: {
                heading: '',
                description: ''
            }
        })
        setProductDetails(updatedState)
    }


    const handleContentChange = (e, index) => {
        const { name, value } = e.target;
        let updatedState = JSON.parse(JSON.stringify(productDetails));
        updatedState[index].content[name] = value
        setProductDetails(updatedState)
    }


    const handleRemoveImage = (e, index) => {
        e.preventDefault();
        let updatedState = [...productDetails];
        updatedState[index] = {
            ...updatedState[index], img: {
                public_id: '',
                url: ''
            }
        }
        setProductDetails(updatedState)
    }

    const handleRemoveContent = (e, index) => {
        e.preventDefault();
        let updatedState = JSON.parse(JSON.stringify(productDetails));
        updatedState = updatedState.filter((cot, index1) => index1 !== index)
        setProductDetails(updatedState)
    }

    return (<>
        {styles?.productImagesGallery && <div>
            {productDetails?.length > 0 && productDetails?.map((description, index) => (
                <div key={index} className='my-3'>
                    <div className='flex justify-between'>
                        <label className='rounded bg-blue-400 p-2 text-white cursor-pointer' onClick={(e) => handleSelectImgModal(e, "img", index)}>
                            <span className='pr-2'>Upload Image</span><i class="fa-solid fa-upload fa-1x"></i>
                        </label>
                        <button className='bg-red-300 py-1 px-2 rounded' onClick={(e) => handleRemoveContent(e, index)}>
                            <i class="fa-solid fa-trash fa-1x"></i>
                        </button>
                    </div>

                    {description?.img?.url && <div className='w-[130px] h-[80px] rounded overflow-hidden object-contain group relative border-1 my-2'>
                        <button onClick={(e) => handleRemoveImage(e, index)} className=' hidden group-hover:flex absolute inset-0 space-x-3 z-50 group-hover:h-full w-full justify-center items-center transition-transform transform-gpu filter-blur-[5px]' >
                            <i class="fa-solid fa-trash fa-1x"></i>
                        </button>
                        <img src={description?.img?.url} alt='bannerImage' className='w-full h-full group-hover:opacity-20 ' />
                    </div>}
                    <input type='text' onChange={(e) => handleContentChange(e, index)} placeholder='Enter Product Description Title' name='heading' value={description?.content?.heading} className='border-1 rounded w-full my-2 p-2' /><br />
                    <textarea onChange={(e) => handleContentChange(e, index)} name='description' placeholder='Enter Title Description' value={description?.content?.description} className='border-1 rounded w-full my-2 h-[100px] p-2'></textarea>
                </div>
            ))}
            <button onClick={handleAddDescription} className='py-2 px-3 rounded' style={{ background: styles?.mainColor, color: styles?.fontColor }}>Add Description</button>
            <SelectImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setProductDetails} layout={productDetails} uploadedImages={styles?.productImagesGallery} name={modalLayoutName} multiple={false} contentIndex={contentIndex} />
        </div>}
    </>
    )
}
