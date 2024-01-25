import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import RequestedProductsShop from '../../../components/ShopComponents/Products/RequestedProductsShop';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopRejectedProducts = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={11} />
                </div>
                <RequestedProductsShop active={3} />
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopRejectedProducts
