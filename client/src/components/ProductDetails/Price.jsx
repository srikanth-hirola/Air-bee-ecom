import React from 'react'
import { StyleConfig } from '../../utils/StyleConfig'
import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';

const Price = ({ originalPrice, discountPrice }) => {

    const styles = StyleConfig();
    const { ConvertCurrency } = useGetCurrencyConversion();

    return (
        <div className='laptop-productdetails-price'>
            <h5>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(discountPrice)}</h5>
            <del>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(originalPrice)}</del>
            <h6>{parseInt(((originalPrice - discountPrice) / originalPrice) * 100)
            }% OFF</h6>
        </div>
    )
}

export default Price