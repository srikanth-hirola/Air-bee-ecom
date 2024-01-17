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
                        <CategoriesWithProducts CatName={data?.name} key={i} />
                    ))}
                </>
                :
                <>
                    {category?.map((data, i) => (<>
                        {selectedCategories?.includes(data?.name) && <CategoriesWithProducts CatName={data?.name} key={i} />}
                    </>
                    ))}
                </>
            }

        </div>
    )
}

export default CategoriesHome