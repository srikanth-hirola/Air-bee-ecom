import React, { useEffect } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getPublishedProducts } from '../../redux/actions/product';
import ProductCardMiddleware from '../ProductCards/ProductCardMiddleware';

const Products = ({ title }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPublishedProducts());
    }, [dispatch]);

    const { allPublishedProducts } = useSelector((state) => state.products);

    // Ensure allPublishedProducts is defined before attempting to calculate additional slides
    const duplicatedProducts = allPublishedProducts
        ? allPublishedProducts.concat(
            Array.from({ length: 20 }, (_, index) => allPublishedProducts[index % allPublishedProducts.length])
        )
        : [];
    return (
        <div className="DronesCategories-parent">
            <div>
                <h2>{title}</h2>
            </div>
            {allPublishedProducts?.length > 0 ? (
                <Swiper
                    className='paginationDisabledClass'
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={6}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
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
                    {duplicatedProducts.slice(0, 12).map((item, index) => (
                        <SwiperSlide key={index}>
                            <ProductCardMiddleware data1={item} key={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>No Products Available</p>
            )}
        </div>
    );
};

export default Products;



