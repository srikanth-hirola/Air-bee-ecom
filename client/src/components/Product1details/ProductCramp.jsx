import React from 'react'
import { Link } from 'react-router-dom'

export const Product1Cramp = ({ name }) => {

    const bredCurms = ["Product", name]

    return (
        <div className="breadcrump-product1">
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb contactpage-breadcramp1">
                        <li className="breadcrumb-item active"><Link to="/" className='text-decoration-none text-black' >Home /&nbsp;</Link></li> 
                        {bredCurms?.map((item) => (
                            <Link to='/products-by-category/search'>
                            <li className="breadcrumb-item active" aria-current="page"> {item} /&nbsp; </li>
                            </Link>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    )
}
