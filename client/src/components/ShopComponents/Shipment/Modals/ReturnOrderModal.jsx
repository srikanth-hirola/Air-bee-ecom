import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { StyleConfig } from '../../../../utils/StyleConfig';
import { server } from '../../../../server';
import toast from 'react-hot-toast';

const ReturnOrderModal = (props) => {

    const [orderItems, setOrderItems] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const [dimensionsStateArray, setDimensionsStateArray] = useState([]);

    const { seller } = useSelector((state) => state.seller);

    const styles = StyleConfig();

    useEffect(() => {
        setOrderItems(props.orderItems);
        const dimensionsArray = props.orderProducts.map((val) => {
            return {
                height: val.packageHeight,
                length: val.packageLength,
                width: val.packageWidth,
                weight: val.packageWeight,
                SKU: val.SKU
            };
        });

        Promise.all(dimensionsArray.map(async (dimension) => {
            return dimension;
        })).then((resolvedDimensions) => {
            setDimensionsStateArray(resolvedDimensions);
        });
    }, [props]);



    const handleProductsReturns = (e, productIndex) => {
        e.preventDefault();
        const updatedState = [...selectedProducts];
        updatedState[productIndex] = orderItems[productIndex];
        setSelectedProducts(updatedState)
    }

    const removeProductReturn = (e, productIndex) => {
        e.preventDefault();
        const updatedState = [...selectedProducts];
        const filtered = updatedState.filter((val, index) => index !== productIndex);
        setSelectedProducts(filtered)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedProducts.length > 0) {
            const newSelectedArray = [];

            for (const val of selectedProducts) {
                const SKU = val?.channel_sku;
                const found = dimensionsStateArray.find((dim) => dim?.SKU === SKU);
                if (found) {
                    newSelectedArray.push({
                        orderItem: val,
                        dimension: found
                    });
                }
            }
            try {
                const sellerID = seller._id;
                await axios.post(`${server}/shipping/returnOrder`, { sellerID, orderDetails: props.orderDetails, selectedProducts: newSelectedArray, orderID: props.orderID });
                toast.success('Shipment Order Canceled Successfully');
            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            toast.error('Select products to be returned');
        }
    };


    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedState = [...orderItems];
        const updatedIndexData = { ...updatedState[index] };
        if (name === "name") {
            updatedIndexData.name = value
        } else if (name === 'channel_sku') {
            updatedIndexData.channel_sku = value
        }
        else if (name === 'quantity') {
            updatedIndexData.quantity = value
        }
        else if (name === 'product_cost') {
            updatedIndexData.product_cost = value
        }
        updatedState[index] = { ...updatedIndexData };
        setOrderItems(updatedState)
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered className='mo'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Return Order Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    {orderItems?.map((val, index) => (
                        <div className='flex w-full justify-between items-center border-b-2 pb-2'>
                            <div className='w-4/12 px-2'>
                                <div className='flex flex-col '>
                                    <label>SKU</label>
                                    <input type='text' name="channel_sku" value={val.channel_sku} className='border-2 rounded my-2 h-[30px] px-2' onChange={(e) => { handleChange(e, index) }} readOnly />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Name</label>
                                    <input type='text' name="name" value={val.name} className='border-2 rounded my-2 h-[30px] px-2' onChange={(e) => { handleChange(e, index) }} readOnly />
                                </div>
                            </div>
                            <div className='w-4/12 px-2'>
                                <div className='flex flex-col'>
                                    <label>Qty</label>
                                    <input type='text' name="quantity" value={val.quantity} className='border-2 rounded my-2 h-[30px] px-2' onChange={(e) => { handleChange(e, index) }} readOnly />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Price</label>
                                    <input type='text' name="product_cost" value={val.product_cost} className='border-2 rounded my-2 h-[30px] px-2' onChange={(e) => { handleChange(e, index) }} readOnly />
                                </div>
                            </div>
                            <div className='w-2/12 flex flex-col'>
                                {selectedProducts.includes(val) ? (
                                    <button className='bg-red-600 py-2 px-1 rounded text-white' onClick={(e) => { removeProductReturn(e, index) }}>Unselect</button>
                                ) : (
                                    <button style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className=' py-2 px-1 rounded text-white' onClick={(e) => { handleProductsReturns(e, index) }}>Select</button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button onClick={handleSubmit} style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} className=' py-2 px-1 rounded text-white mt-3 w-[100px]'>Submit</button>
                </form>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default ReturnOrderModal