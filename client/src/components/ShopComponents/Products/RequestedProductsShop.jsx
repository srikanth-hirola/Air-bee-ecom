/* eslint-disable no-useless-concat */
import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyleConfig } from '../../../utils/StyleConfig';
import { deleteProduct, getAllProductsShop } from '../../../redux/actions/product';
import toast from 'react-hot-toast';
import { server } from '../../../server';
import { Button } from '@mui/material';
import Loader from '../../../utils/Loader';
import { DataGrid } from '@mui/x-data-grid';


const RequestedProductsShop = ({ active }) => {
    const { products, isLoading } = useSelector((state) => state.products);
    const { seller } = useSelector((state) => state.seller);

    // const [active, setActive] = useState(1);

    const styles = StyleConfig();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsShop(seller._id));
    }, [dispatch, seller._id]);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
            .then((result) => {
                toast.success('Product Deleted Successfully');
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
            .catch((e) => {
                toast.error('Error accored');
            });
    };

    const handleResend = async (id) => {
        await axios
            .put(`${server}/product/shop/resend/${id}`)
            .then(async (result) => {
                if (result.data.Status === 'Success') {
                    await toast.success('Request Sent Successfully');
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const columns = [
        // { field: 'id', headerName: 'Product Id', minWidth: 150, flex: 0.7 },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 180,
            flex: 1.4,
        },
        {
            field: 'price',
            headerName: 'Price',
            minWidth: 100,
            flex: 0.6,
        },
        {
            field: 'Stock',
            headerName: 'Stock',
            type: 'number',
            minWidth: 80,
            flex: 0.5,
        },

        {
            field: 'sold',
            headerName: 'Sold out',
            type: 'number',
            minWidth: 130,
            flex: 0.6,
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
            field: 'Status',
            headerName: 'Status',
            type: 'number',
            minWidth: 130,
            flex: 0.6,
        },
        // {
        //   field: '',
        //   flex: 1,
        //   minWidth: 150,
        //   headerName: 'Edit Shop',
        //   type: 'number',
        //   sortable: false,
        //   renderCell: (params) => {
        //     return (
        //       <>
        //         <Link to={`/product/edit/${params.id}`}>
        //           <Button>Edit</Button>
        //         </Link>
        //       </>
        //     );
        //   },
        // },
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
                        <Link to={`/product/edit/${params.id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </>
                );
            },
        },
        {
            field: 'Delete',
            flex: 0.8,
            minWidth: 120,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Button onClick={() => handleDelete(params.id)}>
                            <AiOutlineDelete size={20} />
                        </Button>
                    </>
                );
            },
        },
    ];

    const columns3 = [
        // { field: 'id', headerName: 'Product Id', minWidth: 150, flex: 0.7 },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 180,
            flex: 1.4,
        },
        {
            field: 'price',
            headerName: 'Price',
            minWidth: 100,
            flex: 0.6,
        },
        {
            field: 'Stock',
            headerName: 'Stock',
            type: 'number',
            minWidth: 80,
            flex: 0.5,
        },

        // {
        //   field: 'sold',
        //   headerName: 'Sold out',
        //   type: 'number',
        //   minWidth: 130,
        //   flex: 0.6,
        // },
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
                        <Link to={`/product/${params?.slug}`}>
                            <Button>
                                <AiOutlineEye size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
        {
            field: 'Status',
            headerName: 'Status',
            type: 'number',
            minWidth: 130,
            flex: 0.6,
        },
        // {
        //   field: '',
        //   flex: 1,
        //   minWidth: 150,
        //   headerName: 'Edit Shop',
        //   type: 'number',
        //   sortable: false,
        //   renderCell: (params) => {
        //     return (
        //       <>
        //         <Link to={`/product/edit/${params.id}`}>
        //           <Button>Edit</Button>
        //         </Link>
        //       </>
        //     );
        //   },
        // },
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
                        <Link to={`/product/edit/${params.id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </>
                );
            },
        },
        {
            field: '',
            flex: 0.8,
            minWidth: 120,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Button onClick={() => handleResend(params.id)}>Resend</Button>
                    </>
                );
            },
        },
        {
            field: 'Delete',
            flex: 0.8,
            minWidth: 120,
            headerName: '',
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Button onClick={() => handleDelete(params.id)}>
                            <AiOutlineDelete size={20} />
                        </Button>
                    </>
                );
            },
        },
    ];

    const row1 = [];
    const row2 = [];
    const row3 = [];
    const row4 = [];

    products &&
        products.forEach((item) => {
            if (!item.draft) {
                row1.push({
                    id: item._id,
                    name: item.name,
                    slug: item?.slug,
                    price: `${styles?.currency?.Symbol}` + `${item.showInputs ? item.colorInputs[0].discountPrice : item.discountPrice}`,
                    Stock: item.stock,
                    sold: item?.sold_out,
                    Status: item.approved
                        ? 'Approved'
                        : item.rejected
                            ? 'Rejected'
                            : 'Pending',
                });
            }

        });

    products &&
        products.forEach((item) => {
            if (item.approved) {
                row2.push({
                    id: item._id,
                    name: item.name,
                    slug: item?.slug,
                    price: `${styles?.currency?.Symbol} ` + `${item.showInputs ? item.colorInputs[0].discountPrice : item.discountPrice}`,
                    Stock: item.stock,
                    sold: item?.sold_out,
                    Status: 'Approved',
                });
            }
        });

    products &&
        products.forEach((item) => {
            if (item.rejected) {
                row3.push({
                    id: item._id,
                    name: item.name,
                    price: `${styles?.currency?.Symbol} ` + `${item.showInputs ? item.colorInputs[0].discountPrice : item.discountPrice}`,
                    Stock: item.stock,
                    // sold: item?.sold_out,
                    Status: 'Rejected',
                });
            }
        });

    products &&
        products.forEach((item) => {
            if (
                item.rejected === false &&
                item.approved === false &&
                item.draft === false
            ) {
                row4.push({
                    id: item._id,
                    name: item.name,
                    price: `${styles?.currency?.Symbol} ` + `${item.showInputs ? item.colorInputs[0].discountPrice : item.discountPrice}`,
                    Stock: item.stock,
                    sold: item?.sold_out,
                    Status: 'Pending',
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
                            {/* <div className="flex items-center" onClick={() => setActive(1)}>
                <h5
                  className={`font-[600] text-[20px] ${
                    active === 1 ? 'text-red-500' : 'text-[#333]'
                  } cursor-pointer pr-[20px]`}
                >
                  All Products
                </h5>
              </div>
              <div className="flex items-center" onClick={() => setActive(2)}>
                <h5
                  className={`font-[600] text-[20px] ${
                    active === 2 ? 'text-red-500' : 'text-[#333]'
                  } cursor-pointer pr-[20px]`}
                >
                  Approved Products
                </h5>
              </div>

              <div className="flex items-center" onClick={() => setActive(3)}>
                <h5
                  className={`font-[600] text-[20px] ${
                    active === 3 ? 'text-red-500' : 'text-[#333]'
                  } cursor-pointer pr-[20px]`}
                >
                  Rejected Products
                </h5>
              </div>

              <div className="flex items-center" onClick={() => setActive(4)}>
                <h5
                  className={`font-[600] text-[20px] ${
                    active === 4 ? 'text-red-500' : 'text-[#333]'
                  } cursor-pointer pr-[20px]`}
                >
                  Pending Products
                </h5>
              </div> */}
                        </div>
                    </div>

                    {active === 1 && (
                        <>
                            {/* <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0"> */}
                            <DataGrid
                                rows={row1}
                                columns={columns}
                                pageSize={10}
                                disableSelectionOnClick
                                autoHeight
                            />
                        </>
                    )}

                    {active === 2 && (
                        <>
                            {' '}
                            <DataGrid
                                rows={row2}
                                columns={columns}
                                pageSize={10}
                                disableSelectionOnClick
                                autoHeight
                            />
                        </>
                    )}

                    {active === 3 && (
                        <>
                            {/* <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0"> */}
                            <DataGrid
                                rows={row3}
                                columns={columns3}
                                pageSize={10}
                                disableSelectionOnClick
                                autoHeight
                            />
                        </>
                    )}

                    {active === 4 && (
                        <>
                            {/* <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0"> */}
                            <DataGrid
                                rows={row4}
                                columns={columns}
                                pageSize={10}
                                disableSelectionOnClick
                                autoHeight
                            />
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default RequestedProductsShop;
