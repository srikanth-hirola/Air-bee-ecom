import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FormInputs } from './FormInputs'
import toast from 'react-hot-toast';
import { server } from '../../../server';

const EditBlog = () => {


    const id = useParams();
    const idURL = id.id;
    const [blogEdit, setBlogEdit] = useState({
        title: '',
        metaTitle: '',
        metaDescription: '',
        blogDescription: '',
        read_time: '',
        category: '',
        excerpt: '',
        large_thumb: [],
        body: '',
        slug: ''
    });
    const [pagefound, setPageFound] = useState('');
    const [loading, setLoading] = useState(true);


    let API = `${server}/blogs/blog/edit/${idURL}`;

    const fetchBlog = async (url) => {
        try {
            setLoading(false);
            await axios
                .get(url)
                .then((result) => {

                    if (result.data === '') {
                        setPageFound('Notfound');
                    } else {
                        setBlogEdit({ ...result.data });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(true)
        }
    };

    useEffect(() => {
        fetchBlog(API);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // -----------------------------------------------------------------------------------------------------------------------

    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await axios.put(`${server}/blogs/update/${idURL}`, { blogEdit }, {
                withCredentials: true,
            })
            navigate('/dashboard');
            toast.success("Updated Blog Successfully!")
        } catch (e) {
            toast.error(e?.response?.data?.message)
        } finally {
            setLoading(false)
        }

    };



    return (
        <>
            {loading ? (
                <Container>
                    <div>

                        {pagefound === 'Notfound' ? (
                            <p>No Blog is Available</p>
                        ) : (
                            <>
                                <div className='col-md-12 sticky-top'>
                                    <h4>Admin Blog Edit Panel</h4>
                                    <Button
                                        variant="outline-primary"
                                        className="update_button"
                                        type="submit"
                                        name="sub"
                                        onClick={update}
                                    >
                                        Update
                                    </Button>
                                </div>
                                <Form>
                                    <FormInputs blogData={blogEdit} setBlogData={setBlogEdit} _id={idURL} />

                                </Form>
                            </>
                        )}
                    </div>
                </Container>
            ) : (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
        </>
    );
};

export default EditBlog;
