import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import NewsLetterConfig from '../../components/ShopComponents/SiteConfig/NewsLetter/NewsLetterConfig'

const NewsLetterConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={48} />
                </div>
                <div className='w-[100%]'>
                    <NewsLetterConfig />
                </div>
            </div>
        </div>
    )
}

export default NewsLetterConfigPage