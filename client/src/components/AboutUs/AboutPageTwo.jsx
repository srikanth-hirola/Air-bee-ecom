import React from 'react'

export const AboutPageTwo = ({ content }) => {

    return (
        <>
            <div className="About-Us-two">
                <div className="About-Us-two-sub">
                    <div className="About-Us-two-data">
                        <div className="container  ">
                            <div className="row align-items-center About-Us-two-content">
                                <div className="col-md-6 ">
                                    {content?.BannerImage?.image?.url && <div className='About-Us-two-image'>
                                        <img src={content?.BannerImage?.image?.url} alt="banner" />
                                    </div>}
                                </div>
                                <div className="col-md-6 ">
                                    <div className="About-Us-two-text">
                                        <div className='d-flex'>
                                            {content?.tagImage?.image?.url &&
                                                <div className='logo-rel'>
                                                    <img src={content?.tagImage?.image?.url} alt="tag" />
                                                </div>
                                            }
                                            {content?.tagTitle && <h5>{content?.tagTitle}</h5>}
                                        </div>

                                        <p>{content?.summary1} <br /><br />

                                            {content?.summary2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
