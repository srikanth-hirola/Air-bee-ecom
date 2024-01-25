import React from 'react'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import DashboardSideBar from '../../components/ShopComponents/Layout/DashboardSideBar'
import DronesFooter from '../../components/DronesHomepage/DronesFooter'
import ContactConfig from '../../components/ShopComponents/SiteConfig/Contact/ContactConfig'

const ContactConfigPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={13} />
                </div>
                <ContactConfig />
            </div>
            <DronesFooter />
        </div>
    )
}

export default ContactConfigPage