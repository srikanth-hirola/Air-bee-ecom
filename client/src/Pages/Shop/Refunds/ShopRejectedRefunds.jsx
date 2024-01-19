import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import AllRefundOrders from '../../../components/ShopComponents/Refunds/AllRefundOrders';


const ShopRejectedRefunds = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={10} />
                </div>
                <div className="w-full justify-center flex">
                    <AllRefundOrders active={4} />
                </div>
            </div>
        </div>
    );
};

export default ShopRejectedRefunds;
