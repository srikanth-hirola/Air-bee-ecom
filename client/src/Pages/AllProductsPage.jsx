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

const AllProductsPage = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get('search');
    const dispatch = useDispatch();
    const styles = StyleConfig();
    const [bredCrumb, setBredCrumd] = useState([])
    const [checkedItems, setCheckedItems] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState();
    const [selectedBrands, setSelectedBrands] = useState([]);


    useEffect(() => {
        dispatch(getPublishedProducts())
    }, [dispatch])


    // const categoryData = searchParams.get("category");
    const { allPublishedProducts, isLoading } = useSelector((state) => state.products);

    const [data, setData] = useState([]);
    // const [active, setActive] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredAttr, setFilteredAttr] = useState();


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
            if (decodedSearchParam.trim() === 'all products') {
                const d = allPublishedProducts;
                setData(d);
            } else {
                const searchTerm = decodedSearchParam.toLowerCase();
                apiCall(searchTerm);
            }
        }
    }, [allPublishedProducts, searchParam]);

    const apiCall = async (searchTerm) => {

        var encodedSearchTerm = encodeURIComponent(searchTerm);
        const { data } = await axios.get(`${server}/product/search/${encodedSearchTerm}`);
        let arrayData = [];
        // eslint-disable-next-line array-callback-return
        await data.products.map((val) => {
            arrayData.push(val.product);
        });
        setData(arrayData);
    };

    const [isVisibleData, setIsVisibleData] = useState([]);
    const toggleDataVisible = () => {
        setIsVisibleData(!isVisibleData);
    };

    return (
        <>
            <DronesHeader />
            {isLoading ? <Loader /> :
                <>
                    <div className='allproducts-parent'>
                        <Filter data={filteredData?.length > 0 ? filteredData : data} setFilteredData={setFilteredData} styles={styles} checkedItems={checkedItems} setCheckedItems={setCheckedItems} selectedBrands={selectedBrands} selectedPriceRange={selectedPriceRange} setSelectedBrands={setSelectedBrands} setSelectedPriceRange={setSelectedPriceRange} filteredAttr={filteredAttr} setFilteredAttr={setFilteredAttr} isVisibleData={isVisibleData} toggleDataVisible={toggleDataVisible} />
                        <AllProducts filteredProducts={filteredData?.length > 0 ? filteredData : data} bredCrumb={bredCrumb} checkedItems={checkedItems} setCheckedItems={setCheckedItems} data={data} setFilteredData={setFilteredData} setSelectedBrands={setSelectedBrands} selectedBrands={selectedBrands} setSelectedPriceRange={setSelectedPriceRange} setFilteredAttr={setFilteredAttr} isVisibleData={isVisibleData} toggleDataVisible={toggleDataVisible} />
                    </div>
                </>
            }
            <DronesFooter/>
        </>
    )
}

export default AllProductsPage