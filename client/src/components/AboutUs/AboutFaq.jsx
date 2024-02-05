import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
export const AboutFaq = ({ content }) => {



    return (
        <>
            <div className="about-faq-instant">
                <div className="about-faq-instant-sub">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="about-faq-instant-text">
                                    {content?.tagTitle && <h6>{content?.tagTitle}</h6>}
                                    {content?.title && <h2>{content?.title}</h2>}
                                    {content?.summary && <p>{content?.summary}</p>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                {content?.faqs?.length > 0 &&
                                    <div className="about-faq-instant-question">
                                        <Accordion>
                                            {content?.faqs?.map((item, i) => (
                                                <Accordion.Item eventKey={i} key={i}>
                                                    <Accordion.Header>{item?.title}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {item?.summary}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
