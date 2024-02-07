import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { server } from '../../../../server';
import toast from 'react-hot-toast';
import { Form } from 'react-bootstrap';

const EditEventSEO = () => {

    const { id } = useParams();
    const [productData, setProductData] = useState();
    const [term, setTerm] = useState('');

    const handleChangeSEOKeywords = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setTerm(value.trim());
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        const updatedState = JSON.parse(JSON.stringify(productData));
        updatedState[name] = value;
        setProductData(updatedState)
    }

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const { data } = await axios.get(`${server}/event/get-all-event-products-store/${id}`);
                console.log(data?.events)
                setProductData(data?.events[0])
            } catch (error) {
                console.log(error);
            }
        }
        fetchProductData()
    }, [id]);

    const handleAdd = (e) => {
        e.preventDefault();
        const updatedState = JSON.parse(JSON.stringify(productData));
        if (!term) {
            toast.error("Empty keyword can't be added");
            return;
        }
        if (!updatedState?.seoKeywords?.includes(term)) {
            updatedState["seoKeywords"] = [...updatedState["seoKeywords"], term];
            setProductData(updatedState)
            setTerm('');
        } else {
            toast.error('Term already exists in searchTerms');
        }

    };

    const removeItem = (e, index) => {
        e.preventDefault();
        const updatedState = JSON.parse(JSON.stringify(productData));
        updatedState["seoKeywords"]?.splice(index, 1)
        setProductData(updatedState)
    };

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        if (!productData?.metaTitle || !productData?.metaDescription || !productData?.slug) {
            toast.error("All Mandatory fields are required!");
            return
        }
        try {
            await axios.put(`${server}/event/update-event-store`, {
                productData
            }, { withCredentials: true });
            toast.success("Updated Event SEO successfully")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            {productData ?
                <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[104vh] rounded-[4px] p-3 overflow-y-scroll create-width">
                    <h5 className="text-[30px] font-Poppins text-center font-[400]">SEO Details</h5>
                    {/* create product form */}
                    <form>
                        <div>
                            <label className="pb-2  font-[500]">
                                Item Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={productData.name}
                                className="cursor-not-allowed mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your product name..." readOnly
                            />
                        </div>
                        <br />
                        <div>
                            <label className="pb-2  font-[500]">
                                Meta Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="metaTitle"
                                value={productData?.metaTitle}
                                onChange={handleOnChange}
                                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your product name..."
                            />
                        </div>
                        <br />
                        <div>
                            <label className="pb-2  font-[500]">
                                Slug <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="slug"
                                value={productData?.slug}
                                onChange={handleOnChange}
                                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your product name..."
                            />
                        </div>
                        <br />

                        <div>
                            <label className="pb-2  font-[500]">
                                Meta Description <span className="text-red-500">*</span>
                            </label>
                            <Form.Control
                                placeholder="Meta Description"
                                as="textarea"
                                rows={5}
                                name="metaDescription" className='focus:!border-[#dee2e6] focus:!shadow-none'
                                value={productData.metaDescription}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <br />
                        <>
                            <div>
                                <label className="pb-2 font-[500]">
                                    Key Phrase
                                </label>
                                <div className="d-flex">
                                    <input
                                        type="text"
                                        value={term}
                                        name="searchTerms"
                                        className="appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        onChange={handleChangeSEOKeywords}
                                    />
                                    <button className='rounded px-2 py-1 mx-2 bg-yellow-500 text-light' onClick={handleAdd}>
                                        Add
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div className="keyword-array-div gnrt">
                                {productData?.seoKeywords?.map((val, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <p className='gnrt-p1'>
                                                {val}&nbsp;&nbsp;
                                                <button
                                                    className='gnrt-btn'
                                                    onClick={(e) => {
                                                        removeItem(e, index);
                                                    }}
                                                >
                                                    x
                                                </button>
                                            </p>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </>
                    </form>
                    <button className='bg-green-500 text-white px-3 py-2 rounded' onClick={hanldeSubmit}>Update SEO Details</button>
                </div>
                :
                <p>No Product Found</p>
            }
        </>
    )
}

export default EditEventSEO