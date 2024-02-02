import React, { useEffect, useState } from 'react'
// import './Drones.css'

import DronesBanner from './DronesBanner';
// import DronesProductsRow1 from './DronesProductsRow1';
// import DronesProductsRow2 from './DronesProductsRow2';
// import DronesProductsRow3 from './DronesProductsRow3';
// import DronesCategories from './DronesCategories';
import DronesRecommendedItems from './DronesRecommendedItems';
import DronesBrandlogos from './DronesBrandlogos';
import DronesFooter from './DronesFooter';
import DronesServices from './DronesServices';
import DronesNewsletter from './DronesNewsletter';
import DronesFlags from './DronesFlags';
import DronesQuotes from './DronesQuotes';
import { DronesTestimonialSwiper } from './DronesTestimonialSwiper';
// import DronesDealsOftheDay from './DronesDealsOftheDay';
import CategoriesHome from '../../Pages/CategoriesHome';
import Products from '../Products/Products';
import EventsHomeTop from '../../Pages/Events/EventsHomeTop';
import EventsHomeBottom from '../../Pages/Events/EventsHomeBottom';
import DronesHeader2 from '../Headers/DronesHeader2';
import DronesHeader from '../Headers/DronesHeader';
import EventsHomeMiddle from '../../Pages/Events/EventsHomeMiddle';
import DronesDirectionSensing from './DronesDirectionSensing';
import { StyleConfig } from '../../utils/StyleConfig';
import Loader from '../../utils/Loader';

const DronesHomepage = () => {

  const [isLoading, setLoading] = useState(true);

  const styles = StyleConfig();

  useEffect(() => {
    setLoading(false)
  }, [styles])


  return (
    <>
      {isLoading ? <Loader /> : <>
        <DronesHeader />
        <DronesHeader2 />
        <DronesBanner content={styles?.MainBannerContent} />
        <EventsHomeTop content={styles?.eventTop} />
        <DronesDirectionSensing featureSecOne={styles?.featureSecOne} featureSecTwo={styles?.featureSecTwo} />
        {/* <DronesEyePlayground/> */}
        {/* <DronesProductsRow2 /> */}
        <CategoriesHome />
        {/* <DronesProductsRow3 /> */}
        <Products title={styles?.headingsContent?.featuredProducts} />
        <EventsHomeMiddle content={styles?.eventMiddle} />
        <DronesQuotes content={styles?.quoteContent} />
        <DronesRecommendedItems title={styles?.headingsContent?.recommendedItems} />
        <DronesBrandlogos content={styles?.brands} title={styles?.headingsContent?.brandsTitle} />
        <DronesTestimonialSwiper content={styles?.testimonialContent} />
        <DronesServices content={styles?.industriesContent} title={styles?.headingsContent?.industires} />
        <DronesFlags content={styles?.regionsContent} title={styles?.headingsContent?.regionsTitle} />
        <EventsHomeBottom content={styles?.eventBottom} />
        <DronesNewsletter content={styles?.newsLetter} />
        <DronesFooter />
      </>}
    </>

  )
}

export default DronesHomepage;