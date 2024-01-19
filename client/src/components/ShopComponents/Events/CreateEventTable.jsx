import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import { BiErrorAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

const CreateEventTable = (props) => {


    const handlePushArray = (e, val) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        if (!updatedState.includes(val)) {
            if (val.showInputs === true) {
            }
            updatedState.push(val);
        }
        props.setProductArray(updatedState);
    };


    const handleChange = (e, index) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        if (+e.target.value > +updatedState[index].originalPrice) {
            alert("Event Price can't be More than Original Price");
        } else {
            updatedState[index].eventPrice = e.target.value;
            props.setProductArray(updatedState);
        }
    };

    const handleStockChange = (e, index) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        if (+e.target.value > +updatedState[index].stock) {
            alert("Event Stock can't be More than Existing Stock");
        } else {
            updatedState[index].eventStock = e.target.value;
            props.setProductArray(updatedState);
        }
    };

    const hanldeAttrStockChange = (e, index, index2) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        const existingStock =
            updatedState[index].attributes[0].values[index2].stock;
        const currentStock = +e.target.value;
        if (currentStock <= existingStock) {
            updatedState[index].attributes[0].values[index2].eventStock =
                currentStock;
            props.setProductArray(updatedState);
        } else {
            alert("Event Stock can't be More than Existing Stock");
        }
    };

    const handleColorInputChange = (e, index, index2) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        const originalPrice =
            +updatedState[index].colorInputs[index2].originalPrice;
        const currentPrice = +e.target.value;

        if (currentPrice < originalPrice) {
            updatedState[index].colorInputs[index2].eventPrice = currentPrice;
            props.setProductArray(updatedState);
        } else {
            alert("Event Price can't be More than Original Price");
        }
    };

    const handleColorInputAttrStockChange = (e, index, index2, index3) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        const existingStock =
            updatedState[index].colorInputs[index2].attributes[0].values[index3]
                .stock;
        const currentStock = e.target.value;

        if (currentStock <= existingStock) {
            updatedState[index].colorInputs[index2].attributes[0].values[
                index3
            ].eventStock = currentStock;

            props.setProductArray(updatedState);
        } else {
            alert("Event Stock can't be More than Existing Stock");
        }
    };

    const handleColorInputStockChange = (e, index, index2) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        const value = +e.target.value;

        if (value <= +updatedState[index].colorInputs[index2].stock) {
            updatedState[index].colorInputs[index2].eventStock = value;
            props.setProductArray(updatedState);
        } else {
            alert("Event Stock can't be More than Existing Stock");
        }
    };

    const handleRemove = (e, index) => {
        e.preventDefault();
        const updatedState = [...props.productArray];
        updatedState.splice(index, 1);
        props.setProductArray(updatedState);
    };



    return (
        <div>
            <div {...props}
                size="lg"
                centered className='h-fit'>
                {/* <h5 className='sph'>Selected Products</h5> */}
                <div className='flex gap-3'>

                    <div className="w-[40%] ml-[15px] p-[10px] rounded-xl sp1 h-[500px] overflow-auto">
                        {/* <thead className='border-b-2 h-[50px]'> */}
                        <div className='bg-white h-[60px] sticky top-0'>
                            <div className=' border-b-2 flex justify-between px-3 rounded-xl font-semibold h-[30px]' style={{ backgroundColor: props?.styles?.mainColor, color: props?.styles?.fontColor }}>
                                <p className='pt-0.5'>Name</p>
                                <p className='pt-0.5 pr-3'>Add</p>
                            </div>
                        </div>

                        {/* </thead> */}
                        {/* <hr className='hr-table' /> */}
                        <div className='p-[10px] w-full '>
                            {props.data.map((val, index) => {
                                return (
                                    <div className='flex justify-between my-2'>
                                        <p className='w-[80%]'>
                                            {val.name}({val.productId})
                                        </p>
                                        <div>
                                            <button
                                                className="rounded py-1 px-3"
                                                onClick={(e) => {
                                                    handlePushArray(e, val);
                                                }}
                                                style={{ backgroundColor: props?.styles?.mainColor, color: props?.styles?.fontColor }}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="added-prod">
                        {props.productArray.length > 0 && (
                            <Accordion className='accordion'>
                                {props.productArray.map((val, index) => {
                                    return (
                                        <div className="sp2 mb-2">
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header>
                                                    {val.name.length > 40
                                                        ? val.name.slice(0, 40) + '...'
                                                        : val.name}
                                                    &nbsp;&nbsp;&nbsp;
                                                    {props?.activeError?.includes(index) && <IconContext.Provider value={{ color: 'red' }}>
                                                        <BiErrorAlt size={20} color="red" />
                                                    </IconContext.Provider>}
                                                    <button
                                                        className="absolute right-[50px] bg-red-500 text-white py-1 px-3 rounded"
                                                        onClick={(e) => {
                                                            handleRemove(e, index);
                                                        }}
                                                    >
                                                        Remove
                                                    </button>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Name : {val.name}</p>
                                                    {val.showInputs ? (
                                                        val.colorInputs.map((value, index2) => {
                                                            return (
                                                                <>
                                                                    <p>{value.imageColor}(Varient Name) :</p>
                                                                    <p>
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Original Price :{' '}
                                                                        {value.originalPrice}
                                                                    </p>
                                                                    <div className="d-flex">
                                                                        <p>
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discount Price :{' '}
                                                                            {value.discountPrice}
                                                                        </p>
                                                                        <input
                                                                            className="event-input"
                                                                            type="tel"
                                                                            placeholder="Event Price"
                                                                            value={
                                                                                value.eventPrice
                                                                            }
                                                                            onChange={(e) => {
                                                                                handleColorInputChange(e, index, index2);
                                                                            }}
                                                                            required
                                                                        />
                                                                        <span className="text-red-500  ml-2">*</span>
                                                                    </div>
                                                                    {value.haveAttributes && value.attributeStock ? (
                                                                        <>
                                                                            <p>
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;Attribute Name :&nbsp;
                                                                                {value.attributes[0].name}
                                                                            </p>
                                                                            {value.attributes[0].values.map(
                                                                                (attr, index3) => {
                                                                                    return (
                                                                                        <div className="d-flex">
                                                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                            <p>
                                                                                                {attr.valName} : {attr.stock}
                                                                                            </p>
                                                                                            <input
                                                                                                className="event-input w-25"
                                                                                                type="tel"
                                                                                                placeholder="Event Stock"
                                                                                                value={attr.eventStock}
                                                                                                onChange={(e) => {
                                                                                                    handleColorInputAttrStockChange(
                                                                                                        e,
                                                                                                        index,
                                                                                                        index2,
                                                                                                        index3
                                                                                                    );
                                                                                                }}
                                                                                                required
                                                                                            />
                                                                                            <span className="text-red-500  ml-2">
                                                                                                *
                                                                                            </span>
                                                                                        </div>
                                                                                    );
                                                                                }
                                                                            )}
                                                                        </>
                                                                    ) : (
                                                                        <div className="d-flex">
                                                                            <p>
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stock : {value.stock}
                                                                            </p>
                                                                            <input
                                                                                className="event-input w-25"
                                                                                placeholder="Event Stock"
                                                                                type="tel"
                                                                                value={value.eventStock}
                                                                                onChange={(e) => {
                                                                                    handleColorInputStockChange(
                                                                                        e,
                                                                                        index,
                                                                                        index2
                                                                                    );
                                                                                }}
                                                                                required
                                                                            />
                                                                            <span className="text-red-500  ml-2">*</span>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            );
                                                        })
                                                    ) : (
                                                        <>
                                                            <p>Original Price : {val.originalPrice}</p>
                                                            <div className="d-flex">
                                                                <p>Discount price : {val.discountPrice}</p>
                                                                <input
                                                                    className="event-input"
                                                                    type="tel"
                                                                    value={val.eventPrice}
                                                                    placeholder="Event Price"
                                                                    onChange={(e) => {
                                                                        handleChange(e, index);
                                                                    }}
                                                                />
                                                                <span className="text-red-500  ml-2">*</span>
                                                            </div>
                                                            {val.haveAttributes && val.attributeStock ? (
                                                                <>
                                                                    <p>Attribute Name : {val.attributes[0].name}</p>
                                                                    {val.attributes[0].values.map((attr, index2) => {
                                                                        return (
                                                                            <div className="d-flex">
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                <p>
                                                                                    {attr.valName} : {attr.stock}
                                                                                </p>
                                                                                <input
                                                                                    className="event-input w-25"
                                                                                    type="tel"
                                                                                    placeholder="Event Stock"
                                                                                    value={attr.eventStock}
                                                                                    onChange={(e) => {
                                                                                        hanldeAttrStockChange(e, index, index2);
                                                                                    }}
                                                                                    required
                                                                                />
                                                                                <span className="text-red-500  ml-2">*</span>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </>
                                                            ) : (
                                                                <div className="d-flex">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Stock : {val.stock}</p>
                                                                    <input
                                                                        className="event-input w-25"
                                                                        placeholder="Event Stock"
                                                                        type="tel"
                                                                        value={val.eventStock}
                                                                        onChange={(e) => {
                                                                            handleStockChange(e, index);
                                                                        }}
                                                                        required
                                                                    />
                                                                    <span className="text-red-500  ml-2">*</span>
                                                                </div>
                                                            )}
                                                        </>
                                                    )}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                    );
                                })}
                            </Accordion>
                        )}
                    </div>
                </div>
                <br />
                {/* <div>
                    <Button onClick={props.onHide}>Close</Button>
                </div> */}
            </div>
        </div>
    );
};

export default CreateEventTable;











