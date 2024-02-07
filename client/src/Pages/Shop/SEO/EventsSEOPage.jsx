import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';
import EventsSEO from '../../../components/ShopComponents/Products/SEO/EventsSEO';

const EventsSEOPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={55} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <EventsSEO />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
}

export default EventsSEOPage