import React, { useState } from 'react';
import { AiOutlineGift } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Accordion from 'react-bootstrap/Accordion';
import { FaRegNewspaper } from "react-icons/fa";

const DashboardSideBar = ({ active }) => {

    const sideBarActive = (color, backgroundColor) => {
        // setActive(color);
    };

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div className="w-full bg-white shadow-sm sticky top-0 left-0 z-10 side-div desktop-filter-page1">
                {/* single item */}
                <div className="w-full flex items-center ">
                    <Link to="/dashboard" className="w-full flex items-center px-4 py-2">
                        <RxDashboard
                            size={30}
                            // color={`${active === 1 ? 'crimson' : '#555'}`}
                            style={{ color: active === 0 ? 'red' : 'black' }}
                            onClick={() => sideBarActive(0)}
                        />
                        <h5
                            style={{ color: active === 0 ? 'red' : 'black' }}
                            onClick={() => sideBarActive(0)}
                            className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 '}`}
                        >
                            Dashboard
                        </h5>
                    </Link>
                </div>
                <div className="w-full flex items-center accordian ">
                    <Accordion>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>

                                Orders
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="w-full  accordian-child flex items-center p-0">
                                    <Link
                                        to="/shop/dashboard-orders"
                                        className="w-full h-full flex items-center pl-2  "
                                        style={{ color: active === 1 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(1)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[#f395a8]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        All Orders
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full  accordian-child">
                                    <Link
                                        to="/shop/new-orders"
                                        className="w-full h-full flex items-center pl-2 "
                                        style={{ color: active === 2 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(2)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        New Orders
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/pending-orders"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 3 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(3)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Pending Orders
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/delivered-orders"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 4 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(4)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Delivered Orders
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/canceled-orders"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 5 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(5)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Canceled Orders
                                        {/* </h5> */}
                                    </Link>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>

                                Products
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/dashboard-create-product"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 6 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(6)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 4 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Create Product
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/draft-products"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 7 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(7)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Drafts
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/all-products"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 8 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(8)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        All Products
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                {/* <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/approved-products"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)} 
                                >

                                    <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Approved Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/shop/rejected-products"
                                    className="w-full sideBar-hover"
                                >

                                    <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 12 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Rejected Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/shop/pending-products"
                                    className="w-full sideBar-hover"
                                >

                                    <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 12 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Pending Products
                                    </h5>
                                </Link>
                            </div> */}
                                <div className="w-full flex items-center accordian-child">

                                    <div className="w-full accordian-child">
                                        <Link
                                            to="/shop/products-gallery"
                                            className="w-full h-full flex items-center pl-2"
                                            style={{ color: active === 9 ? 'orange' : 'black' }}
                                            onClick={() => sideBarActive(9)}
                                        >

                                            {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 4 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                            Products Gallery
                                            {/* </h5> */}
                                        </Link>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>

                                Events
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/dashboard-events"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 10 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(10)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        All Events
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full accordian-child">
                                    <Link
                                        to="/dashboard-create-event"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 11 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(11)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Create Events
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/dashboard-draft-events"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 12 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(12)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Draft Events
                                        {/* </h5> */}
                                    </Link>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>

                                Refunds
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/dashboard-refunds"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 13 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(13)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        All Refunds
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/approved-refunds"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 14 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(14)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Approved Refunds
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/pending-refunds"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 15 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(15)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Pending Refunds
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/rejected-refunds"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 16 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(16)}
                                    >

                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Rejected Refunds
                                        {/* </h5> */}
                                    </Link>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <div className="w-full flex items-center  dashboard-main-control-image1">
                            <Link to="/shop/categories" className="w-full flex items-center ">

                                <h5
                                    className={` 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                    style={{ color: active === 38 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(38)}
                                >
                                    Categories
                                </h5>
                            </Link>
                        </div>
                        <div className="w-full flex items-center dashboard-main-control-image1">
                            <Link to="/shop/stocks" className="w-full flex items-center">

                                <h5
                                    className={` 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555] 
                                    `}
                                    style={{ color: active === 39 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(39)}
                                >
                                    Stocks
                                </h5>
                            </Link>
                        </div>
                        {/* <Accordion.Item eventKey="4">
                        <Accordion.Header>

                            Payments
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/dashboard-withdraw-money"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)}
                                >

                            
                                    Withdraw Money
                                    
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/withdraw-payment-history"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)}
                                >

                                    
                                    Payment History
                                    
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/withdraw-payment-requests"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)}
                                >

                                    
                                    Payment Requests
                                   
                                </Link>
                            </div>


                        </Accordion.Body>
                    </Accordion.Item> */}
                        <div className="w-full flex items-center dashboard-main-control-image1">
                            <Link to="/dashboard-messages" className="w-full flex items-center">
                                <BiMessageSquareDetail
                                    size={30}
                                    className='text-[#555] pl-1'
                                    style={{ color: active === 37 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(37)}

                                />
                                <h5
                                    className={`hidden 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                    style={{ color: active === 37 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(37)}
                                >
                                    Shop Inbox
                                </h5>
                            </Link>
                        </div>
                        <div className="w-full flex items-center dashboard-main-control-image1">
                            <Link to="/dashboard-coupouns" className="w-full flex items-center">
                                <AiOutlineGift
                                    size={30}
                                    className='text-[#555] pl-1'
                                    style={{ color: active === 36 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(36)}
                                />
                                <h5
                                    className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                    style={{ color: active === 36 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(36)}
                                >
                                    Discount Codes
                                </h5>
                            </Link>
                        </div>
                        <div className="w-full flex items-center dashboard-main-control-image1">
                            <Link to="/shop/create-newsletter" className="w-full flex items-center">
                                <FaRegNewspaper
                                    size={30}
                                    className='text-[#555] pl-1'
                                    style={{ color: active === 35 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(35)}
                                />
                                <h5
                                    className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                    style={{ color: active === 35 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(35)}
                                >
                                    NewsLetter
                                </h5>
                            </Link>
                        </div>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Shipment</Accordion.Header>
                            <Accordion.Body>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/shipment/login"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 17 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(17)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        ShipRocket Login
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/shipment/orders"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 18 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(18)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Orders
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/shipment/return-orders"
                                        className="w-full h-full flex items-center pl-2 "
                                        style={{ color: active === 19 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(19)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Return Orders
                                        {/* </h5> */}
                                    </Link>
                                </div>

                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/shipment/couriers"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 19 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(19)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Couriers
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full accordian-child">
                                    <Link
                                        to="/shop/shipment/pickup-locations"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 20 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(20)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        PickUp Address
                                        {/* </h5> */}
                                    </Link>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                Site Configuration
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="w-full flex items-center accordian-child">
                                    <Link
                                        to="/site-config/categories-config"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 25 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(25)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Categories Config
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full flex items-center accordian-child">
                                    <Link
                                        to="/site-config/events-config"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 26 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(26)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Events Config
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full flex items-center accordian-child">
                                    <Link
                                        to="/site-config/contact-config"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 31 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(31)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Contact Details Config
                                        {/* </h5> */}
                                    </Link>
                                </div>
                                <div className="w-full flex items-center accordian-child">
                                    <Link
                                        to="/site-config/miscellaneous-config"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 27 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(27)}
                                    >
                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                        Miscellaneous Config
                                        {/* </h5> */}
                                    </Link>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>
                                Forms Details
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="w-full flex items-center accordian-child">
                                    <Link
                                        to="/inquiries"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 28 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(28)}
                                    >
                                        Inqueries
                                    </Link>
                                </div>
                                <div className="w-full flex items-center accordian-child">
                                    <Link
                                        to="/contacts"
                                        className="w-full h-full flex items-center pl-2"
                                        style={{ color: active === 29 ? 'orange' : 'black' }}
                                        onClick={() => sideBarActive(29)}
                                    >
                                        Contacts
                                    </Link>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <div className="w-full flex items-center dashboard-main-control-image1">
                            <Link to="/settings" className="w-full flex items-center">
                                <CiSettings
                                    size={30}
                                    className='text-[#555] pl-1'
                                    style={{ color: active === 33 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(33)}
                                />
                                <h5
                                    className={`hidden 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                    style={{ color: active === 33 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(33)}
                                >
                                    Settings
                                </h5>
                            </Link>
                        </div>
                    </Accordion>
                </div>
                {/* <br /> */}
                {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage size={30} color={`${active === 3 ? 'crimson' : '#555'}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${
              active === 3 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            All Products
          </h5>
        </Link>
      </div> */}
                {/* <div className="w-full flex items-center p-4">
        <Link
          to="/requested-products"
          className="w-full flex items-center sideBar-hover"
        >
          <FiPackage
            size={30}
            color={`${active === 12 ? 'crimson' : '#555'}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${
              active === 12 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            Requested Products
          </h5>
        </Link>
      </div> */}


                {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? 'crimson' : '#555'}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${
              active === 5 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            All Events
          </h5>
        </Link>
      </div> */}
                {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            color={`${active === 6 ? 'crimson' : '#555'}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${
              active === 6 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div> */}


            </div>
            <a className="btn desktop-filter-page1-button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <div className='Usermodaltoggle-image bg-orange-500 px-3 py-2 rounded-2xl text-light text-[14px]'>
                    Show Filter
                </div>
            </a>

            <div className='mobile-filter-page1'>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header ">
                        <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="side-div" >
                            {/* single item */}
                            <div className="w-full flex items-center ">
                                <Link to="/dashboard" className="w-full flex items-center px-2 py-2">
                                    <RxDashboard
                                        size={30}
                                        // color={`${active === 1 ? 'crimson' : '#555'}`}
                                        style={{ color: active === 0 ? 'red' : 'black' }}
                                        onClick={() => sideBarActive(0)}
                                    />
                                    <h5
                                        style={{ color: active === 0 ? 'red' : 'black' }}
                                        onClick={() => sideBarActive(0)}
                                        className={` 800px:block pl-2 text-[16px] font-[400] m-0 '}`}
                                    >
                                        Dashboard
                                    </h5>
                                    
                                </Link>

                            </div>
                            <div className="w-full flex items-center accordian ">
                                <Accordion>

                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>

                                            Orders
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="w-full  accordian-child flex items-center p-0">
                                                <Link
                                                    to="/shop/dashboard-orders"
                                                    className="w-full h-full flex items-center pl-2  "
                                                    style={{ color: active === 1 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(1)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[#f395a8]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    All Orders
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full  accordian-child">
                                                <Link
                                                    to="/shop/new-orders"
                                                    className="w-full h-full flex items-center pl-2 "
                                                    style={{ color: active === 2 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(2)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    New Orders
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/pending-orders"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 3 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(3)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Pending Orders
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/delivered-orders"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 4 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(4)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Delivered Orders
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/canceled-orders"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 5 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(5)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Canceled Orders
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>

                                            Products
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/dashboard-create-product"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 6 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(6)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 4 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Create Product
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/draft-products"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 7 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(7)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Drafts
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/all-products"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 8 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(8)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    All Products
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            {/* <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/approved-products"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)} 
                                >

                                    <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Approved Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/shop/rejected-products"
                                    className="w-full sideBar-hover"
                                >

                                    <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 12 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Rejected Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/shop/pending-products"
                                    className="w-full sideBar-hover"
                                >

                                    <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 12 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Pending Products
                                    </h5>
                                </Link>
                            </div> */}
                                            <div className="w-full flex items-center accordian-child">

                                                <div className="w-full accordian-child">
                                                    <Link
                                                        to="/shop/products-gallery"
                                                        className="w-full h-full flex items-center pl-2"
                                                        style={{ color: active === 9 ? 'orange' : 'black' }}
                                                        onClick={() => sideBarActive(9)}
                                                    >

                                                        {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 4 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                        Products Gallery
                                                        {/* </h5> */}
                                                    </Link>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>

                                            Events
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/dashboard-events"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 10 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(10)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    All Events
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/dashboard-create-event"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 11 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(11)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Create Events
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/dashboard-draft-events"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 12 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(12)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Draft Events
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>

                                            Refunds
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/dashboard-refunds"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 13 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(13)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    All Refunds
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/approved-refunds"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 14 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(14)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Approved Refunds
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/pending-refunds"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 15 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(15)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Pending Refunds
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/rejected-refunds"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 16 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(16)}
                                                >

                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Rejected Refunds
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <div className="w-full flex items-center  dashboard-main-control-image1">
                                        <Link to="/shop/categories" className="w-full flex items-center py-1">

                                            <h5
                                                className={` 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                                style={{ color: active === 38 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(38)}
                                            >
                                                Categories
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="w-full flex items-center dashboard-main-control-image1">
                                        <Link to="/shop/stocks" className="w-full flex items-center py-1">

                                            <h5
                                                className={` 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                                style={{ color: active === 39 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(39)}
                                            >
                                                Stocks
                                            </h5>
                                        </Link>
                                    </div>
                                    {/* <Accordion.Item eventKey="4">
                        <Accordion.Header>

                            Payments
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/dashboard-withdraw-money"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)}
                                >

                            
                                    Withdraw Money
                                    
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/withdraw-payment-history"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)}
                                >

                                    
                                    Payment History
                                    
                                </Link>
                            </div>
                            <div className="w-full accordian-child">
                                <Link
                                    to="/withdraw-payment-requests"
                                    className="w-full h-full flex items-center pl-2"
                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                    onClick={() => sideBarActive(26)}
                                >

                                    
                                    Payment Requests
                                   
                                </Link>
                            </div>


                        </Accordion.Body>
                    </Accordion.Item> */}
                                    <div className="w-full flex items-center dashboard-main-control-image1">
                                        <Link to="/dashboard-messages" className="w-full flex items-center">
                                            <BiMessageSquareDetail
                                                size={30}
                                                className='text-[#555] pl-1'
                                                style={{ color: active === 37 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(37)}

                                            />
                                            <h5
                                                className={` 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                                style={{ color: active === 37 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(37)}
                                            >
                                                Shop Inbox
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="w-full flex items-center dashboard-main-control-image1">
                                        <Link to="/dashboard-coupouns" className="w-full flex items-center">
                                            <AiOutlineGift
                                                size={30}
                                                className='text-[#555] pl-1'
                                                style={{ color: active === 36 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(36)}
                                            />
                                            <h5
                                                className={` 800px:block pl-2 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                                style={{ color: active === 36 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(36)}
                                            >
                                                Discount Codes
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="w-full flex items-center dashboard-main-control-image1">
                                        <Link to="/shop/create-newsletter" className="w-full flex items-center">
                                            <FaRegNewspaper
                                                size={30}
                                                className='text-[#555] pl-1'
                                                style={{ color: active === 35 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(35)}
                                            />
                                            <h5
                                                className={` 800px:block pl-2 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                                style={{ color: active === 35 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(35)}
                                            >
                                                NewsLetter
                                            </h5>
                                        </Link>
                                    </div>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Shipment</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/shipment/login"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 17 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(17)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    ShipRocket Login
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/shipment/orders"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 18 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(18)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Orders
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/shipment/return-orders"
                                                    className="w-full h-full flex items-center pl-2 "
                                                    style={{ color: active === 19 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(19)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Return Orders
                                                    {/* </h5> */}
                                                </Link>
                                            </div>

                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/shipment/couriers"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 19 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(19)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Couriers
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full accordian-child">
                                                <Link
                                                    to="/shop/shipment/pickup-locations"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 20 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(20)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[16px] font-[400] m-0 ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    PickUp Address
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>
                                            Site Configuration
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="w-full flex items-center accordian-child">
                                                <Link
                                                    to="/site-config/categories-config"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 25 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(25)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Categories Config
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full flex items-center accordian-child">
                                                <Link
                                                    to="/site-config/events-config"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 26 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(26)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Events Config
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full flex items-center accordian-child">
                                                <Link
                                                    to="/site-config/contact-config"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 31 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(31)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Contact Details Config
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                            <div className="w-full flex items-center accordian-child">
                                                <Link
                                                    to="/site-config/miscellaneous-config"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 27 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(27)}
                                                >
                                                    {/* <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    > */}
                                                    Miscellaneous Config
                                                    {/* </h5> */}
                                                </Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>
                                            Forms Details
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="w-full flex items-center accordian-child">
                                                <Link
                                                    to="/inquiries"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 28 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(28)}
                                                >
                                                    Inqueries
                                                </Link>
                                            </div>
                                            <div className="w-full flex items-center accordian-child">
                                                <Link
                                                    to="/contacts"
                                                    className="w-full h-full flex items-center pl-2"
                                                    style={{ color: active === 29 ? 'orange' : 'black' }}
                                                    onClick={() => sideBarActive(29)}
                                                >
                                                    Contacts
                                                </Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <div className="w-full flex items-center dashboard-main-control-image1">
                                        <Link to="/settings" className="w-full flex items-center">
                                            <CiSettings
                                                size={30}
                                                className='text-[#555] pl-1'
                                                style={{ color: active === 33 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(33)}
                                            />
                                            <h5
                                                className={` 800px:block pl-1 text-[16px] font-[400] m-0 text-[#555]
                                    `}
                                                style={{ color: active === 33 ? 'orange' : 'black' }}
                                                onClick={() => sideBarActive(33)}
                                            >
                                                Settings
                                            </h5>
                                        </Link>
                                    </div>
                                </Accordion>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSideBar;
