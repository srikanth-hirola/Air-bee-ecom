import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import OrderDetails from '../../../components/ShopComponents/Orders/OrderDetails'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'


const ShopOrderDetails = () => {
    return (
        <div>
            <DashboardHeader />
            <OrderDetails />
            {/* <Footer /> */}
            <DronesFooter/>
        </div>
    )
}

export default ShopOrderDetails