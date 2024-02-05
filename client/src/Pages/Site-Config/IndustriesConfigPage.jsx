import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import IndustriesConfig from '../../components/ShopComponents/SiteConfig/Industries/IndustriesConfig'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'

const IndustriesConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={46} />
                </div>
                <div className='w-[100%]'>
                    <IndustriesConfig />
                </div>
            </div>
        </div>
    )
}

export default IndustriesConfigPage