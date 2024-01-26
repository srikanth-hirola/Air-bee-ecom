import React from 'react'
import { Link } from 'react-router-dom';
const AboutUsBanner = () => {
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
                                <h1>Discover Our Inspiring Story of Innovation and Success.</h1>
                                <div className='AboutUsBanner-sub-content-text'>
                                    <p>Air Bee is a newbie in the field of Electronics components, projects ad solutions. Founded in 2024. but we are into this industry from 2015 onwards. We intend to provide a convenient and quick e-commerce platform for customers keeping keen interest in the field of electronics as well as the one who wants to explore the field of electronics.</p>
                                </div>
                                <Link to="">
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

export default AboutUsBanner;