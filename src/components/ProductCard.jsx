import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, title, price, image, category, rating, originalPrice } = product;

  return (
    <div 
      className="bg-gradient-to-br from-[#c5b693] to-[#d4c5a0] bg-opacity-80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-[#b08968] border-opacity-20 transform transition-all duration-700 ease-in-out group"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform, box-shadow'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateZ(0) scale(1.05) translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateZ(0) scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
      }}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-5 bg-white bg-opacity-50">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-all duration-700 ease-in-out"
          style={{ willChange: 'transform' }}
        />
        
        {/* Wishlist Button */}
        <div className="absolute top-3 right-3">
          <button 
            className="bg-white bg-opacity-90 p-2.5 rounded-full shadow-md transition-all duration-500 ease-in-out"
            style={{ willChange: 'transform, background-color' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            }}
          >
            <FaHeart 
              className="text-[#3d2914] text-sm transition-colors duration-500 ease-in-out"
              style={{ willChange: 'color' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#3d2914'}
            />
          </button>
        </div>
        
        {/* Discount Badge */}
        {originalPrice && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-[#3d2914] to-[#2d1f0f] text-[#f5f1e8] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-[#b08968] bg-opacity-90 text-[#3d2914] px-3 py-1.5 rounded-full text-xs font-medium shadow-md">
            {category}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-3">
        {/* Product Title */}
        <h3 
          className="font-bold text-[#3d2914] text-lg leading-tight line-clamp-2 min-h-[3.5rem] transition-colors duration-500 ease-in-out"
          style={{ willChange: 'color' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#2d1f0f'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#3d2914'}
        >
          {title}
        </h3>
        
        {/* Rating Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`text-sm transition-all duration-300 ease-in-out ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-[#3d2914] opacity-70 font-medium">
            ({rating}.0)
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[#3d2914]">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-[#3d2914] opacity-60 line-through font-medium">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button 
            className="flex-1 bg-gradient-to-r from-[#3d2914] to-[#2d1f0f] text-[#f5f1e8] py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-500 ease-in-out"
            style={{ willChange: 'transform, box-shadow, background' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(to right, #2d1f0f, #3d2914)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.background = 'linear-gradient(to right, #3d2914, #2d1f0f)';
            }}
          >
            <FaShoppingCart className="text-sm" />
            Add to Cart
          </button>
          <button 
            className="bg-gradient-to-r from-[#b08968] to-[#9d7a5e] text-[#3d2914] py-3 px-4 rounded-xl font-semibold shadow-md transition-all duration-500 ease-in-out"
            style={{ willChange: 'transform, box-shadow, background' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(to right, #9d7a5e, #b08968)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.background = 'linear-gradient(to right, #b08968, #9d7a5e)';
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 