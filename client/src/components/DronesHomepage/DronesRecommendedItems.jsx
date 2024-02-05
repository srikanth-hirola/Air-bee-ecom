import React, { useEffect, useState } from 'react'
import useProductDeals from '../../hooks/useProductDeals'
import { useDispatch, useSelector } from 'react-redux'
import ProductCardMiddleware from '../ProductCards/ProductCardMiddleware'
import { getPublishedProducts } from '../../redux/actions/product'

const DronesRecommendedItems = ({ title }) => {
    const { getBestDeals } = useProductDeals();
    const { allPublishedProducts } = useSelector((state) => state.products);

    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPublishedProducts())
    }, [dispatch])

    useEffect(() => {
        getBestDeals({ allProducts: allPublishedProducts, setData: setProducts })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPublishedProducts])

    return (
        <>
            <div className="DronesRecommendedItems-parent">
                <div className="">
                    <div>
                        <h2>{title}</h2>
                    </div>
                    {products?.length > 0 &&
                        <div className="row">
                            {products?.slice(0, 18)?.map((item, index) => (
                                <ProductCardMiddleware data1={item} key={index} />
                            ))}
                        </div>}
                </div>


            </div>
        </>

    )
}

export default DronesRecommendedItems