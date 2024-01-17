import React from 'react'
import { Link } from 'react-router-dom'

export const Product1Cramp = ({ name }) => {

    const bredCurms = ["Product", name]

    return (
        <div className="breadcrump-product1">
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb contactpage-breadcramp1">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        {bredCurms?.map((item) => (
                            <li className="breadcrumb-item active" aria-current="page">{item}</li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    )
}
