import React from 'react'
import RelatedProducts from '../ProductDetails/RelatedProducts'
import BestDeals from '../ProductDetails/BestDeals'
import TopRated from '../ProductDetails/TopRated'
import FeaturedProducts from '../ProductDetails/FeaturedProducts'


export const RatedProducts = ({ data }) => {
    return (
        <div className='RatedProducts-parent'>
            <div className="ratedproduct-subparent">
                <div className="container">
                    <div className="row">
                        <RelatedProducts key={4} subCatgory={data?.subCatgory} />
                        <BestDeals />
                        <TopRated />
                        <FeaturedProducts />
                    </div>
                </div>
            </div>
        </div>
    )
}
