import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

// import socketIO from "socket.io-client";
import { StyleConfig } from "../../utils/StyleConfig";
// const ENDPOINT = 'https://socket-ecommerce-tu68.onrender.com/';
// const ENDPOINT = "http://localhost:4000/";
// const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);

  let styles = StyleConfig();

  return (
    <div
      style={{
        background: styles?.headerColors?.bg?.toggleColorBtnHeader
          ? styles?.headerColors?.bg?.bgPicker
          : styles?.headerColors?.bg?.bgcolor,
      }}
      className="w-full h-[80px] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4 "
    >
      <div>
        <Link to="/dashboard">
          <div className="logo">
            <img
              // src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              // src="/images/logo.svg"
              src={styles?.logo?.url}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link
            to="/dashboard/cupouns"
            className="800px:block hidden"
            title="Cupouns"
          >
            <AiOutlineGift
              // color="#555"
              color={
                styles?.fontColor?.toggleBtnFont
                  ? styles?.fontColor?.fontColorPicker
                  : styles?.fontColor?.fontColor
              }
              size={30}
              className="mx-4 cursor-pointer"
            />
          </Link>
          <Link
            to="/dashboard-events"
            className="800px:block hidden"
            title="Events"
          >
            <MdOutlineLocalOffer
              color={
                styles?.fontColor?.toggleBtnFont
                  ? styles?.fontColor?.fontColorPicker
                  : styles?.fontColor?.fontColor
              }
              size={30}
              className="mx-4 cursor-pointer"
            />
          </Link>
          <Link
            to="/dashboard-products"
            className="800px:block hidden"
            title="Products"
          >
            <FiShoppingBag
              color={
                styles?.fontColor?.toggleBtnFont
                  ? styles?.fontColor?.fontColorPicker
                  : styles?.fontColor?.fontColor
              }
              size={30}
              className="mx-4 cursor-pointer"
            />
          </Link>
          <Link
            to="/dashboard-orders"
            className="800px:block hidden"
            title="Orders"
          >
            <FiPackage
              color={styles?.fontColor}
              size={30}
              className="mx-4 cursor-pointer"
            />
          </Link>
          <Link
            to="/dashboard-messages"
            className="800px:block hidden"
            title="Messages"
          >
            <BiMessageSquareDetail
              color={
                styles?.fontColor?.toggleBtnFont
                  ? styles?.fontColor?.fontColorPicker
                  : styles?.fontColor?.fontColor
              }
              size={30}
              className="mx-4 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller?._id}`}>
            <img
              src={`${seller?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
