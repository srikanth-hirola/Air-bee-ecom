import React from 'react'
import { Row2Products } from './DroneHomepageData';

const DronesProductsRow2 = () => {
    const data = Row2Products
    return (
        <>
            <div className="DronesProductsRow2-parent">
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className='DronesProductsRow2-image1'>
                            <div className='DronesProductsRow2-image1-title'>
                                <h5>Home and Outdoor</h5>
                            </div>
                            <div className='DronesProductsRow2-image1-parent'>
                            <img src="./DronesHomepage/row-2-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {data?.productimages?.images?.content?.items?.items.length > 0 &&
                        <div className='col-md-9 p-0'>
                            <div className='DronesProducts2-images-main-parent'>
                                <div className="row">
                                    {data?.productimages?.images?.content?.items?.items.map((item, index) => (
                                        <div key={index} className="col-sm-6 col-md-3 p-0">
                                            <div className='DronesProductsRow2-subimage-content'>
                                                <div className='DronesProductsRow2-subimage-content-text'>
                                                    <h5>{item?.Title?.text}</h5>
                                                    <p>{item?.SubText?.text}</p>
                                                </div>
                                                <div className='DronesProductsRow2-card-image'>
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

export default DronesProductsRow2;