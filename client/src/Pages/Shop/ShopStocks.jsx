import React from 'react';
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import NewShopStockTable from '../../components/ShopComponents/Stocks/NewShopStockTable';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';

const ShopStocks = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={39} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    {/* <ShopStockTable /> */}
                    <NewShopStockTable />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
};

export default ShopStocks;
