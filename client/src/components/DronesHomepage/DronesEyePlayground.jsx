import React from 'react'
import { Link } from 'react-router-dom'
// import './Drones.css'
const DronesEyePlayground = ({ featureSecTwo }) => {

    return (
        <>
            <div className='DronesEyePlayground-parent'>
                <div className="row">
                    <div className="col-md-7">
                        <div className='DronesEyePlayground-sub'>
                            {featureSecTwo?.heading && <h1>{featureSecTwo?.heading}</h1>}

                            <div className="col-md-12">
                                <div className='DronesEyePlayground-sub-content1'>
                                    {featureSecTwo?.contentOne?.title && <h4>{featureSecTwo?.contentOne?.title}</h4>}
                                    {featureSecTwo?.contentOne?.subTitle && <p>{featureSecTwo?.contentOne?.subTitle}</p>}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className='DronesEyePlayground-sub-content1'>
                                    {featureSecTwo?.contentTwo?.title && <h4>{featureSecTwo?.contentTwo?.title}</h4>}
                                    {featureSecTwo?.contentTwo?.subTitle && <p>{featureSecTwo?.contentTwo?.subTitle}</p>}
                                    {featureSecTwo?.button?.title && <Link to={featureSecTwo?.button?.url}>{featureSecTwo?.button?.title}</Link>}
                                </div>
                            </div>
                        </div>

                    </div>
                    {featureSecTwo?.BannerImage?.image?.url &&
                        <div className="col-md-5">
                            <div className='DronesEyePlayground-image'>
                                <img src={featureSecTwo?.BannerImage?.image?.url} alt="Feature" />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>

    )
}

export default DronesEyePlayground