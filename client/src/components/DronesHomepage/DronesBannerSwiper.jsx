// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';

export const DronesBannerSwiper = ({ content }) => {
  return (
    <>
      <div className="DronesBannerSWiper-parent">
        {content?.banners?.length > 0 &&
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
              {content?.banners?.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='DronesBannerSwiper-image'>
                    <img srcSet={item?.image?.url} src={item?.image?.url} alt="banner" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }
      </div>
      <div className='Drone-bannerswiper-content'>
        <div className='Drone-bannerswiper-content-sub'>
          <div className='Drone-bannerswiper-content-sub1'>
            {content?.content?.title && <h3>{content?.content?.title}</h3>}
            {content?.content?.subTitle && <p>{content?.content?.subTitle}</p>}
          </div>
          {content?.button?.title &&
            <div className='Drone-bannerswiper-content-sub2'>
              <Link to={content?.button?.url}><button>{content?.button?.title}</button></Link>
            </div>
          }
        </div>
      </div>
    </>
  );
};
export default DronesBannerSwiper;