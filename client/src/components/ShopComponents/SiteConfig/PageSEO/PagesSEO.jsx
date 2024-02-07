import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import Loader from '../../../../utils/Loader';
import { SEOModal } from './SEOModal';

const PagesSEO = () => {

    const [selectedModalShow, setSelectedModalShow] = useState(false);
    const [fieldName, setFieldName] = useState('');
    let isLoading = false;

    const columns = [
        // { field: 'id', headerName: 'Product Id', minWidth: 150, flex: 0.7 },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 180,
            flex: 1.4,
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
                        <Button onClick={(e) => handlePopModal(e, params?.row?.name)}>Edit</Button>
                    </>
                );
            },
        },
    ];

    const row1 = [
        {
            id: 0,
            name: 'home'
        },
        {
            id: 1,
            name: 'about-us'
        },
        {
            id: 2,
            name: 'products'
        },
        {
            id: 3,
            name: 'blog'
        },
        {
            id: 4,
            name: 'contact-us'
        },
        {
            id: 5,
            name: 'product-category'
        },
        {
            id: 6,
            name: 'cart'
        },
        {
            id: 7,
            name: 'wishlist'
        },
        {
            id: 8,
            name: 'login'
        },
        {
            id: 10,
            name: 'signup'
        },
        {
            id: 11,
            name: 'forgot-password'
        },
        {
            id: 12,
            name: 'order-success'
        },
        {
            id: 13,
            name: 't&c'
        },
        {
            id: 14,
            name: 'privacy-policy'
        },
        {
            id: 15,
            name: 'refund-policy'
        },
        {
            id: 16,
            name: 'account-activation'
        },
        {
            id: 17,
            name: 'checkout'
        },
        {
            id: 18,
            name: 'inbox'
        },
        {
            id: 19,
            name: 'orders'
        },
        {
            id: 20,
            name: 'profile'
        },
        {
            id: 21,
            name: 'address'
        },
        {
            id: 22,
            name: 'refund'
        },
        {
            id: 23,
            name: 'shop-login'
        },
    ];

    const handlePopModal = (e, name) => {
        e.preventDefault();
        setFieldName(name);
        setSelectedModalShow(true)
    }



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

                    <SEOModal onHide={() => setSelectedModalShow(false)} show={selectedModalShow} setModalShow={setSelectedModalShow} fieldName={fieldName} />
                </div>
            )}
        </>
    );
}

export default PagesSEO