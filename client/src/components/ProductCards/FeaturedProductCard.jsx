import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProductCard = ({ data1 }) => {
    return (
        <div className='featured-product-card'>
            <Link to={`${`/product/${data1?._id}`}`}>
                <div className='Dronecategory-content'>
                    <div className='Dronecategory-image'>
                        <img src={`${data1?.mainImage?.url}`} alt="product" />
                    </div>
                    <div className='Dronecategory-text'>
                        <strong>{data1?.name?.length > 25
                            ? data1?.name.slice(0, 25) + '...'
                            : data1?.name}</strong>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedProductCard