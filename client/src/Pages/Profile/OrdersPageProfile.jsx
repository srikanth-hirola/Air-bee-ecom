import React, { useState } from 'react'
import OrderspageTabs from '../../components/Profile/OrderspageTabs'
import SideBar from '../../components/Profile/SideBar';
import DronesHeader from '../../components/Headers/DronesHeader';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';
import DronesHeader2 from '../../components/Headers/DronesHeader2';
import usePageSEOHandle from '../../hooks/Site-config/usePageSEOHandle';
import SEOHelmet from '../../components/SEOHelmet';

const OrdersPageProfile = () => {
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "ordersSEO", setState: setSEODetails })

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            <DronesHeader />
            <DronesHeader2 />
            <div className='Orderspage-parent'>
                {/* <div className='Orderspage-sub1'>
                    <p>Home</p>
                    <p>My Account</p>
                    <p>Personal Info </p>
                </div> */}
                <div className='Orderspage-main-content'>
                    <div className="row">
                        <div className="col-md-12 col-lg-3">
                            <SideBar />
                        </div>
                        <div className='col-md-12 col-lg-9'>
                            <OrderspageTabs />
                        </div>
                    </div>
                </div>
            </div>
            <DronesFooter />
        </>

    )
}

export default OrdersPageProfile