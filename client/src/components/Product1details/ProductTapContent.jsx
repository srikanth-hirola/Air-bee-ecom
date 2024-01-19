import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Ratings from '../Shop/Ratings';
export const ProductTapContent = ({ data }) => {

    console.log(data)
    const [key, setKey] = useState('Bestseller');
    return (
        <div className='ProductTapContent1-parent'>
            <div className="ProductTapContent1-subparent">
                <div className="container">
                    <div className="row">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="Bestseller" title="Bestseller">

                                <div className="row">

                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                                        <div className='ProductTapContent1-free'>
                                            <h4>Description</h4>
                                            <p>{data?.description}</p>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ProductTapContent1-ratingicons">
                                        <div className="row ProductTapContent1-feature">                                                                                     
                                                                <div className="col-md-6 col-sm-6 col-12">
                                                                    <h4>Features</h4>
                                                                    <div className='ProductTapContent1-desription1'>
                                                                        <img src="/images/product-details/modalimg.png" alt="" />
                                                                        <p>
                                                                        Free 1 Year Warranty
                                                                        </p>
                                                                    </div>
                                                                    <div className='ProductTapContent1-desription1'>
                                                                        <img src="/images/product-details/modalimg1.png" alt="" />
                                                                        <p>
                                                                        Free Shipping & Fasted Delivery
                                                                        </p>
                                                                    </div>
                                                                    <div className='ProductTapContent1-desription1'>
                                                                        <img src="/images/product-details/modalimg2.png" alt="" />
                                                                        <p>
                                                                        100% Money-back guarantee
                                                                        </p>
                                                                    </div>

                                                                    <div className='ProductTapContent1-desription1'>
                                                                        <img src="/images/product-details/modalimg3.png" alt="" />
                                                                        <p>
                                                                        24/7 Customer support
                                                                        </p>
                                                                    </div>
                                                                    <div className='ProductTapContent1-desription1'>
                                                                        <img src="/images/product-details/modalimg4.png" alt="" />
                                                                        <p>
                                                                        Secure payment method
                                                                        </p>
                                                                    </div>
                                                                </div>                                                                                                                
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <h4>Shipping Information</h4>
                                                <div className='ProductTapContent1-shipping'>
                                                    <h6>Courier:</h6>
                                                    <p> 2 - 4 days, free shipping</p>
                                                </div>
                                                <div className='ProductTapContent1-shipping'>
                                                    <h6>Local Shipping:</h6>
                                                    <p>  up to one week, $19.00
                                                    </p>
                                                </div>
                                                <div className='ProductTapContent1-shipping'>
                                                    <h6>UPS Ground Shipping:</h6>
                                                    <p>  4 - 6 days, $29.00
                                                    </p>
                                                </div>
                                                <div className='ProductTapContent1-shipping'>
                                                    <h6>Unishop Global Export:</h6>
                                                    <p>  3 - 4 days, $39.00</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Additional information" title="Additional information">
                                <div className="row ProductTapContent1-feature">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Features</th>
                                                    <th scope="col">Feature Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.assemblyInstruction &&
                                                    <tr>
                                                        <td>Assembly Instruction</td>
                                                        <td>{data?.assemblyInstruction}</td>
                                                    </tr>
                                                }
                                                {data?.constructionType &&
                                                    <tr>
                                                        <td>Construction Type</td>
                                                        <td>{data?.constructionType}</td>
                                                    </tr>
                                                }
                                                {data?.hsnCode &&
                                                    <tr>
                                                        <td>HSN Code</td>
                                                        <td>{data?.hsnCode}</td>
                                                    </tr>
                                                }
                                                {data?.itemCondition &&
                                                    <tr>
                                                        <td>Item Condition</td>
                                                        <td>{data?.itemCondition}</td>
                                                    </tr>
                                                }
                                                {data?.itemWeight &&
                                                    <tr>
                                                        <td>Item Weight</td>
                                                        <td>{data?.itemWeight + data?.itemWeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.itemHeight &&
                                                    <tr>
                                                        <td>Item Height</td>
                                                        <td>{data?.itemHeight + data?.itemHeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.itemLength &&
                                                    <tr>
                                                        <td>Item Length</td>
                                                        <td>{data?.itemLength + data?.itemLengthUnit}</td>
                                                    </tr>
                                                }
                                                {data?.itemWidth &&
                                                    <tr>
                                                        <td>Item Width</td>
                                                        <td>{data?.itemWidth + data?.itemWidthUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageHeight &&
                                                    <tr>
                                                        <td>Package Height</td>
                                                        <td>{data?.packageHeight + data?.packageHeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageLength &&
                                                    <tr>
                                                        <td>Package Length</td>
                                                        <td>{data?.packageLength + data?.packageLengthhUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageWeight &&
                                                    <tr>
                                                        <td>Package Weight</td>
                                                        <td>{data?.packageWeight + data?.packageWeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageWidth &&
                                                    <tr>
                                                        <td>Package Width</td>
                                                        <td>{data?.packageWidth + data?.packageWidthUnit}</td>
                                                    </tr>
                                                }
                                                {data?.manufacturer &&
                                                    <tr>
                                                        <td>manufacturer</td>
                                                        <td>{data?.manufacturer}</td>
                                                    </tr>
                                                }
                                                {data?.materialType &&
                                                    <tr>
                                                        <td>Material Type</td>
                                                        <td>{data?.materialType}</td>
                                                    </tr>
                                                }
                                                {data?.maxOrderQuantity &&
                                                    <tr>
                                                        <td>Max Order Quantity</td>
                                                        <td>{data?.maxOrderQuantity}</td>
                                                    </tr>
                                                }
                                                {data?.model &&
                                                    <tr>
                                                        <td>Model</td>
                                                        <td>{data?.model}</td>
                                                    </tr>
                                                }
                                                {data?.noItem &&
                                                    <tr>
                                                        <td>No Item</td>
                                                        <td>{data?.noItem}</td>
                                                    </tr>
                                                }
                                                {data?.noOfPieces &&
                                                    <tr>
                                                        <td>No Of Pieces</td>
                                                        <td>{data?.noOfPieces}</td>
                                                    </tr>
                                                }
                                                {data?.productCareInstruction &&
                                                    <tr>
                                                        <td>Product Care Instruction</td>
                                                        <td>{data?.productCareInstruction}</td>
                                                    </tr>
                                                }
                                                {data?.productId &&
                                                    <tr>
                                                        <td>Product Id</td>
                                                        <td>{data?.productId}</td>
                                                    </tr>
                                                }
                                                {data?.productTaxCode &&
                                                    <tr>
                                                        <td>Product TaxCode</td>
                                                        <td>{data?.productTaxCode}</td>
                                                    </tr>
                                                }
                                                {data?.safetyWarning &&
                                                    <tr>
                                                        <td>Safety Warning</td>
                                                        <td>{data?.safetyWarning}</td>
                                                    </tr>
                                                }
                                                {data?.shape &&
                                                    <tr>
                                                        <td>Shape</td>
                                                        <td>{data?.shape}</td>
                                                    </tr>
                                                }
                                                {data?.size &&
                                                    <tr>
                                                        <td>Size</td>
                                                        <td>{data?.size}</td>
                                                    </tr>
                                                }
                                                {data?.sold_out &&
                                                    <tr>
                                                        <td>Sold Out</td>
                                                        <td>{data?.sold_out}</td>
                                                    </tr>
                                                }
                                                {data?.stock &&
                                                    <tr>
                                                        <td>Stock</td>
                                                        <td>{data?.stock}</td>
                                                    </tr>
                                                }
                                                {data?.taxPercent &&
                                                    <tr>
                                                        <td>Tax Percent</td>
                                                        <td>{data?.taxPercent}</td>
                                                    </tr>
                                                }
                                                {data?.warrentyDescription &&
                                                    <tr>
                                                        <td>Warrenty Description</td>
                                                        <td>{data?.warrentyDescription}</td>
                                                    </tr>
                                                }

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </Tab>
                            <Tab eventKey="Specification" title="Specification">
                            
                                <div className="row product-specifications">
                                
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    {data.specs2 &&
                data.specs2.map((val) => {
                                    return (
                    <>
                      {/* {val.heading === '' ? */}
                      <p className="flex h-fit border-1 border-gray-300 mb-0">
                        {val.key.name === '' ? null : <span className='pl-2 py-2 w-[200px] bg-gray-200'>
                          <p className='mb-0 font-semibold'>{val.key.name}&nbsp;&nbsp;</p>
                        </span>}

                        {val.key.value === '' ? null : <span className='bg-white py-2 pl-2 h-full w-full'>
                          {val.key.value}
                        </span>}
                      </p>
                      <>
                        {/* <div className='mt-3'>
                            <h6 className=''>{val.heading}</h6>
                          </div> */}

                        <p className="flex h-fit border-1 border-gray-300 mb-0">
                          {val.key.name === '' ? null : <span className='pl-2 py-2 w-[200px] bg-gray-200'>
                            <p className='mb-0 font-semibold'>{val.key.name}&nbsp;&nbsp;</p>
                          </span>}

                          {val.key.value === '' ? null : <span className='bg-white py-2 pl-2 h-full w-full'>
                            {val.key.value}
                          </span>}
                        </p>
                      </>
                      {/* } */}
                    </>
                  );
                })}
                                    </div>
                                </div>
                
                            </Tab>
                            <Tab eventKey="Review" title="Review">
                                <div className="row">
                                    {data &&
                                        data.reviews.map((item, index) => (
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-12 d-flex align-items-center mb-4">
                                                <div className='infomation-reviews'>
                                                    <img src={`${item.user.avatar?.url}`} alt="" />
                                                </div>
                                                <div>
                                                    <h5>{item.user.name}</h5>
                                                    <div className='review-star'><Ratings rating={data?.ratings} /></div>
                                                    <p>{item.comment}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="w-full flex justify-center">
              {data && data.reviews.length === 0 && (
                <h5>No Reviews have for this product!</h5>
              )}
            </div>
                                </div>
                            </Tab>

                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
