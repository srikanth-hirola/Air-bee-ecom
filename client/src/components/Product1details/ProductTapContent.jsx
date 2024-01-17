import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
                                            <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
                                            <p>Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ProductTapContent1-ratingicons">
                                        <div className="row ProductTapContent1-feature">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <h4>Feature</h4>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg.png" alt="" />
                                                    <p>Free 1 Year Warranty</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg1.png" alt="" />
                                                    <p>Free Shipping & Fasted Delivery</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg2.png" alt="" />
                                                    <p>100% Money-back guarantee</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg3.png" alt="" />
                                                    <p>24/7 Customer support</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg4.png" alt="" />
                                                    <p>Secure payment method</p>
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
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                                        <div className='ProductTapContent1-free'>
                                            <h4>Description</h4>
                                            <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
                                            <p>Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ProductTapContent1-ratingicons">
                                        <div className="row ProductTapContent1-feature">
                                            <div className="col-md-6 col-sm-6 col-12 ">
                                                <h4>Feature</h4>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg.png" alt="" />
                                                    <p>Free 1 Year Warranty</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg1.png" alt="" />
                                                    <p>Free Shipping & Fasted Delivery</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg2.png" alt="" />
                                                    <p>100% Money-back guarantee</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg3.png" alt="" />
                                                    <p>24/7 Customer support</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg4.png" alt="" />
                                                    <p>Secure payment method</p>
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
                            <Tab eventKey="Specification" title="Specification">
                                <div className="row ProductTapContent1-feature">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className='ProductTapContent1-free'>
                                            <h4>Description</h4>
                                            <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
                                            <p>Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ProductTapContent1-ratingicons">
                                        <div className="row ProductTapContent1-feature">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <h4>Feature</h4>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg.png" alt="" />
                                                    <p>Free 1 Year Warranty</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg1.png" alt="" />
                                                    <p>Free Shipping & Fasted Delivery</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg2.png" alt="" />
                                                    <p>100% Money-back guarantee</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg3.png" alt="" />
                                                    <p>24/7 Customer support</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg4.png" alt="" />
                                                    <p>Secure payment method</p>
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
                            <Tab eventKey="Review" title="Review">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className='ProductTapContent1-free'>
                                            <h4>Description</h4>
                                            <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
                                            <p>Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="row ProductTapContent1-feature">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <h4>Feature</h4>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg.png" alt="" />
                                                    <p>Free 1 Year Warranty</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg1.png" alt="" />
                                                    <p>Free Shipping & Fasted Delivery</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg2.png" alt="" />
                                                    <p>100% Money-back guarantee</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg3.png" alt="" />
                                                    <p>24/7 Customer support</p>
                                                </div>
                                                <div className='ProductTapContent1-desription1'>
                                                    <img src="/images/product-details/modalimg4.png" alt="" />
                                                    <p>Secure payment method</p>
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

                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
