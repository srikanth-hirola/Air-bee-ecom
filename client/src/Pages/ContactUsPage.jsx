import React from 'react'
import { ContactUsDetails } from '../components/ContactUs/ContactUsDetails'
import { ContactProduct1 } from '../components/Checkout/ContactProduct1'
import DronesHeader from '../components/Headers/DronesHeader'

const ContactUsPage = () => {
    return (
        <div>
            <DronesHeader />
            <ContactUsDetails />
            <ContactProduct1 />
        </div>
    )
}

export default ContactUsPage