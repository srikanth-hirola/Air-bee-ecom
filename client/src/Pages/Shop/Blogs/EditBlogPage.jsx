import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter'
import EditBlog from '../../../components/ShopComponents/Blogs/EditBlog'

const EditBlogPage = () => {
    return (
        <div>
            <DashboardHeader active={0} />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={50} />
                </div>
                <div className="w-full justify-center flex dashboard-side-bar-data-view">
                    <EditBlog />
                </div>
            </div>
            <DronesFooter />
        </div>
    )
}

export default EditBlogPage