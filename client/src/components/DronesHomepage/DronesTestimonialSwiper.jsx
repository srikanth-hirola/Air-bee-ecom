import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export const DronesTestimonialSwiper = ({ content }) => {

    return (
        <>
            <div className="testimonal-home">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className='Drones-testimonial-quote-parent'>
                            {content?.title &&
                                <div className='Drones-testimonial-quote-text'>
                                    <p>{content?.title}</p>
                                </div>
                            }
                            {content?.MainImage?.image?.url &&
                                <div className='Drones-testimonial-quote'>
                                    <img src={content?.MainImage?.image?.url} alt="testimonial" />
                                </div>}

                        </div>


                    </div>
                    <div className="col-md-7">
                        <div className="testimonal-home-bg" style={{ backgroundImage: `url(${content?.bgImage?.image?.url})` }}>
                            <div className="testimonal-home-slider-content">
                                {content?.testimonials?.length > 0 &&
                                    <div className='DronesTestimonialSwiper-parent'>
                                        <Swiper
                                            slidesPerView={2}
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            autoplay={{
                                                delay: 1500,
                                                disableOnInteraction: false,
                                            }}
                                            loop={true}
                                            modules={[Pagination, Autoplay]}
                                            className="mySwiper"
                                        >
                                            {content?.testimonials?.map((item, i) => (
                                                <SwiperSlide key={i}>
                                                    <div className='DronesTestimonialSwiper-sub'>
                                                        <div className='DronesTestimonialSwiper-sub-image-parent'>
                                                            {item?.image?.url &&
                                                                <div className='DronesTestimonialSwiper-image'>
                                                                    <img src={item?.image?.url} alt="testimonial" />
                                                                </div>
                                                            }
                                                            <div className='DronesTestimonialSwiper-main-text'>
                                                                {item?.title && <h5>{item?.title}</h5>}
                                                                {item?.subTitle && <p>{item?.subTitle}</p>}
                                                            </div>
                                                        </div>
                                                        {item?.summary &&
                                                            <div className='DronesTestimonialSwiper-sub-text'>
                                                                <p>{item?.summary}</p>
                                                            </div>
                                                        }
                                                    </div>
                                                </SwiperSlide>
                                            ))}


                                        </Swiper>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
