import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { StyleConfig } from "../../utils/StyleConfig";

// import socketIO from "socket.io-client";
// const ENDPOINT = 'https://socket-ecommerce-tu68.onrender.com/';
// const ENDPOINT = "https://chat.airbee.co.in/";
// const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

const DashboardHeader = ({ active }) => {
  const { seller } = useSelector((state) => state.seller);
  const styles = StyleConfig();
  // const [active, setActive] = useState(null)

  const toggleActive = (color) => {
    // setActive(color);
  };

  // const buttonStyle = {
  //   color: active ? 'black' : 'red',
  //   cursor: 'pointer',
  // };


  return (
    <div
      // style={{
      //   background: styles?.headerColors?.bg?.toggleColorBtnHeader
      //     ? styles?.headerColors?.bg?.bgPicker
      //     : styles?.headerColors?.bg?.bgcolor,
      // }}
      className="w-full h-[80px] shadow sticky top-0 left-0 z-[99] flex items-center justify-between px-4 bg-white dashboard-header-page"
    >
      <div className="dashboard-header-logo">
        <Link to="/dashboard">
          <div className="logo ">
            <img
              // src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              // src="/images/logo.svg"
              src={styles?.logo?.url}
              alt="logo" className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        {/* {active.map((label, index) => ( */}
        <div className="flex items-center mr-4">
          <Link
            to="/dashboard-coupouns"
            className="800px:block hidden"
            title="Cupouns"
          >
            <AiOutlineGift
              style={{ color: active === 0 ? 'blue' : 'black' }}
              className="mx-4 cursor-pointer"

              // style={buttonStyle}
              // color="#555"
              // color={
              //   styles?.fontColor?.toggleBtnFont
              //     ? styles?.fontColor?.fontColorPicker
              //     : styles?.fontColor?.fontColor
              // }
              size={30}
            // color="black"

            />
          </Link>
          <Link
            to="/dashboard-events"
            className="800px:block hidden"
            title="Events"
          >
            <MdOutlineLocalOffer
              style={{ color: active === 1 ? 'blue' : 'black' }}
              onClick={() => toggleActive(1)}
              // style={buttonStyle}
              // color="black"
              // color={
              //   styles?.fontColor?.toggleBtnFont
              //     ? styles?.fontColor?.fontColorPicker
              //     : styles?.fontColor?.fontColor
              // }
              size={30}
              className="mx-4 cursor-pointer"
            />
          </Link>
          <Link
            to="/shop/all-products"
            className="800px:block hidden"
            title="Products"
          >
            <FiShoppingBag
              style={{ color: active === 2 ? 'blue' : 'black' }}
              onClick={() => toggleActive(2)}
              // style={buttonStyle}

              // color="black"
              // color={
              //   styles?.fontColor?.toggleBtnFont
              //     ? styles?.fontColor?.fontColorPicker
              //     : styles?.fontColor?.fontColor
              // }
              size={30}
              className="mx-4 cursor-pointer"
            />
          </Link>
          <Link
            to="/shop/dashboard-orders"
            className="800px:block hidden"
            title="Orders"
          >
            <FiPackage
              style={{ color: active === 3 ? 'blue' : 'black' }}
              onClick={() => toggleActive(3)}
              // style={buttonStyle}

              // color="black"
              // color={styles?.fontColor}
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
              style={{ color: active === 4 ? 'blue' : 'black' }}
              onClick={() => toggleActive(4)}
              // style={buttonStyle}

              // color="black"
              // color={
              //   styles?.fontColor?.toggleBtnFont
              //     ? styles?.fontColor?.fontColorPicker
              //     : styles?.fontColor?.fontColor
              // }

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
        {/* ))} */}
      </div>
    </div>
  );
};

export default DashboardHeader;
