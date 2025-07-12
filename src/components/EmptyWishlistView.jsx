import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaArrowLeft } from "react-icons/fa";

const EmptyWishlistView = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">💝</div>
      <div className="absolute top-40 right-20 text-4xl opacity-10 animate-float-delayed">💖</div>
      <div className="absolute bottom-32 left-20 text-5xl opacity-10 animate-float">❤️</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-10 animate-float-delayed">💕</div>
    </div>
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-full flex items-center justify-center shadow-2xl border border-[#6b5b4b]">
            <FaHeart className="text-5xl text-[#d4c5a0]" />
          </div>
          <h1 className="text-4xl font-bold text-[#f5f1e8] mb-4">Your Wishlist is Empty</h1>
          <p className="text-lg text-[#d4c5a0] mb-8">Save your favorite handcrafted items and never lose track of what you love!</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products" className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105 border border-[#9d7a5e]">
            <FaHeart className="text-lg" style={{ color: '#3d2914' }} />
            <span className="text-xs sm:text-sm" style={{ color: '#3d2914' }}>Discover Products</span>
          </Link>
          <Link
            to="/"
            className="bg-transparent border-2 border-[#d4c5a0] text-white hover:bg-[#d4c5a0] hover:text-[#3d2914] py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
            onMouseEnter={e => {
              const icon = e.currentTarget.querySelector('.back-home-icon');
              const text = e.currentTarget.querySelector('.back-home-text');
              if (icon) icon.style.color = '#3d2914';
              if (text) text.style.color = '#3d2914';
            }}
            onMouseLeave={e => {
              const icon = e.currentTarget.querySelector('.back-home-icon');
              const text = e.currentTarget.querySelector('.back-home-text');
              if (icon) icon.style.color = 'white';
              if (text) text.style.color = 'white';
            }}
          >
            <FaArrowLeft className="text-lg back-home-icon" style={{ color: 'white' }} />
            <span className="text-xs sm:text-sm back-home-text" style={{ color: 'white' }}>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default EmptyWishlistView; 