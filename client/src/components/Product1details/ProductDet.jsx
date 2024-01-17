import React from 'react'
import "../Product1details/Product1details.css"
import { Product1Cramp } from './ProductCramp';
import { Product1Header } from './Product1Header';
import { MobileCase1 } from './MobileCase1';
import { RatedProducts } from './RatedProducts';
import { ProductTapContent } from './ProductTapContent';
import { LapProductdet } from './LapProductdet';
export const ProductDet = () => {
  return (
    <div>
      <Product1Header />

      <Product1Cramp />
      <LapProductdet />
      <ProductTapContent />
      <MobileCase1 />
      <RatedProducts />

    </div>
  )
}
