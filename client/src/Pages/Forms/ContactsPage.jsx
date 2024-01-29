import React from 'react';
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import Contacts from '../../components/ShopComponents/Forms/Contacts';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';



const ContactsPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[100%] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={29} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <Contacts />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
};

export default ContactsPage;
