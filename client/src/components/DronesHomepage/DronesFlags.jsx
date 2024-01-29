import React from 'react'
import { flags } from './DroneHomepageData'

const DronesFlags = () => {
    const data = flags
    return (
        <>
            <div className='DronesFlags-parent'>
                <h4>Suppliers by region</h4>
                {data?.countryflags?.flagimages?.content?.items?.length > 0 &&
                <div className="row justify-content-between">
                    {data?.countryflags?.flagimages?.content?.items?.map((item,index)=> (
                        <div key={index} className=" col-sm-6 col-md-2">
                        <div className="DronesFlags-sub">
                            <div className='DronesFlagsimage'>
                                <img src={item?.img?.url} alt="" />
                            </div>
                            <div>
                                <h6>{item?.title?.text} </h6>
                                {/* <p>{item?.SubText?.text} </p> */}
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>}
            </div>
        </>

    )
}

export default DronesFlags