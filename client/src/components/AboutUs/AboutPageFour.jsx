import React from 'react'

export const AboutPageFour = ({ content }) => {

    return (
        <>
            <div className="About-Us-four">
                <div className="About-Us-four-sub">
                    <div className="About-Us-four-data">
                        <div className="container  ">
                            <div className="row align-items-center About-Us-four-content">
                                <div className="col-md-6 ">
                                    {content?.BannerImage?.image?.url && <div className='About-Us-four-image'>
                                        <img src={content?.BannerImage?.image?.url} alt="banner" />
                                    </div>}
                                </div>
                                <div className="col-md-6 ">
                                    <div className="About-Us-four-text">
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
