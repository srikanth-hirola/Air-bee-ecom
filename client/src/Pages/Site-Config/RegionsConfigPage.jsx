import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import RegionsConfig from '../../components/ShopComponents/SiteConfig/Regions/RegionsConfig'

const RegionsConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={47} />
                </div>
                <div className='w-[100%]'>
                    <RegionsConfig />
                </div>
            </div>
        </div>
    )
}

export default RegionsConfigPage