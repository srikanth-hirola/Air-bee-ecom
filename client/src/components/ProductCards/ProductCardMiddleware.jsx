/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import RecommendedProductCard from './RecommendedProductCard'
import useProductCard from '../../hooks/useProductCard';

const ProductCardMiddleware = ({ data1 }) => {

    const [data, setData] = useState(null);
    const [active, setActive] = useState(false);
    const [seller, setSeller] = useState(null);
    const [loading, setLoading] = useState(true);

    useProductCard({ data1, data, setData, setActive, setSeller, setLoading })

    return (
        <>
            {data &&
                <RecommendedProductCard data={data} active={active} />
            }
        </>
    )
}

export default ProductCardMiddleware