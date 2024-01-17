import React, { useEffect, useState } from 'react'
import useProductDeals from '../../hooks/useProductDeals';
import { useSelector } from 'react-redux';
import RelatedProductsCards from '../ProductCards/RelatedProductsCards';

const TopRated = () => {
    const { allProducts } = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);
    const { getTopRated } = useProductDeals()

    useEffect(() => {
        getTopRated({ allProducts, setData: setProducts })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts])


    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className='ratedproduct-titles'>
                <h5>TOP RATED</h5>
            </div>
            {products?.length > 0 ?
                products?.slice(0, 3)?.map((j, index) => (
                    <RelatedProductsCards key={index} data1={j} />
                ))
                : <p>No Related Products Found</p>}
        </div>
    )
}

export default TopRated