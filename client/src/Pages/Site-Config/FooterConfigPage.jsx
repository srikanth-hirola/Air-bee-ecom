import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'
import FooterConfig from '../../components/ShopComponents/SiteConfig/Footer/FooterConfig'

const FooterConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={52} />
                </div>
                <FooterConfig />
            </div>
            <DronesFooter />
        </div>
    )
}

export default FooterConfigPage