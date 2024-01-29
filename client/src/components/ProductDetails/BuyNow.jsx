import React from 'react'

const BuyNow = ({ buyNowProduct, id }) => {
    return (
        <div className=" col-lg-3 col-md-4 col-sm-4 col-6">
            <button className='laptop-productdetails-buy' onClick={buyNowProduct}>BUY NOW</button>
        </div>
    )
}

export default BuyNow