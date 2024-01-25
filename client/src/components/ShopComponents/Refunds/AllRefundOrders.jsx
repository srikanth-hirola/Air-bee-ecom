
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { StyleConfig } from '../../../utils/StyleConfig';
import { getAllOrdersOfShop } from '../../../redux/actions/order';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Loader from '../../../utils/Loader';
import useGetCurrencyConversion from '../../../hooks/Site-config/useGetCurrencyConversion';


const AllRefundOrders = ({ active }) => {
    const { orders, isLoading } = useSelector((state) => state.order);
    const { seller } = useSelector((state) => state.seller);
    const { ConvertCurrency } = useGetCurrencyConversion();

    const dispatch = useDispatch();

    const styles = StyleConfig();

    useEffect(() => {
        dispatch(getAllOrdersOfShop(seller._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const refundOrders =
        orders &&
        orders.filter(
            (item) =>
                item.status === 'Processing refund' ||
                item.status === 'Refund Success' ||
                item.status === 'Rejected refund'
        );


    const columns = [
        { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 130,
            flex: 0.7,
            // cellClassName: (params) => {
            //     return params.getValue(params.id, 'status') === 'Delivered'
            //         ? 'greenColor'
            //         : 'redColor';
            // },
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
                        <Link to={`/return-order/${params.id}`}>
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

    refundOrders &&
        refundOrders.forEach((item) => {
            row1.push({
                id: item._id,
                itemsQty: item.cart.length,
                total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                status: item.status,
            });
        });

    refundOrders &&
        refundOrders.forEach((item) => {
            // eslint-disable-next-line array-callback-return
            item.cart.map((val) => {
                if (val.status === 'Refund Success') {
                    row2.push({
                        id: item._id,
                        itemsQty: item.cart.length,
                        total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                        status: val.status,
                    });
                }
            });
        });

    refundOrders &&
        refundOrders.forEach((item) => {
            // eslint-disable-next-line array-callback-return
            item.cart.map((val) => {
                if (val.status === 'Processing refund') {
                    row3.push({
                        id: item._id,
                        itemsQty: item.cart.length,
                        total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                        status: val.status,
                    });
                }
            });
        });

    refundOrders &&
        refundOrders.forEach((item) => {
            // eslint-disable-next-line array-callback-return
            item.cart.map((val) => {
                if (val.status === 'Rejected refund') {
                    row4.push({
                        id: item._id,
                        itemsQty: item.cart.length,
                        total: `${styles?.currency?.Symbol}` + ConvertCurrency(item.totalPrice),
                        status: val.status,
                    });
                }
            });
        });

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-full mx-8 pt-1 mt-10 bg-white outer1-div">
                    {active === 1 && (
                        <DataGrid
                            rows={row1}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    )}
                    {active === 2 && (
                        <DataGrid
                            rows={row2}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    )}
                    {active === 3 && (
                        <DataGrid
                            rows={row3}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    )}
                    {active === 4 && (
                        <DataGrid
                            rows={row4}
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

export default AllRefundOrders;
