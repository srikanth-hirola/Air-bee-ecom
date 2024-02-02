import React, { useEffect, useState } from 'react'
import Filter from '../components/Filters/Filter'
import AllProducts from '../components/Products/AllProducts'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../utils/Loader'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { server } from '../server'
import { getPublishedProducts } from '../redux/actions/product'
import { StyleConfig } from '../utils/StyleConfig'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import DronesHeader2 from '../components/Headers/DronesHeader2'

const AllProductsPage = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get('search');
    const dispatch = useDispatch();
    const styles = StyleConfig();
    const [bredCrumb, setBredCrumd] = useState([])
    const [checkedItems, setCheckedItems] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState();
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [constantData, setConstantData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const loaction = useLocation();

    useEffect(() => {
        dispatch(getPublishedProducts())
    }, [dispatch])


    // const categoryData = searchParams.get("category");
    const { allPublishedProducts } = useSelector((state) => state.products);

    const [data, setData] = useState([]);
    // const [active, setActive] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredAttr, setFilteredAttr] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsLength, setProductsLength] = useState(0);
    const [filters, setFilters] = useState([]);



    useEffect(() => {
        if (searchParam) {
            const decodedSearchParam = decodeURIComponent(searchParam);
            setBredCrumd((prev) => {
                const newBreadcrumbs = [];
                // newBreadcrumbs.push("Products");
                let contextStandard = decodedSearchParam.charAt(0).toUpperCase() + decodedSearchParam.slice(1)
                if (!newBreadcrumbs.includes(contextStandard)) {
                    newBreadcrumbs.push(contextStandard);
                }
                return newBreadcrumbs;
            });
            if (decodedSearchParam.trim() === 'all products') {
                const d = allPublishedProducts;
                setFilters(d)
                if (filteredData?.length > 0) {
                    setData(filteredData)
                } else {
                    apiCallForPaginationProducts(currentPage)
                    apiGetTotalProductsLength()
                }
                setConstantData(d)
            } else {
                if (filteredData?.length === 0) {
                    const searchTerm = decodedSearchParam.toLowerCase();
                    apiCall(searchTerm);
                }
            }
        }
    }, [allPublishedProducts, searchParam, loaction, currentPage, filteredData]);

    const apiCall = async (searchTerm) => {
        var encodedSearchTerm = encodeURIComponent(searchTerm);
        const { data } = await axios.get(`${server}/product/search/${encodedSearchTerm}`);
        let arrayData = [];
        // eslint-disable-next-line array-callback-return
        await data.products.map((val) => {
            arrayData.push(val.product);
        });
        console.log("first")
        setProductsLength(arrayData?.length)
        setConstantData(arrayData)
        setFilters(arrayData)
        setData(arrayData);
        setLoading(false);
    };

    const apiCallForPaginationProducts = async (currentPage) => {
        const { data } = await axios.get(`${server}/product/get-published-products/pagination?page=${currentPage}&limit=${25}`);
        setData(data?.products);
        setLoading(false);
    }

    const apiGetTotalProductsLength = async () => {
        const { data } = await axios.get(`${server}/product/get-published-products/length`);
        setProductsLength(data?.length)
    }

    const [isVisibleData, setIsVisibleData] = useState([]);
    const toggleDataVisible = () => {
        setIsVisibleData(!isVisibleData);
    };

    useEffect(() => {
        if (searchParam) {
            const decodedSearchParam = decodeURIComponent(searchParam);
            if (filteredData?.length > 0) {
                setProductsLength(filteredData?.length)
            } else {
                if (decodedSearchParam.trim() === 'all products') {

                    apiGetTotalProductsLength()
                }
            }
        }
    }, [filteredData, searchParam])


    return (
        <>
            <DronesHeader />
            <DronesHeader2 />
            {isLoading ? <Loader /> :
                <>
                    <div className='allproducts-parent'>
                        <Filter constantData={constantData} data={filteredData?.length > 0 ? filteredData : filters} setFilteredData={setFilteredData} styles={styles} checkedItems={checkedItems} setCheckedItems={setCheckedItems} selectedBrands={selectedBrands} selectedPriceRange={selectedPriceRange} setSelectedBrands={setSelectedBrands} setSelectedPriceRange={setSelectedPriceRange} filteredAttr={filteredAttr} setFilteredAttr={setFilteredAttr} isVisibleData={isVisibleData} toggleDataVisible={toggleDataVisible} />
                        <AllProducts productsLength={productsLength} currentPage={currentPage} setCurrentPage={setCurrentPage} filteredProducts={filteredData?.length > 0 ? filteredData : data} bredCrumb={bredCrumb} checkedItems={checkedItems} setCheckedItems={setCheckedItems} data={data} setFilteredData={setFilteredData} setSelectedBrands={setSelectedBrands} selectedBrands={selectedBrands} setSelectedPriceRange={setSelectedPriceRange} setFilteredAttr={setFilteredAttr} isVisibleData={isVisibleData} toggleDataVisible={toggleDataVisible} />
                    </div>
                </>
            }
            <DronesFooter />
        </>
    )
}

export default AllProductsPage