import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../../utils/Loader';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { category, isLoading } = useSelector((state) => state.category)

    return (
        <div className="col-md-3">
            <div className="DronesBanner-sub1">
                {isLoading ?
                    <Loader /> :
                    <ul>
                        {category?.length > 0 ?
                            category?.map((item, i) => (
                                <Link key={i} to={`/products-by-category/search?category=${item.name}`}>
                                    <li>{item?.name}</li>
                                </Link>
                            ))
                            : <p>No Categories Exist</p>}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Categories

