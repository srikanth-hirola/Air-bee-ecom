import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import OrderDetails from '../../../components/ShopComponents/Orders/OrderDetails'


const ShopOrderDetails = () => {
    return (
        <div>
            <DashboardHeader />
            <OrderDetails />
            {/* <Footer /> */}
        </div>
    )
}

export default ShopOrderDetails