import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar';
import { NewsLetter } from '../../components/ShopComponents/NewsLetter/NewsLetter';

const CreateNewsletterPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full dasboard-user-width-mobile">
                <div className="800px:w-[330px]">
                    <DashboardSideBar active={35} />
                </div>
                <NewsLetter />
            </div>
        </div>
    );
}

export default CreateNewsletterPage