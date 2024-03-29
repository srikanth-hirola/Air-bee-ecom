import React, { useEffect, useState } from 'react'
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
// import { DronesTestimonialSwiper } from '../../components/DronesHomepage/DronesTestimonialSwiper'
import { ContactProduct1 } from '../../components/Checkout/ContactProduct1'
import AboutUsBanner from '../../components/AboutUs/AboutUsBanner'
import DronesHeader2 from '../../components/Headers/DronesHeader2'
import { StyleConfig } from '../../utils/StyleConfig'
import Loader from '../../utils/Loader'
import { Helmet } from 'react-helmet-async'
// import AboutUsTeam from '../../components/AboutUs/AboutUsTeam'

const About = () => {

    const styles = StyleConfig();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    }, [styles])


    return (
        
        <>
        <Helmet>
<title>About Us || Airbee Technologies</title>
<meta name='description' content='Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.'data-rh="true" />

</Helmet>
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