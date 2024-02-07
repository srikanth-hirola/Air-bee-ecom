import React, { useState } from 'react'
import { AboutPageOne } from '../../components/AboutUs/AboutPageOne'
import { AboutPageTwo } from '../../components/AboutUs/AboutPageTwo'
import { AboutPageThree } from '../../components/AboutUs/AboutPageThree'
import { AboutPageFour } from '../../components/AboutUs/AboutPageFour'
import { AboutPageFive } from '../../components/AboutUs/AboutPageFive'
import { AboutData } from '../../components/AboutUs/AboutData'
import { AboutTop } from '../../components/AboutUs/AboutTop'
import { AboutFaq } from '../../components/AboutUs/AboutFaq'
import DronesHeader from '../../components/Headers/DronesHeader'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'
import { ContactProduct1 } from '../../components/Checkout/ContactProduct1'
import AboutUsBanner from '../../components/AboutUs/AboutUsBanner'
import DronesHeader2 from '../../components/Headers/DronesHeader2'
import { StyleConfig } from '../../utils/StyleConfig'
import Loader from '../../utils/Loader'
import usePageSEOHandle from '../../hooks/Site-config/usePageSEOHandle'
import SEOHelmet from '../../components/SEOHelmet'

const About = () => {
    const [isLoading, setLoading] = useState(true);
    const styles = StyleConfig();
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "about-usSEO", setState: setSEODetails, setLoading })

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            {
                isLoading ? <Loader />
                    :
                    <div>
                        <DronesHeader />
                        <DronesHeader2 />
                        <AboutUsBanner content={styles?.aboutUsSecOne} />
                        <AboutPageOne content={styles?.aboutUsSecTwo} />
                        <AboutPageTwo content={styles?.aboutUsSecThree} />
                        <AboutPageThree content={styles?.aboutUsSecFour} />
                        <AboutPageFour content={styles?.aboutUsSecFive} />
                        <AboutPageFive content={styles?.aboutUsSecSix} />
                        <AboutData content={styles?.aboutUsSecSeven} />
                        <AboutTop content={styles?.aboutUsSecEight} />
                        <AboutFaq content={styles?.aboutUsSecNine} />
                        <ContactProduct1 content={styles?.aboutUsSecTen} />
                        <DronesFooter />
                    </div>
            }
        </>
    )
}

export default About