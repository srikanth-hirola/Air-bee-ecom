import React, { useState } from 'react'
// import { IoCartOutline } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa6";
// import { FaArrowsRotate } from "react-icons/fa6";
// import PhotosCarousel from './SliderProduct';
import SliderProduct from './SliderProduct';
import ShareProductComp from '../ProductDetails/ShareProductComp';
import WishList from '../ProductDetails/WishList';
import AddToCart from '../ProductDetails/AddToCart';
import Counter from '../ProductDetails/Counter';
import Attributes from '../ProductDetails/Attributes';
import Price from '../ProductDetails/Price';
import Sku from '../ProductDetails/Sku';
import StockAvailability from '../ProductDetails/StockAvailability';
import GetCategory from '../ProductDetails/GetCategory';
import GetPopularity from '../ProductDetails/GetPopularity';
import useProductDetails from '../../hooks/useProductDetails';
import VarientSelect from '../ProductDetails/VarientSelect';
import ShippingDetails from './ShippingDetails';
import BuyNow from '../ProductDetails/BuyNow';

export const LapProductdet = ({ data, active, }) => {

  const [count, setCount] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [warning, setWarning] = useState();
  const [limited, setLimited] = useState();
  const [click, setClick] = useState(false);
  const [selectedAttr, setSelectedAttr] = useState([]);
  const [selectedColor, setSelectedColor] = useState(data?.showInputs ? data?.colorInputs[0] : data);
  const [soldOut, setSoldOut] = useState(false);
  const [mainImg, setMainImg] = useState([]);

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedAttributeIndices, setSelectedAttributeIndices] = useState([]);
  // const [select, setSelect] = useState(0);


  const { handleSelectCourierPartner, handleHighlight, handleAttrSelect, incrementCount, decrementCount, addToCartHandler, getOriginalPrice, getDiscountPrice, buyNowProduct } = useProductDetails({ data, active, click, count, selectedAttr, selectedColor, setClick, setCount, setLimited, setMainImg, setSelectedAttr, setSoldOut, setWarning })



  return (
    <div className='laptop-productdetails'>
      <div className='laptop-productdetails-sub'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div className=''>
                <SliderProduct mainImg={mainImg} />
              </div>
            </div>
            <div className='col-md-6'>
              <GetPopularity data={data} />
              <div className='laptop-productdetails-name'>
                <h5>{data?.name}</h5>
              </div>
              <div className='row laptop-productdetails-brand'>
                <div className="col-md-6">
                  <Sku sku={selectedColor?.SKU} />
                  <div className='laptop-productdetails-sku'>
                    <h6>Brand:</h6>
                    <p>{data?.brandName}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <StockAvailability soldOut={soldOut} limited={limited} />
                  <GetCategory category={data?.category} />
                </div>
              </div>
              <Price originalPrice={getOriginalPrice({ data })} discountPrice={getDiscountPrice({ data, active })} />
              <hr />
              <ShippingDetails handleSelectCourierPartner={handleSelectCourierPartner} key={5} />
              <Attributes selectedColor={selectedColor} handleAttrSelect={handleAttrSelect} handleHighlight={handleHighlight} selectedAttr={selectedAttr} key={2} selectedAttributeIndices={selectedAttributeIndices} setSelectedAttributeIndices={setSelectedAttributeIndices} active={active} />
              <VarientSelect data={data} selectedColorIndex={selectedColorIndex} setCount={setCount} setLimited={setLimited} setMainImage={setMainImg} setSelectedColor={setSelectedColor} setSelectedColorIndex={setSelectedColorIndex} setWarning={setWarning} key={3} />
              <div className='row laptop-productdetails-countdetails'>
                <Counter count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
                <AddToCart addToCart={addToCartHandler} id={data?._id} />
                <BuyNow buyNowProduct={buyNowProduct} id={data?._id} />
              </div>
              <div className='row laptop-productdetails-wish'>
                <WishList data={data} click={click} setClick={setClick} />
                <ShareProductComp />
              </div>
              <div className='laptop-productdetails-checkout'>
                <h6>100% Guarantee Safe Checkout</h6>
                <img src="/images/product-details/payment.png" alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

