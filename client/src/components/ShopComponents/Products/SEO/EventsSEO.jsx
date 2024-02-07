import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import Loader from '../../../../utils/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../../../redux/actions/event';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';

const EventsSEO = () => {
    const { allEvents } = useSelector((state) => state.events);
    const { seller } = useSelector((state) => state.seller);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(false)
    }, [allEvents])

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch, seller._id]);

    const columns = [
        // { field: 'id', headerName: 'Product Id', minWidth: 150, flex: 0.7 },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 180,
            flex: 1.4,
        },
        {
            field: 'Preview',
            flex: 0.8,
            minWidth: 100,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params?.row?.slug}`}>
                            <Button>
                                <AiOutlineEye size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
        {
            field: 'Edit',
            flex: 1,
            minWidth: 150,
            headerName: 'Edit',
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/event/edit-event-seo/${params.id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row1 = [];

    allEvents &&
        allEvents.forEach((item) => {
            if (!item.draft) {
                row1.push({
                    id: item._id,
                    name: item.name,
                    slug: item?.slug,
                });
            }

        });



    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-full mx-8 pt-1 mt-10 bg-white outer1-div">
                    <div className="flex w-full items-center justify-between">
                        <div className="w-full flex seller-req-flex-div">
                        </div>
                    </div>

                    <>
                        <DataGrid
                            rows={row1}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    </>

                </div>
            )}
        </>
    );
}

export default EventsSEO