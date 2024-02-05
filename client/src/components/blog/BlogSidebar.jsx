import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../server';

const BlogSidebar = () => {
    const [blogs, setBlog] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setLoading] = useState(false);
    let API = `${server}/blogs/pagination`;

    const fetchBlog = async (url, pageNum) => {
        try {
            setLoading(true);
            const result = await axios.get(`${url}?page=${pageNum}&limit=${8}`);
            const data = result?.data?.blogs;
            setBlog(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog(API, 1);
    }, [API]);

    return (
        <>
            <h2>Sidebar</h2>

            <div className="blog-category-data">
                <ul className="blog-category-list">
                    {blogs.map((data) => (
                        <li key={data.category}>
                            <Link to={`/blogs/${data.category}`}>{data.category}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BlogSidebar;
