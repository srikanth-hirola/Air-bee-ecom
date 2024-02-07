import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { StyleConfig } from '../../utils/StyleConfig';
import { server } from '../../server';
import toast from 'react-hot-toast';
import Loader from '../../utils/Loader';
import DronesHeader from '../../components/Headers/DronesHeader';
import Filter from '../../components/Filters/Filter';
import AllProducts from '../../components/Products/AllProducts';
import { getAllProducts } from '../../redux/actions/product';
import { useDispatch, useSelector } from 'react-redux';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';
import DronesHeader2 from '../../components/Headers/DronesHeader2';
import SEOHelmet from '../../components/SEOHelmet';


const EventProductsPage = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get('search');
    const dispatch = useDispatch();
    const styles = StyleConfig();
    const [bredCrumb, setBredCrumd] = useState([])
    const [checkedItems, setCheckedItems] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState();
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const { allProducts, isLoading } = useSelector((state) => state.products);

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredAttr, setFilteredAttr] = useState();
    const [productsLength, setProductsLength] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [seoDetails, setSeoDetails] = useState();

    useEffect(() => {
        if (searchParam) {
            const decodedSearchParam = decodeURIComponent(searchParam);
            setBredCrumd((prev) => {
                const newBreadcrumbs = [];
                newBreadcrumbs.push("Products");
                let contextStandard = decodedSearchParam.charAt(0).toUpperCase() + decodedSearchParam.slice(1)
                if (!newBreadcrumbs.includes(contextStandard)) {
                    newBreadcrumbs.push(contextStandard);
                }
                return newBreadcrumbs;
            });

        }
    }, [allProducts, searchParam]);



    const { id } = useParams();

    useEffect(() => {
        if (id !== null) {
            axios
                .get(`${server}/event/get-all-event-products/${id}`)
                .then((result) => {
                    if (result.data.Status === 'Success') {
                        setSeoDetails({
                            metaTitle: result.data.events[0]?.metaTitle,
                            metaDescription: result.data.events[0]?.metaDescription,
                        })
                        setData(result.data.events[0].productArray);
                        setFilters(result.data.events[0].productArray);
                        setProductsLength(result.data.events[0].productArray?.length)
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                });
        }
    }, [id]);
    const [isVisibleData, setIsVisibleData] = useState([]);
    const toggleDataVisible = () => {
        setIsVisibleData(!isVisibleData);
    };

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            <DronesHeader />
            <DronesHeader2 />
            {isLoading ? <Loader /> :
                <>
                    <div className='allproducts-parent'>
                        <Filter data={filteredData?.length > 0 ? filteredData : filters} setFilteredData={setFilteredData} styles={styles} checkedItems={checkedItems} setCheckedItems={setCheckedItems} selectedBrands={selectedBrands} selectedPriceRange={selectedPriceRange} setSelectedBrands={setSelectedBrands} setSelectedPriceRange={setSelectedPriceRange} filteredAttr={filteredAttr} setFilteredAttr={setFilteredAttr} isVisibleData={isVisibleData} toggleDataVisible={toggleDataVisible} />
                        <AllProducts productsLength={productsLength} currentPage={currentPage} setCurrentPage={setCurrentPage} filteredProducts={filteredData?.length > 0 ? filteredData : data} bredCrumb={bredCrumb} checkedItems={checkedItems} setCheckedItems={setCheckedItems} data={data} setFilteredData={setFilteredData} setSelectedBrands={setSelectedBrands} selectedBrands={selectedBrands} setSelectedPriceRange={setSelectedPriceRange} setFilteredAttr={setFilteredAttr} isVisibleData={isVisibleData} toggleDataVisible={toggleDataVisible} />
                    </div>
                </>
            }
            <DronesFooter />
        </>
    );
};

export default EventProductsPage;
