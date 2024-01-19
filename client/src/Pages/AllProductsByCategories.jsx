import React, { useEffect, useState } from 'react'
import Loader from '../utils/Loader'
import Filter from '../components/Filters/Filter'
import AllProducts from '../components/Products/AllProducts'
import axios from 'axios'
import { server } from '../server'
import { getAllProducts } from '../redux/actions/product'
import { StyleConfig } from '../utils/StyleConfig'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const AllProductsByCategories = () => {

    const dispatch = useDispatch();
    const styles = StyleConfig();
    const [bredCrumb, setBredCrumd] = useState([])
    const [checkedItems, setCheckedItems] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState();
    const [selectedBrands, setSelectedBrands] = useState([]);


    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    // const categoryData = searchParams.get("category");
    const { allProducts } = useSelector((state) => state.products);

    const [data, setData] = useState([]);
    // const [active, setActive] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredAttr, setFilteredAttr] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {


        const urlParams = new URLSearchParams(window.location.search);
        const params = {};
        for (const [key, value] of urlParams.entries()) {
            params[key] = value;
        }

        setBredCrumd((prev) => {
            const newBreadcrumbs = [];
            newBreadcrumbs.push("Products");
            // eslint-disable-next-line array-callback-return
            Object.keys(params).map((val) => {
                let contextStandard = params[val].charAt(0).toUpperCase() + params[val].slice(1)
                if (!newBreadcrumbs.includes(contextStandard)) {
                    newBreadcrumbs.push(contextStandard);
                }
            })

            return newBreadcrumbs;
        });

        const url = `${server}/category/search?${new URLSearchParams(params)}`;
        const searchApiCall = async () => {
            try {
                const { data } = await axios.get(url);
                setIsLoading(false)
                setData(data.products)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

        searchApiCall()
    }, [allProducts]);


    return (
        <>
            {isLoading ? <Loader /> :
                <>
                    <div className='allproducts-parent'>
                        <Filter data={filteredData?.length > 0 ? filteredData : data} setFilteredData={setFilteredData} styles={styles} checkedItems={checkedItems} setCheckedItems={setCheckedItems} selectedBrands={selectedBrands} selectedPriceRange={selectedPriceRange} setSelectedBrands={setSelectedBrands} setSelectedPriceRange={setSelectedPriceRange} filteredAttr={filteredAttr} setFilteredAttr={setFilteredAttr} />
                        <AllProducts filteredProducts={filteredData?.length > 0 ? filteredData : data} bredCrumb={bredCrumb} checkedItems={checkedItems} setCheckedItems={setCheckedItems} data={data} setFilteredData={setFilteredData} setSelectedBrands={setSelectedBrands} selectedBrands={selectedBrands} setSelectedPriceRange={setSelectedPriceRange} setFilteredAttr={setFilteredAttr} />
                    </div>
                </>
            }
        </>
    )
}

export default AllProductsByCategories