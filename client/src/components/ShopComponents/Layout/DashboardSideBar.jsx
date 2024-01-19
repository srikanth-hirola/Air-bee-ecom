import React from 'react';
import { AiOutlineGift } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Accordion from 'react-bootstrap/Accordion';

const DashboardSideBar = ({ active }) => {
    return (
        <div className="w-full bg-white shadow-sm sticky top-0 left-0 z-10 side-div">
            {/* single item */}
            <div className="w-full flex items-center p-4">
                <Link to="/dashboard" className="w-full flex items-center">
                    <RxDashboard
                        size={30}
                        color={`${active === 1 ? 'crimson' : '#555'}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 1 ? 'text-[crimson]' : 'text-[#555]'
                            }`}
                    >
                        Dashboard
                    </h5>
                </Link>
            </div>
            {/* <div className="w-full flex items-center p-4">
        <Link to="/shop/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? 'crimson' : '#555'}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div> */}
            <div className="w-full flex items-center accordian">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            {/* {' '}
              <FiPackage
                size={30}
                color={`${active === 3 ? 'crimson' : '#555'}`}
              /> */}
                            Orders
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/dashboard-orders"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        All Orders
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/new-orders"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        New Orders
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/pending-orders"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Pending Orders
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/delivered-orders"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Delivered Orders
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/canceled-orders"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Canceled Orders
                                    </h5>
                                </Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>{' '}
            <br />
            {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage size={30} color={`${active === 3 ? 'crimson' : '#555'}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
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
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 12 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            Requested Products
          </h5>
        </Link>
      </div> */}
            <div className="w-full flex items-center accordian">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            {/* {' '}
              <FiPackage
                size={30}
                color={`${active === 3 ? 'crimson' : '#555'}`}
              /> */}
                            Products
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/dashboard-create-product"
                                    className="w-full flex items-center"
                                >
                                    {/* <AiOutlineFolderAdd
                    size={30}
                    color={`${active === 4 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 4 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Create Product
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/draft-products"
                                    className="w-full flex items-center"
                                >
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Drafts
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/all-products"
                                    className="w-full flex items-center"
                                >
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        All Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/approved-products"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiPackage
                    size={30}
                    color={`${active === 3 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Approved Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/rejected-products"
                                    className="w-full flex items-center sideBar-hover"
                                >
                                    {/* <FiPackage
                    size={30}
                    color={`${active === 12 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 12 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Rejected Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/pending-products"
                                    className="w-full flex items-center sideBar-hover"
                                >
                                    {/* <FiPackage
                    size={30}
                    color={`${active === 12 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 12 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Pending Products
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/products-gallery"
                                    className="w-full flex items-center"
                                >
                                    {/* <AiOutlineFolderAdd
                    size={30}
                    color={`${active === 4 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 4 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Products Gallery
                                    </h5>
                                </Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>{' '}
            <br />
            <div className="w-full flex items-center accordian">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            {/* {' '}
              <FiPackage
                size={30}
                color={`${active === 3 ? 'crimson' : '#555'}`}
              /> */}
                            Events
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/dashboard-events"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        All Events
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/dashboard-create-event"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Create Events
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/dashboard-draft-events"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Draft Events
                                    </h5>
                                </Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>{' '}
            <br />
            <div className="w-full flex items-center accordian">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            {/* {' '}
              <FiPackage
                size={30}
                color={`${active === 3 ? 'crimson' : '#555'}`}
              /> */}
                            Refunds
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/dashboard-refunds"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        All Refunds
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/approved-refunds"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Approved Refunds
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/pending-refunds"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Pending Refunds
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/rejected-refunds"
                                    className="w-full flex items-center"
                                >
                                    {/* <FiShoppingBag
                    size={30}
                    color={`${active === 2 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Rejected Refunds
                                    </h5>
                                </Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="w-full flex items-center p-4">
                <Link to="/shop/categories" className="w-full flex items-center">
                    {/* <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? 'crimson' : '#555'}`}
          /> */}
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 5 ? 'text-[crimson]' : 'text-[#555]'
                            }`}
                    >
                        Categories
                    </h5>
                </Link>
            </div>
            <div className="w-full flex items-center p-4">
                <Link to="/shop/stocks" className="w-full flex items-center">
                    {/* <AiOutlineGift
            size={30}
            color={`${active === 9 ? 'crimson' : '#555'}`}
          /> */}
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 9 ? 'text-[crimson]' : 'text-[#555]'
                            }`}
                    >
                        Stocks
                    </h5>
                </Link>
            </div>
            {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? 'crimson' : '#555'}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
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
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div> */}
            <div className="w-full flex items-center accordian">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            {/* {' '}
              <FiPackage
                size={30}
                color={`${active === 3 ? 'crimson' : '#555'}`}
              /> */}
                            Payments
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/dashboard-withdraw-money"
                                    className="w-full flex items-center"
                                >
                                    {/* <CiMoneyBill
                    size={30}
                    color={`${active === 7 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Withdraw Money
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/withdraw-payment-history"
                                    className="w-full flex items-center"
                                >
                                    {/* <CiMoneyBill
                    size={30}
                    color={`${active === 7 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Payment History
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/withdraw-payment-requests"
                                    className="w-full flex items-center"
                                >
                                    {/* <CiMoneyBill
                    size={30}
                    color={`${active === 7 ? 'crimson' : '#555'}`}
                  /> */}
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Payment Requests
                                    </h5>
                                </Link>
                            </div>


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
            <div className="w-full flex items-center p-4">
                <Link to="/dashboard-messages" className="w-full flex items-center">
                    <BiMessageSquareDetail
                        size={30}
                        color={`${active === 8 ? 'crimson' : '#555'}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 8 ? 'text-[crimson]' : 'text-[#555]'
                            }`}
                    >
                        Shop Inbox
                    </h5>
                </Link>
            </div>
            <div className="w-full flex items-center p-4">
                <Link to="/dashboard-coupouns" className="w-full flex items-center">
                    <AiOutlineGift
                        size={30}
                        color={`${active === 9 ? 'crimson' : '#555'}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 9 ? 'text-[crimson]' : 'text-[#555]'
                            }`}
                    >
                        Discount Codes
                    </h5>
                </Link>
            </div>
            <div className="w-full flex items-center accordian">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Shipment</Accordion.Header>
                        <Accordion.Body>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/shipment/login"
                                    className="w-full flex items-center"
                                >
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        ShipRocket Login
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/shipment/orders"
                                    className="w-full flex items-center"
                                >
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Orders
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/shipment/return-orders"
                                    className="w-full flex items-center"
                                >
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Return Orders
                                    </h5>
                                </Link>
                            </div>

                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/shipment/couriers"
                                    className="w-full flex items-center"
                                >
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        Couriers
                                    </h5>
                                </Link>
                            </div>
                            <div className="w-full flex items-center accordian-child">
                                <Link
                                    to="/shop/shipment/pickup-locations"
                                    className="w-full flex items-center"
                                >
                                    <h5
                                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? 'text-[crimson]' : 'text-[#555]'
                                            }`}
                                    >
                                        PickUp Address
                                    </h5>
                                </Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 10 ? 'crimson' : '#555'}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 10 ? 'text-[crimson]' : 'text-[#555]'
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div> */}
            <div className="w-full flex items-center p-4">
                <Link to="/settings" className="w-full flex items-center">
                    <CiSettings
                        size={30}
                        color={`${active === 11 ? 'crimson' : '#555'}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 11 ? 'text-[crimson]' : 'text-[#555]'
                            }`}
                    >
                        Settings
                    </h5>
                </Link>
            </div>
        </div>
    );
};

export default DashboardSideBar;
