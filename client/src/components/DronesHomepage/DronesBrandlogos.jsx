import React from 'react'
import { brands } from './DroneHomepageData'

const DronesBrandlogos = () => {
    const data = brands
    return (
        <>
            <div className="DronesBrandlogos-parent">
                <h2>Brands We Deal With </h2>
                {data?.brandlogos?.logos?.content?.items?.length > 0 &&
                    <div className="row">
                        {data?.brandlogos?.logos?.content?.items?.map((item, index) => (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                                <div className="DronesBrandlogos-sub">
                                    <img src={item?.img?.url} alt="" />
                                </div>
                            </div>
                        ))}

                    </div>}
            </div>
        </>
    )
}

export default DronesBrandlogos