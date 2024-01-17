import React from 'react'

const GetCategory = ({ category }) => {
    return (
        <div className='laptop-productdetails-sku'>
            <h6>Category: </h6>
            <p>{category}</p>
        </div>
    )
}

export default GetCategory