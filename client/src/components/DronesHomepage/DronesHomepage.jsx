import React, { useState } from 'react'
import DronesBanner from './DronesBanner';
import DronesRecommendedItems from './DronesRecommendedItems';
import DronesBrandlogos from './DronesBrandlogos';
import DronesFooter from './DronesFooter';
import DronesServices from './DronesServices';
import DronesNewsletter from './DronesNewsletter';
import DronesFlags from './DronesFlags';
import DronesQuotes from './DronesQuotes';
import { DronesTestimonialSwiper } from './DronesTestimonialSwiper';
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
import usePageSEOHandle from '../../hooks/Site-config/usePageSEOHandle';
import SEOHelmet from '../SEOHelmet';
import LazyHydrate from "react-lazy-hydration";

const DronesHomepage = () => {
  const [isLoading, setLoading] = useState(true);
  const [seoDetails, setSEODetails] = useState()
  const styles = StyleConfig();
  usePageSEOHandle({ pageName: 'homeSEO', setState: setSEODetails, setLoading })

  return (
    <>

      <SEOHelmet seoDetails={seoDetails} />
      {isLoading ? <Loader /> : <>
        <LazyHydrate whenIdle>
          <DronesHeader />
          <DronesHeader2 />
          <DronesBanner content={styles?.MainBannerContent} />
          {styles?.eventTop ? <EventsHomeTop content={styles?.eventTop} /> : null}
          {styles?.featureSecOne && styles?.featureSecTwo ? <DronesDirectionSensing featureSecOne={styles?.featureSecOne} featureSecTwo={styles?.featureSecTwo} /> : null}
          <CategoriesHome />
          {styles?.headingsContent?.featuredProducts ? <Products title={styles?.headingsContent?.featuredProducts} /> : null}
          <EventsHomeMiddle content={styles?.eventMiddle} />
          {styles?.quoteContent ? <DronesQuotes content={styles?.quoteContent} /> : null}
          {styles?.headingsContent?.recommendedItems ? <DronesRecommendedItems title={styles?.headingsContent?.recommendedItems} /> : null}
          {styles?.headingsContent?.brandsTitle ? <DronesBrandlogos content={styles?.brands} title={styles?.headingsContent?.brandsTitle} /> : null}
          {styles?.testimonialContent ? <DronesTestimonialSwiper content={styles?.testimonialContent} /> : null}
          {styles?.industriesContent ? <DronesServices content={styles?.industriesContent} title={styles?.headingsContent?.industires} /> : null}
          {styles?.regionsContent ? <DronesFlags content={styles?.regionsContent} title={styles?.headingsContent?.regionsTitle} /> : null}
          {styles?.eventBottom ? <EventsHomeBottom content={styles?.eventBottom} /> : null}
          {styles?.newsLetter ? <DronesNewsletter content={styles?.newsLetter} /> : null}
          <DronesFooter />
        </LazyHydrate>
      </>}
    </>

  )
}

export default DronesHomepage;