import React, { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StyleConfig } from '../../../utils/StyleConfig';
import toast from 'react-hot-toast';
import { server } from '../../../server';
import { createevent } from '../../../redux/actions/event';
import Loader from '../../../utils/Loader';
import CreateEventTable from './CreateEventTable';


const CreateEvent = () => {
    const { seller } = useSelector((state) => state.seller);
    const { success, error } = useSelector((state) => state.events);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const styles = StyleConfig();

    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [activeError, setActiveError] = useState([]);

    const handleStartDateChange = (e) => {
        const inputValue = e.target.value;
        const startDate = inputValue ? new Date(inputValue) : null;
        const minEndDate = startDate
            ? new Date(startDate.getTime() + 0 * 24 * 60 * 60 * 1000)
            : null;
        setStartDate(startDate);
        setEndDate(null);

        const endDateInput = document.getElementById('end-date');
        if (endDateInput && minEndDate) {
            endDateInput.min = minEndDate.toISOString().slice(0, 10);
        }
    };


    const handleEndDateChange = (e) => {
        const endDate = new Date(e.target.value);
        setEndDate(endDate);
    };

    const today = new Date().toISOString().slice(0, 10);

    const minEndDate = startDate
        ? new Date(startDate.getTime() + 1 * 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(0, 10)
        : '';


    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (success) {
            toast.success('Event created successfully!');
            setTimeout(() => {
                navigate('/dashboard-events');
            }, 2000);

            // window.location.reload();
        }
        axios
            .get(`${server}/event/get-all-cat-product/${seller._id}`)
            .then((result) => {
                setProductData(result.data.product);
                setIsLoading(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [dispatch, error, navigate, seller._id, success]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImages((old) => [...old, reader.result]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newForm = new FormData();

        images.forEach((image) => {
            newForm.append('images', image);
        });
        if (name === '' || description === "" || images.length === 0 || startDate === null || endDate === null) {
            toast.error("All Fileds are required");
            return;
        }
        if (productArray.length === 0) {
            toast.error("Atleast One Product is required to create event");
            return;
        }

        const Ver = await EventProductsValidation(productArray, setActiveError);
        if (!Ver) {
            toast.error("All fields are required in products")
            return;
        }

        const data = {
            draft: false,
            name,
            description,
            productArray,
            images,
            shopId: seller._id,
            start_Date: startDate?.toISOString(),
            Finish_Date: endDate?.toISOString(),
        };
        dispatch(createevent(data));
    };


    //validation
    const EventProductsValidation = async (productArray, setActiveError) => {
        let errorArray = [];
        await productArray.forEach((product, index) => {
            if (product?.showInputs) {
                product?.colorInputs?.forEach((varient) => {
                    if (!varient?.eventPrice) {
                        errorArray.push(index)
                    }
                    if (varient?.attributeStock) {
                        varient?.attributes[0]?.values.forEach((attr) => {
                            if (!attr?.eventStock) {
                                errorArray.push(index)
                            }
                        })
                    } else {
                        if (!varient?.eventStock) {
                            errorArray.push(index)
                        }
                    }
                })
            } else {
                if (product?.attributeStock) {
                    product?.attributes[0]?.values.forEach((attr) => {
                        if (!attr?.eventStock) {
                            errorArray.push(index)
                        }
                    })
                } else {
                    if (!product?.eventStock) {
                        errorArray.push(index)
                    }
                }
            }
        })

        const Unique = new Set(errorArray);

        const newArray = Array.from(Unique)
        if (newArray.length > 0) {
            setActiveError(newArray)
            return false
        } else {
            setActiveError([])
            return true
        }
    }

    const handleDraftSubmit = async (e) => {
        e.preventDefault();

        const newForm = new FormData();

        images.forEach((image) => {
            newForm.append('images', image);
        });

        const data = {
            draft: true,
            name,
            description,
            productArray,
            images,
            shopId: seller._id,
            start_Date: startDate?.toISOString(),
            Finish_Date: endDate?.toISOString(),
        };
        try {
            await axios.post(`${server}/event/create-draft-event`, data);
            toast.success("Event Drafted Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    // const [modalShow, setModalShow] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const toggleContent = (e) => {
        e.preventDefault();
        showContent ? setShowContent(false) : setShowContent(true);
    };

    const [productArray, setProductArray] = useState([]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[100vh] rounded-[4px] p-3 overflow-y-scroll create-width pb-4">
                    <h5 className="text-[30px] font-Poppins text-center font-[400]">Create Event</h5>
                    {/* create event form */}
                    <form onSubmit={handleSubmit}>
                        <br />
                        <div>
                            <label className="pb-2 font-[500]">
                                Event Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your event product name..."
                            />
                        </div>
                        <br />
                        <div>
                            <label className="pb-2 font-[500]">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                cols="30"
                                required
                                rows="8"
                                type="text"
                                name="description"
                                value={description}
                                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter your event product description..."
                            ></textarea>
                        </div>
                        <br />
                        <div>
                            <label className="pb-2 font-[500]">
                                Product <span className="text-red-500">*</span>
                            </label>
                            <br />
                            <>
                                <button
                                    className=" rounded py-2 px-3"
                                    onClick={toggleContent} style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                // onClick={(e) => {
                                //   e.preventDefault();
                                //   setModalShow(true);
                                // }}
                                >
                                    Select Products
                                </button>
                                {/* <EventProductSelectModal
                  show={modalShow}
                  onHide={(e) => {
                    e.preventDefault();
                    setModalShow(false);
                  }}
                  data={productData}
                  productArray={productArray}
                  setProductArray={setProductArray}
                /> */}
                            </>
                        </div>
                        <br />
                        <div>
                            <label className="pb-2 font-[500]">
                                Event Start Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="price"
                                id="start-date"
                                value={startDate ? startDate.toISOString().slice(0, 10) : ''}
                                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                onChange={handleStartDateChange}
                                min={today}
                                placeholder="Enter your event product stock..."
                            />
                        </div>
                        <br />
                        <div>
                            <label className="pb-2 font-[500]">
                                Event End Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="price"
                                id="start-date"
                                value={endDate ? endDate.toISOString().slice(0, 10) : ''}
                                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                onChange={handleEndDateChange}
                                min={minEndDate}
                                placeholder="Enter your event product stock..."
                            />
                        </div>
                        <br />
                        <div>
                            <label className="pb-2 font-[500]">
                                Upload Image <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="file"
                                name=""
                                id="upload"
                                className="hidden"
                                // multiple
                                onChange={handleImageChange}
                            />
                            <div className="w-full flex items-center flex-wrap">
                                <label htmlFor="upload">
                                    <AiOutlinePlusCircle
                                        size={30}
                                        className="mt-3"
                                        color="#555"
                                    />
                                </label>
                                {images &&
                                    images.map((i) => (
                                        <img
                                            src={i}
                                            key={i}
                                            alt=""
                                            className="h-[120px] w-[120px] object-cover m-2"
                                        />
                                    ))}
                            </div>
                            <br />
                            <div className='flex justify-between'>
                                <input
                                    type="submit"
                                    value="Create"
                                    className="rounded px-4 bg-green-500 py-2 text-white"
                                />
                                <button onClick={handleDraftSubmit} className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>Save As Draft</button>
                            </div>
                        </div>
                    </form>

                    <br />
                    {showContent && <CreateEventTable
                        data={productData}
                        productArray={productArray}
                        setProductArray={setProductArray}
                        styles={styles}
                        activeError={activeError}
                    />}
                </div>
            )}
        </>
    );
};

export default CreateEvent;
