import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import { MiscellaneousConfig } from '../../components/ShopComponents/SiteConfig/Miscellaneous/MiscellaneousConfig';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';

const MiscellaneousConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={27} />
                </div>
                <div className='w-full justify-center flex dashboard-side-bar-data-view'>
                <MiscellaneousConfig active={27}/>
                </div>
                
            </div>
            <DronesFooter/>
        </div>
    );
}

export default MiscellaneousConfigPage