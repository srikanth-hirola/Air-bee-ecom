import React from 'react'

const StockAvailability = ({ soldOut, limited }) => {

    return (
        <div className='laptop-productdetails-available'>
            <h6>Availability:</h6>
            {soldOut ? <p style={{ color: 'red' }}>{limited}</p> : <>{limited ? <p style={{ color: 'yellowgreen' }}>{limited}</p> : <p>In Stock</p>
            }</>}
        </div>
    )
}

export default StockAvailability