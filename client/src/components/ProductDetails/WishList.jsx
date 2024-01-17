import React from 'react'
import FillHeart from '../wishlist/FillHeart'

const WishList = ({ data, click, setClick }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
            <div className='laptop-productdetails-wishlist'>
                <FillHeart data={data} click={click} setClick={setClick} key={1} />
                <h6>Add to Wishlist</h6>
            </div>
        </div>
    )
}

export default WishList