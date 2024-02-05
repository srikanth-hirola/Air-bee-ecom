import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import TestimonialsConfig from '../../components/ShopComponents/SiteConfig/Testimonials/TestimonialsConfig'

const TestimonialsConfigPages = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={45} />
                </div>
                <div className='w-[100%]'>
                    <TestimonialsConfig />
                </div>
            </div>
        </div>
    )
}

export default TestimonialsConfigPages