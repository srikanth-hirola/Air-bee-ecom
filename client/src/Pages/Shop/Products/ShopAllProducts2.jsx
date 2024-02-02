import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import RequestedProductsShop from '../../../components/ShopComponents/Products/RequestedProductsShop';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopAllProducts2 = () => {
    return (
        <div>
            <DashboardHeader active={2} />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={8} />
                </div>
                <div className='dashboard-side-bar-data-view w-full justify-center flex'>
                    <RequestedProductsShop active={1} />
                </div>
            </div>
            <DronesFooter />
        </div>
    )
}

export default ShopAllProducts2
