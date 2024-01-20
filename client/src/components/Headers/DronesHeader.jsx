import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const DronesHeader = () => {

  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);


  return (
    <>
      <div className='DronesHeader-parent bg-light '>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className='Drones-header-logo'>
                <img src="/images/logo.svg" alt="logo" />
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='Drones-header-input-parent'>
                <SearchBar />
              </div>
              <form className="d-flex">
                <div className='Drones-header-icons'>
                  <Link to="/cart">
                    <div className='Drones-header-icon drones-header-cart'>
                      <FontAwesomeIcon icon={faCartShopping} style={{ color: '#8b96a5', fontSize: '20px' }} />

                      <span className="absolute right-0 top-0 rounded-full bg-[#fa8232] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                        {cart && cart.length}
                      </span>
                    </div>
                  </Link>
                  <Link to="/wishlist">
                    <div className='Drones-header-icon drones-header-cart drones-header-wishlist'>
                      <FontAwesomeIcon icon={faHeart} style={{ color: '#8b96a5', fontSize: '20px' }} />
                      <span className="absolute right-0 top-0 rounded-full bg-[#fa8232] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                        {wishlist && wishlist.length}
                      </span>
                    </div>
                  </Link>
                  <Link to="/inbox">
                    <div className='Drones-header-icon'>
                      <FontAwesomeIcon icon={faMessage} style={{ color: '#8b96a5', fontSize: '20px' }} />
                    </div>
                  </Link>
                  <Link to="/profilepage">
                    <div className='Drones-header-icon'>
                      <FontAwesomeIcon icon={faUser} style={{ color: '#8b96a5', fontSize: '20px' }} />
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </nav>

      </div>

    </>
  )
}

export default DronesHeader