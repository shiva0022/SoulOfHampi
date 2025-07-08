import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiBookmarkHeart } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 text-[#3d2914] shadow-lg bg-gradient-to-br from-[#d4c5a0] to-[#9d7a5e] backdrop-blur-[10px] h-16">
      <div className="logo flex gap-1">
        <span>
          <img src="/nav-logo.png" alt="logo" className="w-6" />
        </span>
        <span className="font-bold">SoulOfHampi</span>
      </div>
      <ul className="nav-links flex gap-4">
        <li>
          <Link
            to="/"
            className="hover:text-[#2d1f0f] transition-colors duration-200 font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-[#2d1f0f] transition-colors duration-200 font-medium"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-[#2d1f0f] transition-colors duration-200 font-medium"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-[#2d1f0f] transition-colors duration-200 font-medium"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="cart flex gap-2 items-center">
        <span>
          <HiOutlineShoppingCart
            size={22}
            color="#3d2914"
            className="cursor-pointer"
          />
        </span>
        <span>
          <BiBookmarkHeart
            size={22}
            color="#2d1f0f"
            className="cursor-pointer"
          />
        </span>
        <button
          type="button"
          className="h-8 bg-[#3d2914] hover:bg-[#2d1f0f] text-[#f5f1e8] px-4 py-1 rounded-md transition-all duration-200 font-medium shadow-md hover:shadow-lg min-w-[126px] cursor-pointer"
        >
          SignUp/Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
