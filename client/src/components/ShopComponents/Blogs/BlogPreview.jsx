import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import EditButton from './Buttons/EditButton'
import { sanitize } from 'dompurify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Container from 'react-bootstrap/Container';
import { server } from '../../../server';

const BlogPreview = () => {
    const slug = useParams();
    const slugURL = slug.publish;
    const [blogPage, setBlogPage] = useState([]);
    const [pagefound, setPageFound] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    let API = `${server}/blogs/blog/${slugURL}`;

    const fetchBlog = async (url) => {
        try {
            await axios
                .get(url)
                .then((result) => {
                    setLoading(true);
                    const data = result.data;
                    if (data === '') {
                        setPageFound('Notfound');
                    } else {
                        setBlogPage(data);
                    }
                })
                .catch((err) => {
                    console.log('Not found the page', err);
                    navigate('/dashboard');
                });
        } catch (e) {
            console.log('Not found the page', e);
            navigate('/dashboard');
        }
    };

    useEffect(() => {
        fetchBlog(API);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const printDate = (date) => {
        return new Date(date).toLocaleString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    {/* <meta charSet="utf-8" />
            <meta name="description" content={blogPage?.metadescription} />
            <title>{blogPage?.metatitle}</title>
            <link rel="canonical" href="http://mysite.com/example" /> */}
                </Helmet>
                {loading ? (
                    <>
                        {pagefound === 'Notfound' ? (
                            <p>No Blog is Available</p>
                        ) : (
                            <Container>
                                <div className="blogPage blogPageAdmin">
                                    <h3>Admin Blog Page</h3>
                                    <h1>{blogPage?.title}</h1>
                                    <div className="blogpage-img">
                                        <img
                                            src={blogPage?.large_thumb[0]?.url}
                                            alt="blogpic" className='w-[200px] h-[100px] object-contain'
                                        />
                                    </div>
                                    <p>
                                        Last Update On: <b>{printDate(blogPage?.updatedAt)}</b> by{' '}
                                        {blogPage?.author?.author_name}
                                    </p>
                                    <EditButton path={`/admin/blog/edit/${blogPage?._id}`} />
                                    <br />
                                    <p className="blogBody">{blogPage?.blogDescription
                                    }</p>
                                    <div
                                        className="container"
                                        dangerouslySetInnerHTML={{
                                            __html: sanitize(blogPage?.body),
                                        }}
                                    />
                                </div>
                            </Container>
                        )}
                        ;
                    </>
                ) : (
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                )}
            </HelmetProvider>
        </>
    );
}

export default BlogPreview