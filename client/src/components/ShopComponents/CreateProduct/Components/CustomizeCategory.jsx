import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { server } from '../../../../server';
import toast from 'react-hot-toast';


const CustomizeCategory = ({ categoriesData }) => {

    const styles = StyleConfig();
    const [subCat, setSubCat] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [CatImg, setCatImg] = useState();
    const [newCategoryName, setNewCategoryName] = useState();

    const categories = categoriesData;
    const [btnLoading, setBtnLoading] = useState(false);

    const handleCategoryChange = (e) => {
        e.preventDefault();
        setCategoryName(e.target.value);
        setNewCategoryName(e.target.value);
        // eslint-disable-next-line array-callback-return
        categoriesData.map((val) => {
            if (val.name === e.target.value) {
                setSubCat(val.subcategories);
                setCatImg(val?.CatImg)
            }
        });
    };

    const handleAddSubcategory = (e) => {
        e.preventDefault();
        setSubCat([...subCat, { name: '', subSubcategories: [] }]);
    };

    const handleSubcategoryChange = (subcategoryIndex, value) => {
        const updatedCategories = [...subCat];
        subCat[subcategoryIndex].name = value;
        setSubCat(updatedCategories);
    };

    const handleSubSubcategoryChange = (subcategoryIndex, subSubcategoryIndex, value) => {
        const updatedCategories = subCat.map((category, index) => {
            if (index === subcategoryIndex) {
                const subcategoriesCopy = [...category.subSubcategories];
                subcategoriesCopy[subSubcategoryIndex] = value;
                return { ...category, subSubcategories: subcategoriesCopy };
            }
            return category;
        });
        setSubCat(updatedCategories);
    };



    const handleAddSubSubcategory = (e, subcategoryIndex) => {
        e.preventDefault();
        const updatedCategories = JSON.parse(JSON.stringify(subCat));
        updatedCategories[subcategoryIndex].subSubcategories.push('');
        setSubCat(updatedCategories);
    };

    const handleRemoveSubSubCategory = (e, subcategoryIndex, subSubcategoryIndex) => {
        e.preventDefault();

        const updatedCategories = subCat.map((category, index) => {
            if (index === subcategoryIndex) {
                let subcategoriesCopy = [...category.subSubcategories];
                subcategoriesCopy = subcategoriesCopy.filter((subSub, index) => index !== subSubcategoryIndex)
                return { ...category, subSubcategories: subcategoriesCopy };
            }
            return category;
        });
        setSubCat(updatedCategories);

        // let updatedCategories = [...subCat];
        // let updatedSubCategory = updatedCategories[subcategoryIndex].subSubcategories
        // updatedSubCategory = updatedCategories[subcategoryIndex].subSubcategories.filter((sub, index) => index !== subSubcategoryIndex);
        // updatedCategories[subcategoryIndex].subSubcategories = updatedSubCategory
        // setSubCat(updatedCategories);
    };

    const handleRemoveSubCategory = (e, subcategoryIndex) => {
        e.preventDefault();
        let updatedCategories = [...subCat];
        updatedCategories = updatedCategories.filter((sub, index) => index !== subcategoryIndex);
        setSubCat(updatedCategories);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newCategoryName && CatImg) {
            setBtnLoading(true)
            await axios
                .put(`${server}/category/custom-category`, {
                    existingName: categoryName,
                    categoryName: newCategoryName,
                    subCat: subCat,
                    CatImg: CatImg
                })
                .then((result) => {
                    setBtnLoading(false)
                    if (result.data.Status === 'Success') {
                        toast.success('Category Customized Successfully');
                        // setTimeout(() => {
                        //     window.location.reload();
                        // }, 3000);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                });
        } else {
            toast.error("Category and Category Image is required")
        }

    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Img = reader.result;
                setCatImg(base64Img)
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            {/* {categoriesData.map((category, categoryIndex) => ( */}
            <div>
                <div className="categoryInput mb-4">
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => {
                            handleCategoryChange(e);
                        }}
                    >
                        <option selected disabled>
                            Select Category
                        </option>
                        {categories.map((val2, index1) => {
                            return <option value={val2.name}>{val2.name}</option>;
                        })}
                    </Form.Select>
                    {categoryName && <>
                        <div className='mb-6 mt-4'>
                            <label className='pb-2'>Category Image<span className="text-red-500">*</span></label><br />
                            <input type='file' className='border-0' onChange={handleImageChange} />
                            {CatImg && <div className='border-1 rounded w-[150px] my-2'><img src={CatImg?.url ? CatImg?.url : CatImg} alt="Category" className='w-full h-[100px]' /></div>}
                        </div>

                        <input
                            className='subp'
                            type="text"
                            placeholder="Enter category name"
                            value={newCategoryName}
                            onChange={(e) =>
                                setNewCategoryName(e.target.value)
                            }
                        />
                        <button className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={handleAddSubcategory}>Add Subcategory</button></>}
                </div>
                <div className="categorySub">
                    {subCat.map((subcategory, subcategoryIndex) => (
                        <div key={subcategoryIndex}>
                            <div className="categoryInput">
                                <div className='flex border-1 rounded px-1  my-1'>
                                    <input
                                        type="text"
                                        className='border-0 '
                                        placeholder="Enter subcategory name"
                                        value={subcategory.name}
                                        onChange={(e) =>
                                            handleSubcategoryChange(subcategoryIndex, e.target.value)
                                        }
                                    />
                                    <button onClick={(e) => handleRemoveSubCategory(e, subcategoryIndex)}><i class="fa-solid fa-trash"></i></button>
                                </div>

                                <button
                                    className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                    onClick={(e) => handleAddSubSubcategory(e, subcategoryIndex)}
                                >
                                    Add Sub Subcategory
                                </button>
                            </div>
                            {subcategory.subSubcategories.map(
                                (subSubcategory, subSubcategoryIndex) => (
                                    <div key={subSubcategoryIndex} className='flex border-1 rounded py-2 px-2 my-1'>
                                        <input
                                            type="text"
                                            className='border-0 p2'
                                            placeholder="Enter sub subcategory name"
                                            value={subSubcategory}
                                            onChange={(e) =>
                                                handleSubSubcategoryChange(
                                                    subcategoryIndex,
                                                    subSubcategoryIndex,
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <button onClick={(e) => handleRemoveSubSubCategory(e, subcategoryIndex, subSubcategoryIndex)}><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                )
                            )}
                        </div>
                    ))}

                </div>
                {categoryName && <>{
                    btnLoading ? <button className="cat-btn" >
                        Loading...
                    </button> : <button className='rounded px-4 bg-green-500 py-2 text-white my-2' onClick={handleSubmit}>
                        Submit
                    </button>
                }</>}
            </div>
            {/* ))} */}
        </div>
    );
};

export default CustomizeCategory;
