import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CategoryProductCard from '../ProductCards/CategoryProductCard';
import useFetchCategoryHandler from '../../hooks/categories/useFetchCategoryHandler';

const CategoriesWithProducts = ({ CatName, key }) => {
    const { category } = useSelector((state) => state.category)
    const { allProducts } = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);
    const { fetchCategory } = useFetchCategoryHandler()



    useEffect(() => {
        if (allProducts?.length > 0) {
            setProducts(() => {
                return allProducts?.filter((item) => item?.category === CatName).slice(0, 8)
            })
        }
    }, [allProducts, CatName])

    function getCategoryImg() {
        let categoryFound = category?.find((cat) => cat?._id === CatName)
        return categoryFound?.CatImg?.url
    }

    return (
        <>

            <div className="DronesProductsRow2-parent" key={key}>
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className='DronesProductsRow2-image1'>
                            <div className='DronesProductsRow2-image1-title'>
                                <h5>{fetchCategory(CatName)?.name}</h5>
                            </div>
                            {/* <img src="./DronesHomepage/row-2-1.png" alt="" /> */}
                            <div className='DronesProductsRow2-image1-image'>
                                <img src={getCategoryImg()} alt="category" />
                            </div>
                        </div>
                    </div>
                    {products?.length > 0 ?
                        <div className='col-md-9 p-0'>
                            <div className='DronesProducts2-images-main-parent'>
                                <div className="row">
                                    {products?.map((data, index) => (
                                        <React.Fragment key={index}>
                                            <CategoryProductCard data1={data} key={index} />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                        : <p>No Products Available</p>}
                </div>
            </div>
        </>
    )
}

export default CategoriesWithProducts