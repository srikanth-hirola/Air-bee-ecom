import React, { useState } from 'react'
import { ContactUsDetails } from '../components/ContactUs/ContactUsDetails'
import { ContactProduct1 } from '../components/Checkout/ContactProduct1'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import DronesHeader2 from '../components/Headers/DronesHeader2'
import Loader from '../utils/Loader'
import usePageSEOHandle from '../hooks/Site-config/usePageSEOHandle'
import SEOHelmet from '../components/SEOHelmet'

const ContactUsPage = () => {
    const [isLoading, setLoading] = useState(true);
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "contact-usSEO", setState: setSEODetails, setLoading })
    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            {
                isLoading ? <Loader />
                    :
                    <>
                        <DronesHeader />
                        <DronesHeader2 />
                        <ContactUsDetails />
                        <ContactProduct1 />
                        <DronesFooter />
                    </>
            }
        </>
    )
}

export default ContactUsPage