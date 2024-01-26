import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Accordion, Pagination } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../../../utils/Loader';
import Search from '../Search/Search';
import { server } from '../../../server';
import toast from 'react-hot-toast';

const Inquiries = () => {
    const { seller } = useSelector((state) => state.seller);
    const [isLoading, setLoading] = useState(false);
    const [searchState, setSearchState] = useState('');

    const [productData, setProductData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;


    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`${server}/form/inquiry`, {
                    withCredentials: true,
                })
                setProductData(data?.inquiris);
            } catch (error) {
                toast.error(error?.message)
            } finally {
                setLoading(false)
            }
        }
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seller]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productData?.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-full mx-8 pt-1 mt-10 bg-white outer1-div">
                    <div className='flex justify-between'>
                        <h2 className='mb-4'>Inquiries</h2>
                        <Search setState={setSearchState} state={searchState} title={"Inquiry Name"} key={1} />
                    </div>
                    {currentProducts?.length > 0 &&
                        currentProducts?.filter((item) => {
                            let name = item?.name.toLowerCase();
                            let search = searchState?.toLowerCase();
                            return name.includes(search)
                        }).map((value, index) => (
                            <div className='my-2' key={index}>
                                <Accordion defaultActiveKey="0" key={index}>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>
                                            Name: {value?.name}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Phone: {value?.phone}</p>
                                            <p>Email: {value?.email}</p>
                                            <p>Item: {value?.item}</p>
                                            <p>Details: {value?.details}</p>
                                            <p>Qty: {value?.qty}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        ))}

                    {/* Pagination */}
                    <Pagination className="mt-4 w-fit mx-auto">
                        {Array.from({ length: Math.ceil(productData?.length / productsPerPage) }).map((_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            )}
        </>
    );
}

export default Inquiries