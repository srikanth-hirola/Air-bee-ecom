import React from "react";
import DashboardHeader from "../../components/Headers/DashboardHeader";
import DashboardSideBar from "../../components/ShopComponents/Layout/DashboardSideBar";
import DashboardHero from "../../components/ShopComponents/Dashboards/DashboardHero";
import DronesFooter from "../../components/DronesHomepage/DronesFooter";

const ShopDashboardPage = () => {
    return (
        <div >
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={0} />
                </div>
                <DashboardHero />
            </div>
            <DronesFooter/>
        </div>
    );
};

export default ShopDashboardPage;
