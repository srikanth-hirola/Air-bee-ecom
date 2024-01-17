import React, { useEffect } from 'react';
import './App.css';
import './styles/Drones.css';
import './styles/shoppage1.css';
import './styles/ProductDetails.css';
import './styles/cart.css';
import './styles/login.css';
import './styles/checkout.css';
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

// register Swiper custom elements
register();

const App = () => {
  // const [stripeApikey, setStripeApiKey] = useState('');

  // async function getStripeApikey() {
  //   const { data } = await axios.get(`${server}/payment/stripeapikey`);
  //   setStripeApiKey(data.stripeApikey);
  // }
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    Store.dispatch(getAllSiteConfig());
    Store.dispatch(getAllCategories())
    // getStripeApikey();
  }, []);


  return (
    <BrowserRouter >

      {/* {stripeApikey && (
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
      )} */}
      <DronesHeader />

      <Routes >
        <Route path="/" exact element={<DronesHomepage />} />
        <Route path="/products" exact element={<AllProductsPage />} />
        <Route path="/product/:id" exact element={<ProductDetailsPage />} />
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/wishlist" exact element={<WishListPage />} />
        <Route path="/login" exact element={<UserLoginPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/checkout" element={<CheckoutPage />} />
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
