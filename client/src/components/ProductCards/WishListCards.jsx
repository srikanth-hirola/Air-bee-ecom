import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const WishListCards = ({
    data1,
    removeFromCartHandler
}) => {


    return (
        <>
            {data1 && (

                <div className="row">
                    <hr />
                    <div className="col-md-10">
                        <Link to={`${`/product/${data1?.slug}`}`}>
                            <div className="Dronescrat-product">
                                <div className='Dronescrat-product-sub'>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className='Drones-Product-image'>
                                                <img src={`${data1?.mainImage?.url}`} alt="product" />
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className='Drones-Product-desc Drones-product-desc-wishlist'>
                                                <p>{data1?.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <div className='Drones-Product-subtotal-sub2'>
                            <div className='Drones-Product-subtotal-sub2-image1'>
                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d5d7e0", fontSize: '20px' }} onClick={() => removeFromCartHandler(data1)} className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default WishListCards