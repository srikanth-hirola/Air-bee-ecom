import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';
import BlogsConfig from '../../components/ShopComponents/SiteConfig/Blogs/BlogsConfig';

const BlogsConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={51} />
                </div>
                <div className='w-full justify-center flex dashboard-side-bar-data-view'>
                    <BlogsConfig />
                </div>
            </div>
            <DronesFooter />
        </div>
    );
}

export default BlogsConfigPage