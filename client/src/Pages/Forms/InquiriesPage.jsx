import React from 'react';
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import Inquiries from '../../components/ShopComponents/Forms/Inquiries';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';



const InquiriesPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={28} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <Inquiries />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
};

export default InquiriesPage;
