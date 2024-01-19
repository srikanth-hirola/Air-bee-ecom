import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { StyleConfig } from '../../../utils/StyleConfig';
import { server } from '../../../server';
import { DataGrid } from '@mui/x-data-grid';


export const WithDrawHistory = ({ active }) => {

    const { seller } = useSelector((state) => state.seller)
    const [data, setData] = useState([]);

    const styles = StyleConfig();


    useEffect(() => {
        axios
            .get(`${server}/withdraw/get-all-withdraw-request`, {
                withCredentials: true,
            })
            .then((res) => {
                setData(res.data.withdraws);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);

    const columns = [
        { field: "id", headerName: "Withdraw Id", minWidth: 150, flex: 0.7 },
        {
            field: "amount",
            headerName: "Amount",
            minWidth: 100,
            flex: 0.6,
        },
        {
            field: "transactionID",
            headerName: "transactionID",
            type: "text",
            minWidth: 80,
            flex: 0.5,
        },
        {
            field: "updatedAt",
            headerName: "Payment Done On",
            type: "number",
            minWidth: 130,
            flex: 0.6,
        },
        {
            field: " ",
            headerName: "ScreenShot",
            type: "number",
            minWidth: 130,
            flex: 0.6,
            renderCell: (params) => {
                return (<a href={params.row?.ScreenShot} download>
                    <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className='rounded h-[40px] px-3 flex items-center justify-center' >View</button></a>
                );
            },
        },
    ];

    const columns2 = [
        { field: "id", headerName: "Withdraw Id", minWidth: 150, flex: 0.7 },
        {
            field: "amount",
            headerName: "Amount",
            minWidth: 100,
            flex: 0.6,
        },
        {
            field: "Status",
            headerName: "Status",
            type: "text",
            minWidth: 80,
            flex: 0.5,
        },
        {
            field: "createdAt",
            headerName: "Requested On",
            type: "number",
            minWidth: 130,
            flex: 0.6,
        },

    ];


    const row = [];
    const row2 = [];

    data &&
        data.forEach((item) => {
            if (item?.seller?._id === seller?._id) {
                if (item?.status === "succeed") {
                    row.push({
                        id: item._id,
                        amount: `${styles?.currency?.Symbol}` + item.amount,
                        transactionID: item?.proof?.transactionID,
                        updatedAt: item.updatedAt.slice(0, 10),
                        ScreenShot: item?.proof?.Image?.url,
                    });
                } else {
                    row2.push({
                        id: item._id,
                        amount: `${styles?.currency?.Symbol}` + item.amount,
                        Status: item?.status,
                        createdAt: item.createdAt.slice(0, 10),
                    })
                }

            }
        });
    return (
        <div className="w-full flex pt-5 justify-center outer1-div">
            <div className="w-[95%] bg-white">
                {active === 1 && <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />}
                {active === 2 && <DataGrid
                    rows={row2}
                    columns={columns2}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />}

            </div>
        </div>
    );
}
