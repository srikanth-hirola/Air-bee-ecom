import React, { useEffect, useState } from 'react'
import useProductDeals from '../../hooks/useProductDeals'
import { useSelector } from 'react-redux'
import RecommendedProductCard from '../ProductCards/RecommendedProductCard'

const DronesRecommendedItems = () => {
    const { getBestDeals } = useProductDeals();
    const { allProducts } = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getBestDeals({ allProducts, setData: setProducts })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts])


    return (
        <>
            <div className="DronesRecommendedItems-parent">
                <div className="">
                    <div>
                        <h2>Recommended items</h2>
                    </div>
                    {products?.length > 0 &&
                        <div className="row">
                            {products?.slice(0, 18)?.map((item, index) => (
                                <RecommendedProductCard data1={item} key={index} />
                            ))}



                        </div>}
                </div>


            </div>
        </>

    )
}

export default DronesRecommendedItems