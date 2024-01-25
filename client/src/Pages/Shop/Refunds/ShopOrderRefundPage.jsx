import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import OrderRefundDetails from '../../../components/ShopComponents/Refunds/OrderRefundDetails';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';

const ShopOrderRefundPage = () => {
    return (
        <div>
            <DashboardHeader />
            <OrderRefundDetails />
            {/* <Footer /> */}
            <DronesFooter/>
        </div>
    )
}

export default ShopOrderRefundPage