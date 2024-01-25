import React from 'react'
import ProductDetailsMain from '../components/ProductDetails/ProductDetailsMain'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesFooter from '../components/DronesHomepage/DronesFooter'

const ProductDetailsPage = () => {
    return (
        <>
            <DronesHeader />
            <ProductDetailsMain />
            <DronesFooter/>
        </>
    )
}

export default ProductDetailsPage