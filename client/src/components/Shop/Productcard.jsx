import React from 'react'
import { shopCard } from "./shopStatic"
import Ratings from './Ratings'

export const Productcard = () => {
    const data = shopCard?.["products"]?.["Product Data"]?.content?.items?.items
    return (
        <div className="row">
            {data.map((i, index) => (
                <div className='card1' key={index}>
                    <div className=' card'>
                        <div className='shoppage1-card-image'>
                            <img src={i?.img?.url} alt="pic" />
                        </div>
                        <hr />
                        <div className='card-body'>
                            <div className="row">
                                <div className='col-md-9 col-9'>
                                    <div className='shoppage1-price'>
                                        <h5>{i?.subTitle1} <span>{i?.subTitle2}</span></h5>
                                        {/* <p><del>$128.00</del></p> */}
                                    </div>
                                    <div className='product-star product-brand-span flex'> <Ratings rating={i?.ratings} /><h6>{i?.ratings}</h6></div>
                                    <p>{i?.title}</p>
                                </div>
                                <div className='col-md-3 col-3 shoppage1-likeicon p-0'>
                                    <img src={i?.icon?.url} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='pagination-shop1'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
