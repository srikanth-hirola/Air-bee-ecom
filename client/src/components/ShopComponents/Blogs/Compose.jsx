import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FormInputs } from './FormInputs'
import axios from 'axios';
import toast from 'react-hot-toast';
import { server } from '../../../server';

const Compose = () => {

    const [isLoading, setLoading] = useState(false);
    const [blogData, setBlogData] = useState({
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
    })

    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await axios.post(`${server}/blogs/compose`, { blogData }, {
                withCredentials: true,
            })
            navigate('/dashboard');
            toast.success("Published Blog Successfully!")
        } catch (e) {
            toast.error(e?.response?.data?.message)
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <Container>
                <div>
                    {/* <ToastContainer /> */}
                    <div className='col-md-12 sticky-top'>
                        <h1 className='compose-blog-title'>Compose New Blog</h1>
                        <Button
                            variant="outline-primary"
                            className="update_button sticky-top"
                            type="submit"
                            name="sub"
                            onClick={submit}
                            disabled={isLoading ? true : false}
                        >
                            {isLoading ? "Loading..." : "Publish"}
                        </Button>
                    </div>
                    <Form>
                        <FormInputs blogData={blogData} setBlogData={setBlogData} />

                    </Form>
                </div>
            </Container>
        </>
    );
};

export default Compose;
