import React from 'react'
import { StyleConfig } from '../../utils/StyleConfig'

const Price = ({ originalPrice, discountPrice }) => {

    const styles = StyleConfig();

    return (
        <div className='laptop-productdetails-price'>
            <h5>{styles?.currency?.Symbol}&nbsp;{discountPrice}</h5>
            <del>{styles?.currency?.Symbol}&nbsp;{originalPrice}</del>
            <h6>{parseInt(((originalPrice - discountPrice) / originalPrice) * 100)
            }% OFF</h6>
        </div>
    )
}

export default Price