import React, { useEffect, useState } from 'react'
import CartProductCards from '../components/ProductCards/CartProductCards'
import CartButtons from '../components/cart/CartButtons'
import CartHeadings from '../components/cart/CartHeadings'
import CartBredCumbs from '../components/cart/CartBredCumbs'
import { useDispatch, useSelector } from 'react-redux'
import { StyleConfig } from '../utils/StyleConfig'
import { addTocart, removeAllFromCart, removeFromCart } from '../redux/actions/cart'
import { Link } from 'react-router-dom'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import useGetCurrencyConversion from '../hooks/Site-config/useGetCurrencyConversion'
import DronesHeader2 from '../components/Headers/DronesHeader2'

const CartPage = () => {
    const { cart } = useSelector((state) => state.cart);
    const { ConvertCurrency } = useGetCurrencyConversion()
    const styles = StyleConfig();

    const [cartData, setCartData] = useState(cart);

    const dispatch = useDispatch();

    const removeFromCartHandler = (data) => {
        dispatch(removeFromCart(data));
        const newData = cart.filter((i) => i.attrId !== data.attrId);
        setCartData(newData)
    };

    const totalPrice = cart?.reduce((acc, item) => {
        if (item.active) {
            return acc + item.qty * item.selectedColor.eventPrice;
        } else {
            return acc + item.qty * item.selectedColor.discountPrice;
        }
    }, 0);

    const quantityChangeHandler = (data) => {

        let curPrice = data?.active ? Number(data?.selectedColor?.eventPrice) * data?.qty : Number(data?.selectedColor?.discountPrice) * data?.qty;
        const updatedData = {
            ...data,
            finalPrice: curPrice
        }
        dispatch(addTocart(updatedData));
    };

    useEffect(() => {
        setCartData(cart)
    }, [cartData, cart])


    return (
        <>
            <DronesHeader />
            <DronesHeader2/>
            <div className='DronesCart-parent'>
                <div className="container">
                    <CartBredCumbs />
                    <h2>Shopping Cart</h2>
                    <div className="col-md-12 col-lg-12">
                        <CartHeadings />
                    </div>
                    
                    {cartData?.length > 0 ?
                        <div className='DronesCart-subparent'>
                            <div className="row">
                                <div className="col-lg-12">
                                    {cartData?.map((cartItem, i) => (
                                        <React.Fragment key={i}>
                                            <CartProductCards data1={cartItem}
                                                quantityChangeHandler={quantityChangeHandler}
                                                removeFromCartHandler={removeFromCartHandler}
                                                styles={styles} />
                                            <hr />
                                        </React.Fragment>
                                    ))}
                                    <div className="px-5 mb-3 bg-[#fa8232] rounded">
                                        {/* checkout buttons */}
                                        <Link to="/checkout">
                                            <div
                                                className={`h-[45px] flex items-center justify-center w-[100%] rounded-[5px]`} style={{ backgroundColor: styles?.mainColor }}
                                            >
                                                <h1 className=" text-[18px] mb-0 font-[600] text-white" style={{ color: styles?.fontColor }} >
                                                    Checkout Now ({styles?.currency?.Symbol} {ConvertCurrency(totalPrice)})
                                                </h1>
                                            </div>
                                        </Link>
                                    </div>
                                    <CartButtons removeFun={removeAllFromCart()} title={"Clear Shopping Cart"} />
                                </div>
                                {/* <CartBill /> */}
                            </div>

                        </div>
                        : <div>
                            <p>No Products Added to Cart</p>
                            <div className=" continueshopping-buttons ">
                                <Link to={"/products?search=all%20products"}>Continue Shopping</Link>
                            </div>
                        </div>




                    }

                </div>
            </div>
            <DronesFooter/>
        </>
    )
}

export default CartPage