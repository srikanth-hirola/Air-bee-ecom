import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../redux/actions/category';

const CategoriesMenu = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    const { category } = useSelector((state) => state.category)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(category)
    }, [category])


    return (
        <li className="menu-item-has-children">
            <Link to="#">Collections <i className="fa fa-angle-down"></i></Link>
            <div className="sub-menu mega-menu mega-menu-column-4 ">
                <div className='w-[100%] flex flex-wrap justify-start gap-3 cat-menu'>
                    {categories?.length > 0 && categories?.map((cat, i) => (
                        <div className="list-item w-[160px]" key={i}>
                            <h4 className="title  text-md"><Link className='text-[#f18232]' to={`/products-by-category/search?category=${cat.name}`}>{cat?.name}</Link></h4>
                            {cat?.subcategories?.length > 0 &&
                                <ul>
                                    {cat?.subcategories?.map((subCat, index) => (
                                        <li key={index}><Link to={`/products-by-category/search?category=${cat.name}&subcategory=${subCat?.name}`} className='text-black text-sm'>{subCat?.name}</Link></li>
                                    ))}
                                </ul>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default CategoriesMenu