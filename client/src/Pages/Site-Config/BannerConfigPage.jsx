import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import BannerConfig from '../../components/ShopComponents/SiteConfig/Banner/BannerConfig'

const BannerConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={41} />
                </div>
                <div className='w-[100%]'>
                    <BannerConfig />
                </div>
            </div>
        </div>
    )
}

export default BannerConfigPage