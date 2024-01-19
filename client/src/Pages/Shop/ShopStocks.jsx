import React from 'react';
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import NewShopStockTable from '../../components/ShopComponents/Stocks/NewShopStockTable';

const ShopStocks = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex">
                    {/* <ShopStockTable /> */}
                    <NewShopStockTable />
                </div>
            </div>
        </div>
    );
};

export default ShopStocks;