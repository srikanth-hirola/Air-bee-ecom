import React from 'react'

const DronesServices = ({ content, title }) => {

    return (
        <>
            <div className='DronesServices-parent'>
                <h4>{title}</h4>
                {content?.industries?.length > 0 &&
                    <div className="row">

                        {content?.industries?.map((item, index) => (
                            <div className="col-sm-6 col-md-6 col-lg-3" key={index}>
                                <div className='Drone-services-sub'>
                                    <div className='Drone-services-sub-image'>
                                        <img src={item?.image?.url} alt="" />
                                    </div>
                                    <div className='Drone-services-sub-2'>
                                        <p>{item?.title}</p>
                                        <div className='Drone-services-icon'>
                                            <img src={content?.icons[index]?.image?.url} alt="icons" />
                                        </div>
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
