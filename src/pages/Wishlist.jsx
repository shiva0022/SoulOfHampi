import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaArrowLeft,
  FaStar,
  FaGift,
  FaShare,
  FaEye,
} from "react-icons/fa";

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist, getWishlistItemsCount } =
    useWishlist();

  const { addToCart } = useCart();

  const itemCount = getWishlistItemsCount();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">
            💝
          </div>
          <div className="absolute top-40 right-20 text-4xl opacity-10 animate-float-delayed">
            💖
          </div>
          <div className="absolute bottom-32 left-20 text-5xl opacity-10 animate-float">
            ❤️
          </div>
          <div className="absolute bottom-20 right-10 text-3xl opacity-10 animate-float-delayed">
            💕
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-full flex items-center justify-center shadow-2xl border border-[#6b5b4b]">
                <FaHeart className="text-5xl text-[#d4c5a0]" />
              </div>
              <h1 className="text-4xl font-bold text-[#f5f1e8] mb-4">
                Your Wishlist is Empty
              </h1>
              <p className="text-lg text-[#d4c5a0] mb-8">
                Save your favorite handcrafted items and never lose track of
                what you love!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
              >
                <FaHeart className="text-lg" />
                Discover Products
              </Link>
              <Link
                to="/"
                className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
              >
                <FaArrowLeft className="text-lg" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">
          💝
        </div>
        <div className="absolute top-60 right-10 text-4xl opacity-10 animate-float-delayed">
          ❤️
        </div>
        <div className="absolute bottom-40 left-16 text-5xl opacity-10 animate-float">
          💖
        </div>
        <div className="absolute bottom-20 right-20 text-3xl opacity-10 animate-float-delayed">
          💕
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link
                to="/products"
                className="bg-[#3d2914] hover:bg-[#4a3420] p-3 rounded-xl transition-all duration-300 text-[#f5f1e8] border border-[#6b5b4b] hover:border-[#d4c5a0]"
              >
                <FaArrowLeft className="text-lg" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-[#f5f1e8] mb-2 flex items-center gap-3">
                  <FaHeart className="text-red-400" />
                  My Wishlist
                </h1>
                <p className="text-[#d4c5a0]">
                  {itemCount} {itemCount === 1 ? "item" : "items"} saved for
                  later
                </p>
              </div>
            </div>

            {items.length > 0 && (
              <div className="flex gap-3">
                <button
                  onClick={clearWishlist}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-medium flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                >
                  <FaTrash className="text-sm" />
                  Clear All
                </button>
                <button className="bg-[#d4c5a0] hover:bg-[#b08968] text-[#3d2914] py-2 px-4 rounded-xl font-medium flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  <FaShare className="text-sm" />
                  Share List
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-3xl hover:scale-102"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideInUp 0.6s ease-out forwards",
              }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#2d1f0f] to-[#3d2914]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
                />

                {/* Action Buttons Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#d4c5a0] hover:scale-110"
                  >
                    <FaShoppingCart className="text-[#3d2914] text-lg" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-100 hover:scale-110">
                    <FaEye className="text-[#3d2914] text-lg" />
                  </button>
                </div>

                {/* Remove from Wishlist */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-red-50 hover:scale-110"
                >
                  <FaHeart className="text-red-500 text-sm" />
                </button>

                {/* Discount Badge */}
                {item.originalPrice && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] text-[#3d2914] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {Math.round(
                        ((item.originalPrice - item.price) /
                          item.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[#f5f1e8] text-lg leading-tight flex-1 pr-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm text-[#d4c5a0] font-semibold">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-[#f5f1e8]">
                    ₹{item.price.toLocaleString()}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-[#d4c5a0] opacity-70 line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="flex-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-102"
                  >
                    <FaShoppingCart className="text-sm" />
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        {items.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <FaGift className="text-[#d4c5a0] text-xl" />
                <span className="text-[#f5f1e8] font-semibold">
                  Share your wishlist with friends!
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/products"
                  className="flex-1 bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-2 px-4 rounded-xl font-bold transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
                >
                  Continue Shopping
                </Link>
                <button className="flex-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-2 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
                  <FaShare className="text-sm" />
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
