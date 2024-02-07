import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';


export const SEOModal = (props) => {
    const { hanldeSubmit } = useSaveLayoutContent();
    const [loading, setLogoLoading] = useState(false);
    const [term, setTerm] = useState('');

    const [allPagesSEODetails, setAllPagesSEODetails] = useState({
        homeSEO: {
            metaTitle: 'Airbee Technologies',
            metaDescription: 'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.',
            seoKeywords: ["Home Page"],
        },
        "about-usSEO": {
            metaTitle: 'About Us || Airbee Technologies',
            metaDescription: 'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.',
            seoKeywords: ["About Us"],
        },
        "productsSEO": {
            metaTitle: 'All Products || Airbee Technologies',
            metaDescription: 'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.',
            seoKeywords: ["All Products "],
        },
        blogSEO: {
            metaTitle: 'Blogs || Airbee Technologies',
            metaDescription: 'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.',
            seoKeywords: ["Blogs"],
        },
        "contact-usSEO": {
            metaTitle: 'Contact Us || Airbee Technologies',
            metaDescription: 'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.',
            seoKeywords: ["Contact Us"],
        },
        "product-categorySEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "cartSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "wishlistSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "loginSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "signupSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "forgot-passwordSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "order-successSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "t&cSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "privacy-policySEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "refund-policySEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "account-activationSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "checkoutSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "inboxSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "ordersSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "profileSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "addressSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "refundSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
        "shop-loginSEO": {
            metaTitle: '',
            metaDescription: '',
            seoKeywords: [],
        },
    })

    const [seoDetails, setSeoDetails] = useState({
        metaTitle: '',
        metaDescription: '',
        seoKeywords: []
    })
    const styles = StyleConfig();

    useEffect(() => {
        if (props?.fieldName && styles?.allPagesSEODetails) {
            let name = props?.fieldName + "SEO";
            let found = styles?.allPagesSEODetails[name];
            setSeoDetails(found)
            setAllPagesSEODetails(styles?.allPagesSEODetails)
        }
    }, [styles?.allPagesSEODetails, props?.fieldName])


    const handleChangeSEOKeywords = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setTerm(value.trim());
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        const updatedState = JSON.parse(JSON.stringify(seoDetails));
        updatedState[name] = value;
        setSeoDetails(updatedState)
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const updatedState = JSON.parse(JSON.stringify(seoDetails));
        if (!term) {
            toast.error("Empty keyword can't be added");
            return;
        }
        if (!updatedState?.seoKeywords?.includes(term)) {
            updatedState["seoKeywords"] = [...updatedState["seoKeywords"], term];
            setSeoDetails(updatedState)
            setTerm('');
        } else {
            toast.error('Term already exists in searchTerms');
        }

    };

    const removeItem = (e, index) => {
        e.preventDefault();
        const updatedState = JSON.parse(JSON.stringify(seoDetails));
        updatedState["seoKeywords"]?.splice(index, 1)
        setSeoDetails(updatedState)
    };

    const hanldeSubmitSEODetails = async (e) => {
        e.preventDefault();
        if (!seoDetails?.metaTitle || !seoDetails?.metaDescription) {
            toast.error("All Mandatory fields are required!");
            return
        }
        let name = props?.fieldName + "SEO";
        let updatedState = JSON.parse(JSON.stringify(allPagesSEODetails));
        updatedState[name] = seoDetails;
        hanldeSubmit(e, updatedState, "allPagesSEODetails", setLogoLoading)
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update SEO Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props?.fieldName &&
                    <>
                        <form>
                            <div>
                                <label className="pb-2  font-[500]">
                                    {props?.fieldName?.toUpperCase()} SEO Details
                                </label>
                            </div>
                            <br />
                            <div>
                                <label className="pb-2  font-[500]">
                                    Meta Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="metaTitle"
                                    value={seoDetails?.metaTitle}
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
                                    value={seoDetails?.metaDescription}
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
                                    {seoDetails?.seoKeywords?.map((val, index) => {
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
                        <button className='bg-green-500 text-white px-3 py-2 rounded' disabled={loading ? true : false} onClick={hanldeSubmitSEODetails}>{loading ? "Loading..." : "Update SEO Details"}</button>
                    </>
                }
            </Modal.Body>
        </Modal>
    );
}
