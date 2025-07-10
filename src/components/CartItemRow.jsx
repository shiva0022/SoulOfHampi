import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartItemRow = ({ item, updateQuantity, removeFromCart }) => (
  <div
    className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] p-6 transition-all duration-300 hover:shadow-3xl"
  >
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Product Image */}
      <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#2d1f0f] to-[#3d2914] flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        {item.originalPrice && (
          <div className="absolute top-2 left-2">
            <span className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] text-[#3d2914] px-2 py-1 rounded-full text-xs font-bold">
              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>
      {/* Product Details */}
      <div className="flex-1 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-[#f5f1e8] mb-1">{item.title}</h3>
            <p className="text-sm text-[#d4c5a0] mb-2">Category: {item.category}</p>
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
            <span className="text-xl font-bold text-[#f5f1e8]">₹{item.price.toLocaleString()}</span>
            {item.originalPrice && (
              <span className="text-sm text-[#d4c5a0] opacity-70 line-through">₹{item.originalPrice.toLocaleString()}</span>
            )}
          </div>
          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#2d1f0f] rounded-xl p-2 border border-[#6b5b4b]">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${item.quantity <= 1 ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed" : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"}`}
              >
                <FaMinus className="text-sm" />
              </button>
              <span className="min-w-[2rem] text-center font-bold text-[#f5f1e8]">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                disabled={item.quantity >= 10}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${item.quantity >= 10 ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed" : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"}`}
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#d4c5a0]">Subtotal</p>
              <p className="text-lg font-bold text-[#f5f1e8]">₹{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CartItemRow; 