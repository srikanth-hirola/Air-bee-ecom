import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import OrderRefundDetails from '../../../components/ShopComponents/Refunds/OrderRefundDetails';

const ShopOrderRefundPage = () => {
    return (
        <div>
            <DashboardHeader />
            <OrderRefundDetails />
            {/* <Footer /> */}
        </div>
    )
}

export default ShopOrderRefundPage