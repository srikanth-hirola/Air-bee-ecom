import React from 'react'
import { Link } from 'react-router-dom'


export const Shoppage1Breadcrump = ({ bredCrumb }) => {
    return (
        <div className="breadcrump-shop">
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {/* <li className="breadcrumb-item active "><Link to="/" className='text-black'>Home</Link></li> */}
                        <li className="breadcrumb-item active font-semibold"><Link to="/" className='breadcrumb-item active font-semibold'>Home</Link></li>
                        {bredCrumb?.map((item, i) => (
                            <li className="breadcrumb-item active font-semibold" key={i} aria-current="page">{item}</li>
                        ))}
                        {/* <li className="breadcrumb-item active" aria-current="page">Men’s wear</li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li> */}
                    </ol>
                </nav>
            </div>
        </div>
    )
}
