import React from 'react'
import SideBar from '../../components/Profile/SideBar';
import DronesHeader from '../../components/Headers/DronesHeader';
import ProfileDetails from '../../components/Profile/ProfileDetails';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';

const Profilepage = () => {

    return (
        <>
            <DronesHeader />
            <div className='Profilepage-parent'>
                <div className='Profilepage-main-content'>
                    <div className="row">
                        <div className="col-md-12 col-lg-3">
                            <SideBar />
                        </div>
                        <div className='col-md-12 col-lg-9'>
                            <ProfileDetails />
                        </div>
                    </div>
                </div>
            </div>
            <DronesFooter/>
        </>
    )
}

export default Profilepage