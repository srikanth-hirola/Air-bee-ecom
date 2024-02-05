import React, { useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import './styles/Drones.css';
import './styles/shoppage1.css';
import './styles/ProductDetails.css';
import './styles/cart.css';
import './styles/login.css';
import './styles/checkout.css';
import './styles/orderSuccess.css';
import './styles/contactus.css';
import './styles/aboutUs.css';
import './styles/profile.css';
import './styles/modals.css';
import './styles/modals2.css';
import { server } from './server.js';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Store from './redux/store';
import { loadSeller, loadUser } from './redux/actions/user';
import { getAllProducts } from './redux/actions/product';
import { getAllEvents } from './redux/actions/event';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllSiteConfig } from './redux/actions/siteConfig';
import { register } from 'swiper/element/bundle';
import { Toaster } from 'react-hot-toast';
import { getAllCategories } from './redux/actions/category.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Loader from './utils/Loader.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { socketId } from './components/Headers/socket.js';
import { useSelector } from 'react-redux';
import SEOPage from './Pages/Shop/SEO/SEOPage.jsx';
import ProductSEOPage from './Pages/Shop/SEO/ProductSEOPage.jsx';
import { HelmetProvider } from 'react-helmet-async';


const DronesHomepage = lazy(() => import('./components/DronesHomepage/DronesHomepage.jsx'));
const AllProductsPage = lazy(() => import('./Pages/AllProductsPage.jsx'));
const ProductDetailsPage = lazy(() => import('./Pages/ProductDetailsPage.jsx'));
const CartPage = lazy(() => import('./Pages/CartPage.jsx'));
const WishListPage = lazy(() => import('./Pages/WishListPage.jsx'));
const UserLoginPage = lazy(() => import('./Pages/Auth/UserLoginPage.jsx'));
const CheckoutPage = lazy(() => import('./Pages/CheckoutPage.jsx'));

const ProtectedRoute = lazy(() => import('./Routes/ProtectedRoute.js'));
const PaymentPage = lazy(() => import('./Pages/PaymentPage.jsx'));
const OrderSuccess = lazy(() => import('./utils/OrderSuccess/OrderSuccess.jsx'));
const ContactUsPage = lazy(() => import('./Pages/ContactUsPage.jsx'));
const AllProductsByCategories = lazy(() => import('./Pages/AllProductsByCategories.jsx'));
const SellerProtectedRoute = lazy(() => import('./Routes/SellerProtectedRoute.jsx'));
const ShopHomePage = lazy(() => import('./Pages/Shop/ShopHomePage.jsx'));
const ShopLoginPage = lazy(() => import('./Pages/Shop/ShopLoginPage.jsx'));
const ShopDashboardPage = lazy(() => import('./Pages/Shop/ShopDashboardPage.jsx'));
const ShopSettingsPage = lazy(() => import('./Pages/Shop/ShopSettingsPage.jsx'));
const ShopCreateProduct = lazy(() => import('./Pages/Shop/ShopCreateProduct.jsx'));
const ShopAllOrders = lazy(() => import('./Pages/Shop/Orders/ShopAllOrders.jsx'));
const ShopStocks = lazy(() => import('./Pages/Shop/ShopStocks.jsx'));
const ShipmentLogin = lazy(() => import('./Pages/Shop/Shipment/ShipmentLogin.jsx'));
const OrdersPage = lazy(() => import('./Pages/Shop/Orders/OrdersPage.jsx'));
const ReturnOrdersPage = lazy(() => import('./Pages/Shop/Shipment/ReturnOrdersPage.jsx'));
const CouriersPage = lazy(() => import('./Pages/Shop/Couriers/CouriersPage.jsx'));
const PickupAddressPage = lazy(() => import('./Pages/Shop/Couriers/PickupAddressPage.jsx'));
const ShopNewOrders = lazy(() => import('./Pages/Shop/Orders/ShopNewOrders.jsx'));
const ShopPendingOrders = lazy(() => import('./Pages/Shop/Orders/ShopPendingOrders.jsx'));
const ShopDeliveredOrders = lazy(() => import('./Pages/Shop/Orders/ShopDeliveredOrders.jsx'));
const ShopCanceledOrders = lazy(() => import('./Pages/Shop/Orders/ShopCanceledOrders.jsx'));
const ShopAllRefunds = lazy(() => import('./Pages/Shop/Refunds/ShopAllRefunds.jsx'));
const ShopApprovedRefunds = lazy(() => import('./Pages/Shop/Refunds/ShopApprovedRefunds.jsx'));
const ShopPendingRefunds = lazy(() => import('./Pages/Shop/Refunds/ShopPendingRefunds.jsx'));
const ShopRejectedRefunds = lazy(() => import('./Pages/Shop/Refunds/ShopRejectedRefunds.jsx'));
const ShopOrderDetails = lazy(() => import('./Pages/Shop/Orders/ShopOrderDetails.jsx'));
const ShopOrderRefundPage = lazy(() => import('./Pages/Shop/Refunds/ShopOrderRefundPage.jsx'));
const ShopAllProducts = lazy(() => import('./Pages/Shop/Products/ShopAllProducts.jsx'));
// const ShopAllProducts2 = lazy(() => import('./Pages/Shop/Products/ShopAllProducts2.jsx'));
const ShopAllProducts2 = lazy(() => import('./Pages/Shop/Products/ShopAllProducts2.jsx'));
const ShopAllDraftProducts = lazy(() => import('./Pages/Shop/Products/ShopAllDraftProducts.jsx'));
const ShopApprovedProducts = lazy(() => import('./Pages/Shop/Products/ShopApprovedProducts.jsx'));
const ShopRejectedProducts = lazy(() => import('./Pages/Shop/Products/ShopRejectedProducts.jsx'));
const ShopPendingProducts = lazy(() => import('./Pages/Shop/Products/ShopPendingProducts.jsx'));
const ShopProductEdit = lazy(() => import('./Pages/Shop/Products/ShopProductEdit.jsx'));
const ShopDraftProductEdit = lazy(() => import('./Pages/Shop/Products/ShopProductEdit.jsx'));
const ShopCategories = lazy(() => import('./Pages/Shop/Categories/ShopCategories.jsx'));
const ShopCreateEvents = lazy(() => import('./Pages/Shop/Events/ShopCreateEvents.jsx'));
const ShopAllEvents = lazy(() => import('./Pages/Shop/Events/ShopAllEvents.jsx'));

const AddSpecifications = lazy(() => import('./components/ShopComponents/CreateProduct/Components/AddSpecifications.jsx'));
const ShopAllCoupouns = lazy(() => import('./Pages/Shop/Coupouns/ShopAllCoupouns.jsx'));
const ShopWithDrawMoneyPage = lazy(() => import('./Pages/Shop/WithDraw/ShopWithDrawMoneyPage.jsx'));

const ShopInboxPage = lazy(() => import('./Pages/Shop/Inbox/ShopInboxPage.jsx'));
const ShopRequestedProducts = lazy(() => import('./Pages/Shop/Products/ShopRequestedProducts.jsx'));
const EventProductsPage = lazy(() => import('./Pages/Events/EventProductsPage.jsx'));
const UserInbox = lazy(() => import('./Pages/Inbox/UserInbox.jsx'));
const OrderDetails = lazy(() => import('./components/Profile/OrderDetails.jsx'));
const OrdersPageProfile = lazy(() => import('./Pages/Profile/OrdersPageProfile.jsx'));
const Profilepage = lazy(() => import('./Pages/Profile/Profilepage.jsx'));
const ContactDetailsPage = lazy(() => import('./Pages/Profile/ContactDetailsPage.jsx'));
const RefundPage = lazy(() => import('./Pages/Profile/RefundPage.jsx'));
const UserSignUpPage = lazy(() => import('./Pages/Auth/UserSignUpPage.jsx'));
const ActivationPage = lazy(() => import('./Pages/ActivationPage.jsx'));
const MiscellaneousConfigPage = lazy(() => import('./Pages/Site-Config/MiscellaneousConfigPage.jsx'));
const ContactConfigPage = lazy(() => import('./Pages/Site-Config/ContactConfigPage.jsx'));
const InquiriesPage = lazy(() => import('./Pages/Forms/InquiriesPage.jsx'));
const ContactsPage = lazy(() => import('./Pages/Forms/ContactsPage.jsx'));

const CreateNewsletterPage = lazy(() => import('./Pages/Site-Config/CaresteNewsLetterPage.jsx'));
const Blog = lazy(() => import('./Pages/Blog.jsx'));
const TermsAndConditions = lazy(() => import('./Pages/TermsAndConditions.jsx'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy.jsx'));
const RefundsPolicy = lazy(() => import('./Pages/RefundPolicy.jsx'));
const AboutUsConfigPage = lazy(() => import('./Pages/Site-Config/AboutUsConfigPage.jsx'));
const BannerConfigPage = lazy(() => import('./Pages/Site-Config/BannerConfigPage.jsx'));
const FeaturesConfigPage = lazy(() => import('./Pages/Site-Config/FeaturesConfigPage.jsx'));
const QuoteConfigPage = lazy(() => import('./Pages/Site-Config/QuoteConfigPage.jsx'));
const BrandsConfigPage = lazy(() => import('./Pages/Site-Config/BrandsConfigPage.jsx'));
const TestimonialsConfigPages = lazy(() => import('./Pages/Site-Config/TestimonialsConfigPages.jsx'));
const IndustriesConfigPage = lazy(() => import('./Pages/Site-Config/IndustriesConfigPage.jsx'));
const RegionsConfigPage = lazy(() => import('./Pages/Site-Config/RegionsConfigPage.jsx'));
const NewsLetterConfigPage = lazy(() => import('./Pages/Site-Config/NewsLetterConfigPage.jsx'));
const BlogsListPage = lazy(() => import('./Pages/Shop/Blogs/BlogsListPage.jsx'));
const EditBlogPage = lazy(() => import('./Pages/Shop/Blogs/EditBlogPage.jsx'));
const AddBlogsPage = lazy(() => import('./Pages/Shop/Blogs/AddBlogsPage.jsx'));
const BlogPreviewPage = lazy(() => import('./Pages/Shop/Blogs/BlogPreviewPage.jsx'));
const BlogDetailsPage = lazy(() => import('./Pages/BlogDetailsPage.jsx'));
const BlogsConfigPage = lazy(() => import('./Pages/Site-Config/BlogsConfigPage.jsx'));
const FooterConfigPage = lazy(() => import('./Pages/Site-Config/FooterConfigPage.jsx'));
const HeadingsConfigPage = lazy(() => import('./Pages/Site-Config/HeadingsConfigPage.jsx'));

const ForgetPassword = lazy(() => import('./components/User/ForgetPassword.jsx'));
const ProductsGalleryPage = lazy(() => import('./Pages/Shop/Gallery/ProductsGalleryPage.jsx'));
const AllDraftEvents = lazy(() => import('./Pages/Shop/Events/AllDraftEvents.jsx'));
const EventEditPage = lazy(() => import('./Pages/Shop/Events/EventEditPage.jsx'));
const WithDrawHistoryPage = lazy(() => import('./Pages/Shop/WithDraw/WithDrawHistoryPage.jsx'));
const WithDrawRequestsPage = lazy(() => import('./Pages/Shop/WithDraw/WithDrawRequestPage.jsx'));
const EventsConfigPage = lazy(() => import('./Pages/Site-Config/EventsConfigPage.jsx'));
const About = lazy(() => import('./Pages/AboutUs/About.jsx'));
const CategoriesConfigPage = lazy(() => import('./Pages/Site-Config/CategoriesConfigPage.jsx'));


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
    Store.dispatch(getAllCategories());
    getStripeApikey();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const { user } = useSelector((state) => state.user);
  // eslint-disable-next-line no-unused-vars
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socketId.on('messageSeen', (data) => {
      console.log("first")
    })
  }, [])

  useEffect(() => {
    if (user) {
      const sellerId = user?._id;
      socketId.emit("addUser", sellerId);
      socketId.on("getUsers", (data) => {
        setOnlineUsers(data);
      });
    }
  }, [user]);

  // useEffect(() => {
  //   let data = {
  //     userId: user?._id,
  //     messageLength: 0
  //   }
  //   arrivalMessage && toast.success("got")
  // }, [arrivalMessage, user]);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <HelmetProvider>
      <BrowserRouter >

        {stripeApikey && (
          <Elements stripe={loadStripe(stripeApikey)}>
            <Suspense fallback={<Loader />}>
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
            </Suspense>
          </Elements>
        )}
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" exact element={<DronesHomepage />} />
            <Route path="/products" exact element={<AllProductsPage />} />
            <Route path="/products-by-category/search" element={<AllProductsByCategories />} />
            <Route path="/product/:id" exact element={<ProductDetailsPage />} />
            <Route path="/cart" exact element={<CartPage />} />
            <Route path="/wishlist" exact element={<WishListPage />} />
            <Route path="/login" exact element={<UserLoginPage />} />
            <Route path="/sign-up" exact element={<UserSignUpPage />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/order/success" element={<OrderSuccess />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/event/:id" element={<EventProductsPage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetailsPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundsPolicy />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route path="/checkout" element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            } />
            <Route
              path="/inbox"
              element={
                <ProtectedRoute>
                  <UserInbox />
                </ProtectedRoute>
              }
            />

            <Route path='/orderspage' element={
              <ProtectedRoute>
                <OrdersPageProfile />
              </ProtectedRoute>
            } />
            <Route path='/user/order/:id' element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            } />
            <Route path='/profilepage' element={
              <ProtectedRoute>
                <Profilepage />
              </ProtectedRoute>
            } />
            <Route path='/contactDetailsPage' element={
              <ProtectedRoute>
                <ContactDetailsPage />
              </ProtectedRoute>
            } />
            <Route path='/refundpage' element={
              <ProtectedRoute>
                <RefundPage />
              </ProtectedRoute>
            } />
            {/* <Route path='/refundpage' element={<RefundPage />} />
          <Route path='/refundStatus' element={<RefundStatus />} /> */}




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
              path="/inquiries"
              element={
                <SellerProtectedRoute>
                  <InquiriesPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <SellerProtectedRoute>
                  <ContactsPage />
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
              path="/shop/create-newsletter"
              element={
                <SellerProtectedRoute>
                  <CreateNewsletterPage />
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

            <Route
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
              path="/shop/products-seo"
              element={
                <SellerProtectedRoute>
                  <SEOPage />
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
              path="/product/edit-seo/:id"
              element={
                <SellerProtectedRoute>
                  <ProductSEOPage />
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
            />
            {/* seller */}

            {/* site-config */}
            <Route
              path="/site-config/events-config"
              element={
                <SellerProtectedRoute>
                  <EventsConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/categories-config"
              element={
                <SellerProtectedRoute>
                  <CategoriesConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/contact-config"
              element={
                <SellerProtectedRoute>
                  <ContactConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/footer-config"
              element={
                <SellerProtectedRoute>
                  <FooterConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/section-titles-config"
              element={
                <SellerProtectedRoute>
                  <HeadingsConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/about-us-config"
              element={
                <SellerProtectedRoute>
                  <AboutUsConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/banner-config"
              element={
                <SellerProtectedRoute>
                  <BannerConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/features-config"
              element={
                <SellerProtectedRoute>
                  <FeaturesConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/form-quote-config"
              element={
                <SellerProtectedRoute>
                  <QuoteConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/brands-config"
              element={
                <SellerProtectedRoute>
                  <BrandsConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/testimonials-config"
              element={
                <SellerProtectedRoute>
                  <TestimonialsConfigPages />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/industries-config"
              element={
                <SellerProtectedRoute>
                  <IndustriesConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/regions-config"
              element={
                <SellerProtectedRoute>
                  <RegionsConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/newsletter-config"
              element={
                <SellerProtectedRoute>
                  <NewsLetterConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/blogs-config"
              element={
                <SellerProtectedRoute>
                  <BlogsConfigPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/site-config/miscellaneous-config"
              element={
                <SellerProtectedRoute>
                  <MiscellaneousConfigPage />
                </SellerProtectedRoute>
              }
            />
            {/* site-config */}


            {/* blogs start here */}
            <Route
              path="/admin/blog/edit/:id"
              exact
              element={
                <SellerProtectedRoute>
                  <EditBlogPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/admin/blog/compose"
              exact
              element={
                <SellerProtectedRoute>
                  <AddBlogsPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/admin/blogs"
              exact
              element={
                <SellerProtectedRoute>
                  <BlogsListPage />
                </SellerProtectedRoute>

              }
            />
            <Route
              path="/admin/blog/:publish"
              exact
              element={
                <SellerProtectedRoute>
                  <BlogPreviewPage />
                </SellerProtectedRoute>
              }
            />
            {/* blogs ends here */}




          </Routes>
        </Suspense>

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
    </HelmetProvider>
  );
};

export default App;
