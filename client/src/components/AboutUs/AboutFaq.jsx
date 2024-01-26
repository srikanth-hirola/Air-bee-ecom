import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
export const AboutFaq = () => {
    return (
        <>
            <div className="about-faq-instant">
                <div className="about-faq-instant-sub">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="about-faq-instant-text">
                                    <h6>FAQ</h6>
                                    <h2>Frequently Asked Questions</h2>
                                    <p>Discover more about Air Bee and explore the intricate details of our offerings, services, and policies in our Frequently Asked Questions (FAQs) section.</p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-faq-instant-question">
                                    <Accordion>
                                    <Accordion.Item eventKey="4">
                                            <Accordion.Header>What products does Air Bee offer?</Accordion.Header>
                                            <Accordion.Body>
                                            Air Bee offers a diverse range of embedded electronics, including hardware, chips, Raspberry Pi and Arduino Uno boards, IoT products, DIY kits, sensors, and more.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How can I place an order on Air Bee's website?</Accordion.Header>
                                            <Accordion.Body>

                                            To place an order, simply browse our user-friendly e-commerce platform, select the desired products, and proceed to checkout. Follow the prompts to provide shipping information and complete your purchase.
                                            </Accordion.Body>


                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What is the shipping policy of Air Bee?</Accordion.Header>
                                            <Accordion.Body>
                                            Air Bee delivers across Australia. Our shipping is prompt, ensuring timely delivery to your doorstep or any specified location. For more details on shipping times and costs, please refer to our Shipping Policy.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Does Air Bee provide customer support for product-related queries?</Accordion.Header>
                                            <Accordion.Body>
                                            Yes, Air Bee is committed to excellent customer support. Feel free to reach out through our contact channels for assistance with product usage, features, or any other queries you may have.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>What is Air Bee's return and replacement policy?</Accordion.Header>
                                            <Accordion.Body>
                                            Air Bee offers a straightforward return and replacement policy. If you encounter any issues with your order, please refer to our Return and Replacement Policy on the website for detailed instructions on how to proceed.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
