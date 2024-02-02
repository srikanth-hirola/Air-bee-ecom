import React from 'react'

const BannerTextContent = ({ MainBannerContent, setMainBannerContent, handleChange }) => {
    return (
        <>
            <div className='my-4'>
                <div className='flex justify-between'>
                    <label className='font-semibold text-xs mb-2'>Banner Text</label>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[48%]'>
                        <label className='font-semibold text-xs mb-2'>Banner Title</label><br />
                        <input type='text' className='border-1 rounded px-2 py-2 w-full' value={MainBannerContent?.content?.title} placeholder='Enter Banner Title' onChange={(e) => handleChange({ value: e.target.value, key: "content.title", myState: MainBannerContent, setMyState: setMainBannerContent })} />
                    </div>
                    <div className='w-[48%]'>
                        <label className='font-semibold text-xs mb-2'>Banner SubTitle</label><br />
                        <input type='text' className='border-1 rounded px-2 py-2 w-full' value={MainBannerContent?.content?.subTitle} placeholder='Enter Banner Sub Title' onChange={(e) => handleChange({ value: e.target.value, key: "content.subTitle", myState: MainBannerContent, setMyState: setMainBannerContent })} />
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <div className='flex justify-between'>
                    <label className='font-semibold text-xs mb-2'>Banner Button</label>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[48%]'>
                        <label className='font-semibold text-xs mb-2'>Button Title</label><br />
                        <input type='text' className='border-1 rounded px-2 py-2 w-full' value={MainBannerContent?.button?.title} placeholder='Enter Button Title' onChange={(e) => handleChange({ value: e.target.value, key: "button.title", myState: MainBannerContent, setMyState: setMainBannerContent })} />
                    </div>
                    <div className='w-[48%]'>
                        <label className='font-semibold text-xs mb-2'>Button URL</label><br />
                        <input type='text' className='border-1 rounded px-2 py-2 w-full' value={MainBannerContent?.button?.url} placeholder='Enter Button URL' onChange={(e) => handleChange({ value: e.target.value, key: "button.url", myState: MainBannerContent, setMyState: setMainBannerContent })} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default BannerTextContent