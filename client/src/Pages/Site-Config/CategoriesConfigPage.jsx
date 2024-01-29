import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import { CategoriesConfig } from '../../components/ShopComponents/SiteConfig/Categories/CategoriesConfig';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';

export const CategoriesConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={25} />
                </div>
                <div className='w-full justify-center flex dashboard-side-bar-data-view'>
                <CategoriesConfig active={25}/>
                </div>
            </div>
            <DronesFooter/>
        </div>
    );
}