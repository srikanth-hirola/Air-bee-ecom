import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import RequestedProductsShop from '../../../components/ShopComponents/Products/RequestedProductsShop';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopApprovedProducts = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={11} />
                </div>
                <RequestedProductsShop active={2} />
            </div>
            <DronesFooter/>
        </div>
    );
};

export default ShopApprovedProducts;
