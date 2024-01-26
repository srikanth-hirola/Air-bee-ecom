/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import useProductCard from '../../hooks/useProductCard';
import FeaturedProductCard from './FeaturedProductCard';


const FeaturedCardMiddleware = ({ data1 }) => {
    const [data, setData] = useState(null);
    const [active, setActive] = useState(false);
    const [seller, setSeller] = useState(null);
    const [loading, setLoading] = useState(true);

    useProductCard({ data1, data, setData, setActive, setSeller, setLoading })

    return (
        <>
            {data &&
                <FeaturedProductCard data={data} active={active} />
            }
        </>
    )
}

export default FeaturedCardMiddleware