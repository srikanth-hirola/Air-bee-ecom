import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import { MiscellaneousConfig } from '../../components/ShopComponents/SiteConfig/Miscellaneous/MiscellaneousConfig';

const MiscellaneousConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={13} />
                </div>
                <MiscellaneousConfig />
            </div>
        </div>
    );
}

export default MiscellaneousConfigPage