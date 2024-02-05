import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import FeaturesConfig from '../../components/ShopComponents/SiteConfig/Features.jsx/FeaturesConfig'

const FeaturesConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={42} />
                </div>
                <div className='w-[100%]'>
                    <FeaturesConfig />
                </div>
            </div>
        </div>
    )
}

export default FeaturesConfigPage