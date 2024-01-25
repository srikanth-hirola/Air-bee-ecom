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
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={5} />
                </div>
                <div className="w-full justify-center flex">
                    <AllEvents />
                </div>
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopAllEvents