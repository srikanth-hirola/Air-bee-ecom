import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import QuoteConfig from '../../components/ShopComponents/SiteConfig/Quote/QuoteConfig'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'

const QuoteConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={43} />
                </div>
                <div className='w-[100%]'>
                    <QuoteConfig />
                </div>
            </div>
        </div>
    )
}

export default QuoteConfigPage