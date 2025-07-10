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
import EmptyWishlistView from "../components/EmptyWishlistView";
import WishlistGrid from "../components/WishlistGrid";

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
    return <EmptyWishlistView />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">💝</div>
        <div className="absolute top-60 right-10 text-4xl opacity-10 animate-float-delayed">❤️</div>
        <div className="absolute bottom-40 left-16 text-5xl opacity-10 animate-float">💖</div>
        <div className="absolute bottom-20 right-20 text-3xl opacity-10 animate-float-delayed">💕</div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link to="/products" className="bg-[#3d2914] hover:bg-[#4a3420] p-3 rounded-xl transition-all duration-300 text-[#f5f1e8] border border-[#6b5b4b] hover:border-[#d4c5a0]">
                <FaArrowLeft className="text-lg" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-[#f5f1e8] mb-2 flex items-center gap-3">
                  <FaHeart className="text-red-400" />
                  My Wishlist
                </h1>
                <p className="text-[#d4c5a0]">{itemCount} {itemCount === 1 ? "item" : "items"} saved for later</p>
              </div>
            </div>
            {items.length > 0 && (
              <div className="flex gap-3">
                <button onClick={clearWishlist} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-medium flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
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
        <WishlistGrid
          items={items}
          handleAddToCart={handleAddToCart}
          handleMoveToCart={handleMoveToCart}
          removeFromWishlist={removeFromWishlist}
        />
        {/* Bottom Actions */}
        {items.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <FaGift className="text-[#d4c5a0] text-xl" />
                <span className="text-[#f5f1e8] font-semibold">Share your wishlist with friends!</span>
              </div>
              <div className="flex gap-3">
                <Link to="/products" className="flex-1 bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-2 px-4 rounded-xl font-bold transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">Continue Shopping</Link>
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
