import React from 'react'
import useFetchCategoryHandler from '../../hooks/categories/useFetchCategoryHandler'

const GetCategory = ({ category }) => {
    const { fetchCategory } = useFetchCategoryHandler()

    return (
        <div className='laptop-productdetails-sku'>
            <h6>Category: </h6>
            <p>{fetchCategory(category)?.name}</p>
        </div>
    )
}

export default GetCategory