import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import { EventsConfig } from '../../components/ShopComponents/SiteConfig/Events/EventsConfig';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';


const EventsConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={26} />
                </div>
                <EventsConfig active={26} />
            </div>
            <DronesFooter />
        </div>
    );
}

export default EventsConfigPage