import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import RelatedProductsCards from '../ProductCards/RelatedProductsCards';

const RelatedProducts = ({ subCatgory }) => {

    const { allProducts } = useSelector((state) => state.products);

    const [related, setRelated] = useState([]);

    useEffect(() => {
        const data = allProducts?.filter((product) => product.subCatgory === subCatgory)
        setRelated(data)
    }, [allProducts, subCatgory])


    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className='ratedproduct-titles'>
                <h5>RELATED PRODUCTS</h5>
            </div>
            {related?.length > 0 ?
                related?.slice(0, 3)?.map((j, index) => (
                    <RelatedProductsCards key={index} data1={j} />
                ))
                : <p>No Related Products Found</p>}
        </div>
    )
}

export default RelatedProducts