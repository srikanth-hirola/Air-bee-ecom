import React, { useEffect, useState } from 'react'
import MainImage from './MainImage';
import { StyleConfig } from '../../../../utils/StyleConfig';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';

const FeaturesSecTwo = ({ uploadedImages, logoLoading, setLogoLoading }) => {
    const { handleChange } = useHandleChange()


    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();


    useEffect(() => {
        setFeatureSecTwo(styles?.featureSecTwo)
    }, [styles?.featureSecTwo])


    const [featureSecTwo, setFeatureSecTwo] = useState({})



    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h5 className='font-semibold'>Feature Section Two</h5>
                {logoLoading ?
                    <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                    : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, featureSecTwo, "featureSecTwo", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
            </div>
            <div>
                <MainImage featureSecOne={featureSecTwo} logoLoading={logoLoading} setFeatureSecOne={setFeatureSecTwo} uploadedImages={uploadedImages} key={1} name={"BannerImage"} />
                <div className='my-2'>
                    <label className='font-semibold text-xs mb-2'>Heading</label><br />
                    <input className='border-1 rounded px-2 py-2 w-full' type='text' value={featureSecTwo?.heading} name='heading' placeholder='Enter Heading' onChange={(e) => { handleChange({ value: e.target.value, key: 'heading', myState: featureSecTwo, setMyState: setFeatureSecTwo }) }} />
                </div>
                <div className='my-4'>
                    <label className='font-semibold text-xs mb-2'>Info One</label><br />
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Title One</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={featureSecTwo?.contentOne?.title} name='title' placeholder='Enter Title One' onChange={(e) => { handleChange({ value: e.target.value, key: 'contentOne.title', myState: featureSecTwo, setMyState: setFeatureSecTwo }) }} />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Summary One</label><br />
                        <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={featureSecTwo?.contentOne?.subTitle} name='title' placeholder='Enter Summary One' onChange={(e) => { handleChange({ value: e.target.value, key: 'contentOne.subTitle', myState: featureSecTwo, setMyState: setFeatureSecTwo }) }} />
                    </div>
                </div>

                <div className='my-4'>
                    <label className='font-semibold text-xs mb-2'>Info Two</label><br />
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Title Two</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={featureSecTwo?.contentTwo?.title} name='title' placeholder='Enter Title Two' onChange={(e) => { handleChange({ value: e.target.value, key: 'contentTwo.title', myState: featureSecTwo, setMyState: setFeatureSecTwo }) }} />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Summary Two</label><br />
                        <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={featureSecTwo?.contentTwo?.subTitle} name='title' placeholder='Enter Summary Two' onChange={(e) => { handleChange({ value: e.target.value, key: 'contentTwo.subTitle', myState: featureSecTwo, setMyState: setFeatureSecTwo }) }} />
                    </div>
                </div>

                <div className='my-4'>
                    <label className='font-semibold text-xs mb-2'>Button</label><br />
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Button Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={featureSecTwo?.button?.title} name='title' placeholder='Enter Button Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'button.title', myState: featureSecTwo, setMyState: setFeatureSecTwo }) }} />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Button URL</label><br />
                        <textarea className='border-1 rounded px-2 py-2 w-full' type='text' value={featureSecTwo?.button?.url} name='title' placeholder='Enter Button URL' onChange={(e) => { handleChange({ value: e.target.value, key: 'button.url', myState: featureSecTwo, setMyState: setFeatureSecTwo }) }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturesSecTwo