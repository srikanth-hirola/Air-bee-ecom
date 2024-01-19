import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import WithdrawMoney from '../../../components/ShopComponents/WithDraw/WithdrawMoney'


const ShopWithDrawMoneyPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={7} />
                </div>
                <WithdrawMoney />
            </div>
        </div>
    )
}

export default ShopWithDrawMoneyPage