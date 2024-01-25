import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import PickupAddres from '../../../components/ShopComponents/Couriers/PickupAddres'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';

const PickupAddressPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={24} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <PickupAddres active={24}/>
                </div>
            </div>
            <DronesFooter/>
        </div>
    );
}

export default PickupAddressPage