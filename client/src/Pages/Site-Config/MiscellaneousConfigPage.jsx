import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import { MiscellaneousConfig } from '../../components/ShopComponents/SiteConfig/Miscellaneous/MiscellaneousConfig';

export const MiscellaneousConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={27} />
                </div>
                <div className='w-full justify-center flex dashboard-side-bar-data-view'>
                <MiscellaneousConfig active={27}/>
                </div>
                
            </div>
        </div>
    );
}
