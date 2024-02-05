import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import AboutUsConfig from '../../components/ShopComponents/SiteConfig/About/AboutUsConfig'

const AboutUsConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={40} />
                </div>
                <div className='w-[100%]'>
                    <AboutUsConfig />
                </div>
            </div>
        </div>
    )
}

export default AboutUsConfigPage