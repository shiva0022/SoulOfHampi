import React from "react";
import { FaHeart, FaShoppingCart, FaStar, FaEye } from "react-icons/fa";

const WishlistItemCard = ({
  item,
  handleAddToCart,
  handleMoveToCart,
  removeFromWishlist,
}) => (
  <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-102">
    {/* Product Image */}
    <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-[#2d1f0f] to-[#3d2914]">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
      />
      {/* Action Buttons Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3">
        <button
          onClick={() => handleAddToCart(item)}
          className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#d4c5a0] hover:scale-110"
        >
          <FaShoppingCart className="text-[#3d2914] text-sm sm:text-lg" />
        </button>
        <button className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-100 hover:scale-110">
          <FaEye className="text-[#3d2914] text-sm sm:text-lg" />
        </button>
      </div>
      {/* Remove from Wishlist */}
      <button
        onClick={() => removeFromWishlist(item.id)}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-red-50 hover:scale-110"
      >
        <FaHeart className="text-red-500 text-xs sm:text-sm" />
      </button>
      {/* Discount Badge */}
      {item.originalPrice && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <span className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] text-[#3d2914] px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
            {Math.round(
              ((item.originalPrice - item.price) / item.originalPrice) * 100
            )}
            % OFF
          </span>
        </div>
      )}
      {/* Category Badge */}
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
        <span className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
          {item.category}
        </span>
      </div>
    </div>
    {/* Product Info */}
    <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-[#f5f1e8] text-sm sm:text-base md:text-lg leading-tight flex-1 pr-2">
          {item.title}
        </h3>
        <div className="flex items-center gap-1 flex-shrink-0">
          <FaStar className="text-yellow-400 text-xs sm:text-sm" />
          <span className="text-xs sm:text-sm text-[#d4c5a0] font-semibold">
            {item.rating}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-lg sm:text-xl font-bold text-[#f5f1e8]">
          ₹{item.price.toLocaleString()}
        </span>
        {item.originalPrice && (
          <span className="text-xs sm:text-sm text-[#d4c5a0] opacity-70 line-through">
            ₹{item.originalPrice.toLocaleString()}
          </span>
        )}
      </div>
      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          onClick={() => handleMoveToCart(item)}
          className="flex-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-102 text-xs sm:text-sm"
        >
          <FaShoppingCart className="text-xs sm:text-sm" />
          Move to Cart
        </button>
      </div>
    </div>
  </div>
);

export default WishlistItemCard;
