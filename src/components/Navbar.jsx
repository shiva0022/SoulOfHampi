import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiBookmarkHeart } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { getWishlistItemsCount } = useWishlist();
  const cartItemsCount = getCartItemsCount();
  const wishlistItemsCount = getWishlistItemsCount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar flex justify-between items-center p-4 lg:px-6 text-[#f5f1e8] shadow-2xl bg-gradient-to-r from-[#2d1f0f] via-[#3d2914] to-[#4a3420] backdrop-blur-[10px] h-16 border-b border-[#6b5b4b] relative z-50">
      {/* Logo */}
      <div className="logo flex gap-2 items-center">
        <span>
          <img src="/logo.png" alt="logo" className="w-6 h-6 sm:w-8 sm:h-8" />
        </span>
        <span className="font-heading text-lg sm:text-xl text-[#f5f1e8] tracking-wide font-semibold">
          SoulOfHampi
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links hidden lg:flex gap-6 xl:gap-8">
        <li>
          <Link
            to="/"
            className="font-primary font-medium tracking-wide hover:text-[#d4c5a0] transition-colors duration-300 text-[#f5f1e8] relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4c5a0] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="font-primary font-medium tracking-wide hover:text-[#d4c5a0] transition-colors duration-300 text-[#f5f1e8] relative group"
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

      {/* Desktop Cart & Actions */}
      <div className="cart hidden lg:flex gap-3 items-center">
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
          className="h-10 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-4 xl:px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[120px] xl:min-w-[140px] cursor-pointer border border-[#9d7a5e] text-sm xl:text-base"
        >
          Login
        </button>
      </div>

      {/* Mobile Cart Icons & Menu Button */}
      <div className="lg:hidden flex items-center gap-3">
        <Link to="/cart" className="relative group">
          <HiOutlineShoppingCart
            size={20}
            className="cursor-pointer text-[#f5f1e8] hover:text-[#d4c5a0] transition-colors duration-300"
          />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#d4c5a0] text-[#3d2914] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {cartItemsCount > 9 ? "9+" : cartItemsCount}
            </span>
          )}
        </Link>
        <Link to="/wishlist" className="relative group">
          <BiBookmarkHeart
            size={20}
            className="cursor-pointer text-[#f5f1e8] hover:text-[#d4c5a0] transition-colors duration-300"
          />
          {wishlistItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {wishlistItemsCount > 9 ? "9+" : wishlistItemsCount}
            </span>
          )}
        </Link>
        <button
          onClick={toggleMenu}
          className="text-[#f5f1e8] hover:text-[#d4c5a0] transition-colors duration-300 p-2"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] backdrop-blur-[10px] border-b border-[#6b5b4b] transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] py-2 border-b border-[#6b5b4b]/30"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] py-2 border-b border-[#6b5b4b]/30"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] py-2 border-b border-[#6b5b4b]/30"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#d4c5a0] transition-colors duration-300 font-medium text-[#f5f1e8] py-2 border-b border-[#6b5b4b]/30"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="mt-4 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer border border-[#9d7a5e] text-center"
          >
            SignUp/Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
