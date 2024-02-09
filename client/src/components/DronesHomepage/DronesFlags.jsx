import React, { memo } from 'react'
import LazyLoadImageComponent from '../OptimizeComp/LazyLoadImageComponent'

const DronesFlags = memo(({ content, title }) => {

    return (
        <>
            <div className='DronesFlags-parent'>
                <h4>{title}</h4>
                {content?.regions?.length > 0 &&
                    <div className="row justify-content-between">
                        {content?.regions?.map((item, index) => (
                            <div key={index} className=" col-sm-6 col-md-2">
                                <div className="DronesFlags-sub">
                                    <div className='DronesFlagsimage'>
                                        {/* <img src={item?.image?.url} alt="regions" /> */}
                                        <LazyLoadImageComponent alt={"regions"} height={"100%"} width={"100%"} img={item?.image?.url} />
                                    </div>
                                    <div>
                                        <h6>{item?.title} </h6>
                                        {/* <p>{item?.SubText?.text} </p> */}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>}
            </div>
        </>

    )
})

export default DronesFlags