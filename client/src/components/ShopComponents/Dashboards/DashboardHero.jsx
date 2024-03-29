import React, { useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdBorderClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { StyleConfig } from "../../../utils/StyleConfig";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { getAllOrdersOfShop } from '../../../redux/actions/order'
import { getAllProductsShop } from "../../../redux/actions/product";
import useGetCurrencyConversion from "../../../hooks/Site-config/useGetCurrencyConversion";


const DashboardHero = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.order);
    const { seller } = useSelector((state) => state.seller);
    const { products } = useSelector((state) => state.products);
    const { ConvertCurrency } = useGetCurrencyConversion();

    const styles = StyleConfig();

    useEffect(() => {
        dispatch(getAllOrdersOfShop(seller._id));
        dispatch(getAllProductsShop(seller._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const availableBalance = seller?.availableBalance.toFixed(2);

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/order/${params?.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row = [];

    orders && orders.forEach((item) => {
        row.push({
            id: item?._id,
            itemsQty: item.cart.reduce((acc, item) => acc + item?.qty, 0),
            total: `${styles?.currency?.Symbol}` + ConvertCurrency(item?.totalPrice),
            status: item?.status,
        });
    });

    return (
        <div className="w-full p-8 outer1-div dashborad-main-page-responsive">
            <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
            <div className="w-full block 800px:flex items-center justify-between">
                <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] h-[200px] bg-white shadow rounded px-2 py-5">
                    <div className="flex items-center">
                        <AiOutlineMoneyCollect
                            size={30}
                            className="mr-2"
                            fill="#00000085"
                        />
                        <h3
                            className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                        >
                            Total Orders Amount
                        </h3>
                    </div>
                    <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(availableBalance)}</h5>
                    {/* <Link to="/dashboard-withdraw-money">
                        <h5 className="pt-4 pl-2 " style={{ color: styles?.mainColor }}>Withdraw Money</h5>
                    </Link> */}
                </div>

                <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] h-[200px] bg-white shadow rounded px-2 py-5">
                    <div className="flex items-center">
                        <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                        <h3
                            className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                        >
                            All Orders
                        </h3>
                    </div>
                    <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{orders && orders.length}</h5>
                    <Link to="/shop/dashboard-orders">
                        <h5 className="pt-4 pl-2 " style={{ color: styles?.mainColor }} >View Orders</h5>
                    </Link>
                </div>

                <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] h-[200px] bg-white shadow rounded px-2 py-5">
                    <div className="flex items-center">
                        <AiOutlineMoneyCollect
                            size={30}
                            className="mr-2"
                            fill="#00000085"
                        />
                        <h3
                            className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                        >
                            All Products
                        </h3>
                    </div>
                    <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{products && products.length}</h5>
                    <Link to="/shop/all-products">
                        <h5 className="pt-4 pl-2 " style={{ color: styles?.mainColor }}>View Products</h5>
                    </Link>
                </div>
            </div>
            <br />
            <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
            <div className="w-full min-h-[45vh] bg-white rounded">
                <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />
            </div>
        </div>
    );
};

export default DashboardHero;
