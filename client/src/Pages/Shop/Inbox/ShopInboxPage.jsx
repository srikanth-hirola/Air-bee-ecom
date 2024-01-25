import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import DashboardMessages from '../../../components/ShopComponents/Inbox/DashboardMessages'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'


const ShopInboxPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={8} />
                </div>
                <DashboardMessages />
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopInboxPage