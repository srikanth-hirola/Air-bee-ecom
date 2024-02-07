import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import PagesSEO from '../../components/ShopComponents/SiteConfig/PageSEO/PagesSEO'

const PageSEOConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={48} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <PagesSEO />
                </div>
            </div>
        </div>
    )
}

export default PageSEOConfigPage