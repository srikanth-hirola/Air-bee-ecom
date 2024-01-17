import React from 'react'

const Sku = ({ sku }) => {

    return (
        <div className='laptop-productdetails-sku'>
            <h6>Sku:</h6>
            <p>{sku}</p>
        </div>
    )
}

export default Sku