import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import ShopInfo from '../../components/ShopComponents/ShopInfo';
import ShopProfileData from '../../components/ShopComponents/ShopProfileData';

const ShopHomePage = () => {
    return (
        <>
            <DashboardHeader />
            <div className="ps-container bg-[#f5f5f5]">
                <div className="w-full flex py-10 justify-between">
                    <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh]">
                        <ShopInfo isOwner={true} />
                    </div>
                    <div className="w-[72%] rounded-[4px] overflow-y-scroll h-[90vh] pr-2">
                        <ShopProfileData isOwner={true} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default ShopHomePage