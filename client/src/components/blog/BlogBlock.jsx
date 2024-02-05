import React from 'react'
import { Link } from 'react-router-dom'

const BlogBlock = ({ data }) => {


    return (
        <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
            <Link to={`/blog/${data?.slug}`}>
                <div class="card-container">
                    {data?.large_thumb?.length > 0 &&
                        <div class="card-image">
                            <img src={data?.large_thumb[0]?.url} alt="a brand new sports car" />
                        </div>
                    }
                    <div class="card-body">
                        <span class="card-badge card-badge-blue">{data?.category}</span>

                        <h1>
                            {data?.title}
                        </h1>
                        <p class="card-subtitle">
                            {data?.excerpt}
                        </p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogBlock