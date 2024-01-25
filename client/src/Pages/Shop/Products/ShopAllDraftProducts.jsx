import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import AllDraftProducts from '../../../components/ShopComponents/Products/AllDraftProducts';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopAllDraftProducts = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={7} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <AllDraftProducts active={7}/>
                </div>
            </div>
            <DronesFooter/>
        </div>
    );
}

export default ShopAllDraftProducts
