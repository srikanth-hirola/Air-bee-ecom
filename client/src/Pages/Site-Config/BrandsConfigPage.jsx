import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import BrandsConfig from '../../components/ShopComponents/SiteConfig/Brands/BrandsConfig'

const BrandsConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={44} />
                </div>
                <div className='w-[100%]'>
                    <BrandsConfig />
                </div>
            </div>
        </div>
    )
}

export default BrandsConfigPage