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
                                    <p>Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-faq-instant-question">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How long does it take to ship my order?</Accordion.Header>
                                            <Accordion.Body>

                                            Orders are usually shipped within 1-2 business days after placing the order.
                                            </Accordion.Body>


                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                                            <Accordion.Body>
                                            Orders are usually shipped within 1-2 business days after placing the order.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>What shipping options do you have?</Accordion.Header>
                                            <Accordion.Body>
                                            Orders are usually shipped within 1-2 business days after placing the order.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>How do I make changes to an existing order?</Accordion.Header>
                                            <Accordion.Body>
                                            Orders are usually shipped within 1-2 business days after placing the order.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>When will my order arrive?</Accordion.Header>
                                            <Accordion.Body>
                                            Orders are usually shipped within 1-2 business days after placing the order.
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
