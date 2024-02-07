import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../../server';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import ProductEdit from '../../../components/ShopComponents/CreateProduct/ProductEdit';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopDraftProductEdit = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState(null);
    const [categories, setCategories] = useState(null);

    // const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [subCatgory, setSubCategory] = useState('');
    const [subSubCategory, setSubSubCategory] = useState('');

    const [productDetails, setProductDetails] = useState([])


    const [subCat, setSubCat] = useState([]);
    const [subSubCat, setSubSubCat] = useState([]);

    const [attributes, setAttributes] = useState();
    const [colorInputs, setColorInputs] = useState([
        {
            SKU: '',
            image: '',
            imageColor: '',
            originalPrice: '',
            discountPrice: '',
            eventPrice: '',
            eventStock: '',
            stock: 0,
            sold_out: 0,
            length: '',
            width: '',
            height: '',
            weight: '',
            materialType: '',
            attributes: [
                {
                    name: '',
                    values: [],
                },
            ],
        },
    ]);

    const [selectedFiles, setSelectedFiles] = useState([]);

    const [specification, setSpecification] = useState();

    const [specification2, setSpecification2] = useState();

    //keywords
    const [searchTerms, setSearchTerms] = useState();

    //mainImage
    const [mainImage, setMainImage] = useState('');


    useEffect(() => {
        axios
            .get(`${server}/product/editProduct/${id}`)
            .then((result) => {
                if (result.data.products) {
                    setAttributes(result.data.products[0].attributes);
                    setColorInputs(result.data.products[0].colorInputs);
                    setFormData(result.data.products[0]);
                    setCategories(result.data.categories);
                    setSearchTerms(result.data.products[0].searchTerms);
                    setSpecification(result.data.products[0].specs);
                    setSpecification2(result.data.products[0].specs2);

                    setCategory(result.data.products[0].category);
                    setSubCategory(result.data.products[0].subCatgory);
                    setSubSubCategory(result.data.products[0].subSubCategory);
                    setProductDetails(result.data.products[0]?.productDescription)

                    // eslint-disable-next-line array-callback-return
                    result.data.categories.map((val) => {
                        if (val._id === result.data.products[0].category) {
                            setSubCat(val.subcategories);
                            // eslint-disable-next-line array-callback-return
                            val.subcategories.map((val1) => {
                                if (val1._id === result.data.products[0].subCatgory) {
                                    setSubSubCat(val1.subSubcategories);
                                }
                            });
                        }
                    });
                } else {
                    alert('No Data Found');
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    const handleCategoryChange = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
        setFormData({ ...formData, category: e.target.value });
        // eslint-disable-next-line array-callback-return
        categories.map((val) => {
            if (val._id === e.target.value) {

                setSubCat(val.subcategories);
            }
        });
        setSubSubCategory('');
        setSubSubCat([]);
    };

    const handleSubCategoryChange = (e) => {
        e.preventDefault();
        setSubCategory(e.target.value);
        setFormData({ ...formData, subCatgory: e.target.value });
        // eslint-disable-next-line array-callback-return
        subCat.map((val) => {
            if (val._id === e.target.value) {
                setSubSubCat(val.subSubcategories);
            }
        });
        setSubSubCategory('');
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((previous) => {
            return {
                ...previous,
                [name]: value,
            };
        });
    };

    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={1} />
                </div>
                <ProductEdit
                    formData={formData}
                    setFormData={setFormData}
                    categories={categories}
                    category={category}
                    subCatgory={subCatgory}
                    subSubCategory={subSubCategory}
                    subCat={subCat}
                    subSubCat={subSubCat}
                    handleCategoryChange={handleCategoryChange}
                    handleSubCategoryChange={handleSubCategoryChange}
                    setSubSubCategory={setSubSubCategory}
                    handleChange={handleChange}
                    searchTerms={searchTerms}
                    setSearchTerms={setSearchTerms}
                    attributes={attributes}
                    setAttributes={setAttributes}
                    colorInputs={colorInputs}
                    setColorInputs={setColorInputs}
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                    specification2={specification2}
                    setSpecification2={setSpecification2}
                    specification={specification}
                    setSpecification={setSpecification}
                    mainImage={mainImage}
                    setMainImage={setMainImage}
                    productDetails={productDetails}
                    setProductDetails={setProductDetails}
                />
                {/* <ProductDraftEdit
                    formData={formData}
                    setFormData={setFormData}
                    categories={categories}
                    category={category}
                    subCatgory={subCatgory}
                    subSubCategory={subSubCategory}
                    subCat={subCat}
                    subSubCat={subSubCat}
                    handleCategoryChange={handleCategoryChange}
                    handleSubCategoryChange={handleSubCategoryChange}
                    setSubSubCategory={setSubSubCategory}
                    handleChange={handleChange}
                    searchTerms={searchTerms}
                    setSearchTerms={setSearchTerms}
                    attributes={attributes}
                    setAttributes={setAttributes}
                    colorInputs={colorInputs}
                    setColorInputs={setColorInputs}
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                    specification2={specification2}
                    setSpecification2={setSpecification2}
                    specification={specification}
                    setSpecification={setSpecification}
                    mainImage={mainImage}
                    setMainImage={setMainImage}
                    productDetails={productDetails}
                    setProductDetails={setProductDetails}
                /> */}
            </div>
            <DronesFooter />
        </div>
    );
};

export default ShopDraftProductEdit;
