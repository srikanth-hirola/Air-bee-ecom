import React from 'react'
import AllProductsTotalProductsBar from '../others/AllProductsTotalProductsBar'
import FilteredContext from '../others/FilteredContext'
import AllProductsMapper from '../others/AllProductsMapper';
import { Shoppage1Breadcrump } from '../Shop/Shoppage1Breadcrump';

const AllProducts = ({ productsLength, currentPage, setCurrentPage, filteredProducts, bredCrumb, checkedItems, setCheckedItems, data, setFilteredData, selectedBrands, setSelectedBrands, setSelectedPriceRange, setFilteredAttr, toggleDataVisible, isVisibleData }) => {
    // const [checkedItems, setCheckedItems] = useState([]);


    return (
        <div className='allproducts-main'>
            <AllProductsTotalProductsBar length={productsLength} bredCrumb={bredCrumb} />
            <Shoppage1Breadcrump bredCrumb={bredCrumb} />
            <FilteredContext checkedItems={checkedItems} setCheckedItems={setCheckedItems} data={data} setFilteredData={setFilteredData} selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} setSelectedPriceRange={setSelectedPriceRange} setFilteredAttr={setFilteredAttr} isVisibleData={isVisibleData} toggleDataVisible={toggleDataVisible} />
            {filteredProducts?.length > 0 ? <AllProductsMapper productsLength={productsLength} currentPage={currentPage} setCurrentPage={setCurrentPage} data={filteredProducts} /> : <p>No Products Available</p>}
        </div>
    )
}

export default AllProducts