import React, {} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export const DronesTestimonialSwiper = () => {
    return (
        <>
         <div className="testimonal-home">
            <div className="row">
                <div className="col-md-5">
                   <div className='Drones-testimonial-quote-parent'>
                   <div className='Drones-testimonial-quote'>
                        <img src="/DronesHomepage/Qotes.png" alt="" />
                    </div>
                    
                   </div>
                   <div className='Drones-testimonial-quote-text'>
                   <p>Clients Testimonials</p>
                   </div>
                  
                </div>
                <div className="col-md-7">
                    <div className="testimonal-home-bg" style={{backgroundImage:`url(/DronesHomepage/swiper-bg.png)`}}>
                    <div className="testimonal-home-slider-content">
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
                    <SwiperSlide>
                        <div className='DronesTestimonialSwiper-sub'>
                            <div className='DronesTestimonialSwiper-sub-image-parent'>
                                <div className='DronesTestimonialSwiper-image'>
                                    <img src="./DronesHomepage/Image-1.png" alt="" />
                                </div>
                                <div className='DronesTestimonialSwiper-main-text'>
                                    <h5>Esther Hills</h5>
                                    <p>Lead Intranet Technician</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='DronesTestimonialSwiper-sub'>
                            <div className='DronesTestimonialSwiper-sub-image-parent'>
                                <div className='DronesTestimonialSwiper-image'>
                                    <img src="./DronesHomepage/Image-1.png" alt="" />
                                </div>
                                <div className='DronesTestimonialSwiper-main-text'>
                                    <h5>Esther Hills</h5>
                                    <p>Lead Intranet Technician</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='DronesTestimonialSwiper-sub'>
                            <div className='DronesTestimonialSwiper-sub-image-parent'>
                                <div className='DronesTestimonialSwiper-image'>
                                    <img src="./DronesHomepage/Image-1.png" alt="" />
                                </div>
                                <div className='DronesTestimonialSwiper-main-text'>
                                    <h5>Esther Hills</h5>
                                    <p>Lead Intranet Technician</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='DronesTestimonialSwiper-sub'>
                            <div className='DronesTestimonialSwiper-sub-image-parent'>
                                <div className='DronesTestimonialSwiper-image'>
                                    <img src="./DronesHomepage/Image-1.png" alt="" />
                                </div>
                                <div className='DronesTestimonialSwiper-main-text'>
                                    <h5>Esther Hills</h5>
                                    <p>Lead Intranet Technician</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
                    </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
}
