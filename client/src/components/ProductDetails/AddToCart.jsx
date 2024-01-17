import React from 'react'

const AddToCart = ({ addToCart, id }) => {
    return (
        <div className="col-lg-6 col-md-5 col-sm-4 col-6">
            <button className='laptop-productdetails-cart' onClick={(e) => addToCart({ e, id })}>
                <h6>ADD TO CART</h6>
                {/* <IoCartOutline className='icon' /> */}
            </button>
        </div>
    )
}

export default AddToCart