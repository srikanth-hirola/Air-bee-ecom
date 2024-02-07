import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../../server';
import { useParams } from 'react-router-dom';
import Loader from '../../utils/Loader';
import BlogSidebar from './BlogSidebar';
import SEOHelmet from '../SEOHelmet';

const BlogDetails = () => {
    const params = useParams();
    const blogSlug = params.slug;
    const [loading, setLoading] = useState(false);
    const [blogData, setBlog] = useState([]);
    const [seoDetails, setSEODetails] = useState()

    const fetchBlog = async (url) => {
        try {
            const result = await axios.get(url);
            setLoading(true);
            const data = result.data;
            setBlog(data);
            setSEODetails({
                metaTitle: data?.metaTitle,
                metaDescription: data?.metaDescription
            })
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        let API = `${server}/blogs/blog/${blogSlug}`;
        fetchBlog(API);
    }, [blogSlug]);



    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            {
                loading ? <Loader /> :
                    <>{blogData?._id ?
                        <div className="single-blog-details">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        {blogData?.large_thumb?.length > 0 &&
                                            <div className="blog-main-image">
                                                <img
                                                    src={blogData?.large_thumb[0]?.url}
                                                    alt="a brand new sports car"
                                                />
                                            </div>
                                        }
                                        <div className="blog-content">
                                            <h2>
                                                {blogData?.title}
                                            </h2>
                                            <div className="blog-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?Lorem, ipsum dolor sit amet
                                                    consectetur adipisicing elit. Nihil alias eius enim ad
                                                    accusamus velit quos illo ut. Nam, voluptas?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. Praesentium cum architecto
                                                    harum consequuntur at dolore provident deleniti obcaecati
                                                    dolorem natus maxime eum, ex voluptate ducimus itaque
                                                    voluptas iste aliquam optio numquam eius non eligendi ut.
                                                    Amet unde velit numquam delectus, voluptas doloremque vitae,
                                                    laborum repudiandae et modi deserunt soluta dolorum!
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?Lorem ipsum, dolor sit amet
                                                    consectetur adipisicing elit. Aut, nulla.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?Lorem ipsum, dolor sit amet
                                                    consectetur adipisicing elit. Adipisci, omnis?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?Lorem ipsum dolor, sit amet
                                                    consectetur adipisicing elit. Reiciendis ipsa recusandae
                                                    facere hic voluptate placeat earum! Commodi ad
                                                    necessitatibus dolor consequatur labore odit vero obcaecati
                                                    magnam cum sunt illo eligendi impedit, provident laudantium
                                                    itaque molestiae voluptatibus vel quam. Dolore error alias
                                                    soluta laudantium sequi enim rem aperiam odit porro,
                                                    consequatur delectus eum illo ad maiores animi reprehenderit
                                                    distinctio beatae recusandae placeat deserunt? Cupiditate
                                                    quisquam voluptas iste, velit voluptatum soluta? Repellat
                                                    illum dolor aut voluptatibus perferendis dolorem similique
                                                    vel a quos.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Maiores et ad consequuntur quasi porro impedit, mollitia ab
                                                    voluptates consectetur accusamus?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-sidebar">
                                            <BlogSidebar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <p>No Blogs Exist!</p>
                    }
                    </>
            }
        </>
    )
}

export default BlogDetails