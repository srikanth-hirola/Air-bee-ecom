import React, { useEffect, useState } from 'react';
import MainProductCard from '../ProductCards/MainProductCard';
import { Pagination } from 'react-bootstrap';

const ITEMS_PER_PAGE = 12;

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
                        <MainProductCard data1={item} key={index} />
                    ))
                }

                {/* Pagination buttons */}
                {/* <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1} className='pagination-btn'>
                    Previous
                </button>
                {Array.from({ length: Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className='pagination-num-btn'>
                        {index + 1}
                    </button>
                ))}
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)} className='pagination-btn'>
                    Next
                </button>
            </div> */}

            </div>
            <Pagination className='pagination-div'>
                <Pagination.Prev onClick={prevPage} disabled={currentPage === 1} />
                {Array.from({ length: Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) }).map((_, index) => (
                    <Pagination.Item key={index} onClick={() => paginate(index + 1)}>{index + 1}</Pagination.Item>
                ))}
                <Pagination.Next onClick={nextPage} disabled={currentPage === Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)} />
            </Pagination>
        </>
    );
};


export default AllProductsMapper;
