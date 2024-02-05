import React from 'react'

const BannerCornerContent = ({ MainBannerContent, setMainBannerContent, handleChange }) => {
    return (
        <div className='my-4'>
            <div className='flex justify-between'>
                <label className='font-semibold text-xs mb-2'>Banner Corner Content</label>
            </div>
            <div className='flex justify-between'>
                <div className='w-[48%]'>
                    <label className='font-semibold text-xs mb-2'>Corner Content One</label><br />
                    <input type='text' className='border-1 rounded px-2 py-2 w-full' value={MainBannerContent?.sideContentOne} placeholder='Enter Corner Content One' onChange={(e) => handleChange({ value: e.target.value, key: "sideContentOne", myState: MainBannerContent, setMyState: setMainBannerContent })} />
                </div>
                <div className='w-[48%]'>
                    <label className='font-semibold text-xs mb-2'>Corner Content Two</label><br />
                    <input type='text' className='border-1 rounded px-2 py-2 w-full' value={MainBannerContent?.sideContentTwo} placeholder='Enter Corner Content Twp' onChange={(e) => handleChange({ value: e.target.value, key: "sideContentTwo", myState: MainBannerContent, setMyState: setMainBannerContent })} />
                </div>
            </div>
        </div>
    )
}

export default BannerCornerContent