import React, { useState } from 'react';
import { LapProductdet } from '../Product1details/LapProductdet';
import { ProductTapContent } from '../Product1details/ProductTapContent';
import useDetailsPageHandler from '../../hooks/useDetailsPageHandler';
import { Product1Cramp } from '../Product1details/ProductCramp';
import { MobileCase1 } from '../Product1details/MobileCase1';
import { RatedProducts } from '../Product1details/RatedProducts';
import Loader from '../../utils/Loader';
import SEOHelmet from '../SEOHelmet';

const ProductDetailsMain = () => {
    const [data, setData] = useState();
    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(true);

    useDetailsPageHandler({ data, setActive, setData, setLoading });

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {data ? (
                        <>
                            <SEOHelmet seoDetails={{ metaTitle: data?.metaTitle, metaDescription: data?.metaDescription }} />
                            <Product1Cramp name={data?.name} />
                            <LapProductdet data={data} active={active} key={1} />
                            <ProductTapContent data={data} />
                            <MobileCase1 data={data} />
                            <RatedProducts data={data} />
                        </>
                    ) : (
                        <p>No Product Found</p>
                    )}
                </>
            )}
        </>
    );
};

export default ProductDetailsMain;
