import React, { useState } from 'react'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesHeader2 from '../components/Headers/DronesHeader2'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import usePageSEOHandle from '../hooks/Site-config/usePageSEOHandle'
import SEOHelmet from '../components/SEOHelmet'

const RefundPolicy = () => {
  const [seoDetails, setSEODetails] = useState()
  usePageSEOHandle({ pageName: "refund-policySEO", setState: setSEODetails })

  return (
    <>
      <SEOHelmet seoDetails={seoDetails} />
      <DronesHeader />
      <DronesHeader2 />
      <h1>Refund Policy</h1>
      <p>
        Welcome to AirBee Technologies. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
      </p>
      <DronesFooter />
    </>
  )
}

export default RefundPolicy