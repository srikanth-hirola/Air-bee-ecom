import React, { useEffect } from 'react'
import Login from '../../components/User/Login'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DronesHeader from '../../components/Headers/DronesHeader';
import DronesFooter from '../../components/DronesHomepage/DronesFooter';

const UserLoginPage = () => {

    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === true) {
            navigate("/");
        }
    }, [isAuthenticated, navigate])


    return (
        <>
            <DronesHeader />
            <div className='SignUpPage-parent'>
                <div className="container">
                    <div className="row shadow-lg">
                        <div className="col-md-6">
                            <div className="SignUppage-image">
                                <img src="https://airbee.co.in/images/signup.jpg" alt="pic" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Login />
                        </div>
                    </div>
                </div>

            </div>
            <DronesFooter/>
        </>

    )
}

export default UserLoginPage

