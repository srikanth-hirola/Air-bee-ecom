import React from 'react'
import { OrderPlace } from './OrderPlace'
import DronesHeader from '../../components/Headers/DronesHeader'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'

const OrderSuccess = () => {
    return (
        <div>
            <DronesHeader />
            <OrderPlace />
            <DronesFooter/>
        </div>
    )
}

export default OrderSuccess