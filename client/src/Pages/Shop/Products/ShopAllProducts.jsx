import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import AllProducts from '../../../components/Products/AllProducts';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';

const ShopAllProducts = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={3} />
                </div>
                <div className="w-full justify-center flex">
                    <AllProducts />
                </div>
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopAllProducts