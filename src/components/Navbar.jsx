import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiBookmarkHeart } from "react-icons/bi";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const { getCartItemsCount } = useCart();
  const { getWishlistItemsCount } = useWishlist();
  const cartItemsCount = getCartItemsCount();
  const wishlistItemsCount = getWishlistItemsCount();
  return (
    <nav className="navbar flex justify-between items-center p-4 text-[#f5f1e8] shadow-2xl bg-gradient-to-r from-[#2d1f0f] via-[#3d2914] to-[#4a3420] backdrop-blur-[10px] h-16 border-b border-[#6b5b4b]">
      <div className="logo flex gap-2 items-center">
        <span>
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
        </span>
        <span className="font-bold text-xl text-[#f5f1e8] tracking-wide">
          SoulOfHampi
        </span>
      </div>
      <ul className="nav-links flex gap-6">
        <li>
          <Link
            to="/"
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4c5a0] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] relative group"
          >
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4c5a0] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4c5a0] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4c5a0] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>
      <div className="cart flex gap-3 items-center">
        <Link to="/cart" className="relative group">
          <HiOutlineShoppingCart
            size={24}
            className="cursor-pointer text-[#f5f1e8] hover:text-[#d4c5a0] transition-colors duration-300"
          />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#d4c5a0] text-[#3d2914] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cartItemsCount > 99 ? "99+" : cartItemsCount}
            </span>
          )}
        </Link>
        <Link to="/wishlist" className="relative group">
          <BiBookmarkHeart
            size={24}
            className="cursor-pointer text-[#f5f1e8] hover:text-[#d4c5a0] transition-colors duration-300"
          />
          {wishlistItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {wishlistItemsCount > 99 ? "99+" : wishlistItemsCount}
            </span>
          )}
        </Link>
        <button
          type="button"
          className="h-10 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[140px] cursor-pointer border border-[#9d7a5e]"
        >
          SignUp/Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
