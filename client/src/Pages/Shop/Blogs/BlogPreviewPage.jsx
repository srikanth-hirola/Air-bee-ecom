import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'
import BlogPreview from '../../../components/ShopComponents/Blogs/BlogPreview'

const BlogPreviewPage = () => {
    return (
        <div>
            <DashboardHeader active={0} />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <BlogPreview />
                </div>
            </div>
            <DronesFooter />
        </div>
    )
}

export default BlogPreviewPage