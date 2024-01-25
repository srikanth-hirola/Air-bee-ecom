import React from "react";
import DashboardHeader from "../../components/Headers/DashboardHeader";
import DashboardSideBar from "../../components/ShopComponents/Layout/DashboardSideBar";
import ShopSettings from "../../components/ShopComponents/ShopSettings";
import DronesFooter from "../../components/DronesHomepage/DronesFooter";

const ShopSettingsPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={11} />
                </div>
                <ShopSettings />
            </div>
            <DronesFooter/>
        </div>
    );
};

export default ShopSettingsPage;
