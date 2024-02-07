import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { server } from '../../server';
import BlogBlock from './BlogBlock';
import Loader from '../../utils/Loader';


const BlogsList = () => {
    const [blogsLength, setBlogsLength] = useState(0);
    const [blogs, setBlog] = useState([]);
    const [isLoading, setLoading] = useState(false);
    let API = `${server}/blogs/pagination`;


    const fetchBlog = async (url, pageNum) => {
        try {
            setLoading(true);
            const result = await axios.get(`${url}?page=${pageNum}&limit=${8}`);
            const data = result?.data?.blogs;
            setBlogsLength(result?.data?.length)
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

    // const [blogs] = useState(allBlogData);
    // const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState();

    const blogsPerPage = 8;

    useEffect(() => {
        const pageCountData = Math.ceil(blogsLength / blogsPerPage);
        setPageCount(pageCountData)
    }, [blogsLength])


    const changePage = ({ selected }) => {
        let pgNum = selected + 1;
        fetchBlog(API, pgNum)
        // setPageNumber(pgNum);
    }


    return (
        <>{isLoading ? <Loader /> :
            <>
                {blogs?.length > 0 ?
                    <div className="blog-page">
                        <div className="blog-sec">
                            <section class="container">
                                <div className="row">
                                    {blogs?.map((data, i) => (
                                        <BlogBlock data={data} key={i} />
                                    ))}
                                </div>

                            </section>
                        </div>
                    </div>
                    : <p>No Blogs are Added!</p>
                }

                <div className='blogs-page w-fit mx-auto'>
                    <ReactPaginate
                        previousLabel={<FaArrowLeft />}
                        nextLabel={<FaArrowRight />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"pagination justify-content-start"}
                        previousLinkClassName={"prev"}
                        nextLinkClassName={"next"}
                        disabledClassName={"disabled"}
                        activeClassName={"current"}
                    />
                </div>
            </>
        }
        </>
    )
}

export default BlogsList;
