import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { payPalClientId, razorPayKey, server } from '../../server';
import toast from 'react-hot-toast';
import Loader from '../../utils/Loader';
import { StyleConfig } from '../../utils/StyleConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PaymentBill from './PaymentBill';
import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';

const Payment = () => {
    const [orderData, setOrderData] = useState([]);
    const [open, setOpen] = useState(false);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const { ConvertCurrency } = useGetCurrencyConversion()

    const [select, setSelect] = useState(1);

    const [loading, setLoading] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);

    const styles = StyleConfig();

    useEffect(() => {
        const orderData = JSON.parse(localStorage.getItem('latestOrder'));
        if (orderData) {
            setOrderData(orderData);
        } else {
            navigate('/products?search=allproducts')
        }
    }, [navigate]);

    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: 'New Order',
                        amount: {
                            currency_code: `${styles.currency.code}`,
                            value: ConvertCurrency(orderData?.totalPrice),
                        },

                    },
                ],
                // not needed if a shipping address is actually needed
                application_context: {
                    shipping_preference: 'NO_SHIPPING',
                },
            })
            .then((orderID) => {
                return orderID;
            });
    };


    const handleChange = async (e, num) => {
        e.preventDefault();
        setSelect(num);

        let finalOrderData = { ...orderData }

        if (num === 3) {
            finalOrderData.cod = 1;
        } else {
            finalOrderData.cod = 0;
        }

        try {
            setLoading(true)
            const { data } = await axios.post(
                `${server}/shipping/get-shippingCharge`,
                finalOrderData
            );
            const response = data.responseData;
            setOrderData(response)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const order = {
        cart: orderData?.cart,
        cod: orderData?.cod,
        sellerCart: orderData?.sellerCart,
        shippingAddress: orderData?.shippingAddress,
        BillingAddress: orderData?.BillingAddress,
        shipping_is_billing: orderData?.shipping_is_billing,
        user: user && user,
        totalPrice: orderData?.totalPrice,
        shipping: orderData?.shipping,
        discountPrice: orderData?.discountPrice,
        subTotalPrice: orderData?.subTotalPrice
    };

    const onApprove = async (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;

            let paymentInfo = payer;

            if (paymentInfo !== undefined) {
                paypalPaymentHandler(paymentInfo);
            }
        });
    };

    const paypalPaymentHandler = async (paymentInfo) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        order.paymentInfo = {
            id: paymentInfo.payer_id,
            status: 'succeeded',
            type: 'Paypal',
        };


        await axios
            .post(`${server}/order/create-order`, order, config)
            .then((res) => {
                setOpen(false);
                navigate('/order/success');
                toast.success('Order successful!');
                localStorage.setItem('cartItems', JSON.stringify([]));
                localStorage.setItem('latestOrder', JSON.stringify([]));
                window.location.reload();
            });
    };

    const paymentData = {
        amount: Math.round(ConvertCurrency(orderData?.totalPrice * 100)),
    };

    const paymentHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            setBtnLoading(true)
            const { data } = await axios.post(
                `${server}/payment/process`,
                paymentData,
                config
            );

            const client_secret = data.client_secret;

            if (!stripe || !elements) return;
            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                },
            });

            if (result.error) {
                toast.error(result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    order.paymentInfo = {
                        id: result.paymentIntent.id,
                        status: result.paymentIntent.status,
                        type: 'Credit/Debit Card',
                    };

                    await axios
                        .post(`${server}/order/create-order`, order, config)
                        .then((res) => {
                            setOpen(false);
                            navigate('/order/success');
                            toast.success('Order successful!');
                            localStorage.setItem('cartItems', JSON.stringify([]));
                            localStorage.setItem('latestOrder', JSON.stringify([]));
                            window.location.reload();
                        });
                }
            }
            setBtnLoading(false)
        } catch (error) {
            toast.error(error);
            setBtnLoading(false)
        }
    };

    const handleRazorPayProcess = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            setBtnLoading(true)

            const { data } = await axios.post(
                `${server}/payment/razorpay`,
                paymentData,
                config
            );
            const { id, amount, currency } = data;

            const options = {
                key: razorPayKey,
                amount,
                currency,
                name: 'Hirola Infotech Solutions',
                description: 'Payment for a product',
                order_id: id,
                handler: function (response) {
                    axios
                        .post(`${server}/payment/razorpay-verification`, {
                            response,
                            amount,
                        })
                        .then((res) => {
                            if (res.data.Status === 'Success') {
                                const config = {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                };

                                order.paymentInfo = {
                                    id: response.razorpay_payment_id,
                                    status: 'succeeded',
                                    type: 'RazorPay',
                                };

                                axios
                                    .post(`${server}/order/create-order`, order, config)
                                    .then((res) => {
                                        setOpen(false);
                                        navigate('/order/success');
                                        toast.success('Order successful!');
                                        localStorage.setItem('cartItems', JSON.stringify([]));
                                        localStorage.setItem('latestOrder', JSON.stringify([]));
                                        window.location.reload();
                                    });
                            } else {
                                alert('Payment Failed');
                            }
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                },
                prefill: {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    contact: '1234567890',
                },
                notes: {
                    address: '123, Main Street',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const rzp = new window.Razorpay(options);

            rzp.open();
            setBtnLoading(false)
        } catch (e) {
            setBtnLoading(false)
            toast.error(e);
        }
    };

    const cashOnDeliveryHandler = async (e) => {
        e.preventDefault();
        setBtnLoading(true)
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        order.paymentInfo = {
            type: 'Cash On Delivery',
        };


        await axios
            .post(`${server}/order/create-order`, order, config)
            .then((res) => {
                setOpen(false);
                navigate('/order/success');
                toast.success('Order successful!');
                localStorage.setItem('cartItems', JSON.stringify([]));
                localStorage.setItem('latestOrder', JSON.stringify([]));
                window.location.reload();
            })
            .catch((e) => {
                toast.error(e);
            })
            .finally(() => {
                setBtnLoading(false)
            })
    };

    return (<>
        {loading ? <Loader /> :
            <div className="w-full flex flex-col items-center py-8">
                <div className="w-[90%] 1000px:w-[70%] flex gap-6 800px:flex">
                    <div className="w-[60%] 800px:w-[65%]">
                        <PaymentInfo
                            user={user}
                            open={open}
                            setOpen={setOpen}
                            onApprove={onApprove}
                            createOrder={createOrder}
                            paymentHandler={paymentHandler}
                            cashOnDeliveryHandler={cashOnDeliveryHandler}
                            handleRazorPayProcess={handleRazorPayProcess}
                            select={select}
                            handleChange={handleChange}
                            styles={styles}
                            btnLoading={btnLoading}
                        />
                    </div>
                    <div className="w-[38%] 800px:w-[35%] 800px:mt-0 mt-8">
                        <PaymentBill orderData={orderData} />
                        {/* <CartData orderData={orderData} styles={styles} /> */}
                    </div>
                </div>
            </div>}

    </>
    );
};

const PaymentInfo = ({
    user,
    open,
    setOpen,
    onApprove,
    createOrder,
    paymentHandler,
    cashOnDeliveryHandler,
    handleRazorPayProcess,
    select,
    handleChange,
    styles, btnLoading
}) => {

    const currObj = styles?.currency?.code;

    // const payemntMethodGet = currObj === "INR" ? styles?.paymentMethods?.INR : styles?.paymentMethods?.USD;
    const payemntMethodGet = CurrencyType(currObj);

    function CurrencyType(currObj) {
        if (currObj === "INR") {
            return styles?.paymentMethods?.INR
        } else if (currObj === "USD") {
            return styles?.paymentMethods?.USD
        } else {
            return styles?.paymentMethods?.EUR
        }
    }


    return (
        <>{payemntMethodGet?.length > 0 &&
            <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
                {/* select buttons */}
                {payemntMethodGet?.includes("Stripe") && <div>
                    <div className="flex w-full pb-5 border-b mb-2">
                        <div
                            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                            onClick={(e) => handleChange(e, 1)}
                        >
                            {select === 1 ? (
                                <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                            ) : null}
                        </div>
                        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                            Pay with Debit/credit card
                        </h4>
                    </div>

                    {/* pay with card */}
                    {select === 1 ? (
                        <div className="w-full flex border-b">
                            <form className="w-full" onSubmit={paymentHandler}>
                                <div className="w-full flex pb-3">
                                    <div className="w-[50%]">
                                        <label className="block pb-2">Name On Card</label>
                                        <input
                                            required
                                            placeholder={user && user.name}
                                            className={`${styles.input} !w-[95%] text-[#444]`}
                                            value={user && user.name}
                                        />
                                    </div>
                                    <div className="w-[50%]">
                                        <label className="block pb-2">Exp Date</label>
                                        <CardExpiryElement
                                            className={`${styles.input}`}
                                            options={{
                                                style: {
                                                    base: {
                                                        fontSize: '19px',
                                                        lineHeight: 1.5,
                                                        color: '#444',
                                                    },
                                                    empty: {
                                                        color: '#3a120a',
                                                        backgroundColor: 'transparent',
                                                        '::placeholder': {
                                                            color: '#444',
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex pb-3">
                                    <div className="w-[50%]">
                                        <label className="block pb-2">Card Number</label>
                                        <CardNumberElement
                                            className={`${styles.input} !h-[35px] !w-[95%]`}
                                            options={{
                                                style: {
                                                    base: {
                                                        fontSize: '19px',
                                                        lineHeight: 1.5,
                                                        color: '#444',
                                                    },
                                                    empty: {
                                                        color: '#3a120a',
                                                        backgroundColor: 'transparent',
                                                        '::placeholder': {
                                                            color: '#444',
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="w-[50%]">
                                        <label className="block pb-2">CVV</label>
                                        <CardCvcElement
                                            className={`${styles.input} !h-[35px]`}
                                            options={{
                                                style: {
                                                    base: {
                                                        fontSize: '19px',
                                                        lineHeight: 1.5,
                                                        color: '#444',
                                                    },
                                                    empty: {
                                                        color: '#3a120a',
                                                        backgroundColor: 'transparent',
                                                        '::placeholder': {
                                                            color: '#444',
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                                {btnLoading
                                    ?
                                    <button
                                        className={`px-4 flex items-center mb-2 h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600] bg-[#fa8232]`}
                                        style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor?.toggleBtnFont ? styles?.fontColor?.fontColorPicker : styles?.fontColor?.fontColor }}
                                    >Loading...</button> :
                                    <button
                                        type="submit"
                                        className={`px-4 flex items-center mb-2 h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600] bg-[#fa8232]`}
                                        style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor?.toggleBtnFont ? styles?.fontColor?.fontColorPicker : styles?.fontColor?.fontColor }}
                                    >Submit</button>
                                }
                            </form>
                        </div>
                    ) : null}
                </div>}


                <br />
                {/* paypal payment */}
                {payemntMethodGet.includes("PayPal") && <div>
                    <div className="flex w-full pb-3 mb-2">
                        <div
                            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                            onClick={(e) => handleChange(e, 2)}
                        >
                            {select === 2 ? (
                                <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                            ) : null}
                        </div>
                        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                            Pay with Paypal
                        </h4>
                    </div>

                    {/* pay with payement */}
                    {select === 2 ? (
                        <div className="w-full flex border-b">
                            <div
                                className={`px-4 flex payment-btn bg-[#fa8232] items-center mb-2 h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
                                onClick={() => !btnLoading && setOpen(true)}
                            >
                                {btnLoading ? "Loading..." : "Pay Now"}
                            </div>
                            {open && (
                                <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
                                    <div className="w-full 800px:w-[40%] h-screen 800px:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
                                        <div className="w-full flex justify-end p-3">
                                            <FontAwesomeIcon icon={faXmark}
                                                className="cursor-pointer absolute top-3 right-3"
                                                onClick={() => setOpen(false)} />
                                        </div>
                                        <PayPalScriptProvider
                                            options={{
                                                'client-id': `${payPalClientId}`, currency: styles.currency.code
                                            }}
                                        >
                                            <PayPalButtons
                                                style={{ layout: 'vertical' }}
                                                onApprove={onApprove}
                                                createOrder={createOrder}
                                            />
                                        </PayPalScriptProvider>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>}

                <br />
                {/* paypal payment */}

                {payemntMethodGet.includes("RazorPay") && <div>
                    <div className="flex w-full pb-3 mb-2">
                        <div
                            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                            onClick={(e) => handleChange(e, 4)}
                        >
                            {select === 4 ? (
                                <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                            ) : null}
                        </div>
                        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                            Pay with RazorPay
                        </h4>
                    </div>

                    {/* pay with payement */}
                    {select === 4 ? (
                        <div className="w-full flex border-b">
                            <div
                                className={`px-4 flex items-center mb-2 h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600] bg-[#fa8232]`}
                                onClick={btnLoading && handleRazorPayProcess} style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor?.toggleBtnFont ? styles?.fontColor?.fontColorPicker : styles?.fontColor?.fontColor }}
                            >
                                {btnLoading ? "Loading..." : "Pay Now"}
                            </div>
                            {open && (
                                <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
                                    <div className="w-full 800px:w-[40%] h-screen 800px:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
                                        <div className="w-full flex justify-end p-3">

                                            <FontAwesomeIcon icon={faXmark}
                                                className="cursor-pointer absolute top-3 right-3"
                                                onClick={() => setOpen(false)} />
                                        </div>
                                        <PayPalScriptProvider
                                            options={{
                                                'client-id': `${payPalClientId}`,
                                            }}
                                        >
                                            <PayPalButtons
                                                style={{ layout: 'vertical' }}
                                                onApprove={onApprove}
                                                createOrder={createOrder}
                                            />
                                        </PayPalScriptProvider>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>}

                <br />
                {/* cash on delivery */}
                {payemntMethodGet.includes("COD") && <div>
                    <div className="flex w-full pb-3  mb-2">
                        <div
                            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                            onClick={(e) => handleChange(e, 3)}
                        >
                            {select === 3 ? (
                                <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                            ) : null}
                        </div>
                        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                            Cash on Delivery
                        </h4>
                    </div>

                    {/* cash on delivery */}
                    {select === 3 ? (
                        <div className="w-full flex">
                            <form className="w-full" onSubmit={cashOnDeliveryHandler}>
                                {btnLoading
                                    ?
                                    <button
                                        className={`px-4 flex items-center mb-2 h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600] bg-[#fa8232]`}
                                        style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor?.toggleBtnFont ? styles?.fontColor?.fontColorPicker : styles?.fontColor?.fontColor }}
                                    >Loading...</button> :
                                    <button
                                        type="submit"
                                        className={`px-4 flex items-center mb-2 h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600] bg-[#fa8232]`}
                                        style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor?.toggleBtnFont ? styles?.fontColor?.fontColorPicker : styles?.fontColor?.fontColor }}
                                    >Submit</button>
                                }
                            </form>
                        </div>
                    ) : null}
                </div>}
            </div>
        }
        </>
    );
};



export default Payment;
