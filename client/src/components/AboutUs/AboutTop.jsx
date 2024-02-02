import React from 'react'

export const AboutTop = ({ content }) => {

    return (
        <>
            <div className="about-top-comapany-instant">
                <div className="about-top-comapany-instant-sub">
                    <div className="container">
                        <div className="about-top-comapany-instant-heading">
                            {content?.tagTitle && <h6>{content?.tagTitle}</h6>}
                            {content?.title && <h2>{content?.title}</h2>}
                            {content?.summary && <p>{content?.summary}</p>}
                        </div>
                        {content?.clients?.length > 0 &&
                            <div className="row about-top-comapany-instant-subject">
                                {content?.clients?.map((item, i) => (
                                    <>{item?.image?.url &&
                                        <div className="col-md-3 col-sm-6 col-12" key={i}>
                                            <div className="about-top-comapany-instant-text">
                                                <img src={item?.image?.url} alt="client" />
                                            </div>
                                        </div>
                                    }
                                    </>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
