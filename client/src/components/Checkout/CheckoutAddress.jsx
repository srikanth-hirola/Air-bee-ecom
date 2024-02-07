import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StyleConfig } from '../../utils/StyleConfig';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { server } from '../../server';
import Loader from '../../utils/Loader';
import { Country, State, City } from 'country-state-city';
import { updateCart } from '../../redux/actions/cart';
import CartBill from '../cart/CartBill';
import CheckoutpageCart from './CheckoutpageCart';

const CheckoutAddress = ({ showNext, setShowNext }) => {
    const { user } = useSelector((state) => state.user);
    const { cart } = useSelector((state) => state.cart);
    const { buyNow } = useSelector((state) => state.cart);
    const [cartData, setCartData] = useState(cart);


    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        let finalData = cart;
        const params = {};
        for (const [key, value] of search.entries()) {
            params[key] = value;
            if (key === "type" && params[key] === "buynow") {
                finalData = buyNow
            }
        }
        setCartData(finalData)
        updatedCart(finalData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, buyNow])




    const styles = StyleConfig();

    //BILLING
    const [country, setCountry] = useState();
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [userInfo, setUserInfo] = useState(false);
    const [billingaddress1, setBillingAddress1] = useState('');
    const [billingaddress2, setBillingAddress2] = useState('');
    const [billingzipCode, setBillingZipCode] = useState(null);
    const [billinguserName, setBillingUserName] = useState(user?.name);
    const [billinguserEmail, setBillingUserEmail] = useState(user?.email);
    const [billinguserphonenumber, setBillinguserPhoneNumber] = useState(null);

    //SHIPPING
    const [countryshipping, setCountryshipping] = useState('');
    const [stateshipping, setStateshipping] = useState('');
    const [cityshipping, setCityshipping] = useState('');
    const [shippingaddress1, setShippingAddress1] = useState('');
    const [shippingaddress2, setShippingAddress2] = useState('');
    const [shippingzipCode, setShippingZipCode] = useState(null);
    const [shippinguserName, setShippingUserName] = useState('');
    const [shippinguserEmail, setShippingUserEmail] = useState('');
    const [shippinguserphonenumber, setShippinguserPhoneNumber] = useState(null);

    const [couponCode, setCouponCode] = useState('');
    const [couponCodeData, setCouponCodeData] = useState(null);
    const [discountPrice, setDiscountPrice] = useState(null);
    const navigate = useNavigate();

    const [newCountry, setNewCountry] = useState('');
    const [newState, setNewState] = useState('');
    const [newCity, setNewCity] = useState('');

    const [newCountryshipping, setNewCountryshipping] = useState('');
    const [newStateshipping, setNewStateshipping] = useState('');
    const [newCityshipping, setNewCityshipping] = useState('');

    const [multipleSellers] = useState(false);
    const [initialOrderData, setInitialOrderData] = useState();

    const [showadress, setshowadress] = useState(false);
    const handlecheckboxChange = (event) => {
        setshowadress(!showadress);
    };
    const [showCoupan, setCoupan] = useState(true);

    const [totalPriceFinal, setTotalPriceFinal] = useState(0);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validationFun = (BillingAddress, ShippingAddress, showadress) => {
        if (!showadress) {
            if (
                billinguserName === '' ||
                shippinguserName === '' ||
                billinguserEmail === '' ||
                shippinguserEmail === '' ||
                billingaddress1 === '' ||
                billingaddress2 === '' ||
                shippingaddress1 === '' ||
                shippingaddress2 === '' ||
                billingzipCode === null ||
                shippingzipCode === null ||
                billinguserphonenumber === null ||
                shippinguserphonenumber === null ||
                newCountry === '' ||
                newState === '' ||
                newCity === '' ||
                newCountryshipping === '' ||
                newStateshipping === '' ||
                newCityshipping === ''
            ) {
                toast.error('All Filed are required!');
                return false;
            } else {
                return true;
            }
        } else {
            if (
                billinguserName === '' ||
                billinguserEmail === '' ||
                billingaddress1 === '' ||
                billingaddress2 === '' ||
                billingzipCode === null ||
                billinguserphonenumber === null ||
                newCountry === '' ||
                newState === '' ||
                newCity === ''
            ) {
                toast.error('Please choose your Billing address!');
                return false;
            } else {
                return true;
            }
        }
    };

    const handleNext = () => {
        const BillingAddress = {
            billinguserName,
            billinguserEmail,
            billinguserphonenumber,
            billingaddress1,
            billingaddress2,
            billingzipCode,
            newCountry,
            newState,
            newCity,
        };

        const ShippingAddress = {
            shippinguserName,
            shippinguserEmail,
            shippinguserphonenumber,
            shippingaddress1,
            shippingaddress2,
            shippingzipCode,
            newCountryshipping,
            newStateshipping,
            newCityshipping,
        };
        const val = validationFun(BillingAddress, ShippingAddress, showadress);
        if (val) {
            const orderData = {
                cart: cartData,
                sellerCart,
                totalPriceFinal,
                subTotalPrice,
                shipping,
                discountPrice,
                shipping_is_billing: showadress,
                BillingAddress,
                shippingAddress: ShippingAddress,
                user,
                cod: 0,
            };
            setInitialOrderData(orderData);
            setShowNext(true);
        }
    };



    const subTotalPrice = cartData?.reduce((acc, item) => {
        if (item.active) {
            return acc + item.qty * item.selectedColor.eventPrice;
        } else {
            return acc + item.qty * item.selectedColor.discountPrice;
        }
    }, 0);

    // this is shipping cost variable
    const shipping = subTotalPrice * 0.1;

    const [sellerCart, setSellerCart] = useState();

    const updatedCart = (finalData) => {
        let sellers = [];
        finalData?.forEach((product) => {
            let sellerID = product.shopId;

            const found = sellers.find((val) => val.sellerID === sellerID);
            if (!found) {
                sellers.push({
                    sellerID: sellerID,
                    products: [product],
                    subTotalPrice: Number(product.finalPrice),
                    totalPrice: null,
                    shipping: null,
                    weight: Number(product.packageWeight),
                    length: Number(product.packageLength),
                    height: Number(product.packageHeight),
                    breadth: Number(product.packageWidth),
                });
            } else {
                const sellerIndex = sellers.findIndex(
                    (seller) => seller.sellerID === sellerID
                );

                const totalweight =
                    Number(sellers[sellerIndex].weight) + Number(product.packageWeight);
                const totalLength =
                    Number(sellers[sellerIndex].length) + Number(product.packageLength);
                const totalHeight =
                    Number(sellers[sellerIndex].height) + Number(product.packageHeight);
                const totalBreadth =
                    Number(sellers[sellerIndex].breadth) + Number(product.packageWidth);

                const totalSubTotal =
                    Number(sellers[sellerIndex].subTotalPrice) +
                    Number(product.finalPrice);

                sellers[sellerIndex].products.push(product);
                sellers[sellerIndex].weight = totalweight;
                sellers[sellerIndex].length = totalLength;
                sellers[sellerIndex].height = totalHeight;
                sellers[sellerIndex].breadth = totalBreadth;

                sellers[sellerIndex].subTotalPrice = totalSubTotal;
            }
        });

        if (sellers.length > 1) {
            setCoupan(false)
        } else {
            setCoupan(true)
        }

        if (sellers.length > 0) {
            setSellerCart(sellers);
        } else {
            navigate("/products?search=allproducts")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    const handleSubmit = async (e, totalPrice) => {
        e.preventDefault();
        const name = couponCode;

        await axios.get(`${server}/coupon/get-coupon-value/${name}`).then((res) => {
            const shopId = res.data.couponCode?.shopId;
            const couponCodeValue = res.data.couponCode?.value;
            if (res.data.couponCode !== null) {
                const isCouponValid =
                    cartData && cartData.filter((item) => item.shopId === shopId);

                if (isCouponValid.length === 0) {
                    toast.error('Coupon code is not valid for this shop');
                    setCouponCode('');
                } else {
                    // const eligiblePrice = isCouponValid.reduce(
                    //   (acc, item) => acc + item.qty * item.discountPrice,
                    //   0
                    // );
                    const eligiblePrice = totalPrice;

                    if (eligiblePrice <= res.data.couponCode?.maxAmount && eligiblePrice >= res.data.couponCode?.minAmount) {
                        const discountPrice = (eligiblePrice * couponCodeValue) / 100;

                        setDiscountPrice(discountPrice.toFixed(2));
                        setCouponCodeData(res.data.couponCode);
                        setCouponCode('');
                        setTotalPriceFinal(Number(totalPrice) - Number(discountPrice))
                    } else {
                        toast.error('Coupon is not applicable!')
                    }


                }
            }
            if (res.data.couponCode === null) {
                toast.error("Coupon code doesn't exists!");
                setCouponCode('');
            }
        });
    };


    const handleCoupanFinal = (total) => {
        const discountPercentenge = couponCodeData ? discountPrice : '';

        const totalPriceCoupan = couponCodeData
            ? (total - discountPercentenge).toFixed(2)
            : (total);

        return totalPriceCoupan
    }


    const discountPercentenge = couponCodeData ? discountPrice : '';



    return (
        <div className="col-md-12 col-lg-12">
            {!showNext && (
                <>
                    <div className="w-full 800px:w-[100%]">
                        <ShippingInfo
                            //------ billingaddress
                            user={user}
                            handlecheckboxChange={handlecheckboxChange}
                            country={country}
                            setCountry={setCountry}
                            state={state}
                            setState={setState}
                            city={city}
                            setCity={setCity}
                            userInfo={userInfo}
                            setUserInfo={setUserInfo}
                            billingaddress1={billingaddress1}
                            setBillingAddress1={setBillingAddress1}
                            billingaddress2={billingaddress2}
                            setBillingAddress2={setBillingAddress2}
                            billingzipCode={billingzipCode}
                            setBillingZipCode={setBillingZipCode}
                            showadress={showadress}
                            setshowadress={setshowadress}
                            billinguserName={billinguserName}
                            setBillingUserName={setBillingUserName}
                            billinguserEmail={billinguserEmail}
                            setBillingUserEmail={setBillingUserEmail}
                            billinguserphonenumber={billinguserphonenumber}
                            setBillinguserPhoneNumber={setBillinguserPhoneNumber}
                            newCountry={newCountry}
                            setNewCountry={setNewCountry}
                            newState={newState}
                            setNewState={setNewState}
                            newCity={newCity}
                            setNewCity={setNewCity}
                            //------ shippingaddress
                            countryshipping={countryshipping}
                            setCountryshipping={setCountryshipping}
                            stateshipping={stateshipping}
                            setStateshipping={setStateshipping}
                            cityshipping={cityshipping}
                            setCityshipping={setCityshipping}
                            shippinguserName={shippinguserName}
                            setShippingUserName={setShippingUserName}
                            shippinguserEmail={shippinguserEmail}
                            setShippingUserEmail={setShippingUserEmail}
                            shippingaddress1={shippingaddress1}
                            setShippingAddress1={setShippingAddress1}
                            shippingaddress2={shippingaddress2}
                            setShippingAddress2={setShippingAddress2}
                            shippingzipCode={shippingzipCode}
                            setShippingZipCode={setShippingZipCode}
                            shippinguserphonenumber={shippinguserphonenumber}
                            setShippinguserPhoneNumber={setShippinguserPhoneNumber}
                            newCountryshipping={newCountryshipping}
                            setNewCountryshipping={setNewCountryshipping}
                            newStateshipping={newStateshipping}
                            setNewStateshipping={setNewStateshipping}
                            newCityshipping={newCityshipping}
                            setNewCityshipping={setNewCityshipping}
                            multipleSellers={multipleSellers}
                        />
                        <div className='Chcekout-Page-NextButton mt-6' onClick={handleNext}>
                            <button>Next</button>
                        </div>
                    </div>
                </>
            )}

            {showNext && (
                <CartDetailswithShipping
                    initialOrderData={initialOrderData}
                    handleSubmit={handleSubmit}
                    couponCode={couponCode}
                    setCouponCode={setCouponCode}
                    discountPercentenge={discountPercentenge}
                    showCoupan={showCoupan}
                    styles={styles}
                    handleCoupanFinal={handleCoupanFinal}
                    couponCodeData={couponCodeData}
                    totalPrice={totalPriceFinal}
                    setTotalPrice={setTotalPriceFinal}
                />
            )}

        </div>
    )
}

export default CheckoutAddress

const ShippingInfo = ({
    user,
    handlecheckboxChange,
    country,
    setCountry,
    state,
    setState,
    city,
    setCity,
    userInfo,
    setUserInfo,
    billingaddress1,
    setBillingAddress1,
    billingaddress2,
    setBillingAddress2,
    billingzipCode,
    setBillingZipCode,
    showadress,
    setshowadress,
    billinguserName,
    setBillingUserName,
    billinguserEmail,
    setBillingUserEmail,
    billinguserphonenumber,
    setBillinguserPhoneNumber,
    countryshipping,
    setCountryshipping,
    stateshipping,
    setStateshipping,
    cityshipping,
    setCityshipping,
    shippinguserName,
    setShippingUserName,
    shippinguserEmail,
    setShippingUserEmail,
    shippingaddress1,
    setShippingAddress1,
    shippingaddress2,
    setShippingAddress2,
    shippingzipCode,
    setShippingZipCode,
    shippinguserphonenumber,
    setShippinguserPhoneNumber,
    setNewCountry,
    setNewState,
    setNewCity,
    setNewCountryshipping,
    setNewStateshipping,
    setNewCityshipping,
}) => {
    const handleChangeCountry = (e) => {
        const { name, value } = e.target;
        if (name === 'country') {
            const found = Country.getAllCountries().find(
                (val) => val.isoCode === value
            );
            setCountry(value);
            setNewCountry(found.name);
        } else if (name === 'state') {
            const found = State.getStatesOfCountry(country).find(
                (val) => val.isoCode === value
            );
            setState(value);
            setNewState(found.name);
        } else {
            const found = City.getCitiesOfState(country, state).find(
                (val) => val.name === value
            );
            setCity(value);
            setNewCity(found.name);
        }
    };

    const handleChangeCountry1 = (e) => {
        const { name, value } = e.target;
        if (name === 'countryshipping') {
            const found = Country.getAllCountries().find(
                (val) => val.isoCode === value
            );
            setCountryshipping(value);
            setNewCountryshipping(found.name);
        } else if (name === 'stateshipping') {
            const found = State.getStatesOfCountry(countryshipping).find(
                (val) => val.isoCode === value
            );
            setStateshipping(value);
            setNewStateshipping(found.name);
        } else {
            const found = City.getCitiesOfState(countryshipping, stateshipping).find(
                (val) => val.name === value
            );
            setCityshipping(value);
            setNewCityshipping(found.name);
        }
    };

    const handleSavedAddress = (e, item) => {
        const country = Country.getAllCountries().find(
            (val) => val.isoCode === item.country
        );
        const state = State.getStatesOfCountry(item.country).find(
            (val) => val.isoCode === item.state
        );
        const city = City.getCitiesOfState(item.country, item.state).find(
            (val) => val.name === item.city
        );
        setNewCountry(country.name);
        setNewState(state.name);
        setNewCity(city.name);
        setBillingAddress1(item.billingaddress1)
        setBillingAddress2(item.billingaddress2)
        setBillinguserPhoneNumber(item.billinguserphonenumber)
        setBillingUserName(item?.billinguserName)
        setBillingUserEmail(item?.billinguserEmail)
        setShippingAddress1(item.shippingaddress1)
        setShippingAddress2(item.shippingaddress2)
        setBillingZipCode(item.billingzipCode)
        setShippingZipCode(item.shippingzipCode)
        setCountry(item.country)
        setState(item.state)
        setCity(item.city)
        setNewCountryshipping(item.country)
        setNewStateshipping(item.state)
        setNewCityshipping(item.city)
    }


    return (
        <>

            <h6
                className="text-[18px] text-[orange] cursor-pointer inline-block"
                onClick={() => { setUserInfo(!userInfo) }}
            >
                Choose From saved address
            </h6>
            {userInfo && (
                <div>
                    {user &&
                        user?.addresses.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className='Checkoutpage-Pickup-store'>
                                    <div className='Checkoutpage-Pickup-store-text1'>
                                        <h5>Pickup From Store</h5>
                                        <div className='Checkoutpage-standardRate-input-parent'>
                                            <input type="radio" value={item.addressType}
                                                onClick={(e) => handleSavedAddress(e, item)} />
                                            <p>{item.addressType}</p>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                </div>
            )}

            <div className='Checkoutpage-content-sub1'>
                <>
                    <br />
                    <h5>Billing Address</h5>
                    <hr />
                    <form action="">
                        {/* Full Name */}
                        <label htmlFor="Email Address">Full Name</label>
                        <input type="text"
                            value={billinguserName}
                            required
                            className={`form-control`}
                            onChange={(e) => setBillingUserName(e.target.value)} />
                        {/* first name */}

                        <label className='form-label' htmlFor="email">Email Address</label>
                        <input className='form-control' type="email"
                            value={billinguserEmail}
                            required onChange={(e) => setBillingUserEmail(e.target.value)} />

                        {/* last name */}
                        <label className='form-label' htmlFor="phone number">Phone Number</label>
                        <input className='form-control' type="number"
                            required
                            value={billinguserphonenumber}
                            onChange={(e) => setBillinguserPhoneNumber(e.target.value)} />

                        <label className='form-label' htmlFor="address">Full address</label>
                        <input className='form-control' type="address"
                            required
                            value={billingaddress1}
                            onChange={(e) => setBillingAddress1(e.target.value)}
                        />
                        {/* street address */}
                        <label className='form-label' htmlFor="landmark">Landmark</label>
                        <input className='form-control' type="address"
                            value={billingaddress2}
                            onChange={(e) => setBillingAddress2(e.target.value)}
                            required
                        />
                        <br />
                        {/* city */}
                        <label className='form-label' htmlFor="zip code">Zip Code</label>
                        <input className='form-control' type="number"
                            value={billingzipCode}
                            onChange={(e) => setBillingZipCode(e.target.value)}
                            required />
                        {/* country*/}
                        <label className='form-label' htmlFor="country">Country</label><br />
                        <select value={country}
                            name="country"
                            onChange={handleChangeCountry} id="Please, select a region, state or province">
                            <option value="" disabled selected>Please, select a country</option>
                            {Country &&
                                Country.getAllCountries().map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>

                        {/* state*/}
                        <label className='form-label' htmlFor="state">State</label><br />
                        <select
                            value={state}
                            name="state"
                            onChange={handleChangeCountry} id="Please, select a region, state or province">
                            <option value="" disabled selected>Please, select a state</option>
                            {State &&
                                State.getStatesOfCountry(country).map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>


                        {/* city*/}
                        <label className='form-label' htmlFor="city">City</label><br />
                        <select
                            value={city}
                            name="city"
                            onChange={handleChangeCountry} id="Please, select a region, state or province">
                            <option value="" disabled selected>Please, select a city</option>
                            {City &&
                                City.getCitiesOfState(country, state).map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </form>
                </>

                {/* -------------------------------------------------------------------------------------------------shipping Address  */}
                <div>
                    <div className="mx-2 ">
                        <div className="form-check form-check-inline flex items-center my-3 ">
                            <label htmlFor="" className='mt-0'>
                                Is the shipping address same as billing address ?
                            </label>
                            <input
                                type="checkbox"
                                checked={showadress ? true : false}
                                onChange={handlecheckboxChange}
                                className="form-check-input"
                            />
                        </div>
                    </div>
                </div>
                {!showadress && (
                    <>
                        <br />
                        <h5>Shipping Address</h5>
                        <hr />
                        <form action="">
                            {/* Full Name */}
                            <label htmlFor="Email Address">Full Name</label>
                            <input type="text"
                                value={shippinguserName}
                                onChange={(e) => setShippingUserName(e.target.value)}
                                required
                                className={`form-control`} />
                            {/* first name */}

                            <label className='form-label' htmlFor="email">Email Address</label>
                            <input className='form-control' type="email"
                                value={shippinguserEmail}
                                onChange={(e) => setShippingUserEmail(e.target.value)}
                                required />

                            {/* last name */}
                            <label className='form-label' htmlFor="phone number">Phone Number</label>
                            <input className='form-control' type="number"
                                required
                                value={shippinguserphonenumber}
                                onChange={(e) => setShippinguserPhoneNumber(e.target.value)} />

                            <label className='form-label' htmlFor="address">Full address</label>
                            <input className='form-control' type="address"
                                required
                                value={shippingaddress1}
                                onChange={(e) => setShippingAddress1(e.target.value)}
                            />
                            {/* street address */}
                            <label className='form-label' htmlFor="landmark">Landmark</label>
                            <input className='form-control'
                                type="address"
                                value={shippingaddress2}
                                onChange={(e) => setShippingAddress2(e.target.value)}
                                required
                            />
                            <br />
                            {/* city */}
                            <label className='form-label' htmlFor="zip code">Zip Code</label>
                            <input className='form-control' type="number"
                                value={shippingzipCode}
                                onChange={(e) => setShippingZipCode(e.target.value)}
                                required />
                            {/* country*/}
                            <label className='form-label' htmlFor="countryshipping">Country</label><br />
                            <select value={countryshipping}
                                name="countryshipping"
                                onChange={handleChangeCountry1} id="Please, select a region, state or province">
                                <option value="" disabled selected>Please, select a country</option>
                                {Country &&
                                    Country.getAllCountries().map((item) => (
                                        <option key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>

                            {/* state*/}
                            <label className='form-label' htmlFor="stateshipping">State</label><br />
                            <select
                                value={stateshipping}
                                name="stateshipping"
                                onChange={handleChangeCountry1} id="Please, select a region, state or province">
                                <option value="" disabled selected>Please, select a state</option>
                                {State &&
                                    State.getStatesOfCountry(country).map((item) => (
                                        <option key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>


                            {/* city*/}
                            <label className='form-label' htmlFor="cityshipping">City</label><br />
                            <select
                                value={cityshipping}
                                name="cityshipping"
                                onChange={handleChangeCountry1} id="Please, select a region, state or province">
                                <option value="" disabled selected>Please, select a city</option>
                                {City &&
                                    City.getCitiesOfState(country, state).map((item) => (
                                        <option key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </form>
                    </>
                )}
            </div>
        </>
    );
};


const CartDetailswithShipping = ({
    initialOrderData,
    handleSubmit,
    couponCode,
    setCouponCode,
    discountPercentenge,
    showCoupan,
    styles,
    handleCoupanFinal,
    couponCodeData,
    totalPrice,
    setTotalPrice
}) => {
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    const [couponRefTotal, setCoupanRefTotal] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.post(
                    `${server}/shipping/get-shippingCharge`,
                    initialOrderData
                );
                const response = data.responseData;
                setResponseData(response);
                let totalPricefound = (
                    response.subTotalPrice + response.shipping
                ).toFixed(2);
                const tot = await handleCoupanFinal(totalPricefound);
                const found = response.sellerCart.find((val) => "error" in val);
                if (found) {
                    setDisableBtn(true)
                }
                setTotalPrice(tot);
                setCoupanRefTotal(totalPricefound);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialOrderData, couponCodeData]);



    const handleDelete = async (e, index) => {
        e.preventDefault();
        let products = [];
        const updatedData = { ...responseData };
        const filteredData = updatedData.sellerCart.filter((val, i) => i !== index);
        updatedData.sellerCart = filteredData;

        await updatedData.sellerCart.forEach((pro) => {
            pro.products.length > 0 && pro.products.forEach((product) => products.push(product))
        })

        await dispatch(updateCart(products))
        updatedData.cartData = products;
        setResponseData(updatedData);
        const found = updatedData.sellerCart.find((val) => "error" in val);
        if (found) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
    };

    const paymentSubmit = (e) => {
        e.preventDefault();
        let finalData = {
            ...responseData,
            totalPrice: totalPrice,
            discountPrice: discountPercentenge
        }
        localStorage.setItem('latestOrder', JSON.stringify(finalData));
        navigate('/payment');
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="flex justify-between flex-wrap">
                    <div className="w-[60%]">
                        <h3>Order Summery</h3>

                        {responseData?.sellerCart.map((sellerProducts, index) => (
                            <div className="rounded  p-4 my-4">
                                <CheckoutpageCart sellerProducts={sellerProducts} handleDelete={handleDelete} index={index} />
                            </div>
                        ))}
                    </div>
                    <div className="ml-4 w-[38%]">
                        <CartBill handleSubmit={handleSubmit}
                            totalPrice={totalPrice}
                            couponRefTotal={couponRefTotal}
                            shipping={responseData.shipping}
                            subTotalPrice={responseData.subTotalPrice}
                            couponCode={couponCode}
                            setCouponCode={setCouponCode}
                            discountPercentenge={discountPercentenge}
                            showCoupan={showCoupan}
                            styles={styles} />

                        {disableBtn ?
                            <div
                                className='col-md-12 DronesCart-addtocart-button opacity-10 '
                            >
                                <button disabled className="text-white cursor-not-allowed">Go to Payment</button>
                            </div> :
                            <div className='col-md-12 DronesCart-addtocart-button'>
                                <button onClick={paymentSubmit}>Go To Payment</button>
                            </div>}

                    </div>
                </div>
            )}
        </>
    );
};