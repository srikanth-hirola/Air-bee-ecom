import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { BiErrorAlt } from 'react-icons/bi';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { server } from '../../../../server';
import { getAllProductsShop, publishDraftProduct, saveDraftProduct } from '../../../../redux/actions/product';
import ValidationFunction2 from '../ValidationFunction2';
import DraftProductIdentity from './DraftProductIdentity';
import Offer from '../Components/Offer';
import DraftKeywords from './DraftKeywords';
import DraftImages from './DraftImages';
import Description from '../Components/Description';
import VitalInfo from '../Components/VitalInfo';
import DraftVariations from './DraftVariations';
import MoreDetails from '../Components/MoreDetails';
import toast from 'react-hot-toast';


const ProductDraftEdit = ({
    formData,
    setFormData,
    categories,
    category,
    subCatgory,
    subSubCategory,
    subCat,
    subSubCat,
    handleCategoryChange,
    handleSubCategoryChange,
    setSubSubCategory,
    handleChange,
    // handleSubmit,
    attributes,
    setAttributes,
    colorInputs,
    setColorInputs,
    selectedFiles,
    setSelectedFiles,
    searchTerms,
    setSearchTerms,
    specification,
    setSpecification,
    specification2,
    setSpecification2,
    mainImage,
    setMainImage,
    productDetails, setProductDetails
}) => {

    const styles = StyleConfig();
    const dispatch = useDispatch();
    const [active, setActive] = useState(1);
    const materialTypeStatus = false;
    const [images, setImages] = useState([]);
    const [wantNewCategory, setWantNewCategory] = useState(false);

    const [activeError, setActiveError] = useState([]);


    const { successDraftSave, error, success } = useSelector(
        (state) => state.products
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (successDraftSave) {
            toast.success('Draft Saved successfully!');
            window.location.reload();
            // navigate('/dashboard');
        }
        if (error) {
            toast.error(error);
        }
        if (success) {
            toast.success('Sent Product For Approval successfully!');
            navigate('/dashboard');
        }
    }, [dispatch, error, successDraftSave, success, navigate]);

    const handleDeleteCloudinaryImage = (e, id, _id) => {
        e.preventDefault();
        axios
            .put(
                `${server}/product/delete-product-image`,
                { id: id, _id: _id },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                dispatch(getAllProductsShop(_id));
                toast.success('Image Deleted successfully!');
                window.location.reload();
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const [colorInputsIndexUpdateImage, setColorInputsIndexUpdateImage] =
        useState([]);

    const handleSaveDraft = (e) => {
        e.preventDefault();
        const proId = formData._id;
        formData.draft = true;
        formData.attributes = attributes;
        formData.searchTerms = searchTerms;
        formData.specs = specification;
        formData.specs2 = specification2;
        formData.colorInputs = colorInputs;
        formData.productDescription = productDetails;
        if (mainImage) {
            formData.mainImage = mainImage;
        }
        dispatch(
            saveDraftProduct(
                formData,
                proId,
                images,
                mainImage,
                colorInputsIndexUpdateImage
            )
        );
    };

    const handleCheckChange = () => {
        if (formData.showInputs === true) {
            setFormData({ ...formData, showInputs: false });
        } else {
            setFormData({ ...formData, showInputs: true });
        }
    };

    const handleFormDataChange = (e) => {
        const { name, value } = e.target;
        if (
            name === 'productId' ||
            name === 'productTaxCode' ||
            name === 'SKU'
        ) {
            const exp = /^[a-zA-Z0-9]*$/;
            if (exp.test(value)) {
                const val = value.toUpperCase();
                setFormData({ ...formData, [name]: val });
            }
            return;
        }
        if (name === 'hsnCode') {
            const exp = /^[0-9]{0,15}$/;
            if (exp.test(value)) {
                const val = value.toUpperCase();
                setFormData({ ...formData, [name]: val });
            }
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleRemove = (e, index) => {
        e.preventDefault();
        const updatedItems = [...images];
        updatedItems.splice(index, 1);
        setImages(updatedItems);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImages((old) => [...old, reader.result]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const proId = formData._id;
        formData.draft = false;
        formData.attributes = attributes;
        formData.searchTerms = searchTerms;
        formData.specs = specification;
        formData.specs2 = specification2;
        formData.colorInputs = colorInputs;
        formData.productDescription = productDetails;

        // formData.images = images;

        if (mainImage) {
            formData.mainImage = mainImage;
        }

        const verify = await ValidationFunction2(formData, setActiveError, images);

        if (verify) {
            dispatch(
                publishDraftProduct(
                    formData,
                    proId,
                    images,
                    mainImage,
                    colorInputsIndexUpdateImage
                )
            );
        }
    };



    return (
        <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll create-width">
            <h5 className="text-[30px] font-Poppins text-center">Draft Product</h5>
            {formData && (
                <form onSubmit={handleSubmit}>
                    <br />
                    <div className="track-status">
                        <p
                            className="d-flex"
                            onClick={() => {
                                setActive(1);
                            }}
                            style={{ color: active === 1 ? 'red' : 'black' }}
                        >
                            Product Identity
                            <span>
                                {activeError.includes(1) && (
                                    <IconContext.Provider value={{ color: 'red' }}>
                                        <BiErrorAlt size={20} color="red" />
                                    </IconContext.Provider>
                                )}
                            </span>
                        </p>
                        <p
                            onClick={() => {
                                setActive(2);
                            }}
                            className="d-flex"
                            style={{ color: active === 2 ? 'red' : 'black' }}
                        >
                            Offer
                            <span>
                                {activeError.includes(2) && (
                                    <IconContext.Provider value={{ color: 'red' }}>
                                        <BiErrorAlt size={20} color="red" />
                                    </IconContext.Provider>
                                )}
                            </span>
                        </p>

                        <p
                            onClick={() => {
                                setActive(4);
                            }}
                            className="d-flex"
                            style={{ color: active === 4 ? 'red' : 'black' }}
                        >
                            Images
                            <span>
                                {activeError.includes(4) && (
                                    <IconContext.Provider value={{ color: 'red' }}>
                                        <BiErrorAlt size={20} color="red" />
                                    </IconContext.Provider>
                                )}
                            </span>
                        </p>
                        <p
                            onClick={() => {
                                setActive(5);
                            }}
                            className="d-flex"
                            style={{ color: active === 5 ? 'red' : 'black' }}
                        >
                            Description
                            <span>
                                {activeError.includes(5) && (
                                    <IconContext.Provider value={{ color: 'red' }}>
                                        <BiErrorAlt size={20} color="red" />
                                    </IconContext.Provider>
                                )}
                            </span>
                        </p>

                        <p
                            onClick={() => {
                                setActive(7);
                            }}
                            className="d-flex"
                            style={{ color: active === 7 ? 'red' : 'black' }}
                        >
                            Vital Info
                            <span>
                                {activeError.includes(7) && (
                                    <IconContext.Provider value={{ color: 'red' }}>
                                        <BiErrorAlt size={20} color="red" />
                                    </IconContext.Provider>
                                )}
                            </span>
                        </p>
                        {formData.showInputs && (
                            <p
                                onClick={() => {
                                    setActive(8);
                                }}
                                className="d-flex"
                                style={{ color: active === 8 ? 'red' : 'black' }}
                            >
                                Variations
                                <span>
                                    {activeError.includes(8) && (
                                        <IconContext.Provider value={{ color: 'red' }}>
                                            <BiErrorAlt size={20} color="red" />
                                        </IconContext.Provider>
                                    )}
                                </span>
                            </p>
                        )}
                        <p
                            onClick={() => {
                                setActive(3);
                            }}
                            className="d-flex"
                            style={{ color: active === 3 ? 'red' : 'black' }}
                        >
                            Keywords
                            <span>
                                {activeError.includes(3) && (
                                    <IconContext.Provider value={{ color: 'red' }}>
                                        <BiErrorAlt size={20} color="red" />
                                    </IconContext.Provider>
                                )}
                            </span>
                        </p>
                        <p
                            onClick={() => {
                                setActive(9);
                            }}
                            className="d-flex"
                            style={{ color: active === 9 ? 'red' : 'black' }}
                        >
                            More Details
                            <span>
                                {activeError.includes(9) && (
                                    <IconContext.Provider value={{ color: 'red' }}>
                                        <BiErrorAlt size={20} color="red" />
                                    </IconContext.Provider>
                                )}
                            </span>
                        </p>
                    </div>

                    {active === 1 && (
                        <DraftProductIdentity
                            handleCheckChange={handleCheckChange}
                            handleCategoryChange={handleCategoryChange}
                            categories={categories}
                            handleSubCategoryChange={handleSubCategoryChange}
                            subCat={subCat}
                            subSubCat={subSubCat}
                            handleFormDataChange={handleFormDataChange}
                            formData={formData}
                            setFormData={setFormData}
                            wantNewCategory={wantNewCategory}
                            setWantNewCategory={setWantNewCategory}
                        />
                    )}

                    {active === 2 && (
                        <Offer
                            formData={formData}
                            handleFormDataChange={handleFormDataChange}
                            attributes={attributes}
                            setAttributes={setAttributes}
                            setFormData={setFormData}
                        />
                    )}

                    {active === 3 && (
                        <DraftKeywords
                            searchTerms={searchTerms}
                            setSearchTerms={setSearchTerms}
                            formData={formData}
                            colorInputs={colorInputs}
                        />
                    )}

                    {active === 4 && (
                        <DraftImages
                            handleRemove={handleRemove}
                            handleImageChange={handleImageChange}
                            images={images}
                            handleDeleteCloudinaryImage={handleDeleteCloudinaryImage}
                            formData={formData}
                            mainImage={mainImage}
                            setMainImage={setMainImage}
                        // handleMainImageChange={handleMainImageChange}
                        />
                    )}

                    {active === 5 && (
                        <Description
                            specification={specification}
                            setSpecification={setSpecification}
                            specification2={specification2}
                            setSpecification2={setSpecification2}
                            formData={formData}
                            handleFormDataChange={handleFormDataChange}
                            productDetails={productDetails}
                            setProductDetails={setProductDetails}
                        />
                    )}

                    {active === 7 && (
                        <VitalInfo
                            formData={formData}
                            handleFormDataChange={handleFormDataChange}
                            setFormData={setFormData}
                        />
                    )}

                    {active === 8 && (
                        <DraftVariations
                            colorInputs={colorInputs}
                            setColorInputs={setColorInputs}
                            formData={formData}
                            setColorInputsIndexUpdateImage={setColorInputsIndexUpdateImage}
                            colorInputsIndexUpdateImage={colorInputsIndexUpdateImage}
                            materialTypeStatus={materialTypeStatus}
                            setFormData={setFormData}
                        />
                    )}

                    {active === 9 && (
                        <MoreDetails
                            formData={formData}
                            handleFormDataChange={handleFormDataChange}
                            setFormData={setFormData}
                        />
                    )}

                    <div className='draft-create-btn'>
                        <button
                            onClick={handleSaveDraft}
                            className="rounded px-4 py-2"
                            style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                        >
                            Save as Draft
                        </button>

                        <div>
                            <input
                                type="submit"
                                value="Create"
                                className="rounded px-4 bg-green-500 py-2 text-white"
                            />
                        </div>
                    </div>



                </form>
            )}
        </div>
    );
};

export default ProductDraftEdit;
