import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import { EditEvent } from '../../../components/ShopComponents/Events/EditEvent'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'


const EventEditPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex  justify-between w-full">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={6} />
                </div>
                <div className="w-full justify-center flex">
                    <EditEvent />
                </div>
            </div>
            <DronesFooter />
        </div>
    )
}

export default EventEditPage