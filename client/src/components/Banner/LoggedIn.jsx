import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const LoggedIn = () => {

    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className='Drone-banner-sub-user'>
            <div className='Drone-banner-sub-user-image-parent'>
                <div className='Drone-banner-sub-user-image h-[35px] w-[50px] rounded-full overflow-hidden mx-auto'>
                    <img src={user ? user?.avatar?.url : "./DronesHomepage/Avatar.png"} alt="avatar" className='w-full h-full object-cover' />
                </div>
                <p>Hi, {user ? user?.name : "user"} let's get started</p>
            </div>
            {user ?
                <>
                    <button className='Droner-banner-sub-user-button1'><Link to={"/products?search=all%20products"}>Shop now</Link></button>
                </>
                :
                <>
                    <button className='Droner-banner-sub-user-button1'>Join now</button>
                    <button className='Droner-banner-sub-user-button2'><Link to={"/login"}>Log in</Link></button>
                </>
            }
        </div>
    )
}

export default LoggedIn