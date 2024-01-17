import React from 'react'
import { Link } from 'react-router-dom'

const RecommendedProductCard = ({ data1 }) => {
    return (
        <div className="col-sm-6 col-md-2 recommended-product-card">
            <Link to={`${`/product/${data1?._id}`}`}>
                <div className='DronesRecommendedItems-content'>
                    <div className='DronesRecommendedItems-image'>
                        <img src={`${data1?.mainImage?.url}`} alt="product" />
                    </div>
                    <div className='DronesRecommendedItems-text'>
                        <strong>{data1?.name?.length > 25
                            ? data1?.name.slice(0, 25) + '...'
                            : data1?.name}</strong>
                    </div>
                    <div className='DronesRecommendedItems-subtext'>
                        <p>{data1?.description?.length > 25
                            ? data1?.description.slice(0, 25) + '...'
                            : data1?.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RecommendedProductCard