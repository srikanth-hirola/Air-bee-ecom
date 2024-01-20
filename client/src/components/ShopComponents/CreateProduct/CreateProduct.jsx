import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { BiErrorAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

import { StyleConfig } from '../../../utils/StyleConfig';
import toast from 'react-hot-toast';
import { createDraftProduct, createProduct } from '../../../redux/actions/product';
import { server } from '../../../server';
import ProductIdentity from './Components/ProductIdentity';
import Offer from './Components/Offer';
import Keywords from './Components/Keywords';
import Description from './Components/Description';
import Images from './Components/Images';
import VitalInfo from './Components/VitalInfo';
import Variations from './Components/Variations';
import MoreDetails from './Components/MoreDetails';
import { Validation } from './ValidationFunction';

const CreateProduct = () => {

    const styles = StyleConfig();
    const { seller } = useSelector((state) => state.seller);
    const { success, error, successDraft } = useSelector(
        (state) => state.products
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [active, setActive] = useState(1);

    const [images, setImages] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        brandName: '',
        productIdState: false,
        productId: '',
        showInputs: false,
        category: '',
        subCatgory: '',
        subSubCategory: '',

        SKU: '',
        productTaxCode: '',
        taxPercent: null,
        originalPrice: '',
        discountPrice: '',
        haveAttributes: false,
        attributeStock: false,
        attributes: null,
        itemCondition: 'New',
        conditionNote: '',
        maxOrderQuantity: '',
        giftMessaged: '',
        giftWrapAvailable: '',
        hsnCode: null,

        description: '',
        productDescription: [],

        model: '',
        noItem: '',
        itemname: '',
        stock: null,
        codAvailable: false,
        refundAvailable: false,
        ataDimension: false,
        itemLength: '',
        itemLengthUnit: 'Centemeter',
        itemWidth: '',
        itemWidthUnit: 'Centemeter',
        itemHeight: '',
        itemHeightUnit: 'Centemeter',
        ataWeight: false,
        itemWeight: '',
        itemWeightUnit: 'Gram',
        assemblyReq: false,
        noOfPieces: '',
        components: '',
        assemblyInstruction: '',
        size: '',
        color: '',
        ataMaterials: false,
        materialType: '',
        manufacturer: '',
        shop: null,

        safetyWarning: '',
        packageHeight: '',
        packageHeightUnit: 'Centemeter',
        packageLength: '',
        packageLengthhUnit: 'Centemeter',
        packageWidth: '',
        packageWidthUnit: 'Centemeter',
        packageWeight: '',
        packageWeightUnit: 'Gram',
        productCareInstruction: '',
        shape: '',
        warrentyDescription: '',
        constructionType: '',

        colorInputs: null,
        shopId: seller._id,
        approved: false,
        rejected: false,
        eventPrice: 0,
        eventStock: 0,
        searchTerms: null,
        mainImage: {
            public_id: '',
            url: '',
        },
        images: null,
        specs: null,
        specs2: null,
        draft: null,
    });

    const [productDetails, setProductDetails] = useState(formData?.productDescription)


    const handleFormDataChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
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

    //Main image
    const [mainImage, setMainImage] = useState('');

    //keywords
    const [searchTerms, setSearchTerms] = useState([]);

    //vitalInformation
    const weight = false;
    const materialTypeStatus = false;


    const [categories, setCategories] = useState();

    const [wantNewCategory, setWantNewCategory] = useState(false);

    const [activeError, setActiveError] = useState([]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (success) {
            toast.success('Product created successfully!');
            navigate('/dashboard'); // Navigate to another page using navigate
        }
        if (successDraft) {
            toast.success('Product Drafted successfully!');
            navigate('/dashboard');
        }
        axios
            .get(`${server}/category/get-all-categories`)
            .then(async (result) => {
                setCategories(result.data.categories);
            })
            .catch((e) => {
                toast.error(error.response.data.message);
            });
    }, [dispatch, error, success, successDraft, navigate]);

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

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setMainImage(base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();

    //   const newForm = new FormData();

    //   images.forEach((image) => {
    //     newForm.set('images', image);
    //   });

    //   //product Identity
    //   newForm.append('name', name);
    //   newForm.append('brandName', name);
    //   newForm.append('description', description);
    //   newForm.append('category', category);
    //   newForm.append('subCategory', subCatgory);
    //   newForm.append('subSubcategory', subSubCategory);
    //   newForm.append('tags', tags);
    //   newForm.append('originalPrice', originalPrice);
    //   newForm.append('discountPrice', discountPrice);
    //   newForm.append('stock', stock);
    //   newForm.append('shopId', seller._id);
    //   newForm.append('specs', specification);
    //   newForm.append('specs2', specification2);
    //   newForm.append('attributes', attributes);
    //   newForm.append('colorInputs', colorInputs);
    //   dispatch(
    //     requestedProduct({
    //       approved: false,
    //       rejected: false,
    //       eventPrice: '',
    //       name,
    //       description,
    //       category,
    //       subCatgory,
    //       subSubCategory,
    //       tags,
    //       originalPrice,
    //       discountPrice,
    //       stock,
    //       shopId: seller._id,
    //       images,
    //       specs: specification,
    //       specs2: specification2,
    //       attributes,
    //       showInputs,
    //       colorInputs: colorInputs,
    //     })
    //   );
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.colorInputs = colorInputs;
        formData.images = images;
        formData.specs = specification;
        formData.specs2 = specification2;
        formData.attributes = attributes;
        formData.searchTerms = searchTerms;
        formData.mainImage.url = mainImage;
        formData.draft = false;
        formData.productDescription = productDetails;
        const verify = await Validation(formData, setActiveError);
        if (verify) {
            dispatch(createProduct(formData));
        }
    };

    // const Validation = () => {
    //   if (formData.showInputs) {
    //     if (formData.name === '' || formData.brandName === '') {
    //       toast.error('All mandatory fields must be filled');
    //       return false;
    //     }

    //     if (!formData.productIdState || formData.productId === '') {
    //       toast.error('ProductID is Required');
    //       return false;
    //     }

    //     if (formData.mainImage.url === '') {
    //       toast.error('Main Image is Required');
    //       return false;
    //     }

    //     if (formData.showInputs) {
    //       const colorInputsValid = formData.colorInputs.every((val) => {
    //         if (val.image.url === '') {
    //           toast.error('Variations Image is Required');
    //           return false;
    //         }
    //         return true;
    //       });

    //       if (!colorInputsValid) {
    //         return false;
    //       }
    //     }

    //     return true;
    //   } else {
    //     if (
    //       formData.name === '' ||
    //       formData.brandName === '' ||
    //       formData.originalPrice === '' ||
    //       formData.discountPrice === '' ||
    //       formData.stock === ''
    //     ) {
    //       toast.error('All mandatory fields must be filled');
    //       return false;
    //     }

    //     if (!formData.productIdState || formData.productId === '') {
    //       toast.error('ProductID is Required');
    //       return false;
    //     }

    //     if (formData.mainImage.url === '') {
    //       toast.error('Main Image is Required');
    //       return false;
    //     }

    //     if (formData.showInputs) {
    //       const colorInputsValid = formData.colorInputs.every((val) => {
    //         if (val.image.url === '') {
    //           toast.error('Variations Image is Required');
    //           return false;
    //         }
    //         return true;
    //       });

    //       if (!colorInputsValid) {
    //         return false;
    //       }
    //     }

    //     return true;
    //   }
    // };

    const handleDraftSubmit = (e) => {
        e.preventDefault();

        formData.draft = true;
        formData.attributes = attributes;
        formData.searchTerms = searchTerms;
        formData.specs = specification;
        formData.specs2 = specification2;
        formData.colorInputs = colorInputs;
        formData.images = images;
        formData.productDescription = productDetails;
        if (mainImage) {
            formData.mainImage.url = mainImage;
        }
        dispatch(createDraftProduct(formData, images, seller._id));
    };

    const [subCat, setSubCat] = useState([]);
    const [subSubCat, setSubSubCat] = useState([]);

    const handleCategoryChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, category: e.target.value });
        // eslint-disable-next-line array-callback-return
        categories.map((val) => {
            if (val.name === e.target.value) {
                setSubCat(val.subcategories);
            }
        });
        setSubSubCat([]);
    };

    const handleSubCategoryChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, subCatgory: e.target.value });
        // eslint-disable-next-line array-callback-return
        subCat.map((val) => {
            if (val.name === e.target.value) {
                setSubSubCat(val.subSubcategories);
            }
        });
    };

    const [specification, setSpecification] = useState([
        {
            heading: '',
            key: {
                name: '',
                value: [],
            },
        },
    ]);

    const [specification2, setSpecification2] = useState([
        {
            heading: '',
            key: {
                name: '',
                value: '',
            },
        },
    ]);

    const [attributes, setAttributes] = useState([
        {
            name: '',
            values: [
                {
                    valName: '',
                    stock: null,
                    eventStock: null,
                    sold_out: 0,
                },
            ],
        },
    ]);

    const [colorInputs, setColorInputs] = useState([
        {
            SKU: '',
            image: {
                public_id: '',
                url: '',
            },
            imageColor: '',
            originalPrice: '',
            discountPrice: '',
            eventPrice: '',
            eventStock: null,
            stock: null,
            sold_out: 0,
            length: '',
            width: '',
            height: '',
            itemWeight: '',
            materialType: '',
            haveAttributes: false,
            attributeStock: false,
            attributes: [
                {
                    name: '',
                    values: [
                        {
                            valName: '',
                            stock: null,
                            eventStock: null,
                            sold_out: 0,
                        },
                    ],
                },
            ],
        },
    ]);

    const handleRemove = (e, index) => {
        e.preventDefault();
        const updatedItems = [...images];
        updatedItems.splice(index, 1);
        setImages(updatedItems);
    };

    const handleCheckChange = () => {
        if (formData.showInputs === true) {
            setFormData({ ...formData, showInputs: false });
        } else {
            setFormData({ ...formData, showInputs: true });
        }
    };

    return (
        <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[90vh] rounded-[4px] p-3 overflow-y-scroll create-width">
            <h5 className="text-[30px] font-Poppins text-center font-[400]">Create Product</h5>
            {/* create product form */}
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
                    <ProductIdentity
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
                    <Keywords
                        searchTerms={searchTerms}
                        setSearchTerms={setSearchTerms}
                        formData={formData}
                        colorInputs={colorInputs}
                    />
                )}

                {active === 4 && (
                    <Images
                        handleRemove={handleRemove}
                        handleImageChange={handleImageChange}
                        images={images}
                        formData={formData}
                        handleMainImageChange={handleMainImageChange}
                        mainImage={mainImage}
                        setMainImage={setMainImage}
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
                    <Variations
                        colorInputs={colorInputs}
                        setColorInputs={setColorInputs}
                        formData={formData}
                        weight={weight}
                        materialTypeStatus={materialTypeStatus}
                    />
                )}

                {active === 9 && (
                    <MoreDetails
                        formData={formData}
                        handleFormDataChange={handleFormDataChange}
                        setFormData={setFormData}
                    />
                )}



                <div className="draft-create-btn">
                    {/* <div className='d-flex justify-content-between align-items-center'> */}
                    <button
                        onClick={handleDraftSubmit}
                        className="rounded px-4 py-2"
                        style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                    >
                        Save as Draft
                    </button>

                    {!wantNewCategory && (
                        <div className=''>
                            <input
                                type="submit"
                                value="Create"
                                className="rounded px-4 bg-green-500 py-2 text-white"
                            />
                        </div>
                    )}
                </div>

            </form>
        </div>
    );
};

export default CreateProduct;
