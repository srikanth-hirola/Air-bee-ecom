import React from 'react'
import Ratings from '../Shop/Ratings'

const GetPopularity = ({ data }) => {
    let i = data?.ratings;
    return (
        <div className='laptop-productdetails-rating'>
            <div className='product-star product-brand-span flex'> <Ratings rating={i} /></div>
            <div className='flex align-items-center'>
                <h6>{i ? i : 0} Star Rating</h6>
                <p>({data?.reviews?.length} User feedback)</p>
            </div>
        </div>
    )
}

export default GetPopularity