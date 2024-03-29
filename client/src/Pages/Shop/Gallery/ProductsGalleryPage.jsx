import React from 'react'
import DashboardHeader from '../../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import { ProductGallery } from '../../../components/ShopComponents/Gallery/ProductGallery'
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const ProductsGalleryPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex  justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px] dashboard-side-bar-res">
                    <DashboardSideBar active={9} />
                </div>

                <ProductGallery active={9} />

            </div>
            <DronesFooter />
        </div>
    )
}

export default ProductsGalleryPage