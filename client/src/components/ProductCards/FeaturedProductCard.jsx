import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';

const FeaturedProductCard = ({ data, active }) => {



    const [count, setCount] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [warning, setWarning] = useState();
    // eslint-disable-next-line no-unused-vars
    const [limited, setLimited] = useState();
    const [click, setClick] = useState(false);
    const [selectedAttr, setSelectedAttr] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [selectedColor, setSelectedColor] = useState(data?.showInputs ? data?.colorInputs[0] : data);
    // eslint-disable-next-line no-unused-vars
    const [soldOut, setSoldOut] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [mainImg, setMainImg] = useState([]);

    useProductDetails({ data, active, click, count, selectedAttr, selectedColor, setClick, setCount, setLimited, setMainImg, setSelectedAttr, setSoldOut, setWarning })



    return (
        <div className='featured-product-card'>
            <Link to={`${`/product/${data?.slug}`}`}>
                <div className='Dronecategory-content'>
                    <div className='Dronecategory-image'>
                        <img src={`${data?.mainImage?.url}`} alt="product" />
                    </div>
                    <div className='Dronecategory-text'>
                        <strong>{data?.name?.length > 25
                            ? data?.name.slice(0, 25) + '...'
                            : data?.name}</strong>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedProductCard