import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/Drones.css';
import './styles/shoppage1.css';
import './styles/ProductDetails.css';
import './styles/cart.css';
import './styles/login.css';
import './styles/checkout.css';
import './styles/orderSuccess.css';
import './styles/contactus.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './redux/store';
import { loadSeller, loadUser } from './redux/actions/user';
import { getAllProducts } from './redux/actions/product';
import { getAllEvents } from './redux/actions/event';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllSiteConfig } from './redux/actions/siteConfig';
import { register } from 'swiper/element/bundle';
import { Toaster } from 'react-hot-toast';
import { getAllCategories } from './redux/actions/category.js';
import DronesHomepage from './components/DronesHomepage/DronesHomepage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProductsPage from './Pages/AllProductsPage.jsx';
import ProductDetailsPage from './Pages/ProductDetailsPage.jsx';
import DronesHeader from './components/Headers/DronesHeader.jsx';
import CartPage from './Pages/CartPage.jsx';
import WishListPage from './Pages/WishListPage.jsx';
import UserLoginPage from './Pages/UserLoginPage.jsx';
import { ForgetPassword } from './components/User/ForgetPassword.jsx';
import CheckoutPage from './Pages/CheckoutPage.jsx';
import axios from 'axios';
import { server } from './server.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Routes/ProtectedRoute.js';
import PaymentPage from './Pages/PaymentPage.jsx';
import OrderSuccess from './utils/OrderSuccess/OrderSuccess.jsx';
import ContactUsPage from './Pages/ContactUsPage.jsx';
import AllProductsByCategories from './Pages/AllProductsByCategories.jsx';
import SellerProtectedRoute from './Routes/SellerProtectedRoute.jsx';
import ShopHomePage from './Pages/Shop/ShopHomePage.jsx';
import ShopLoginPage from './Pages/Shop/ShopLoginPage.jsx';
import ShopDashboardPage from './Pages/Shop/ShopDashboardPage.jsx';
import ShopSettingsPage from './Pages/Shop/ShopSettingsPage.jsx';
import ShopCreateProduct from './Pages/Shop/ShopCreateProduct.jsx';
import ShopAllOrders from './Pages/Shop/Orders/ShopAllOrders.jsx';
import ShopStocks from './Pages/Shop/ShopStocks.jsx'
import ShipmentLogin from './Pages/Shop/Shipment/ShipmentLogin.jsx';
import OrdersPage from './Pages/Shop/Orders/OrdersPage.jsx';
import ReturnOrdersPage from './Pages/Shop/Shipment/ReturnOrdersPage.jsx';
import CouriersPage from './Pages/Shop/Couriers/CouriersPage.jsx'
import PickupAddressPage from './Pages/Shop/Couriers/PickupAddressPage.jsx';
import ShopNewOrders from './Pages/Shop/Orders/ShopNewOrders.jsx';
import ShopPendingOrders from './Pages/Shop/Orders/ShopPendingOrders.jsx';
import ShopDeliveredOrders from './Pages/Shop/Orders/ShopDeliveredOrders.jsx';
import ShopCanceledOrders from './Pages/Shop/Orders/ShopDeliveredOrders.jsx';
import ShopAllRefunds from './Pages/Shop/Refunds/ShopAllRefunds.jsx';
import ShopApprovedRefunds from './Pages/Shop/Refunds/ShopApprovedRefunds.jsx';
import ShopPendingRefunds from './Pages/Shop/Refunds/ShopPendingRefunds.jsx';
import ShopRejectedRefunds from './Pages/Shop/Refunds/ShopRejectedRefunds.jsx';
import ShopOrderDetails from './Pages/Shop/Orders/ShopOrderDetails.jsx';
import ShopOrderRefundPage from './Pages/Shop/Refunds/ShopOrderRefundPage.jsx';
import ShopAllProducts from './Pages/Shop/Products/ShopAllProducts.jsx';
import ShopAllProducts2 from './Pages/Shop/Products/ShopAllProducts2.jsx';

// register Swiper custom elements
register();

const App = () => {
  const [stripeApikey, setStripeApiKey] = useState('');

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    Store.dispatch(getAllSiteConfig());
    Store.dispatch(getAllCategories())
    getStripeApikey();
  }, []);


  return (
    <BrowserRouter >
      <DronesHeader />

      {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      )}

      <Routes >
        <Route path="/" exact element={<DronesHomepage />} />
        <Route path="/products" exact element={<AllProductsPage />} />
        <Route path="/products-by-category/search" element={<AllProductsByCategories />} />
        <Route path="/product/:id" exact element={<ProductDetailsPage />} />
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/wishlist" exact element={<WishListPage />} />
        <Route path="/login" exact element={<UserLoginPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        } />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/contact-us" element={<ContactUsPage />} />



        {/* seller */}
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <SellerProtectedRoute>
              <ShopSettingsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/dashboard-orders"
          element={
            <SellerProtectedRoute>
              <ShopAllOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/stocks"
          element={
            <SellerProtectedRoute>
              <ShopStocks />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/shipment/login"
          element={
            <SellerProtectedRoute>
              <ShipmentLogin />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/shipment/orders"
          element={
            <SellerProtectedRoute>
              <OrdersPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/shipment/return-orders"
          element={
            <SellerProtectedRoute>
              <ReturnOrdersPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/shipment/couriers"
          element={
            <SellerProtectedRoute>
              <CouriersPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/shipment/pickup-locations"
          element={
            <SellerProtectedRoute>
              <PickupAddressPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/new-orders"
          element={
            <SellerProtectedRoute>
              <ShopNewOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/pending-orders"
          element={
            <SellerProtectedRoute>
              <ShopPendingOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/delivered-orders"
          element={
            <SellerProtectedRoute>
              <ShopDeliveredOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/canceled-orders"
          element={
            <SellerProtectedRoute>
              <ShopCanceledOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/dashboard-refunds"
          element={
            <SellerProtectedRoute>
              <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/approved-refunds"
          element={
            <SellerProtectedRoute>
              <ShopApprovedRefunds />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/pending-refunds"
          element={
            <SellerProtectedRoute>
              <ShopPendingRefunds />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/rejected-refunds"
          element={
            <SellerProtectedRoute>
              <ShopRejectedRefunds />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/order/:id"
          element={
            <SellerProtectedRoute>
              <ShopOrderDetails />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/return-order/:id"
          element={
            <SellerProtectedRoute>
              <ShopOrderRefundPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/shop/all-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProducts2 />
            </SellerProtectedRoute>
          }
        />

        {/* <Route
          path="/shop/draft-products"
          element={
            <SellerProtectedRoute>
              <ShopAllDraftProducts />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/shop/approved-products"
          element={
            <SellerProtectedRoute>
              <ShopApprovedProducts />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/shop/rejected-products"
          element={
            <SellerProtectedRoute>
              <ShopRejectedProducts />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/shop/products-gallery"
          element={
            <SellerProtectedRoute>
              <ProductsGalleryPage />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/shop/pending-products"
          element={
            <SellerProtectedRoute>
              <ShopPendingProducts />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/product/edit/:id"
          element={
            <SellerProtectedRoute>
              <ShopProductEdit />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/product/draft-edit/:id"
          element={
            <SellerProtectedRoute>
              <ShopDraftProductEdit />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/shop/categories"
          element={
            <SellerProtectedRoute>
              <ShopCategories />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <ShopCreateEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-draft-events"
          element={
            <SellerProtectedRoute>
              <AllDraftEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-draft-events/edit/:id"
          element={
            <SellerProtectedRoute>
              <EventEditPage />
            </SellerProtectedRoute>
          }
        />


        <Route
          path="/specification"
          element={
            <SellerProtectedRoute>
              <AddSpecifications />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <ShopAllCoupouns />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-withdraw-money"
          element={
            <SellerProtectedRoute>
              <ShopWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/withdraw-payment-history"
          element={
            <SellerProtectedRoute>
              <WithDrawHistoryPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/withdraw-payment-requests"
          element={
            <SellerProtectedRoute>
              <WithDrawRequestsPage />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/dashboard-messages"
          element={
            <SellerProtectedRoute>
              <ShopInboxPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/requested-products"
          element={
            <SellerProtectedRoute>
              <ShopRequestedProducts />
            </SellerProtectedRoute>
          }
        /> */}
        {/* seller */}
      </Routes>

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            position: 'relative',
            top: '80px',
          }
        }}
      />
    </BrowserRouter>
  );
};

export default App;
