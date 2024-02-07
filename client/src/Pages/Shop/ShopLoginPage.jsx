import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from '../../components/ShopComponents/Auth/ShopLogin';
import usePageSEOHandle from '../../hooks/Site-config/usePageSEOHandle';
import SEOHelmet from '../../components/SEOHelmet';

const ShopLoginPage = () => {
    const navigate = useNavigate();
    const { isSeller, isLoading } = useSelector((state) => state.seller);
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "shop-loginSEO", setState: setSEODetails })

    useEffect(() => {
        if (isSeller === true) {
            navigate(`/dashboard`);
        }
    }, [isLoading, isSeller, navigate])

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            <ShopLogin />
        </>
    )
}

export default ShopLoginPage