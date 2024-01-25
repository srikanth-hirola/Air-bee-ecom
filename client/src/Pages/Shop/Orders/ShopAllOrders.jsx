import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import AllOrders from '../../../components/ShopComponents/Orders/AllOrders';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';

const ShopAllOrders = () => {
    return (
        <div>
            <DashboardHeader active={3}/>
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex">
                    <AllOrders active={1} />
                </div>
            </div>
            <DronesFooter/>
        </div>
    );
};

export default ShopAllOrders;
