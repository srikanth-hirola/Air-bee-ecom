import React from 'react'

const DronesBrandlogos = ({ content, title }) => {

    return (
        <>
            <div className="DronesBrandlogos-parent">
                <h2>{title}</h2>
                {content?.banners?.length > 0 &&
                    <div className="row">
                        {content?.banners?.map((item, index) => (
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                                <div className="DronesBrandlogos-sub">
                                    <img src={item?.image?.url} alt="brands" />
                                </div>
                            </div>
                        ))}

                    </div>}
            </div>
        </>
    )
}

export default DronesBrandlogos