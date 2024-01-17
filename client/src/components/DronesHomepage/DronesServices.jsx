import React from 'react'
import { Services } from './DroneHomepageData'

const DronesServices = () => {
    const data = Services
    console.log(data)
    return (
        <>
            <div className='DronesServices-parent'>
            <h4>Our Extra Services</h4>
                {data?.ServicesContent?.servicesimages?.content?.items?.items?.length > 0 &&
                    <div className="row">
                        
                        {data?.ServicesContent?.servicesimages?.content?.items?.items?.map((item, index) => (
                            <div className="col-sm-6 col-md-3" key={index}>
                                <div className='Drone-services-sub'>
                                    <div className='Drone-services-sub-image'>
                                        <img src={item?.img?.url} alt="" />
                                    </div>
                                    <div className='Drone-services-sub-2'>
                                        <p>{item?.SubText?.text}</p>
                                        {data?.servicesIcon?.icon?.content?.items[index] && (
                                            <div className='Drone-services-icon'>
                                                <img src={data?.servicesIcon?.icon?.content?.items[index]?.img?.url} alt="" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
            </div>
        </>
    )
}

export default DronesServices
