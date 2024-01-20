import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { StyleConfig } from '../../../utils/StyleConfig';
import { getAllCategories } from '../../../redux/actions/category';
import Loader from '../../../utils/Loader';
import ShopNewCategory from '../CreateProduct/Components/ShopNewCategory';
import CustomizeCategory from '../CreateProduct/Components/CustomizeCategory';


const CategoryPage = () => {

    const styles = StyleConfig();
    const dispatch = useDispatch();

    const { seller } = useSelector((state) => state.seller);
    const { category, isLoading } = useSelector((state) => state.category)

    const [categoriesData, setCategoriesData] = useState(null);
    const [subSubCat, setSubSubCat] = useState([]);

    const [addNewCat, setAddNewCat] = useState(false);
    const [customizeCat, setCustomizeCat] = useState(false);

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch]);

    useEffect(() => {
        setCategoriesData(category);
    }, [category])

    const handleChange = (e, index) => {
        setSubSubCat(
            categoriesData[index].subcategories[e.target.value].subSubcategories
        );
    };

    const handleAddCategory = () => {
        setAddNewCat(true);
        setCustomizeCat(false);
    };

    const handleCustomizeState = () => {
        setAddNewCat(false);
        setCustomizeCat(true);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {categoriesData && (
                        <div className="w-full mx-8 pt-1 mt-10 bg-white outer1-div">
                            <div className="addCat">
                                {addNewCat && <ShopNewCategory id={seller._id} />}
                                {customizeCat && (
                                    <CustomizeCategory categoriesData={categoriesData} />
                                )}
                            </div>
                            <div className='flex justify-between py-4 hover-catagoriesbuttons'>
                                {!addNewCat && <button onClick={handleAddCategory} className="rounded px-4 py-2 bg-blue-600 text-light" style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                                    Request New Category
                                </button>}
                                {!customizeCat &&
                                    <button className="rounded px-4 py-2 bg-blue-600 text-light" style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={handleCustomizeState}>
                                        Customize Existing Category
                                    </button>}
                            </div>
                            {/* <div>
                <button className="cat-btn" onClick={handleAddCategory}>
                  Request New Category
                </button>
                <button className="cat-btn4" onClick={handleCustomizeState}>
                  Customize Existing Category
                </button>
              </div> */}

                            <div className='flex justify-between'>
                                <div className="displayCat flex flex-col w-[78%] ">
                                    <div className='rounded flex justify-between px-4 py-2 ' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                                        <span className=' font-semibold'>SL NO</span>
                                        <span className=' font-semibold'>Images</span>
                                        <span className=' font-semibold'>Categories</span>
                                        <span className=' font-semibold'>Subcategories</span>
                                    </div>
                                    <div className='table1-container shadow-md max-h-[700px] overflow-y-scroll w-full'>
                                        <div className="table1-div w-full">
                                            <table className="table1">
                                                {/* <thead>
                        <tr>
                          <th><span>SL NO</span></th>
                          <th><span>Images</span></th> 
                          <th><span>Categories</span></th>
                          <th><span>Subcategories</span></th>
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
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* <div className="subSub ">
                  <h5>Sub SubCategories</h5>
                  {subSubCat.map((val2) => {
                    return <p className="subp">{val2}</p>;
                  })}
                </div> */}
                                </div>
                                {/* paste here  */}
                                <div className='w-[20%] flex flex-col '>
                                    <div className='rounded flex justify-between px-4 py-2 text-center mb-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                                        <span className=' font-semibold'>Sub SubCategories</span>
                                    </div>
                                    <div className="subSub w-full shadow-md" >
                                        {subSubCat.map((val2) => {
                                            return (
                                                <p className='subp'>{val2}</p>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>

                        </div>
                    )}
                </>
            )}
        </>
    );

};

export default CategoryPage;
