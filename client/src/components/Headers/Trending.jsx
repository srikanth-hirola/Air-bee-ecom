import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProductDeals from '../../hooks/useProductDeals'
import { useSelector } from 'react-redux';

const Trending = () => {
    const { allProducts } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.category)
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);

    const { getBestDeals } = useProductDeals();

    useEffect(() => {
        getBestDeals({ allProducts, setData })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts])


    useEffect(() => {
        let updatedState = [...categories];
        // eslint-disable-next-line array-callback-return
        data?.map((product) => {
            let found = category?.find((cat) => cat?._id === product?.category)
            if (found) {
                let foundInState = categories?.find((cat) => cat?.name === found?.category)
                if (!foundInState) {
                    updatedState.push(found)
                }
            }
        })
        let newArr = new Set(updatedState);
        setCategories(Array.from(newArr))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, data])


    return (
        <li className="menu-item-has-children">
            <Link to="#" className='trending'>Trending <i className="fa fa-angle-down"></i></Link>
            <div className="sub-menu mega-menu mega-menu-column-4">
                {categories?.slice(0, 4).map((product, i) => (
                    <div className="list-item text-center" key={i}>
                        <Link to={`/products-by-category/search?category=${product.name}`}>
                            <img
                                src={product?.CatImg?.url}
                                alt="Fashion"
                            />
                            <h4 className="title">{product?.name}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </li>
    )
}

export default Trending