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
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={18} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <ReturnOrders active={22} />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
}

export default ReturnOrdersPage