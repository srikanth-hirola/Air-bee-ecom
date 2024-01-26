import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../redux/actions/category';
import { StyleConfig } from '../utils/StyleConfig';
import CategoriesWithProducts from '../components/categories/CategoriesWithProducts';

const CategoriesHome = () => {
    const { category } = useSelector((state) => state.category)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    let styles = StyleConfig();
    let name = "CategoriesOne";
    let selectedCategories = styles[name]?.selectedCategories


    return (
        <div>
            {styles && styles[name]?.displayAllCategories ?
                <>
                    {category?.map((data, i) => (
                        <React.Fragment key={i}>
                            <CategoriesWithProducts CatName={data?.name} key={i} />
                        </React.Fragment>
                    ))}
                </>
                :
                <>
                    {category?.map((data, i) => (
                        <React.Fragment key={i}>
                            {selectedCategories?.includes(data?._id) && <CategoriesWithProducts CatName={data?._id} key={i} />}
                        </React.Fragment>
                    ))}
                </>
            }
        </div>
    )
}

export default CategoriesHome