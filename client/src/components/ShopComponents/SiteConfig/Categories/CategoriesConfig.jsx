import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { getAllSiteConfig } from '../../../../redux/actions/siteConfig';
import { getAllCategories } from '../../../../redux/actions/category';
import { CategoriesOne } from './Layouts/CategoriesOne';



export const CategoriesConfig = () => {
    const styles = StyleConfig();
    const [logoLoading, setLogoLoading] = useState(false)
    const { category } = useSelector((state) => state.category)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSiteConfig())
        dispatch(getAllCategories())
    }, [dispatch])



    return (
        <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center outer1-div" >
            <div className='w-full'>
                <div className="w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3" >
                    <div className='w-full px-8 py-4 '>
                        <CategoriesOne styles={styles} logoLoading={logoLoading} setLogoLoading={setLogoLoading} category={category} />
                    </div>
                </div>
                {/* <div className="w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3" >
                    <div className='w-full px-8 py-4 '>
                        <CategoriesTwo styles={styles} logoLoading={logoLoading} setLogoLoading={setLogoLoading} category={category} />
                    </div>
                </div>
                <div className="w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3" >
                    <div className='w-full px-8 py-4 '>
                        <CategoriesThree styles={styles} logoLoading={logoLoading} setLogoLoading={setLogoLoading} category={category} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}
