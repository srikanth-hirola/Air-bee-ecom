import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import { EditEvent } from '../../../components/ShopComponents/Events/EditEvent'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'


export const EventEditPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex  justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={6} />
                </div>
                <div className="w-full justify-center flex">
                    <EditEvent />
                </div>
            </div>
            <DronesFooter/>
        </div>
    )
}
