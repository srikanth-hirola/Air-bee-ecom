import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import ShipOrders from '../Shipment/ShipOrders';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const OrdersPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={18} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <ShipOrders active={21} />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
};

export default OrdersPage;
