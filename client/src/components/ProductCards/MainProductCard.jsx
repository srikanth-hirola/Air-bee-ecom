import React, { useState } from 'react'
import Ratings from '../Shop/Ratings'
import useProductCardHandler from '../../hooks/useProductCardHandler';
import { StyleConfig } from '../../utils/StyleConfig';
import FillHeart from '../wishlist/FillHeart';
import { Link } from 'react-router-dom';

const MainProductCard = ({ data1 }) => {


    const styles = StyleConfig();
    // eslint-disable-next-line no-unused-vars
    const [click, setClick] = useState(false);
    const [data, setData] = useState();
    const [selectedColor, setSelectedColor] = useState(data1);
    // eslint-disable-next-line no-unused-vars
    const [soldOut, setSoldOut] = useState(0);
    const [selectedAttr, setSelectedAttr] = useState([]);



    const { getOriginalPrice, getDiscountPrice } = useProductCardHandler({ data1, setClick, data, setData, selectedColor, setSelectedColor, selectedAttr, setSelectedAttr, setSoldOut })

    return (
        <>
            {data &&

                <div className='card main-card'>
                    <Link to={`${`/product/${data1?._id}`}`}>
                        <div className='shoppage1-card-image'>
                            <img src={data?.mainImage?.url} alt="productImage" />
                        </div>
                    </Link>
                    <hr />
                    <div className='card-body'>
                        <div className="row">

                            <div className='col-md-9 col-9'>
                                <Link to={`${`/product/${data1?._id}`}`}>
                                    <div className='shoppage1-price'>
                                        <h5>{styles?.currency?.Symbol}&nbsp;{getDiscountPrice({ data })}
                                            <span>{styles?.currency?.Symbol}&nbsp;{getOriginalPrice({ data })}</span></h5>
                                        {/* <p><del>$128.00</del></p> */}
                                    </div>
                                    <div className='product-star product-brand-span d-flex'>
                                        <Ratings rating={data?.ratings} />
                                        <h6>{data?.ratings}</h6>
                                    </div>

                                    <p>{data?.name?.length > 25
                                        ? data?.name?.slice(0, 25) + '...'
                                        : data?.name}</p>
                                </Link>
                            </div>

                            <div className='col-md-3 col-3 shoppage1-likeicon'>
                                {/* <img src={i?.icon?.url} alt="" /> */}
                                <FillHeart data={data} click={click} setClick={setClick} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MainProductCard