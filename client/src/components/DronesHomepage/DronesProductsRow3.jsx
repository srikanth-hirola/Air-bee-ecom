import React from 'react'
import { Row3Products } from './DroneHomepageData';

const DronesProductsRow3 = () => {
    const data = Row3Products
    return (
        <>
            <div className="DronesProductsRow3-parent">
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className='DronesProductsRow3-image1'>
                            <div className='DronesProductsRow3-image1-title'>
                                <h5>Consumer electronics and gadgets</h5>
                            </div>
                            <div className='DronesProductsRow3-image1-parent'>
                            <img src="./DronesHomepage/row3-9.png" alt="" />
                            </div>
                            
                        </div>
                    </div>
                    {data?.productimages?.images?.content?.items?.items.length > 0 && 
                    <div className='col-md-9 p-0'>
                    <div className='DronesProducts3-images-main-parent'>
                        <div className="row">
                            {data?.productimages?.images?.content?.items?.items.map((item, index) => (
                                <div  key={index} className="col-sm-6 col-md-3 p-0">
                                    <div className='DronesProductsRow3-subimage-content'>
                                        <div className='DronesProductsRow3-subimage-content-text'>
                                            <h5>{item?.Title?.text}</h5>
                                            <p>{item?.SubText?.text}</p>
                                        </div>
                                        <div className='DronesProductsRow3-card-image'>
                                            <img src={item?.img?.url} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default DronesProductsRow3;