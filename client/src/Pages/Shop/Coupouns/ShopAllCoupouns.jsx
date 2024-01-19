import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import AllCoupons from '../../../components/ShopComponents/Coupans/AllCoupons'


const ShopAllCoupouns = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={9} />
                </div>
                <div className="w-full justify-center flex">
                    <AllCoupons />
                </div>
            </div>
        </div>
    )
}

export default ShopAllCoupouns