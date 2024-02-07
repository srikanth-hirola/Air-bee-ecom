import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'
import EditEventSEO from '../../../components/ShopComponents/Products/SEO/EditEventSEO'

const EventEditSEOPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={55} />
                </div>
                <EditEventSEO />
            </div>
            <DronesFooter />
        </div>
    )
}

export default EventEditSEOPage