import React, { memo } from 'react'
import LazyLoadImageComponent from '../OptimizeComp/LazyLoadImageComponent'

const DronesBrandlogos = memo(({ content, title }) => {

    return (
        <>
            <div className="DronesBrandlogos-parent">
                <h2>{title}</h2>
                {content?.banners?.length > 0 &&
                    <div className="row">
                        {content?.banners?.map((item, index) => (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                                <div className="DronesBrandlogos-sub">
                                    {/* <img src={item?.image?.url} alt="brands" /> */}
                                    <LazyLoadImageComponent alt={"brands"} height={"100%"} width={"100%"} img={item?.image?.url} />
                                </div>
                            </div>
                        ))}

                    </div>}
            </div>
        </>
    )
})

export default DronesBrandlogos