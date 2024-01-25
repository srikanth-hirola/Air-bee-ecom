import React from 'react'

import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import ReturnOrders from '../../../components/ShopComponents/Shipment/ReturnOrders';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';

const ReturnOrdersPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex">
                    <ReturnOrders />
                </div>
            </div>
            <DronesFooter/>
        </div>
    );
}

export default ReturnOrdersPage