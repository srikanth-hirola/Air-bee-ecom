import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import AllEvents from '../../../components/ShopComponents/Events/AllEvents'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopAllEvents = () => {
    return (
        <div>
            <DashboardHeader active={1}/>
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={10} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <AllEvents active={10}/>
                </div>
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopAllEvents