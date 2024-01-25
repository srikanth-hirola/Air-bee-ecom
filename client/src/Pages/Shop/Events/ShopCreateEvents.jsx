import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import CreateEvent from '../../../components/ShopComponents/Events/CreateEvent'


const ShopCreateEvents = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-center justify-between w-full">
                <div className="w-[330px]">
                    <DashboardSideBar active={11} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <CreateEvent active={11}/>
                </div>
            </div>
        </div>
    )
}

export default ShopCreateEvents