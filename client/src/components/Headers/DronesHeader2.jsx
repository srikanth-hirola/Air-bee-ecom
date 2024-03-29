import { faAngleLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Trending from './Trending';
import CategoriesMenu from './CategoriesMenu';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
// import { StyleConfig } from '../../utils/StyleConfig'
const DronesHeader2 = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [isMenuActive, setMenuActive] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);

  const showSubMenu = (hasChildren) => {
    const subMenu = hasChildren.querySelector('.sub-menu');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    // const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    setCurrentSubMenu(subMenu);
  };

  const hideSubMenu = () => {
    if (currentSubMenu) {
      currentSubMenu.style.animation = 'slideRight 0.5s ease forwards';
      setTimeout(() => {
        setCurrentSubMenu(null);
      }, 300);
    }
  };

  const menuMainClickHandler = (e) => {
    if (!isMenuActive) return;
    const hasChildren = e.target.closest('.menu-item-has-children');
    if (hasChildren) showSubMenu(hasChildren);
  };

  const goBackClickHandler = () => {
    hideSubMenu();
  };

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const menuTriggerClickHandler = () => {
    toggleMenu();
  };

  const closeMenuClickHandler = () => {
    toggleMenu();
  };

  const overlayClickHandler = () => {
    toggleMenu();
  };

  return (
    <div className="home-twelve-header">
      <div className="home-twelve-header-sub">
        <header className="header">
          <div className="container-fluid">
            <div className="row v-center">
              {/* <div className="header-item item-left">
            <div className="logo">
              <Link to="#">logo</Link>
            </div>
          </div> */}

              {/* Menu Start */}
              <div className="header-item item-center">
                <div className="menu-overlay" onClick={overlayClickHandler}></div>
                <nav className={`menu ${isMenuActive ? 'active' : ''}`} onClick={menuMainClickHandler}>
                  {/* Your menu content goes here */}
                  <div className="mobile-menu-head">
                    <div className="go-back" onClick={goBackClickHandler}><FontAwesomeIcon icon={faAngleLeft} /></div>
                    <div className="current-menu-title">
                      <div className='Drones-header-icons'>
                        <Link to="/cart">
                          <div className='Drones-header-icon drones-header-cart'>
                            <FontAwesomeIcon icon={faCartPlus} style={{ color: '#8b96a5', fontSize: '20px' }} />

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
                    </div>
                    <div className="mobile-menu-close" onClick={closeMenuClickHandler} >&times;</div>
                  </div>
                  <ul className="menu-main">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/products?search=all products">All Products</Link>
                    </li>
                    <Trending />
                    <CategoriesMenu />
                    <li className="menu-item-has-children">
                      <Link to="/blog">Blogs <i className="fas fa-angle-down"></i></Link>
                      {/* <div className="sub-menu single-column-menu">
                        <ul>
                          <li><Link to="#">Standard Layout</Link></li>
                          <li><Link to="#">Grid Layout</Link></li>
                          <li><Link to="#">single Post Layout</Link></li>
                        </ul>
                      </div> */}
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Menu End */}

              <div className="header-item item-right">
                <Link to="#">
                  <i className="fas fa-search"></i>
                </Link>
                <Link to="#">
                  <i className="far fa-heart"></i>
                </Link>
                <Link to="#">
                  <i className="fas fa-shopping-cart"></i>
                </Link>

                {/* Mobile Menu Trigger */}
                <div className="mobile-menu-trigger" onClick={menuTriggerClickHandler}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DronesHeader2;
