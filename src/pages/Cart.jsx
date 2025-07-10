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
import EmptyCartView from "../components/EmptyCartView";
import CartItemRow from "../components/CartItemRow";
import CartSummary from "../components/CartSummary";

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
    return <EmptyCartView />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🛍️</div>
        <div className="absolute top-60 right-10 text-4xl opacity-10 animate-float-delayed">🎨</div>
        <div className="absolute bottom-40 left-16 text-5xl opacity-10 animate-float">✨</div>
        <div className="absolute bottom-20 right-20 text-3xl opacity-10 animate-float-delayed">🏺</div>
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
                <h1 className="text-3xl font-bold text-[#f5f1e8] mb-2">Shopping Cart</h1>
                <p className="text-[#d4c5a0]">{itemCount} {itemCount === 1 ? "item" : "items"} in your cart</p>
              </div>
            </div>
            {items.length > 0 && (
              <button onClick={clearCart} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-medium flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
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
              <CartItemRow
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              itemCount={itemCount}
              total={total}
              shipping={shipping}
              finalTotal={finalTotal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
