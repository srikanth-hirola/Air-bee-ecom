// import Swiper core and required modules
import { Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

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
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='DronesBannerSwiper-image'>
            <img src="./DronesHomepage/bannerswiper1.png" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
       </div>
    </div>
    <div className='Drone-bannerswiper-content'>
        <div className='Drone-bannerswiper-content-sub'>
        <div className='Drone-bannerswiper-content-sub1'>
            <h3>Electronoc items</h3>
            <p>Latest Trending</p>
        </div>
        <div className='Drone-bannerswiper-content-sub2'>
            <button>Learn more</button>
        </div>
        </div>
    </div>
    </>
  );
};
export default DronesBannerSwiper;