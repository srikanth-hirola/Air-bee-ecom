import React from 'react';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import Couriers from '../../../components/ShopComponents/Couriers/Couriers';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';

const CouriersPage = () => {
    return (
        <div className='container-xxl container-xl'>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={19} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <Couriers active={23} />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
};

export default CouriersPage;
