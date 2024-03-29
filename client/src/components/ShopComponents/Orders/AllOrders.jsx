/* eslint-disable array-callback-return */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { StyleConfig } from '../../../utils/StyleConfig';
import { getAllOrdersOfShop } from '../../../redux/actions/order';
import Loader from '../../../utils/Loader';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useGetCurrencyConversion from '../../../hooks/Site-config/useGetCurrencyConversion';

const AllOrders = ({ active }) => {
    const { orders, isLoading } = useSelector((state) => state.order);
    const { seller } = useSelector((state) => state.seller);
    const { ConvertCurrency } = useGetCurrencyConversion();

    const styles = StyleConfig()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrdersOfShop(seller._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


    // const result = reduce.reduce((sum, initial) => {
    //   return sum + initial;
    // });

    // console.log(result)

    const columns = [
        { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },
        {
            field: 'image',
            flex: 1,
            minWidth: 130,
            headerName: 'Image',
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <div>
                        <img src={params?.row?.image} alt='product' width={'100px'} height={'100px'} />
                    </div>
                );
            },
        },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 130,
            flex: 0.7,

        },
        {
            field: 'itemsQty',
            headerName: 'Items Qty',
            type: 'number',
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: 'total',
            headerName: 'Total',
            type: 'number',
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: ' ',
            flex: 1,
            minWidth: 150,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row1 = [];
    const row2 = [];
    const row3 = [];
    const row4 = [];
    const row5 = [];

    orders &&
        orders.forEach((item) => {
            // eslint-disable-next-line array-callback-return
            const found = item?.sellerCart.filter((val) => { if (val?.sellerID === seller._id) { return val } });
            row1.push({
                id: item._id,
                image: found[0]?.products[0]?.selectedColor?.mainImage?.url,
                itemsQty: item.cart.length,
                total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                status: item?.status,
            });
        });

    orders &&
        orders.forEach((item) => {
            if (item?.status === 'Processing') {
                // eslint-disable-next-line array-callback-return
                const found = item?.sellerCart.filter((val) => { if (val?.sellerID === seller._id) { return val } });
                row2.push({
                    id: item._id,
                    image: found[0]?.products[0]?.selectedColor?.mainImage?.url,
                    itemsQty: item.cart.length,
                    total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                    status: item?.status,
                });
            }
        });

    orders &&
        orders.forEach((item) => {
            if (
                item?.status === 'Transferred to delivery partner' ||
                item?.status === 'Shipping' ||
                item?.status === 'Received' ||
                item?.status === 'On the way'
            ) {
                const found = item?.sellerCart.filter((val) => { if (val?.sellerID === seller._id) { return val } });
                row3.push({
                    id: item._id,
                    image: found[0]?.products[0]?.selectedColor?.mainImage?.url,
                    itemsQty: item.cart.length,
                    total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                    status: item?.status,
                });
            }
        });



    orders &&
        orders.forEach((item) => {
            if (item?.status === 'Delivered') {
                const found = item?.sellerCart.filter((val) => { if (val?.sellerID === seller._id) { return val } });
                row4.push({
                    id: item._id,
                    image: found[0]?.products[0]?.selectedColor?.mainImage?.url,
                    itemsQty: item.cart.length,
                    total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                    status: item?.status,
                });
            }
        });

    orders &&
        orders.forEach((item) => {
            // eslint-disable-next-line array-callback-return
            item?.sellerCart?.map((val) => {
                if (val.status === 'Canceled') {

                    const found = item?.sellerCart.filter((val) => { if (val?.sellerID === seller._id) { return val } });
                    row5.push({
                        id: item._id,
                        image: found[0]?.products[0]?.selectedColor?.mainImage?.url,
                        itemsQty: item.cart.length,
                        total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                        status: item?.status,
                    });
                }
            })
        });

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-full mx-8 pt-1 mt-10 bg-white outer1-div">
                    {active === 1 && (
                        <DataGrid rowHeight={88}
                            rows={row1}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    )}

                    {active === 2 && (
                        <DataGrid rowHeight={88}
                            rows={row2}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        // width={30}
                        // height={30}
                        />
                    )}

                    {active === 3 && (
                        <DataGrid rowHeight={88}
                            rows={row3}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    )}

                    {active === 4 && (
                        <DataGrid rowHeight={88}
                            rows={row4}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    )}

                    {active === 5 && (
                        <DataGrid rowHeight={88}
                            rows={row5}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default AllOrders;
