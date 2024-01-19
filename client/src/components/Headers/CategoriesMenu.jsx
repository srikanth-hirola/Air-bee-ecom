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
        console.log(category)
    }, [category])


    return (
        <li className="menu-item-has-children">
            <Link to="#">Collections <i className="fa fa-angle-down"></i></Link>
            <div className="sub-menu mega-menu mega-menu-column-4 flex">
                <div className='w-[70%] flex flex-wrap justify-start gap-4 cat-menu'>
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


                <div className="list-item w-[20%] h-full">
                    <img className='w-full h-full object-cover'
                        src="https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                        alt="Chair"
                    />
                </div>
            </div>
        </li>
    )
}

export default CategoriesMenu