import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CategoryProductCard from '../ProductCards/CategoryProductCard';

const CategoriesWithProducts = ({ CatName }) => {
    const { category } = useSelector((state) => state.category)
    const { allProducts } = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);



    useEffect(() => {
        if (allProducts?.length > 0) {
            setProducts(() => {
                return allProducts?.filter((item) => item?.category === CatName).slice(0, 8)
            })
        }
    }, [allProducts, CatName])

    function getCategoryImg() {
        let categoryFound = category?.find((cat) => cat?.name === CatName)
        return categoryFound?.CatImg?.url
    }

    return (
        <>
            {/* <div className="DronesProductsRow2-parent">
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className='DronesProductsRow2-image1'>
                            <div className='DronesProductsRow2-image1-title'>
                                <h5>Home and Outdoor</h5>
                            </div>
                            <img src="./DronesHomepage/row-2-1.png" alt="" />
                        </div>
                    </div>
                    {data?.productimages?.images?.content?.items?.items.length > 0 &&
                        <div className='col-md-9 p-0'>
                            <div className='DronesProducts2-images-main-parent'>
                                <div className="row">
                                    {data?.productimages?.images?.content?.items?.items.map((item, index) => (
                                        <div key={index} className="col-sm-6 col-md-3 p-0">
                                            <div className='DronesProductsRow2-subimage-content'>
                                                <div className='DronesProductsRow2-subimage-content-text'>
                                                    <h5>{item?.Title?.text}</h5>
                                                    <p>{item?.SubText?.text}</p>
                                                </div>
                                                <div className='DronesProductsRow2-card-image'>
                                                    <img src={item?.img?.url} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>}
                </div>
            </div> */}
            <div className="DronesProductsRow2-parent">
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className='DronesProductsRow2-image1'>
                            <div className='DronesProductsRow2-image1-title'>
                                <h5>{CatName}</h5>
                            </div>
                            {/* <img src="./DronesHomepage/row-2-1.png" alt="" /> */}
                            <img src={getCategoryImg()} alt="category" />
                        </div>
                    </div>
                    {products?.length > 0 ?
                        <div className='col-md-9 p-0'>
                            <div className='DronesProducts2-images-main-parent'>
                                <div className="row">
                                    {products?.map((data, index) => (
                                        <CategoryProductCard data1={data} key={index} />
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