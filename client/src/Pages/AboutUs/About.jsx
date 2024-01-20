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

export const About = () => {
    return (
        <div>
            <DronesHeader />
            <AboutPageOne />
            <AboutPageTwo />
            <AboutPageThree />
            <AboutPageFour />
            <AboutPageFive />
            <AboutData />
            <AboutTop />
            <AboutFaq />
        </div>
    )
}
