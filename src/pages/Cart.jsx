import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaTag,
  FaGift,
  FaCreditCard,
  FaHeart,
} from "react-icons/fa";

const Cart = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  } = useCart();

  const total = getCartTotal();
  const itemCount = getCartItemsCount();
  const shipping = itemCount > 0 ? (total > 1000 ? 0 : 50) : 0;
  const finalTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">
            🛍️
          </div>
          <div className="absolute top-40 right-20 text-4xl opacity-10 animate-float-delayed">
            🎁
          </div>
          <div className="absolute bottom-32 left-20 text-5xl opacity-10 animate-float">
            💝
          </div>
          <div className="absolute bottom-20 right-10 text-3xl opacity-10 animate-float-delayed">
            🛒
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-full flex items-center justify-center shadow-2xl border border-[#6b5b4b]">
                <FaShoppingCart className="text-5xl text-[#d4c5a0]" />
              </div>
              <h1 className="text-4xl font-bold text-[#f5f1e8] mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-[#d4c5a0] mb-8">
                Discover our amazing collection of handcrafted products and add
                them to your cart!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
              >
                <FaShoppingCart className="text-lg" />
                Start Shopping
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
          🛍️
        </div>
        <div className="absolute top-60 right-10 text-4xl opacity-10 animate-float-delayed">
          🎨
        </div>
        <div className="absolute bottom-40 left-16 text-5xl opacity-10 animate-float">
          ✨
        </div>
        <div className="absolute bottom-20 right-20 text-3xl opacity-10 animate-float-delayed">
          🏺
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
                <h1 className="text-3xl font-bold text-[#f5f1e8] mb-2">
                  Shopping Cart
                </h1>
                <p className="text-[#d4c5a0]">
                  {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
                </p>
              </div>
            </div>

            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-medium flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                <FaTrash className="text-sm" />
                Clear Cart
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] p-6 transition-all duration-300 hover:shadow-3xl"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "slideInUp 0.6s ease-out forwards",
                }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#2d1f0f] to-[#3d2914] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.originalPrice && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] text-[#3d2914] px-2 py-1 rounded-full text-xs font-bold">
                          {Math.round(
                            ((item.originalPrice - item.price) /
                              item.originalPrice) *
                              100
                          )}
                          % OFF
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-[#f5f1e8] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#d4c5a0] mb-2">
                          Category: {item.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-all duration-300 text-white hover:scale-105"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      {/* Price */}
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

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-[#2d1f0f] rounded-xl p-2 border border-[#6b5b4b]">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                              item.quantity <= 1
                                ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed"
                                : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
                            }`}
                          >
                            <FaMinus className="text-sm" />
                          </button>

                          <span className="min-w-[2rem] text-center font-bold text-[#f5f1e8]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            disabled={item.quantity >= 10}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                              item.quantity >= 10
                                ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed"
                                : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
                            }`}
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-[#d4c5a0]">Subtotal</p>
                          <p className="text-lg font-bold text-[#f5f1e8]">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] p-6 sticky top-8">
              <h2 className="text-xl font-bold text-[#f5f1e8] mb-6 flex items-center gap-2">
                <FaTag className="text-[#d4c5a0]" />
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[#d4c5a0]">
                    Subtotal ({itemCount} items)
                  </span>
                  <span className="text-[#f5f1e8] font-semibold">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#d4c5a0]">Shipping</span>
                  <span className="text-[#f5f1e8] font-semibold">
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>

                {total > 1000 && (
                  <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-3">
                    <p className="text-green-400 text-sm flex items-center gap-2">
                      <FaGift className="text-green-400" />
                      Free shipping on orders over ₹1000!
                    </p>
                  </div>
                )}

                <div className="border-t border-[#6b5b4b] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#f5f1e8]">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-[#d4c5a0]">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
                  <FaCreditCard className="text-lg" />
                  Proceed to Checkout
                </button>

                <Link
                  to="/products"
                  className="w-full bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-[#6b5b4b]">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="text-[#d4c5a0] text-xs">
                    <FaHeart className="mx-auto mb-1 text-red-400" />
                    Handcrafted with Love
                  </div>
                  <div className="text-[#d4c5a0] text-xs">
                    <FaGift className="mx-auto mb-1 text-green-400" />
                    Free Gift Wrapping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
