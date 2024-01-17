import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useProductCardHandler from '../../hooks/useProductCardHandler'
import { StyleConfig } from '../../utils/StyleConfig';

const RelatedProductsCards = ({ data1 }) => {

    const styles = StyleConfig();
    // eslint-disable-next-line no-unused-vars
    const [click, setClick] = useState(false);
    const [data, setData] = useState();
    const [selectedColor, setSelectedColor] = useState(data1);
    // eslint-disable-next-line no-unused-vars
    const [soldOut, setSoldOut] = useState(0);
    const [selectedAttr, setSelectedAttr] = useState([]);

    const { getDiscountPrice } = useProductCardHandler({ data1, setClick, data, setData, selectedColor, setSelectedColor, selectedAttr, setSelectedAttr, setSoldOut })



    return (
        <>
            {data &&
                <Link to={`${`/product/${data._id}`}`}>
                    <div className='row ratedproduct-cards' >
                        <div className='col-md-3 col-sm-3 col-3 ratedproduct-images'>
                            <img src={data?.mainImage?.url} alt="pic" />
                        </div>
                        <div className='col-md-9 col-sm-9 col-9 ratedproduct-textData'>
                            <h6>{data.name.length > 25
                                ? data.name.slice(0, 25) + '...'
                                : data.name}</h6>
                            <p>{styles?.currency?.Symbol}&nbsp;{getDiscountPrice({ data })}</p>
                        </div>
                    </div>
                </Link>
            }
        </>
    )
}

export default RelatedProductsCards