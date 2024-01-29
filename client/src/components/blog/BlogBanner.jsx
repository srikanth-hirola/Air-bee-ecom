import React from 'react'
import { Link } from 'react-router-dom';
const BlogBanner = () => {
    return (
        <>
            <div className='AboutUsBanner-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='AboutUsBanner-sub'>
                                <div className='AboutUsBanner-sub-content'>
                                    <div className='AboutUsBanner-sub-content-image'>
                                        <img src="/DronesHomepage/verify.png" alt="" />
                                    </div>
                                    <p>Air Bee - Best Electronics Platform </p>
                                </div>
                                <h1>Air Bee Insights: Navigating the World of Embedded Electronics</h1>
                                <div className='AboutUsBanner-sub-content-text'>
                                    <p>Dive into our blog for a journey through the exciting realms of embedded electronics. From insightful guides and DIY project inspiration to the latest tech trends, join us on a discovery of innovation and creativity at Air Bee.</p>
                                </div>
                                <Link to="/products-by-category/search">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='AboutUsBanner-image'>
                                <img src="/DronesHomepage/aboutusbanner.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlogBanner;