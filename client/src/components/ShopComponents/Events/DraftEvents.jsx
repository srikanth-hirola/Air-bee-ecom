import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { deleteEvent } from '../../../redux/actions/event';
import { DataGrid } from '@mui/x-data-grid';

export const DraftEvents = ({ allEvents }) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteEvent(id));
        window.location.reload();
    }

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
        {
            field: "name",
            headerName: "Name",
            minWidth: 180,
            flex: 1.4,
        },
        {
            field: "Preview",
            flex: 0.8,
            minWidth: 100,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {

                return (
                    <>
                        <Link to={`/dashboard-draft-events/edit/${params.row.id}`}>
                            <BiEdit size={20} />
                        </Link>
                    </>
                );
            },
        },
        {
            field: "Delete",
            flex: 0.8,
            minWidth: 120,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        {/* <Button
                            
                        > */}
                        <AiOutlineDelete size={20} onClick={() => handleDelete(params.id)} color='red' />
                        {/* </Button> */}
                    </>
                );
            },
        },
    ];

    const row = [];

    allEvents &&
        allEvents.forEach((item) => {
            row.push({
                id: item?._id,
                name: item.name,
                // price: "US$ " + item.discountPrice,
                // Stock: item.stock,
                // sold: item.sold_out,
            });
        });

    return (

        <div className="w-full mx-8 pt-1 mt-10 bg-white outer1-div">
            <DataGrid
                rows={row}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
            />
        </div>

    );
}
