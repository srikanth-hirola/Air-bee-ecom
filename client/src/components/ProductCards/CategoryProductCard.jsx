import React, { useState } from 'react'
import { StyleConfig } from '../../utils/StyleConfig';
import useProductCardHandler from '../../hooks/useProductCardHandler';
import { Link } from 'react-router-dom';

const CategoryProductCard = ({ data1, key }) => {
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
        <div className="col-sm-6 col-md-3 p-0" key={key}>
            {data &&
                <Link to={`${`/product/${data1?.slug}`}`}>
                    <div className='DronesProductsRow2-subimage-content'>
                        <div className='DronesProductsRow2-subimage-content-text'>
                            <h5>{data?.name?.length > 25
                                ? data?.name.slice(0, 25) + '...'
                                : data?.name}</h5>
                            <p>{styles?.currency?.Symbol}&nbsp;{getDiscountPrice({ data })}
                            </p>
                        </div>
                        <div className='DronesProductsRow2-card-image'>
                            <img src={`${data?.mainImage?.url}`} alt="product" />
                        </div>
                    </div>
                </Link>
            }
        </div>
    )
}

export default CategoryProductCard