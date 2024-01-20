import axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { server } from '../../../../server';
import toast from 'react-hot-toast';

export const CategoryDeleteModel = (props) => {


    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const ID = props?.catId;
            await axios.delete(`${server}/category/delete-category/${ID}`)
            toast.success("Deleted Category and related products Successfully")
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirm Delete Category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>The Category and the products related to this category will also be deleted.</p>
                <p>Click Confirm Delete to delete the category!</p>
                <div className='flex justify-between my-3'>
                    <button className='bg-red-400 text-white px-3 py-2 rounded' onClick={handleDelete}>Confirm Delete</button>
                    <button className='bg-blue-400 text-white px-3 py-2 rounded' onClick={props.onHide}>Cancel</button>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}
