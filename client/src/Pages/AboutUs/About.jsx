import React from 'react'
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
// import AboutUsTeam from '../../components/AboutUs/AboutUsTeam'

export const About = () => {
    return (
        <div>
            <DronesHeader />
            <DronesHeader2/>
            <AboutUsBanner/>
            <AboutPageOne />
            <AboutPageTwo />
            <AboutPageThree />
            <AboutPageFour />
            <AboutPageFive />
            <AboutData />
            {/* <AboutUsTeam/> */}
            <AboutTop />
            {/* <DronesTestimonialSwiper/> */}
            <AboutFaq />
            <ContactProduct1/>
            <DronesFooter/>
        </div>
    )
}
