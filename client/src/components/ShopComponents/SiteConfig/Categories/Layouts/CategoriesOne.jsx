import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ToggleSwitch } from '../../ToggleSwitch/ToggleSwitch';
import useCategoriesHandle from '../../../../../hooks/Site-config/useCategoriesHandle';


export const CategoriesOne = ({ styles, logoLoading, setLogoLoading, category }) => {
    const { siteConfigData } = useSelector((state) => state.siteConfig)
    const { handleUpdateCategories, handleSelectedCategoryObject } = useCategoriesHandle()

    const [CategoriesOneDisplay, setCategoriesOneDisplay] = useState(siteConfigData?.CategoriesOneDisplay)
    const [CategoriesOne, setCategoriesOne] = useState({
        displayAllCategories: true,
        selectedCategories: []
    })

    useEffect(() => {
        setCategoriesOneDisplay(siteConfigData?.CategoriesOneDisplay)
        setCategoriesOne(siteConfigData?.CategoriesOne)
    }, [siteConfigData])


    return (
        <div>
            <div className='flex  justify-between catagorie-page-main-text'>
                <label className='pb-2'>Categories One to display in main page<span className="text-red-500">*</span></label>
                <ToggleSwitch display={CategoriesOneDisplay} setDisplay={setCategoriesOneDisplay} name="CategoriesOneDisplay" />
            </div>
            <div className='flex flex-wrap justify-between mt-6'>
                <div className='flex space-x-20 catagorie-page-display'>
                    <div className='flex items-center'>
                        <input type='radio' className='w-[20px] h-[20px] mr-2' style={{ accentColor: styles?.mainColor }} onChange={() => setCategoriesOne({ ...CategoriesOne, displayAllCategories: true })} checked={CategoriesOne?.displayAllCategories ? true : false} /><label>Display All Categories</label>
                    </div>
                    <div className='flex items-center label-image'>
                        <input type='radio' className='w-[20px] h-[20px] mr-2' style={{ accentColor: styles?.mainColor }} onChange={() => setCategoriesOne({ ...CategoriesOne, displayAllCategories: false })} checked={CategoriesOne?.displayAllCategories ? false : true} /><label>Select Categories</label>
                    </div>
                </div>
                <div>
                    {logoLoading ? <button className='px-4 py-2 rounded bg-blue-500 text-light' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>Loading...</button> : <button className='px-4 py-2 rounded bg-blue-500 text-light' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={(e) => handleUpdateCategories(e, "CategoriesOne", CategoriesOne, setLogoLoading)}>Update</button>}
                </div>
            </div>
            {!CategoriesOne?.displayAllCategories &&
                <div className='my-4 h-fit max-h-[400px] overflow-scroll border-1 px-2 rounded'>
                    {category?.map((cat, index) => (
                        <div key={index} className='border-1 flex justify-between py-2 px-4 my-2 rounded'>
                            <p className='mb-0'>{cat?.name}</p>
                            <input type='checkbox' className='w-[18px] h-[18px]' style={{ accentColor: styles?.mainColor }} onChange={(e) => handleSelectedCategoryObject(e, cat?.name, setCategoriesOne)} checked={CategoriesOne?.selectedCategories.includes(cat?.name) ? true : false} />
                        </div>
                    ))}
                </div>}
        </div>
    )
}
