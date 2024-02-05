import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';

const HeadingsContent = ({ logoLoading, setLogoLoading }) => {
    const { handleChange } = useHandleChange()

    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setHeadingsContent(styles?.headingsContent)
    }, [styles?.headingsContent])


    const [headingsContent, setHeadingsContent] = useState({})


    return (
        <div className='my-10 w-[90%] mx-auto'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Home Page Sections Title</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, headingsContent, "headingsContent", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div className='my-2'>
                <label className='font-semibold text-xs mb-2'>Featured Products Title</label><br />
                <input className='border-1 rounded px-2 py-2 w-full' type='text' value={headingsContent?.featuredProducts} name='featuredProducts' placeholder='Enter Featured Products Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'featuredProducts', myState: headingsContent, setMyState: setHeadingsContent }) }} />
            </div>
            <div className='my-2'>
                <label className='font-semibold text-xs mb-2'>Recommended Items Title</label><br />
                <input className='border-1 rounded px-2 py-2 w-full' type='text' value={headingsContent?.recommendedItems} name='recommendedItems' placeholder='Enter Recommended Items Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'recommendedItems', myState: headingsContent, setMyState: setHeadingsContent }) }} />
            </div>
            <div className='my-2'>
                <label className='font-semibold text-xs mb-2'>Brands Title</label><br />
                <input className='border-1 rounded px-2 py-2 w-full' type='text' value={headingsContent?.brandsTitle} name='brandsTitle' placeholder='Enter Brands Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'brandsTitle', myState: headingsContent, setMyState: setHeadingsContent }) }} />
            </div>
            <div className='my-2'>
                <label className='font-semibold text-xs mb-2'>Industires Title</label><br />
                <input className='border-1 rounded px-2 py-2 w-full' type='text' value={headingsContent?.industires} name='industires' placeholder='Enter Industires Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'industires', myState: headingsContent, setMyState: setHeadingsContent }) }} />
            </div>
            <div className='my-2'>
                <label className='font-semibold text-xs mb-2'>Regions Title</label><br />
                <input className='border-1 rounded px-2 py-2 w-full' type='text' value={headingsContent?.regionsTitle} name='regionsTitle' placeholder='Enter Regions Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'regionsTitle', myState: headingsContent, setMyState: setHeadingsContent }) }} />
            </div>

        </div>
    )
}

export default HeadingsContent