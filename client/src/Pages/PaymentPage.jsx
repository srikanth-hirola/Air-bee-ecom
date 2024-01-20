import React from 'react'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'
import Payment from '../components/Payment/Payment'
import DronesHeader from '../components/Headers/DronesHeader'

const PaymentPage = () => {
    return (
        <div className='w-full min-h-screen bg-[#f6f9fc]'>
            <DronesHeader />
            <CheckoutSteps active={2} />
            <Payment />
        </div>
    )
}

export default PaymentPage