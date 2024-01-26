import React from 'react'
import { OrderPlace } from './OrderPlace'
import DronesHeader from '../../components/Headers/DronesHeader'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'
import DronesHeader2 from '../../components/Headers/DronesHeader2'

const OrderSuccess = () => {
    return (
        <div>
            <DronesHeader />
            <DronesHeader2/>
            <OrderPlace />
            <DronesFooter/>
        </div>
    )
}

export default OrderSuccess