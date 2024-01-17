import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import FeaturedProductCard from '../ProductCards/FeaturedProductCard';

const Products = () => {
    const { allProducts } = useSelector((state) => state.products);

    return (
        <>
            <div className="DronesCategories-parent">
                <div>
                    <h2>Explore Our Featured Products</h2>
                </div>
                {allProducts?.length > 0 ?
                    <Swiper className='paginationDisabledClass'
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            }

                        }}
                    >
                        <br /><br />
                        {
                            allProducts?.map((item, index) => (
                                <SwiperSlide>
                                    <FeaturedProductCard data1={item} key={index} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    : <p>No Products Available</p>}
            </div>

        </>
    );
}

export default Products