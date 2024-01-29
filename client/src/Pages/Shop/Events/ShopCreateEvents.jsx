import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import CreateEvent from '../../../components/ShopComponents/Events/CreateEvent'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopCreateEvents = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-center justify-between w-full dasboard-user-width-mobile">
                <div className="w-[330px]">
                    <DashboardSideBar active={11} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <CreateEvent active={11}/>
                </div>
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopCreateEvents