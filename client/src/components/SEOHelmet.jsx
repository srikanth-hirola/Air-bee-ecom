import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHelmet = ({ seoDetails }) => {
    return (
        <Helmet>
            <title>{seoDetails?.metaTitle}</title>
            <meta name='description' content={seoDetails?.metaDescription} data-rh="true" />
        </Helmet>
    )
}

export default SEOHelmet