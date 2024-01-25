import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import CategoryPage from '../../../components/ShopComponents/Categories/CategoryPage';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ShopCategories = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={11} />
                </div>
                <CategoryPage />
            </div>
            <DronesFooter/>
        </div>
    );
};

export default ShopCategories;
