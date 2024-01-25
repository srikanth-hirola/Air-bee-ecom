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
                        <button className="varient-btn cat-btn1 cat-btn5" onClick={(e) => handleRemoveContent(e, index)}>Remove</button>
                        {/* <button className='bg-red-200  px-2 rounded' onClick={(e) => handleRemoveContent(e, index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 60 60" viewBox="0 0 60 60" id="delete" width={30} height={30}><path d="M18.3,56h23.6c2.7,0,4.8-2.2,4.8-4.8V18.7h2.1c0.6,0,1-0.4,1-1v-2.3c0-2.1-1.7-3.7-3.7-3.7h-8.5V9.1c0-1.7-1.4-3.1-3.1-3.1
	h-8.9c-1.7,0-3.1,1.4-3.1,3.1v2.6H14c-2.1,0-3.7,1.7-3.7,3.7v2.3c0,0.6,0.4,1,1,1h2.1v32.5C13.4,53.8,15.6,56,18.3,56z M44.7,51.2
	c0,1.6-1.3,2.8-2.8,2.8H18.3c-1.6,0-2.8-1.3-2.8-2.8V18.7h29.3V51.2z M24.5,9.1C24.5,8.5,25,8,25.6,8h8.9c0.6,0,1.1,0.5,1.1,1.1v2.6
	h-11V9.1z M12.3,15.4c0-1,0.8-1.7,1.7-1.7h32c1,0,1.7,0.8,1.7,1.7v1.3H12.3V15.4z"></path><path d="M37.9 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C36.9 48.8 37.4 49.2 37.9 49.2zM30.1 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C29.1 48.8 29.5 49.2 30.1 49.2zM22.2 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C21.2 48.8 21.6 49.2 22.2 49.2z"></path></svg>
                        </button> */}
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
            <button onClick={handleAddDescription} className='py-2 px-3 rounded bg-blue-500 text-light' style={{ background: styles?.mainColor, color: styles?.fontColor }}>Add Description</button>
            <SelectImgModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} setlayout={setProductDetails} layout={productDetails} uploadedImages={styles?.productImagesGallery} name={modalLayoutName} multiple={false} contentIndex={contentIndex} />
        </div>}
        
    </>
    )
}
