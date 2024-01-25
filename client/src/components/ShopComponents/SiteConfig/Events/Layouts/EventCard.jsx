import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyleConfig } from "../../../../../utils/StyleConfig";
import CountDown from "../../../../Events/CountDown";

const EventCard = ({ active, data }) => {

    const styles = StyleConfig();


    const [decState, setDecState] = useState(true)
    const [description, setDescription] = useState();

    useEffect(() => {
        if (decState) {
            const dec = data.description.substring(0, 200) + "..."
            setDescription(dec)
        } else {
            setDescription(data.description)
        }
    }, [data, decState])



    return (
        <div
            className={`block bg-white rounded-lg ${active ? "unset" : "mb-12"
                } lg:flex p-2 mb-3 evtb !w-full`}
        >
            <div className="lg:-w[20%] evti evti-mq">
                <img src={`${data.images[0]?.url}`} alt="" />
            </div>
            <div className="w-full lg:[w-80%] flex flex-col justify-center evtd evtd-mq">
                <h2 className={`${styles.productTitle} evth-mq`}>{data.name}</h2>
                <p className="eventd">{description}<span className="ml-2 read-more" onClick={() => { decState ? setDecState(false) : setDecState(true) }}>{decState ? "ReadMore" : "ReadLess"}</span></p>
                {/* <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data.sold_out} sold
          </span>
        </div> */}
                <div className="w-fit">
                    <CountDown data={data} />
                </div>
                {/* <br /> */}
                <div className="flex items-center">
                    <Link to={`/event/${data._id}`}>
                        <div className="cat-btn my-2" style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} >See Products</div>
                    </Link>
                    {/* <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Products</div>
          </Link> */}
                    {/* <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div> */}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
