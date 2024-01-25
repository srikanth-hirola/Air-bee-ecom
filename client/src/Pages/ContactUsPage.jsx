import React from 'react'
import { ContactUsDetails } from '../components/ContactUs/ContactUsDetails'
import { ContactProduct1 } from '../components/Checkout/ContactProduct1'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesFooter from '../components/DronesHomepage/DronesFooter'

const ContactUsPage = () => {
    return (
        <div>
            <DronesHeader />
            <ContactUsDetails />
            <ContactProduct1 />
            <DronesFooter/>
        </div>
    )
}

export default ContactUsPage