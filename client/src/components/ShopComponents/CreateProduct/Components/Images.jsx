import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Images = ({
    handleImageChange,
    images,
    handleRemove,
    formData,
    handleMainImageChange,
    mainImage,
    setMainImage,

}) => {

    return (
        <>
            <div>
                <label className="pb-2">
                    Main Image <span className="text-red-500">*</span>
                </label>
                <input
                    type="file"
                    name=""
                    id="MainImage"
                    className="hidden"
                    onChange={handleMainImageChange}
                />
                <div className="w-full flex items-center flex-wrap">
                    <label htmlFor="MainImage">
                        <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                    </label>
                    {mainImage !== '' && (
                        <div className="image-div">
                            <img
                                src={mainImage}
                                alt="main"
                                className="h-[130px] w-[130px] object-cover"
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMainImage('');
                                }}
                                className="images-delete-btn"
                            >
                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                            </button>
                        </div>
                    )}
                    {/* {images &&
            images.map((i, index) => (
              <div className="image-div">
                <img
                  src={i}
                  key={i}
                  alt=""
                  className="h-[130px] w-[130px] object-cover"
                />
                <button
                  onClick={(e) => {
                    handleRemove(e, index);
                  }}
                  className="images-delete-btn"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            ))} */}
                </div>
                <br />
            </div>
            <div>
                <label className="pb-2">
                    Upload Multiple Images <span className="text-red-500">*</span>
                </label>
                <input
                    type="file"
                    name=""
                    id="upload"
                    className="hidden"
                    multiple
                    onChange={handleImageChange}
                />
                <div className="w-full flex items-center flex-wrap">
                    <label htmlFor="upload">
                        <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                    </label>

                    {images &&
                        images.map((i, index) => (
                            <div className="image-div">
                                <img
                                    src={i}
                                    key={i}
                                    alt=""
                                    className="h-[130px] w-[130px] object-cover"
                                />
                                <button
                                    onClick={(e) => {
                                        handleRemove(e, index);
                                    }}
                                    className="images-delete-btn"
                                >
                                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                                </button>
                            </div>
                        ))}
                </div>
                <br />
            </div>
            <br />
        </>
    );
};

export default Images;
