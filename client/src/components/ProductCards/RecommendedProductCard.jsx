/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainCardHover from './Hovers/MainCardHover'
import { StyleConfig } from '../../utils/StyleConfig'
import useProductDetails from '../../hooks/useProductDetails'

const RecommendedProductCard = ({ data, active }) => {

    const styles = StyleConfig();

    const [count, setCount] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [warning, setWarning] = useState();
    const [limited, setLimited] = useState();
    const [click, setClick] = useState(false);
    const [selectedAttr, setSelectedAttr] = useState([]);
    const [selectedColor, setSelectedColor] = useState(data?.showInputs ? data?.colorInputs[0] : data);
    const [soldOut, setSoldOut] = useState(false);
    const [mainImg, setMainImg] = useState([]);

    const { addToCartHandler, getOriginalPrice, getDiscountPrice } = useProductDetails({ data, active, click, count, selectedAttr, selectedColor, setClick, setCount, setLimited, setMainImg, setSelectedAttr, setSoldOut, setWarning })

    return (
        <div className="col-sm-6 col-md-2 recommended-product-card">

            <div className='DronesRecommendedItems-content'>
                <div className='DronesRecommendedItems-image group relative'>
                    <img src={`${data?.mainImage?.url}`} alt="product" />
                    <MainCardHover data={data} addToCart={addToCartHandler} id={data?._id} />
                </div>
                <Link to={`${`/product/${data?.slug}`}`}>
                    <>
                        <div className='DronesRecommendedItems-text'>
                            <span>{parseInt(((data.originalPrice - data.discountPrice) / data.originalPrice) * 100)
                            }% OFF</span>
                            <strong >{data?.name?.length > 25
                                ? data?.name.slice(0, 60) + '...'
                                : data?.name}</strong>
                        </div>
                        <div className='DronesRecommendedItems-text-price'>
                            <p>{styles?.currency?.Symbol}&nbsp;{getDiscountPrice({ data, active })}</p>
                            <p><del>{styles?.currency?.Symbol}&nbsp;{getOriginalPrice({ data })}</del></p>
                        </div>
                        {/* <div className='DronesRecommendedItems-subtext'>
                            <p>{data?.description?.length > 25
                                ? data?.description.slice(0, 42) + '...'
                                : data?.description}</p>
                        </div> */}
                    </>
                </Link>
            </div>

        </div>
    )
}

export default RecommendedProductCard