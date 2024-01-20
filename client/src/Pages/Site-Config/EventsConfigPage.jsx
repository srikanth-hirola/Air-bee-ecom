import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import { EventsConfig } from '../../components/ShopComponents/SiteConfig/Events/EventsConfig';


export const EventsConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={13} />
                </div>
                <EventsConfig />
            </div>
        </div>
    );
}
