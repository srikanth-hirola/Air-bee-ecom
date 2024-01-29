import React, { useState } from 'react'
import useProductCardHandler from '../../hooks/useProductCardHandler'
import { Link } from 'react-router-dom';

const EventCardHome = ({ data1 }) => {
    // eslint-disable-next-line no-unused-vars
    const [click, setClick] = useState(false);
    const [data, setData] = useState();
    const [selectedColor, setSelectedColor] = useState(data1);
    // eslint-disable-next-line no-unused-vars
    const [soldOut, setSoldOut] = useState(0);
    const [selectedAttr, setSelectedAttr] = useState([]);

    const { getDiscountPrice, getOriginalPrice } = useProductCardHandler({ data1, setClick, data, setData, selectedColor, setSelectedColor, selectedAttr, setSelectedAttr, setSoldOut })

    return (
        <div className='DronesProductsRow1-card-parent'>
            <Link to={`${`/product/${data1?.slug}`}`}>
                <div className="card">
                    <div className='DronesProductsRow1-card-image'>
                        <img src={`${data1?.mainImage?.url}`} alt="product" />
                    </div>
                    <div className="card-body">
                        <p>{data1?.name?.length > 25
                            ? data1?.name.slice(0, 25) + '...'
                            : data1?.name}</p>
                        <button>- {parseInt(((getOriginalPrice({ data }) - getDiscountPrice({ data })) / getOriginalPrice({ data })) * 100)} %</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventCardHome