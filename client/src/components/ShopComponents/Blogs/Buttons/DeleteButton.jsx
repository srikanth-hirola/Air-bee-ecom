import React from 'react';
import Button from 'react-bootstrap/Button';
import { useApiCalls } from '../../../../hooks/Blogs/useApiCalls';

const DeleteButton = ({ id, setLoading, endpoint, message }) => {
    const { deleteData } = useApiCalls();


    return (
        <>
            <Button type="button" variant="outline-danger" onClick={(e) => deleteData(e, setLoading, endpoint, message)}>
                Delete
            </Button>
        </>
    );
};

export default DeleteButton;
