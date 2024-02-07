import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFromWishlist, removeFromWishlist } from '../redux/actions/wishlist';
import CartBredCumbs from '../components/cart/CartBredCumbs';
import CartButtons from '../components/cart/CartButtons';
import WishListCards from '../components/ProductCards/WishListCards';
import WishListHeading from '../components/wishlist/WishListHeading';
import DronesHeader from '../components/Headers/DronesHeader';
import DronesFooter from '../components/DronesHomepage/DronesFooter';
import DronesHeader2 from '../components/Headers/DronesHeader2';
import usePageSEOHandle from '../hooks/Site-config/usePageSEOHandle';
import SEOHelmet from '../components/SEOHelmet';


const WishListPage = () => {

    const { wishlist } = useSelector((state) => state.wishlist);
    const [cartData, setCartData] = useState(wishlist);
    const dispatch = useDispatch();
    const [seoDetails, setSEODetails] = useState()
    usePageSEOHandle({ pageName: "wishlistSEO", setState: setSEODetails })
    const removeFromWishlistHandler = (data) => {
        dispatch(removeFromWishlist(data));
    };
    useEffect(() => {
        setCartData(wishlist)
    }, [wishlist])

    return (
        <>
            <SEOHelmet seoDetails={seoDetails} />
            <DronesHeader />
            <DronesHeader2 />
            <div className='DronesCart-parent'>
                <div className="container">
                    <CartBredCumbs />
                    <h2>Wish List</h2>
                    <div className="col-md-12 col-lg-8">
                        <WishListHeading />
                    </div>
                    {cartData?.length > 0 ?
                        <div className='DronesCart-subparent'>
                            <div className="row">
                                <div className="col-lg-12">
                                    {cartData?.map((cartItem, i) => (
                                        <React.Fragment key={i}>
                                            <WishListCards data1={cartItem}
                                                removeFromCartHandler={removeFromWishlistHandler}
                                            />
                                            <hr />
                                        </React.Fragment>
                                    ))}
                                    <CartButtons removeFun={removeAllFromWishlist()} title={"Clear WishList"} />
                                </div>
                                {/* <CartBill /> */}
                            </div>

                        </div>
                        : <p>No Products are Wishlisted</p>
                    }

                </div>
            </div>
            <DronesFooter />
        </>
    )
}

export default WishListPage