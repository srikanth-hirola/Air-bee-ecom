import React from 'react'

const Counter = ({ count, incrementCount, decrementCount }) => {

    return (
        <div className="col-md-3 col-sm-4 col-6">
            <div className='laptop-productdetails-count'>
                <p onClick={decrementCount}>-</p>
                <p>{count}</p>
                <p onClick={incrementCount}>+</p>
            </div>
        </div>
    )
}

export default Counter