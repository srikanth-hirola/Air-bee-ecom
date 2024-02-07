import React, { useState } from 'react'
import { OrderPlace } from './OrderPlace'
import DronesHeader from '../../components/Headers/DronesHeader'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'
import DronesHeader2 from '../../components/Headers/DronesHeader2'
import usePageSEOHandle from '../../hooks/Site-config/usePageSEOHandle'
import SEOHelmet from '../../components/SEOHelmet'

const OrderSuccess = () => {
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "order-successSEO", setState: setSEODetails })

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            <DronesHeader />
            <DronesHeader2 />
            <OrderPlace />
            <DronesFooter />
        </>
    )
}

export default OrderSuccess