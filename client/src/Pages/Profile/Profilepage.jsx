import React, { useState } from 'react'
import SideBar from '../../components/Profile/SideBar';
import DronesHeader from '../../components/Headers/DronesHeader';
import ProfileDetails from '../../components/Profile/ProfileDetails';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';
import DronesHeader2 from '../../components/Headers/DronesHeader2';
import usePageSEOHandle from '../../hooks/Site-config/usePageSEOHandle';
import SEOHelmet from '../../components/SEOHelmet';

const Profilepage = () => {
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "profileSEO", setState: setSEODetails })

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            <DronesHeader />
            <DronesHeader2 />
            <div className='Profilepage-parent'>
                <div className='Profilepage-main-content'>
                    <div className="row">
                        <div className="col-md-12 col-lg-3">
                            <SideBar />
                        </div>
                        <div className='col-md-12 col-lg-9'>
                            <ProfileDetails />
                        </div>
                    </div>
                </div>
            </div>
            <DronesFooter />
        </>
    )
}

export default Profilepage