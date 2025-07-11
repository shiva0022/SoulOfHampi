import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import { preloadFonts, checkFontLoading } from "./utils/fontOptimization";
import "./App.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Enhanced scroll to top on route change
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Delay scroll to allow page transition to start
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition type="slideUp">
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition type="fade">
              <Products />
            </PageTransition>
          }
        />
        <Route
          path="/category/:category"
          element={
            <PageTransition type="slide">
              <CategoryProducts />
            </PageTransition>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PageTransition type="default">
              <ProductDetails />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition type="slideUp">
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition type="slide">
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/cart"
          element={
            <PageTransition type="default">
              <Cart />
            </PageTransition>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PageTransition type="fade">
              <Wishlist />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize font optimizations
    preloadFonts();
    checkFontLoading().then(loaded => {
      if (loaded) {
        console.log('Fonts loaded successfully');
      }
    });
  }, []);

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] font-performance overflow-x-hidden max-w-full" style={{ fontFamily: 'var(--font-primary)' }}>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              toastStyle={{
                backgroundColor: '#3d2914',
                color: '#f5f1e8',
                border: '1px solid #d4c5a0'
              }}
            />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
