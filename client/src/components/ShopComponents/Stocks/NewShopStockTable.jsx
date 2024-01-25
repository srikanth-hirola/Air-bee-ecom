import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { getAllProductsShop } from '../../../redux/actions/product';
import Loader from '../../../utils/Loader';
import Search from '../Search/Search';
import Pagination from 'react-bootstrap/Pagination';

const NewShopStockTable = () => {
    const { products, isLoading } = useSelector((state) => state.products);
    const { seller } = useSelector((state) => state.seller);
    const [searchState, setSearchState] = useState('');

    const [productData, setProductData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsShop(seller._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seller]);

    useEffect(() => {
        const arr = products?.filter((pro) => pro.approved === true);
        setProductData(arr);
    }, [products])

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
                        <h2 className='mb-4'>Stocks</h2>
                        <Search setState={setSearchState} state={searchState} title={"Product Name"} key={1} />
                    </div>
                    {currentProducts?.length > 0 &&
                        currentProducts?.filter((item) => {
                            let name = item?.name.toLowerCase();
                            let search = searchState?.toLowerCase();
                            return name.includes(search)
                        }).map((value, index) => (
                            <div className='my-2'>
                                <Accordion defaultActiveKey="0" key={index}>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>
                                            {value.name}({value.productId})
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {value.showInputs ? (
                                                <>
                                                    {value.colorInputs.map((varient, index) => (
                                                        <React.Fragment key={index}>
                                                            {varient.haveAttributes &&
                                                                varient.attributeStock ? (
                                                                <>
                                                                    <p>
                                                                        <strong>{varient?.imageColor}&#40;{varient.attributes[0].name}&#41;</strong>
                                                                    </p>
                                                                    {varient.attributes[0].values.map(
                                                                        (att, index) => {
                                                                            return (
                                                                                <React.Fragment key={index}>
                                                                                    <p>{att.valName}</p>
                                                                                    <p>
                                                                                        &nbsp;&nbsp;&nbsp;Total Stock :{' '}
                                                                                        {att.sold_out + att.stock}
                                                                                    </p>
                                                                                    <p>
                                                                                        &nbsp;&nbsp;&nbsp;Sold Out :{' '}
                                                                                        {att.sold_out}
                                                                                    </p>
                                                                                    <p>
                                                                                        &nbsp;&nbsp;&nbsp;Pending Stock :{' '}
                                                                                        {att.stock}
                                                                                    </p>
                                                                                </React.Fragment>
                                                                            );
                                                                        }
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <p>
                                                                        <strong>{varient?.imageColor}</strong>
                                                                        {/* <strong>{varient?.imageColor}&#40;{varient?.attributes[0]?.name}&#41;</strong> */}
                                                                    </p>
                                                                    <p>
                                                                        &nbsp;&nbsp;&nbsp;Total Stock :{' '}
                                                                        {varient.sold_out + varient.stock}
                                                                    </p>
                                                                    <p>
                                                                        {' '}
                                                                        &nbsp;&nbsp;&nbsp;Sold Out :{' '}
                                                                        {varient.sold_out}
                                                                    </p>
                                                                    <p>
                                                                        {' '}
                                                                        &nbsp;&nbsp;&nbsp;Pending Stock :{' '}
                                                                        {varient.stock}
                                                                    </p>
                                                                </>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </>
                                            ) : (
                                                <>
                                                    {value.haveAttributes && value.attributeStock ? (
                                                        <>
                                                            <p>
                                                                <strong>{value.attributes[0].name}</strong>
                                                            </p>
                                                            {value.attributes[0].values.map((att, index) => {
                                                                return (
                                                                    <React.Fragment key={index}>
                                                                        <p>{att.valName}</p>
                                                                        <p>
                                                                            &nbsp;&nbsp;&nbsp;Total Stock :{' '}
                                                                            {att.sold_out + att.stock}
                                                                        </p>
                                                                        <p>
                                                                            &nbsp;&nbsp;&nbsp;Sold Out : {att.sold_out}
                                                                        </p>
                                                                        <p>
                                                                            &nbsp;&nbsp;&nbsp;Pending Stock :{' '}
                                                                            {att.stock}
                                                                        </p>
                                                                    </React.Fragment>
                                                                );
                                                            })}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {' '}
                                                            <p>Total Stock : {value.sold_out + value.stock}</p>
                                                            <p>Sold Out : {value.sold_out}</p>
                                                            <p>Pending Stock : {value.stock}</p>
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        ))}

                    {/* Pagination */}
                    <Pagination className="mt-4 w-fit mx-auto">
                        {Array.from({ length: Math.ceil(productData.length / productsPerPage) }).map((_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            )}
        </>
    );
};

export default NewShopStockTable;
