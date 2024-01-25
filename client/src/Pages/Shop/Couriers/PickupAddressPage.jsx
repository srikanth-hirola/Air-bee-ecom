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
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex">
                    <PickupAddres />
                </div>
            </div>
            <DronesFooter/>
        </div>
    );
}

export default PickupAddressPage