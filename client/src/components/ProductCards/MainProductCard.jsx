/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Ratings from '../Shop/Ratings'
import { StyleConfig } from '../../utils/StyleConfig';
import FillHeart from '../wishlist/FillHeart';
import { Link } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';

const MainProductCard = ({ data, active }) => {

    const styles = StyleConfig();
    const { ConvertCurrency } = useGetCurrencyConversion()


    const [count, setCount] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [warning, setWarning] = useState();
    const [limited, setLimited] = useState();
    const [click, setClick] = useState(false);
    const [selectedAttr, setSelectedAttr] = useState([]);
    const [selectedColor, setSelectedColor] = useState(data?.showInputs ? data?.colorInputs[0] : data);
    const [soldOut, setSoldOut] = useState(false);
    const [mainImg, setMainImg] = useState([]);

    const { getOriginalPrice, getDiscountPrice } = useProductDetails({ data, active, click, count, selectedAttr, selectedColor, setClick, setCount, setLimited, setMainImg, setSelectedAttr, setSoldOut, setWarning })

    return (
        <>
            {data &&

                <div className='card main-card'>
                    <Link to={`${`/product/${data?._id}`}`}>
                        <div className='shoppage1-card-image'>
                            <img src={data?.mainImage?.url} alt="productImage" />
                        </div>
                    </Link>
                    {/* <hr /> */}
                    <div className='card-body'>
                        <div className="row">

                            <div className='col-md-9 col-9'>
                                <Link to={`${`/product/${data?._id}`}`}>
                                    <div className='shoppage1-price'>
                                        <h5>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(getDiscountPrice({ data }))}
                                            <span>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(getOriginalPrice({ data }))}</span></h5>
                                        {/* <p><del>$128.00</del></p> */}
                                    </div>
                                    <div className='product-star product-brand-span d-flex'>
                                        <Ratings rating={data?.ratings} />
                                        <h6>{data?.ratings}</h6>
                                    </div>


                                </Link>
                            </div>

                            <div className='col-md-3 col-3 shoppage1-likeicon'>
                                {/* <img src={i?.icon?.url} alt="" /> */}
                                <FillHeart data={data} click={click} setClick={setClick} />
                            </div>
                            <div className='col-12 col-sm-12 col-md-12 pt-2'>
                                <Link to={`${`/product/${data?._id}`}`}>
                                    <p>{data?.name?.length > 38
                                        ? data?.name?.slice(0, 38) + '...'
                                        : data?.name}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MainProductCard