import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CategoryProductCard from '../ProductCards/CategoryProductCard';
import useFetchCategoryHandler from '../../hooks/categories/useFetchCategoryHandler';
import LazyLoadImageComponent from '../OptimizeComp/LazyLoadImageComponent';
import WorkerFactory from '../../WorkerFactory';
import myworker from "../../workers/filterProductsForCategory"

const CategoriesWithProducts = ({ CatName, key }) => {
    const { category } = useSelector((state) => state.category)
    const { allProducts } = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);
    const { fetchCategory } = useFetchCategoryHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const workerInstance = new WorkerFactory(myworker);




    useEffect(() => {
        if (allProducts?.length > 0) {
            let data = { allProducts, categoryName: CatName }
            workerInstance.postMessage(data);

            // Listen for messages from the worker
            workerInstance.onmessage = async (res) => {
                setProducts(res.data)
            };
            return () => {
                workerInstance.terminate();
            };

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                {/* <img src={getCategoryImg()} alt="category" /> */}
                                <LazyLoadImageComponent alt={"category"} height={"100%"} width={"100%"} img={getCategoryImg()} />
                            </div>
                        </div>
                    </div>
                    {products?.length > 0 ?
                        <div className='col-md-9 p-0'>
                            <div className='DronesProducts2-images-main-parent'>
                                <div className="row">
                                    {products?.map((data, index) => (
                                        <React.Fragment key={index}>
                                            <CategoryProductCard data1={data} />
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