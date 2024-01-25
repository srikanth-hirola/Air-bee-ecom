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
                                        {/* {data?.warrentyDescription &&
                                            <p className="flex h-fit border-1 border-gray-300 mb-0">

                                                <span className='pl-2 py-2 w-[200px] bg-gray-200'>
                                                    <p className='mb-0 font-semibold'>Warrenty Description</p>
                                                </span>

                                                <span className='bg-white py-2 pl-2 h-full w-full'>
                                                    {data?.warrentyDescription}
                                                </span>

                                            </p>
                                        } */}

                                        <table class="table">

                                            <tbody>
                                                {data?.assemblyInstruction &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Assembly Instruction</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.assemblyInstruction}</td>
                                                    </tr>
                                                }
                                                {data?.constructionType &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Construction Type</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.constructionType}</td>
                                                    </tr>
                                                }
                                                {data?.hsnCode &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>HSN Code</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.hsnCode}</td>
                                                    </tr>
                                                }
                                                {data?.itemCondition &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Item Condition</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.itemCondition}</td>
                                                    </tr>
                                                }
                                                {data?.itemWeight>=0 &&
                                                     <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Item Weight</td>

                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.itemWeight + data?.itemWeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.itemHeight &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Item Height</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.itemHeight + data?.itemHeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.itemLength &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Item Length</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.itemLength + data?.itemLengthUnit}</td>
                                                    </tr>
                                                }
                                                {data?.itemWidth &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Item Width</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.itemWidth + data?.itemWidthUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageHeight &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Package Height</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.packageHeight + data?.packageHeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageLength &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Package Length</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.packageLength + data?.packageLengthhUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageWeight &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Package Weight</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.packageWeight + data?.packageWeightUnit}</td>
                                                    </tr>
                                                }
                                                {data?.packageWidth &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Package Width</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.packageWidth + data?.packageWidthUnit}</td>
                                                    </tr>
                                                }
                                                {data?.manufacturer &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>manufacturer</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.manufacturer}</td>
                                                    </tr>
                                                }
                                                {data?.materialType &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Material Type</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.materialType}</td>
                                                    </tr>
                                                }
                                                {data?.maxOrderQuantity &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Max Order Quantity</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.maxOrderQuantity}</td>
                                                    </tr>
                                                }
                                                {data?.model &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Model</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.model}</td>
                                                    </tr>
                                                }
                                                {data?.noItem &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>No Item</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.noItem}</td>
                                                    </tr>
                                                }
                                                {data?.noOfPieces &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>No Of Pieces</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.noOfPieces}</td>
                                                    </tr>
                                                }
                                                {data?.productCareInstruction &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Product Care Instruction</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.productCareInstruction}</td>
                                                    </tr>
                                                }
                                                {data?.productId &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Product Id</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.productId}</td>
                                                    </tr>
                                                }
                                                {data?.productTaxCode &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Product TaxCode</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.productTaxCode}</td>
                                                    </tr>
                                                }
                                                {data?.safetyWarning &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Safety Warning</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.safetyWarning}</td>
                                                    </tr>
                                                }
                                                {data?.shape &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Shape</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.shape}</td>
                                                    </tr>
                                                }
                                                {data?.size &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Size</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.size}</td>
                                                    </tr>
                                                }
                                                {data?.sold_out >= 0 &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Sold Out</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.sold_out}</td>
                                                    </tr>
                                                }
                                                {data?.stock &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Stock</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.stock}</td>
                                                    </tr>
                                                }
                                                {data?.taxPercent &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Tax Percent</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.taxPercent}</td>
                                                    </tr>
                                                }
                                                {data?.warrentyDescription &&
                                                    <tr className="flex h-fit border-1 border-gray-300 mb-0">
                                                        <td className='px-2 py-2 w-[400px] bg-secondary-subtle'>Warrenty Description</td>
                                                        <td className='bg-white py-2 px-2 h-full w-full'>{data?.warrentyDescription}</td>
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
                                                            {val.key.name === '' ? null : <span className='pl-2 py-2 w-[250px] bg-gray-200'>
                                                                <p className='mb-0 font-semibold'>{val.key.name}&nbsp;&nbsp;</p>
                                                            </span>}

                                                            {val.key.value === '' ? null : <span className='bg-white py-2 pl-2 h-full w-full'>
                                                                {val.key.value}
                                                            </span>}
                                                        </p>
                                                        <>

                                                        </>
                                                        {/* } */}
                                                    </>
                                                );
                                            })}
                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="Review" title="Review">
                                <div className="row ">
                                    {data &&
                                        data.reviews.map((item, index) => (
                                            <div className="col-lg-10 col-md-10 col-sm-12 col-12 d-flex align-items-start mb-4 product-review-from-customer p-3">
                                                <div className='infomation-reviews'>
                                                    <img src={`${item.user.avatar?.url}`} alt="" />
                                                </div>
                                                <div className='infomation-reviews-data w-full'>
                                                    <h5>{item.user.name}</h5>
                                                    <div className='review-star py-2'><Ratings rating={data?.ratings} /></div>
                                                    <p className='review-product-page1'>{item.comment}</p>
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
