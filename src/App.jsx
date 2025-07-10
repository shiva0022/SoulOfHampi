import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/category/:category"
                element={<CategoryProducts />}
              />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
