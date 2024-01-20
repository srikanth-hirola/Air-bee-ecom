import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { getAllEventsShop } from "../../redux/actions/event";
import Ratings from "../Shop/Ratings";
import MainProductCard from "../ProductCards/MainProductCard";
import EventProductCard from "./Events/EventProductCard";

const ShopProfileData = ({ isOwner }) => {
    const { products } = useSelector((state) => state.products);
    const { events } = useSelector((state) => state.events);
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllProductsShop(id));
        dispatch(getAllEventsShop(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const [active, setActive] = useState(1);

    const allReviews =
        products && products.map((product) => product.reviews).flat();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <div className="w-full flex">
                    <div className="flex items-center" onClick={() => setActive(1)}>
                        <h5
                            className={`font-[600] text-[20px] ${active === 1 ? "text-red-500" : "text-[#333]"
                                } cursor-pointer pr-[20px]`}
                        >
                            Shop Products
                        </h5>
                    </div>
                    <div className="flex items-center" onClick={() => setActive(2)}>
                        <h5
                            className={`font-[600] text-[20px] ${active === 2 ? "text-red-500" : "text-[#333]"
                                } cursor-pointer pr-[20px]`}
                        >
                            Running Events
                        </h5>
                    </div>

                    <div className="flex items-center" onClick={() => setActive(3)}>
                        <h5
                            className={`font-[600] text-[20px] ${active === 3 ? "text-red-500" : "text-[#333]"
                                } cursor-pointer pr-[20px]`}
                        >
                            Shop Reviews
                        </h5>
                    </div>
                </div>
                {/* <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div> */}
            </div>

            <br />
            {active === 1 && (
                <div className="flex flex-wrap gap-[20px]">
                    {products &&
                        products.map((i, index) => (
                            <MainProductCard data1={i} key={index} />
                        ))}
                </div>
            )}

            {active === 2 && (
                <div className="w-full">
                    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
                        {events &&
                            events.map((i, index) => (
                                <EventProductCard data1={i}
                                    key={index}
                                    isShop={true}
                                    isEvent={false} />
                            ))}
                    </div>
                    {events && events.length === 0 && (
                        <h5 className="w-full text-center py-5 text-[18px]">
                            No Events for this shop!
                        </h5>
                    )}
                </div>
            )}

            {active === 3 && (
                <div className="w-full">
                    {allReviews &&
                        allReviews.map((item, index) => (
                            <div className="w-full flex my-4">
                                <img
                                    src={`${item.user.avatar?.url}`}
                                    className="w-[30px] h-[30px] rounded-full"
                                    alt=""
                                />
                                <div className="pl-2">
                                    <div className="flex w-full items-center">
                                        <h4 className="font-[600] pr-2">{item.user.name}</h4>
                                        <Ratings rating={item.rating} />
                                    </div>
                                    <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
                                    <p className="text-[#000000a7] text-[14px]">{"2days ago"}</p>
                                </div>
                            </div>
                        ))}
                    {allReviews && allReviews.length === 0 && (
                        <h5 className="w-full text-center py-5 text-[18px]">
                            No Reviews for this shop!
                        </h5>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShopProfileData;
