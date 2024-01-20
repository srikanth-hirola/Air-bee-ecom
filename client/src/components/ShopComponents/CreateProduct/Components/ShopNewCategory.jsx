import axios from 'axios';
import React, { useState } from 'react';
import { StyleConfig } from '../../../../utils/StyleConfig';
import toast from 'react-hot-toast';
import { server } from '../../../../server';

const ShopNewCategory = ({ id }) => {

    const styles = StyleConfig();
    const [categories, setCategories] = useState([
        { approved: true, shopID: id, name: '', subcategories: [], CatImg: '' },
    ]);

    // setCategories([...categories, { name: '', subcategories: [] }]);

    const handleCategoryChange = (index, value) => {
        const updatedCategories = [...categories];
        updatedCategories[index].name = value;
        setCategories(updatedCategories);
    };

    const handleSubcategoryChange = (categoryIndex, subcategoryIndex, value) => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].subcategories[subcategoryIndex].name =
            value;
        setCategories(updatedCategories);
    };

    const handleSubSubcategoryChange = (
        categoryIndex,
        subcategoryIndex,
        subSubcategoryIndex,
        value
    ) => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].subcategories[
            subcategoryIndex
        ].subSubcategories[subSubcategoryIndex] = value;
        setCategories(updatedCategories);
    };


    const handleAddSubcategory = (e, categoryIndex) => {
        e.preventDefault();
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].subcategories.push({
            name: '',
            subSubcategories: [],
        });
        setCategories(updatedCategories);
    };

    const handleAddSubSubcategory = (e, categoryIndex, subcategoryIndex) => {
        e.preventDefault();
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].subcategories[
            subcategoryIndex
        ].subSubcategories.push('');
        setCategories(updatedCategories);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categories[0].CatImg || !categories[0].name) {
            toast.error("Category Image and Name is required")
            return;
        }
        await axios
            .post(`${server}/category/request-category`, { categories })
            .then((result) => {
                if (result.data.Status === 'Success') {
                    toast.success('Category added successfully');
                }
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Img = reader.result;

                setCategories((prevCategories) => {
                    const updatedCategories = [...prevCategories];
                    updatedCategories[index].CatImg = base64Img;
                    return updatedCategories;
                });
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <div className='mb-6'>
                        <label className='pb-2'>Category Image<span className="text-red-500">*</span></label><br />
                        <input type='file' className='border-0' onChange={(e) => { handleImageChange(e, categoryIndex) }} />
                        {category?.CatImg && <div className='border-1 rounded w-[150px] my-2'><img src={category?.CatImg} alt="Category" className='w-full h-[100px]' /></div>}
                    </div>
                    <div className="categoryInput">
                        <input
                            className="subp"
                            type="text"
                            placeholder="Enter category name"
                            value={category.name}
                            onChange={(e) =>
                                handleCategoryChange(categoryIndex, e.target.value)
                            }
                        />
                        <button
                            className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                            onClick={(e) => handleAddSubcategory(e, categoryIndex)}
                        >
                            Add Subcategory
                        </button>
                    </div>
                    <div className="categorySub">
                        {category.subcategories.map((subcategory, subcategoryIndex) => (
                            <div key={subcategoryIndex}>
                                <div className="categoryInput">
                                    <input
                                        className="subp"
                                        type="text"
                                        placeholder="Enter subcategory name"
                                        value={subcategory.name}
                                        onChange={(e) =>
                                            handleSubcategoryChange(
                                                categoryIndex,
                                                subcategoryIndex,
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button
                                        className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                        onClick={(e) =>
                                            handleAddSubSubcategory(
                                                e,
                                                categoryIndex,
                                                subcategoryIndex
                                            )
                                        }
                                    >
                                        Add Sub Subcategory
                                    </button>
                                </div>
                                {subcategory.subSubcategories.map(
                                    (subSubcategory, subSubcategoryIndex) => (
                                        <div key={subSubcategoryIndex}>
                                            <input
                                                className="subp p2"
                                                type="text"
                                                placeholder="Enter sub subcategory name"
                                                value={subSubcategory}
                                                onChange={(e) =>
                                                    handleSubSubcategoryChange(
                                                        categoryIndex,
                                                        subcategoryIndex,
                                                        subSubcategoryIndex,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button className="rounded px-4 bg-green-500 py-2 text-white my-2" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default ShopNewCategory;
