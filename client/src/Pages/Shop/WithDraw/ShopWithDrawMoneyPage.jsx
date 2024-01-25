import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import WithdrawMoney from '../../../components/ShopComponents/WithDraw/WithdrawMoney'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'


const ShopWithDrawMoneyPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={17} />
                </div>
                <WithdrawMoney active={17}/>
            </div>
            <DronesFooter/>
        </div>
    )
}

export default ShopWithDrawMoneyPage