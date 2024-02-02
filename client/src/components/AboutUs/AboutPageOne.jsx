import React from 'react'

export const AboutPageOne = ({ content }) => {

    return (
        <>
            <div className="About-Us-one">
                <div className="About-Us-one-sub">

                    <div className='About-Us-one-heading'>
                        <div className="container">
                            {/* <h4>About Us</h4> */}
                        </div>
                    </div>
                    <div className="About-Us-one-data">
                        <div className="container  ">
                            <div className="row align-items-center About-Us-one-content">

                                <div className="col-md-6 ">
                                    <div className="About-Us-one-text">
                                        {content?.title && <h5>{content?.title}</h5>}
                                        <p>{content?.summary1} <br /><br />

                                            {content?.summary2}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    {content?.BannerImage?.image?.url &&
                                        <div className='About-Us-one-image'>
                                            <img src={content?.BannerImage?.image?.url} alt="banner" />

                                        </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
