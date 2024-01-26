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
                                    <h5>Sanjay</h5>
                                    <p>Manager</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>We recently purchased USB LED Lights from Air Bee, and we were impressed with the exceptional products delivered promptly the next day. The timely delivery, coupled with impeccable packaging, reflects the reliability and trustworthiness of Air Bee as a seller. Kudos to Air Bee for their commitment to quality and customer satisfaction!</p>
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
                                    <h5>Dinesh</h5>
                                    <p>General Manager</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>antastic online shopping experience at this store! They offer a diverse range of reasonably priced products and stand out with their helpful insights on potential defects. I recently purchased a battery for my Bluetooth headphone case and a potentiometer, both working flawlessly.</p>
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
                                    <h5>Ravi</h5>
                                    <p>GM Electronics</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Received my order within a day! A fantastic experience with Air Bee. The product was well-packed, and their seamless return and replacement policies make them stand out. Offering quality products at affordable rates, Air Bee is my go-to choice for electronic needs.</p>
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
                                    <h5>Naresh</h5>
                                    <p>Argus Embedded Systems</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Air Bee is an excellent source for electronic components, providing cost-effective and reliable products. Highly recommended for their quality offerings and reliable service. Kudos to the Air Bee team for their professionalism and all the best for their future endeavors! 👍👍.</p>
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
                                    <h5>Srikanth</h5>
                                    <p>Honeywell</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Air Bee has shown excellent responsiveness and ensured timely delivery of quality and reliable components. Their products are trustworthy, and I appreciate the team's support in all aspects. A big 👍 to the Air Bee team for their dedication! Highly recommend this store for its reliability, product quality, and efficient service.</p>
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
                                    <h5>Siddharth</h5>
                                    <p>Infiquity Iot</p>
                                </div>
                            </div>
                            <div className='DronesTestimonialSwiper-sub-text'>
                                <p>Air Bee offers exceptionally friendly customer support with quick responses via calls or WhatsApp. The product quality is commendable. We have relied on Air Bee for most of our electronic accessory purchases for over 2 months, a testament to their reliability and service excellence.</p>
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
