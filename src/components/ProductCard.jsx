import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, title, price, image, category, rating, originalPrice } = product;

  return (
    <div 
      className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-6 shadow-2xl border border-[#6b5b4b] transform transition-all duration-500 ease-in-out group hover:shadow-3xl w-[320px] mx-auto relative"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform, box-shadow'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateZ(0) scale(1.035) translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 35px 60px -12px rgba(0, 0, 0, 0.4)';
        e.currentTarget.style.zIndex = 10;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateZ(0) scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.zIndex = 1;
      }}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-[#2d1f0f] to-[#3d2914]">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          style={{ willChange: 'transform' }}
        />
        
        {/* Wishlist Button */}
        <div className="absolute top-4 right-4">
          <button 
            className="bg-[#d4c5a0] bg-opacity-95 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-[#b08968]"
            style={{ willChange: 'transform, background-color' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FaHeart 
              className="text-[#3d2914] text-sm transition-colors duration-300 ease-in-out"
              style={{ willChange: 'color' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#3d2914'}
            />
          </button>
        </div>
        
        {/* Discount Badge */}
        {originalPrice && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] text-[#3d2914] px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-[#9d7a5e]">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#6b5b4b] bg-opacity-90 text-[#f5f1e8] px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-[#7c6c5c]">
            {category}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-4">
        {/* Product Title */}
        <h3 
          className="font-bold text-[#f5f1e8] text-xl leading-tight line-clamp-2 min-h-[3.5rem] transition-colors duration-300 ease-in-out group-hover:text-[#d4c5a0]"
          style={{ willChange: 'color' }}
        >
          {title}
        </h3>
        
        {/* Rating Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`text-lg transition-all duration-300 ease-in-out ${i < rating ? "text-yellow-400 fill-current" : "text-[#6b5b4b]"}`}
              />
            ))}
          </div>
          <span className="text-sm text-[#d4c5a0] font-semibold">
            ({rating}.0)
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-[#f5f1e8]">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-lg text-[#d4c5a0] opacity-70 line-through font-medium">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button 
            className="flex-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out border border-[#9d7a5e] hover:shadow-xl transform hover:scale-105 min-h-[44px]"
            style={{ willChange: 'transform, box-shadow, background' }}
          >
            <FaShoppingCart className="text-lg" />
            Add to Cart
          </button>
          <button 
            className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-3 px-6 rounded-xl font-bold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105 min-h-[44px]"
            style={{ willChange: 'transform, box-shadow, background' }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 