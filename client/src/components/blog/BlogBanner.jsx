import React from 'react'
import { Link } from 'react-router-dom';
const BlogBanner = ({ content }) => {

    return (
        <>
            <div className='AboutUsBanner-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='AboutUsBanner-sub'>
                                <div className='AboutUsBanner-sub-content'>
                                    {content?.tagImage?.image?.url &&
                                        <div className='AboutUsBanner-sub-content-image'>
                                            <img src={content?.tagImage?.image?.url} alt="tag" />
                                        </div>
                                    }
                                    {content?.tagTitle && <p>{content?.tagTitle}</p>}
                                </div>
                                {content?.title && <h1>{content?.title}</h1>}
                                {content?.summary && <div className='AboutUsBanner-sub-content-text'>
                                    <p>{content?.summary}</p>
                                </div>}
                                {content?.button?.title && <Link to={content?.button?.url}>
                                    <button>{content?.button?.title}</button>
                                </Link>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            {content?.BannerImage?.image?.url &&
                                <div className='AboutUsBanner-image'>
                                    <img src={content?.BannerImage?.image?.url} alt="banner" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlogBanner;