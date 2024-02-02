import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../../server';
import { useParams } from 'react-router-dom';
import Loader from '../../utils/Loader';

const BlogDetails = () => {
    const params = useParams();
    const blogSlug = params.slug;
    const [loading, setLoading] = useState(false);
    const [blogData, setBlog] = useState([]);

    const fetchBlog = async (url) => {
        try {
            const result = await axios.get(url);
            setLoading(true);
            const data = result.data;
            setBlog(data);
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
        <>{
            loading ? <Loader /> :

                <>{blogData?._id ?
                    <div>
                        <h3>{blogData?.title}</h3>
                    </div>
                    : <p>No Blogs Exist!</p>
                }
                </>
        }
        </>
    )
}

export default BlogDetails