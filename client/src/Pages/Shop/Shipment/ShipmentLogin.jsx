import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import ShipLogin from '../../../components/ShopComponents/Shipment/ShipLogin';


const ShipmentLogin = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={20} />
                </div>
                <div className="w-full justify-center flex items-center ">
                    <ShipLogin active={20}/>
                </div>
            </div>
        </div>
    );
}

export default ShipmentLogin