import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import MainCardMiddleWare from '../ProductCards/MainCardMiddleWare';

const ITEMS_PER_PAGE = 20;

const AllProductsMapper = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(data);
    }, [data]);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = filteredProducts?.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <>
            <div className='allproducts-mapper'>
                {
                    currentItems.map((item, index) => (
                        <MainCardMiddleWare data1={item} />
                    ))
                }
            </div>
            <Pagination className='pagination-div'>
                <Pagination.Prev onClick={prevPage} disabled={currentPage === 1} className='pagination-previous-button' />
                {Array.from({ length: Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) }).map((_, index) => (
                    <Pagination.Item key={index} onClick={() => paginate(index + 1)} className='pagination-count-button'>{index + 1}</Pagination.Item>
                ))}
                <Pagination.Next onClick={nextPage} disabled={currentPage === Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)} className='pagination-previous-button' />
            </Pagination>
        </>
    );
};


export default AllProductsMapper;
