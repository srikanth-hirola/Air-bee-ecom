import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import CreateProduct from '../../components/ShopComponents/CreateProduct/CreateProduct';

const ShopCreateProduct = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex  justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={4} />
                </div>
                <div className="w-full justify-center flex">
                    <CreateProduct />
                </div>
            </div>
        </div>
    )
}

export default ShopCreateProduct