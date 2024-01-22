import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DronesHeader from '../../components/Headers/DronesHeader';
import SignUp from '../../components/User/SignUp';

const UserSignUpPage = () => {

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
            <div className='SignUpPage-parent !h-[88vh]'>
                <div className="container">
                    <div className="row shadow-lg">
                        <div className="col-md-6">
                            <div className="SignUppage-image">
                                <img src="DronesHomePage/signup.jpg" alt="pic" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <SignUp />
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default UserSignUpPage

