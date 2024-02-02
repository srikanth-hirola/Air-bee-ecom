// import Swiper core and required modules
import { Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';

export const DronesBannerSwiper = () => {
  return (
    <>
    <div className="DronesBannerSWiper-parent">
       <div className="col-md-12">
       <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
    }}
    loop={true}
    >
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="Banner " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="Banner " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="Banner " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="Banner " />
        </div>
      </SwiperSlide>
    </Swiper>
       </div>
    </div>
    <div className='Drone-bannerswiper-content'>
        <div className='Drone-bannerswiper-content-sub'>
        <div className='Drone-bannerswiper-content-sub1'>
            <h3>Electronic items</h3>
            <p>Latest Trending</p>
        </div>
        <div className='Drone-bannerswiper-content-sub2'>
        <Link to="/products?search=all products"><button>Shop Now</button></Link>
            
        </div>
        </div>
    </div>
    </>
  );
};
export default DronesBannerSwiper;