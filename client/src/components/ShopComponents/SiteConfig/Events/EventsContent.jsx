import React, { useEffect, useState } from 'react'
import useHandleChange from '../../../../hooks/Site-config/usehandleChange';
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import { StyleConfig } from '../../../../utils/StyleConfig';
import MainImage from '../Features.jsx/MainImage';

const EventsContent = ({ uploadedImages, logoLoading, setLogoLoading }) => {


    const { handleChange } = useHandleChange()
    const { hanldeSubmit } = useSaveLayoutContent()
    const styles = StyleConfig();

    useEffect(() => {
        setEventBottom(styles?.eventBottom)
        setEventTop(styles?.eventTop)
        setEventMiddle(styles?.eventMiddle)
    }, [styles?.eventBottom, styles?.eventTop, styles?.eventMiddle])

    const [eventBottom, setEventBottom] = useState({})
    const [eventTop, setEventTop] = useState({})
    const [eventMiddle, setEventMiddle] = useState({})

    return (
        <>
            <div className='my-10'>
                <div className='flex justify-between'>
                    <h5 className='font-semibold'>Event Top Section</h5>
                    {logoLoading ?
                        <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                        : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, eventTop, "eventTop", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
                </div>
                <div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={eventTop?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: eventTop, setMyState: setEventTop }) }} />
                    </div>
                    <div className='my-2 pb-4'>
                        <label className='font-semibold text-xs mb-2'>Button Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={eventTop?.btnTitle} name='btnTitle' placeholder='Enter button Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'btnTitle', myState: eventTop, setMyState: setEventTop }) }} />
                    </div>
                </div>

            </div>
            <hr />
            <div className='my-10'>
                <div className='flex justify-between'>
                    <h5 className='font-semibold'>Event Middle Section</h5>
                    {logoLoading ?
                        <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                        : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, eventMiddle, "eventMiddle", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
                </div>
                <div>
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={eventMiddle?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: eventMiddle, setMyState: setEventMiddle }) }} />
                    </div>
                    <div className='my-2 pb-4'>
                        <label className='font-semibold text-xs mb-2'>Button Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={eventMiddle?.btnTitle} name='btnTitle' placeholder='Enter button Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'btnTitle', myState: eventMiddle, setMyState: setEventMiddle }) }} />
                    </div>
                </div>
            </div>
            <hr />
            <div className='my-10'>
                <div className='flex justify-between'>
                    <h5 className='font-semibold'>Event Bottom Section</h5>
                    {logoLoading ?
                        <button className='bg-green-500 text-white rounded w-[200px]' >{logoLoading ? "Loading..." : "Update"}</button>
                        : <button className='bg-green-500 text-white rounded w-[200px]' onClick={(e) => hanldeSubmit(e, eventBottom, "eventBottom", setLogoLoading)}>{logoLoading ? "Loading..." : "Update"}</button>}
                </div>
                <div>
                    <MainImage title={"Main Image"} featureSecOne={eventBottom} logoLoading={logoLoading} setFeatureSecOne={setEventBottom} uploadedImages={uploadedImages} key={1} name={"MainImage"} />
                    <MainImage title={"Background Image"} featureSecOne={eventBottom} logoLoading={logoLoading} setFeatureSecOne={setEventBottom} uploadedImages={uploadedImages} key={1} name={"bgImage"} />
                    <div className='my-2'>
                        <label className='font-semibold text-xs mb-2'>Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={eventBottom?.title} name='title' placeholder='Enter Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'title', myState: eventBottom, setMyState: setEventBottom }) }} />
                    </div>
                    <div className='my-2 pb-4'>
                        <label className='font-semibold text-xs mb-2'>Button Title</label><br />
                        <input className='border-1 rounded px-2 py-2 w-full' type='text' value={eventBottom?.btnTitle} name='btnTitle' placeholder='Enter button Title' onChange={(e) => { handleChange({ value: e.target.value, key: 'btnTitle', myState: eventBottom, setMyState: setEventBottom }) }} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default EventsContent