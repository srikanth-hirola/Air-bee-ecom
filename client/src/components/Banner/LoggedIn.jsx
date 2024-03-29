import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const LoggedIn = () => {

    const { user } = useSelector((state) => state.user);

    return (
        <div className='Drone-banner-sub-user'>
            <div className='Drone-banner-sub-user-image-parent'>
                <div className='Drone-banner-sub-user-image rounded-full overflow-hidden mx-auto'>
                    <img src={user ? user?.avatar?.url : "./DronesHomepage/Avatar.png"} alt="avatar" className='w-full h-full object-cover' />
                </div>
                <p>Hi, {user ? user?.name : "user"} let's get started</p>
            </div>
            {user ?
                <>
                    <button className='Droner-banner-sub-user-button1'><Link to={"/products?search=all products"}>Shop now</Link></button>
                </>
                :
                <>
                    <button className='Droner-banner-sub-user-button1'><Link to='/sign-up'>Join now</Link></button>
                    <button className='Droner-banner-sub-user-button2'><Link to={"/login"}>Log in</Link></button>
                </>
            }
        </div>
    )
}

export default LoggedIn