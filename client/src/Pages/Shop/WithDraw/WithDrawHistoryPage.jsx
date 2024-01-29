import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import { WithDrawHistory } from '../../../components/ShopComponents/WithDraw/WithDrawHistory';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';

export const WithDrawHistoryPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={18} />
                </div>
                <div className="w-full justify-center flex">
                    <WithDrawHistory active={18} />
                </div>
            </div>
            <DronesFooter/>
        </div>
    );
}
