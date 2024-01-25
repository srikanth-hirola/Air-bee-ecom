import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import RequestedProductsShop from '../../../components/ShopComponents/Products/RequestedProductsShop';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopAllProducts2 = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={11} />
                </div>
                <RequestedProductsShop active={1} />
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopAllProducts2
