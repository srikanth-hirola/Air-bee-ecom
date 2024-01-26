import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import DashboardMessages from '../../../components/ShopComponents/Inbox/DashboardMessages'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'


const ShopInboxPage = () => {
    return (
        <div>
            <DashboardHeader active={4} />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={37} />
                </div>
                <DashboardMessages />
            </div>
            <DronesFooter />
        </div>
    )
}

export default ShopInboxPage