import React, { memo } from 'react'
import LazyLoadImageComponent from '../OptimizeComp/LazyLoadImageComponent'

const DronesServices = memo(({ content, title }) => {

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
                                        {/* <img src={item?.image?.url} alt="" /> */}
                                        <LazyLoadImageComponent alt={"industries"} height={"100%"} width={"100%"} img={item?.image?.url} />
                                    </div>
                                    <div className='Drone-services-sub-2'>
                                        <p>{item?.title}</p>
                                        <div className='Drone-services-icon'>
                                            {/* <img src={content?.icons[index]?.image?.url} alt="icons" /> */}
                                            <LazyLoadImageComponent alt={"industries-icon"} height={"100%"} width={"100%"} img={content?.icons[index]?.image?.url} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
            </div>
        </>
    )
})

export default DronesServices
