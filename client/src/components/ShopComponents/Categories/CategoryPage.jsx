import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { StyleConfig } from '../../../utils/StyleConfig';
import { getAllCategories } from '../../../redux/actions/category';
import toast from 'react-hot-toast';
import { server } from '../../../server';
import Loader from '../../../utils/Loader';
import CustomizeCategory from '../CreateProduct/Components/CustomizeCategory';
import { CategoryDeleteModel } from './Modals/CategoryDeleteModel';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const CategoryPage = () => {
    const dispatch = useDispatch();

    const styles = StyleConfig();

    const { category, isLoading } = useSelector((state) => state.category)

    // const [isLoading, setIsLoading] = useState(true); 
    const [categoriesData, setCategoriesData] = useState(null);
    const [subSubCat, setSubSubCat] = useState([]);

    const [addNewCat, setAddNewCat] = useState(false);
    const [customizeCat, setCustomizeCat] = useState(false);
    const [catId, setCatId] = useState();

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch]);

    useEffect(() => {
        setCategoriesData(category);
    }, [category])

    // const [categories, setCategories] = useState([
    //   { name: '', subcategories: [] },
    // ]);

    const [categories, setCategories] = useState([]);
    const [showModel, setShowModel] = useState(false);

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
        ].subSubcategories[subSubcategoryIndex] = { name: value };
        setCategories(updatedCategories);
    };

    const handleAddCategory = () => {
        setCustomizeCat(false);
        setAddNewCat(true);
        setCategories([...categories, { approved: true, name: '', subcategories: [], CatImg: '' }]);
    };

    const handleCustomizeState = () => {
        setAddNewCat(false);
        setCustomizeCat(true);
        setCategories([])
    };

    const handleAddSubcategory = (categoryIndex) => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].subcategories.push({
            name: '',
            subSubcategories: [
                {
                    name: ''
                }
            ],
        });
        setCategories(updatedCategories);
    };

    const handleAddSubSubcategory = (categoryIndex, subcategoryIndex) => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].subcategories[
            subcategoryIndex
        ].subSubcategories.push({ name: '' });
        setCategories(updatedCategories);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categories[0].CatImg || !categories[0].name) {
            toast.error("Category Image and Name is required")
            return;
        }
        await axios
            .post(`${server}/category/add-category`, { categories })
            .then((result) => {
                if (result.data.Status === 'Success') {
                    toast.success('New Category added successfully');
                }
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const handleChange = (e, index) => {
        setSubSubCat(
            categoriesData[index].subcategories[e.target.value].subSubcategories
        );
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

    const handleDeleteModel = (e, id) => {
        e.preventDefault();
        setShowModel(true);
        setCatId(id)
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {categoriesData && (
                        <div className="w-full mx-8 pt-1 mt-10 bg-white outer1-div">
                            <div className="addCat">
                                {addNewCat &&
                                    <div>
                                        {categories.map((category, categoryIndex) => (
                                            <div key={categoryIndex}>
                                                <div className='mb-6'>
                                                    <label className='pb-2'>Category Image<span className="text-red-500">*</span></label><br />
                                                    <input type='file' className='border-0' onChange={(e) => { handleImageChange(e, categoryIndex) }} />
                                                    {category?.CatImg && <div className='border-1 rounded w-[150px] h-[100px] my-2'><img src={category?.CatImg} alt="Category" className='w-full h-full' /></div>}
                                                </div>
                                                <div className="categoryInput">
                                                    <input
                                                        className='subp'
                                                        type="text"
                                                        placeholder="Enter category name"
                                                        value={category.name}
                                                        onChange={(e) =>
                                                            handleCategoryChange(categoryIndex, e.target.value)
                                                        }
                                                    />
                                                    <button
                                                        className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                                        onClick={() => handleAddSubcategory(categoryIndex)}
                                                    >
                                                        Add Subcategory
                                                    </button>
                                                </div>
                                                <div className="categorySub">
                                                    {category.subcategories.map(
                                                        (subcategory, subcategoryIndex) => (
                                                            <div key={subcategoryIndex}>
                                                                <div className="categoryInput">
                                                                    <input
                                                                        className='subp'
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
                                                                        onClick={() =>
                                                                            handleAddSubSubcategory(
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
                                                                                className='subp p2'
                                                                                type="text"
                                                                                placeholder="Enter sub subcategory name"
                                                                                value={subSubcategory?.name}
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
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        <button onClick={handleSubmit} className="rounded px-4 bg-green-500 py-2 text-white">
                                            Submit
                                        </button>
                                    </div>
                                }
                                {customizeCat && (
                                    <CustomizeCategory categoriesData={categoriesData} />
                                )}

                                <div className='flex justify-between my-3'>
                                    {!addNewCat && <button onClick={handleAddCategory} className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                                        Add Category
                                    </button>}
                                    {!customizeCat &&
                                        <button className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={handleCustomizeState}>
                                            Customize Existing Category
                                        </button>}
                                </div>

                            </div>

                            <div className='flex justify-between'>
                                <div className="displayCat flex flex-col w-[78%] ">
                                    <div className='rounded flex justify-between px-4 py-2 ' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                                        <span className=' font-semibold'>SL NO</span>
                                        <span className=' font-semibold'>Images</span>
                                        <span className=' font-semibold'>Categories</span>
                                        <span className=' font-semibold'>Subcategories</span>
                                        <span className=' font-semibold'>Delete</span>
                                    </div>
                                    <div className='table1-container shadow-md max-h-[700px] overflow-y-scroll w-full'>

                                        <div className='table1-div w-full'>
                                            <table className="table1">
                                                {/* <thead className='rounded' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                        <tr>
                          <th><span className=' font-semibold'>SL NO</span></th>
                          <th><span className=' font-semibold'>Images</span></th>
                          <th><span className=' font-semibold'>Categories</span></th>
                          <th><span className=' font-semibold'>Subcategories</span></th>
                          <th><span className=' font-semibold'>Delete</span></th>
                        </tr>
                      </thead> */}
                                                <tbody>
                                                    {categoriesData.map((val, index) => {
                                                        return (
                                                            <tr>
                                                                <td><span>{index + 1}</span></td>
                                                                <td className=' flex justify-center'>{val?.CatImg && <img src={val?.CatImg?.url} alt='Category-img' className='w-[100px] h-[50px]' />}</td>
                                                                <td><span>{val.name}</span></td>
                                                                <td>
                                                                    <span>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={(e) => {
                                                                                handleChange(e, index);
                                                                            }}
                                                                        >
                                                                            <option selected disabled>
                                                                                Select Sub Category
                                                                            </option>
                                                                            {val.subcategories.map((val2, index1) => {
                                                                                return (
                                                                                    <option value={index1}>{val2.name}</option>
                                                                                );
                                                                            })}
                                                                        </Form.Select>
                                                                    </span>
                                                                </td>
                                                                <td><button className='bg-red-200 rounded p-1 px-2' onClick={(e) => { handleDeleteModel(e, val._id) }}><FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} /></button></td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                            <CategoryDeleteModel show={showModel} onHide={() => setShowModel(false)} catId={catId} />
                                        </div>
                                    </div>

                                </div>

                                <div className='w-[20%] flex flex-col '>
                                    <div className='rounded flex justify-between px-4 py-2 text-center mb-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                                        <span className=' font-semibold'>Sub SubCategories</span>
                                    </div>
                                    <div className="subSub w-full shadow-md" >
                                        {/* <h5 style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>Sub SubCategories</h5> */}
                                        {subSubCat.map((val2) => {
                                            return (
                                                <p className='subp'>{val2?.name}</p>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </>
            )
            }
        </>
    );
};





export default CategoryPage;
