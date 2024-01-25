import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import CategoryPage from '../../../components/ShopComponents/Categories/CategoryPage';


const ShopCategories = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={11} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                <CategoryPage />
                </div>
            </div>
        </div>
    );
};

export default ShopCategories;
