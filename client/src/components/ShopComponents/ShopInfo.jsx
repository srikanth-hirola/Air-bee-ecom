import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { StyleConfig } from '../../utils/StyleConfig';
import { getAllProductsShop } from '../../redux/actions/product';
import { server } from '../../server';
import Loader from '../../utils/Loader';
import PasswordChangeModal from './Layout/PasswordChangeModal';

const ShopInfo = ({ isOwner }) => {
    const [data, setData] = useState({});
    const { products } = useSelector((state) => state.products);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();

    const styles = StyleConfig();

    useEffect(() => {
        dispatch(getAllProductsShop(id));
        setIsLoading(true);
        axios.get(`${server}/shop/get-shop-info/${id}`)
            .then((res) => {
                setData(res.data.shop);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [dispatch, id]);

    const logoutHandler = async () => {
        axios.get(`${server}/shop/logout`, {
            withCredentials: true,
        });
        window.location.reload();
    };

    const totalReviewsLength =
        products &&
        products.reduce((acc, product) => acc + product.reviews.length, 0);

    const totalRatings =
        products &&
        products.reduce(
            (acc, product) =>
                acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
            0
        );

    const averageRating = totalRatings / totalReviewsLength || 0;

    const [modalShow, setModalShow] = useState(false);
    const readMore = true;


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <div className="w-full py-5">
                        <div className="w-full flex item-center justify-center">
                            <img
                                src={`${data.avatar?.url}`}
                                alt=""
                                className="w-[150px] h-[150px] object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
                        {readMore ? (
                            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
                                {data?.description && data.description.length > 100
                                    ? data.description.substring(0, 100)
                                    : data.description}
                            </p>
                        ) : (
                            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
                                {data?.description}
                            </p>
                        )}

                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Address</h5>
                        <p className="text-[#000000a6]">{data.address}</p>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Phone Number</h5>
                        <p className="text-[#000000a6]">{data.phoneNumber}</p>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Total Products</h5>
                        <p className="text-[#000000a6]">{products && products.length}</p>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Shop Ratings</h5>
                        <p className="text-[#000000b0]">{averageRating}/5</p>
                    </div>
                    <div className="p-3">
                        <h5 className="font-[600]">Joined On</h5>
                        <p className="text-[#000000b0]">
                            {data?.createdAt?.slice(0, 10)}
                        </p>
                    </div>
                    {isOwner && (
                        <div className="py-3 px-4">
                            <Link to="/settings">
                                <div
                                    className="!w-full !h-[42px] !rounded-[5px] flex justify-center items-center my-2" style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                >
                                    Edit Shop
                                </div>
                            </Link>
                            <div
                                className="!w-full !h-[42px] !rounded-[5px] cursor-pointer flex justify-center items-center my-2" style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={(e) => {
                                    e.preventDefault();
                                    setModalShow(true);
                                }}
                            >
                                <>

                                    Change Password

                                    <PasswordChangeModal
                                        show={modalShow}
                                        onHide={() => {
                                            setModalShow(false)
                                        }}
                                        sellerId={id}
                                    />
                                </>
                            </div>

                            <div
                                className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
                                onClick={logoutHandler}
                            >
                                <span className="text-white">Log Out</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ShopInfo;
