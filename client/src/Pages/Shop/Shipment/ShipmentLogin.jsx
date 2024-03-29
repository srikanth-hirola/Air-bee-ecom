import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import ShipLogin from '../../../components/ShopComponents/Shipment/ShipLogin';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShipmentLogin = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={17} />
                </div>
                <div className="w-full justify-center flex items-center ">
                    <ShipLogin active={20} />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
}

export default ShipmentLogin