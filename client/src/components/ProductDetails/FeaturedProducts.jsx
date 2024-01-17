import React from 'react'
import RelatedProductsCards from '../ProductCards/RelatedProductsCards';
import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
    const { allProducts } = useSelector((state) => state.products);

    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className='ratedproduct-titles'>
                <h5>FEATURED PRODUCTS</h5>
            </div>
            {allProducts?.length > 0 ?
                allProducts?.slice(0, 3)?.map((j, index) => (
                    <RelatedProductsCards key={index} data1={j} />
                ))
                : <p>No Related Products Found</p>}
        </div>
    )
}

export default FeaturedProducts