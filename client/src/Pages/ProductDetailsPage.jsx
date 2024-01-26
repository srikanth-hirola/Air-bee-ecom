import React from 'react'
import ProductDetailsMain from '../components/ProductDetails/ProductDetailsMain'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import DronesHeader2 from '../components/Headers/DronesHeader2'

const ProductDetailsPage = () => {
    return (
        <>
            <DronesHeader />
            <DronesHeader2/>
            <ProductDetailsMain />
            <DronesFooter/>
        </>
    )
}

export default ProductDetailsPage