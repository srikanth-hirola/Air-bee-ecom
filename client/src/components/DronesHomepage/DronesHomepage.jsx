import React from 'react'
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

const DronesHomepage = () => {
  return (
    <>
      <DronesHeader />
      <DronesHeader2 />
      <DronesBanner />
      <EventsHomeTop />
      <DronesDirectionSensing />
      {/* <DronesEyePlayground/> */}
      {/* <DronesProductsRow2 /> */}
      <CategoriesHome />
      {/* <DronesProductsRow3 /> */}
      <Products />
      <EventsHomeMiddle />
      <DronesQuotes />
      <DronesRecommendedItems />
      <DronesBrandlogos />
      <DronesTestimonialSwiper />
      <DronesServices />
      <DronesFlags />
      <EventsHomeBottom />
      <DronesNewsletter />
      <DronesFooter />
    </>

  )
}

export default DronesHomepage;