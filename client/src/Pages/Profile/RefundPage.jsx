import React, { useState } from 'react'
import RefundTabs from '../../components/Profile/RefundTabs'
import SideBar from '../../components/Profile/SideBar'
import DronesHeader from '../../components/Headers/DronesHeader'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'
import DronesHeader2 from '../../components/Headers/DronesHeader2'
import usePageSEOHandle from '../../hooks/Site-config/usePageSEOHandle'
import SEOHelmet from '../../components/SEOHelmet'

const RefundPage = () => {
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "refundSEO", setState: setSEODetails })

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            <DronesHeader />
            <DronesHeader2 />
            <div className='RefundPage-parent'>

                <div className='RefundPage-main-content'>
                    <div className="row">
                        <div className="col-md-12 col-lg-3">
                            <SideBar />
                        </div>
                        <div className='col-md-12 col-lg-9'>
                            <RefundTabs />
                        </div>
                    </div>
                </div>
            </div>
            <DronesFooter />

        </>
    )
}

export default RefundPage