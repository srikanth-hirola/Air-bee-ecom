import React from 'react'
// import './Drones.css'
import DronesEyePlayground from './DronesEyePlayground'
const DronesDirectionSensing = ({ featureSecOne, featureSecTwo }) => {

    return (
        <>
            <div className='DronesDirectionSensing-parent'>
                <div className="row">
                    <div className="col-md-4">
                        <div className='DronesDirectionSEnsingsub1'>
                            {featureSecOne?.BannerImage?.image?.url &&
                                <div className="DronesDirectionSensing-image">
                                    <img src={featureSecOne?.BannerImage?.image?.url} alt="Feature Main" />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className='DRonesDirectionSnsing-right'>
                            <div className='DronesDirectionSEnsingsub1-text'>
                                {featureSecOne?.title &&
                                    <div className='DronesDirectionSEnsingsub1-text-heading'>
                                        <h1>{featureSecOne?.title}</h1>
                                    </div>
                                }
                                {featureSecOne?.summary &&
                                    <p>{featureSecOne?.summary}</p>
                                }
                            </div>
                            {featureSecOne?.features?.length > 0 &&
                                <div className="DronesDirectionSEnsingsub2-parent">
                                    {featureSecOne?.features?.map((item, i) => (
                                        <div className='DronesDirectionSEnsingsub2-sub1' key={i}>
                                            <div className='DronesDirectionSEnsingsub2-sub1-image'>
                                                <img src={item?.image?.url} alt="feature" />
                                            </div>
                                            <p>{item?.title}</p>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
            <DronesEyePlayground featureSecTwo={featureSecTwo} />
        </>

    )
}

export default DronesDirectionSensing