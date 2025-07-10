import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

const EmptyCartView = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🛍️</div>
      <div className="absolute top-40 right-20 text-4xl opacity-10 animate-float-delayed">🎁</div>
      <div className="absolute bottom-32 left-20 text-5xl opacity-10 animate-float">💝</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-10 animate-float-delayed">🛒</div>
    </div>
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-full flex items-center justify-center shadow-2xl border border-[#6b5b4b]">
            <FaShoppingCart className="text-5xl text-[#d4c5a0]" />
          </div>
          <h1 className="text-4xl font-bold text-[#f5f1e8] mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-[#d4c5a0] mb-8">Discover our amazing collection of handcrafted products and add them to your cart!</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products" className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
            <FaShoppingCart className="text-lg" />
            Start Shopping
          </Link>
          <Link to="/" className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
            <FaArrowLeft className="text-lg" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default EmptyCartView; 