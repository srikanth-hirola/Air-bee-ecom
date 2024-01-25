import axios from 'axios';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { server } from '../../../../server';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const DraftImages = ({
    handleImageChange,
    images,
    handleRemove,
    formData,
    handleDeleteCloudinaryImage,
    mainImage,
    setMainImage,
    // handleMainImageChange,
}) => {
    const { id } = useParams();



    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setMainImage(reader.result); // Set mainImage to the new image data
            };
            reader.readAsDataURL(file);
        }
    };

    const handleMianDelete = (e, image) => {
        e.preventDefault();
        axios
            .put(
                `${server}/product/delete-main-image`,
                { id: image, _id: id },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                // dispatch(getAllProductsShop(_id));
                toast.success('Image Deleted successfully!');
                window.location.reload();
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };


    return (
        <>
            {formData.mainImage.url ? (
                <div className="image-div">
                    <img
                        src={formData.mainImage.url}
                        alt="main"
                        className="h-[130px] w-[130px] object-cover"
                    />
                    <button
                        onClick={(e) => {
                            handleMianDelete(e, formData.mainImage.public_id);
                        }}
                        className="images-delete-btn"
                    >
                        <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                    </button>
                </div>
            ) : (
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
                        {mainImage && (
                            <div className="image-div">
                                <img
                                    src={mainImage}
                                    alt="main"
                                    className="h-[130px] w-[130px] object-cover"
                                />
                                <button
                                    onClick={(e) => {
                                        setMainImage(''); // Clear the mainImage state
                                    }}
                                    className="images-delete-btn"
                                >
                                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                                </button>
                            </div>
                        )}
                    </div>
                    <br />
                </div>
            )}
            <div>
                <label className="pb-2">
                    Upload Images <span className="text-red-500">*</span>
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
                    {formData?.images?.length > 0 &&
                        formData?.images?.map((i, index) => (
                            <div className="image-div">
                                <img
                                    src={i.url}
                                    key={i}
                                    alt=""
                                    className="h-[130px] w-[130px] object-cover"
                                />
                                <button
                                    onClick={(e) => {
                                        handleDeleteCloudinaryImage(e, i.public_id, id);
                                    }}
                                    className="images-delete-btn"
                                >
                                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                                </button>
                            </div>
                        ))}
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

export default DraftImages;
