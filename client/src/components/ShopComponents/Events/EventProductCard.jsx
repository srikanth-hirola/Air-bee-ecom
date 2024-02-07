import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const EventProductCard = ({ data1, isEvent, active }) => {


    const { allEvents } = useSelector((state) => state.events);
    const [data, setData] = useState();

    useEffect(() => {
        const productInEvents = allEvents?.find((event) =>
            event.productArray.some((item) => item._id === data1._id)
        );

        if (productInEvents) {
            const productData = productInEvents.productArray.find(
                (item) => item._id === data1._id
            );

            const updatedProductData = { ...productData };

            if (updatedProductData.showInputs) {
                updatedProductData.colorInputs = updatedProductData.colorInputs.map(
                    (val) => ({
                        ...val,
                        discountPrice: val.eventPrice,
                        stock: val.eventStock,
                        // old stock 
                    })
                );
            } else {
                updatedProductData.discountPrice = updatedProductData.eventPrice;
                updatedProductData.stock = updatedProductData.eventStock;
            }
            setData(updatedProductData);
        } else {
            setData(data1);
        }
    }, [allEvents, data1]);

    return (
        <>
            {data && (

                <div className="w-full h-[200px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer product-card-border">
                    <Link
                        to={`/event/${data?.slug}`}
                    >
                        <>
                            <div className='w-full pb-2 h-[90px]'>
                                <img
                                    src={`${data?.images[0]?.url}`}
                                    alt=""
                                    className="w-full h-full object-contain cardCus-img"
                                />
                            </div>

                            <div className='text-center'>
                                <h6 className="pt-1 text-[20px] text-[#000]">
                                    {data1?.name.length > 15
                                        ? data1?.name.slice(0, 15) + '...'
                                        : data1?.name}
                                </h6>

                                <p className="text-[12px] text-[#000]">
                                    Start date :  {data1?.start_Date.slice(0, 10)} <br />
                                    End date : {data1?.Finish_Date.slice(0, 10)}
                                </p>
                            </div>
                        </>
                    </Link>
                </div>
            )}
        </>
    );
};

export default EventProductCard;