import React from 'react'
import { Link } from 'react-router-dom'
import MainCardHover from './Hovers/MainCardHover'

const RecommendedProductCard = ({ data1 }) => {
    return (
        <div className="col-sm-6 col-md-2 recommended-product-card">
           
                <div className='DronesRecommendedItems-content'>
                    <div className='DronesRecommendedItems-image group relative'>
                        <img src={`${data1?.mainImage?.url}`} alt="product" />
                        <MainCardHover data={data1}/>
                    </div>
                    <Link to={`${`/product/${data1?._id}`}`}>
                    <>
                    <div className='DronesRecommendedItems-text'>
                        <strong >{data1?.name?.length > 25
                            ? data1?.name.slice(0, 25) + '...'
                            : data1?.name}</strong>
                    </div>
                    <div className='DronesRecommendedItems-text-price'>
                    <p> ₹ 456</p>
                    <p><del>₹8,495</del></p>
                    </div>
                    <div className='DronesRecommendedItems-subtext'>
                        <p>{data1?.description?.length > 25
                            ? data1?.description.slice(0, 25) + '...'
                            : data1?.description}</p>
                    </div>
                    </>
                    </Link>
                </div>
            
        </div>
    )
}

export default RecommendedProductCard