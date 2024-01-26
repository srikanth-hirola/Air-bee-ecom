import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import AllCoupons from '../../../components/ShopComponents/Coupans/AllCoupons'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'


const ShopAllCoupouns = () => {
    return (
        <div>
            <DashboardHeader active={0} />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={36} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <AllCoupons />
                </div>
            </div>
            <DronesFooter />
        </div>
    )
}

export default ShopAllCoupouns