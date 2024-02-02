import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import CreateProduct from '../../components/ShopComponents/CreateProduct/CreateProduct';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';

const ShopCreateProduct = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex  justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={6} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <CreateProduct active={6}/>
                </div>
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopCreateProduct