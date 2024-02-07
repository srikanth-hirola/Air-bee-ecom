import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../../server';
import { useParams } from 'react-router-dom';

const CategoryBlogs = () => {
    const [categoryBlogs, setCategoryBlogs] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {

        const fetchCategoryBlogs = async () => {
            try {
                setLoading(true);
                const result = await axios.get(`${server}/blogs/category/${category}`);
                const data = result?.data?.blogs;
                setCategoryBlogs(data);
            } catch (error) {
                console.error("Error fetching category blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryBlogs();
    }, [category]);

    return (
        <>
            <h2>{category} Blogs</h2>

            <div className="category-blogs-data">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="category-blogs-list">
                        {categoryBlogs.map((blog) => (
                            <li key={blog._id}>
                                <h3>{blog.title}</h3>
                                <p>{blog.excerpt}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default CategoryBlogs;
