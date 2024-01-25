import React from 'react'
import RefundTabs from '../../components/Profile/RefundTabs'
import SideBar from '../../components/Profile/SideBar'
import DronesHeader from '../../components/Headers/DronesHeader'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'

const RefundPage = () => {
    return (
        <>
            <DronesHeader />
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
            <DronesFooter/>

        </>
    )
}

export default RefundPage