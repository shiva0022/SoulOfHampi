import React from "react";
import { FaTag, FaGift, FaCreditCard, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useCart } from "../context/CartContext";

const CartSummary = ({ itemCount, total, shipping, finalTotal }) => {
  const { clearCart } = useCart();

  const handleCheckout = () => {
    // Clear the cart
    clearCart();
    
    // Show success toast
    toast.success("Thank you for shopping!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: '#3d2914',
        color: '#f5f1e8',
        border: '2px solid #d4c5a0',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: 'bold'
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] p-6 sticky top-8">
    <h2 className="text-xl font-bold text-[#f5f1e8] mb-6 flex items-center gap-2">
      <FaTag className="text-[#d4c5a0]" />
      Order Summary
    </h2>
    <div className="space-y-4 mb-6">
      <div className="flex justify-between items-center">
        <span className="text-[#d4c5a0]">Subtotal ({itemCount} items)</span>
        <span className="text-[#f5f1e8] font-semibold">₹{total.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[#d4c5a0]">Shipping</span>
        <span className="text-[#f5f1e8] font-semibold">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
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
          <span className="text-lg font-bold text-[#f5f1e8]">Total</span>
          <span className="text-2xl font-bold text-[#d4c5a0]">₹{finalTotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
    <div className="space-y-3">
      <button 
        onClick={handleCheckout}
        className="w-full bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
      >
        <FaCreditCard className="text-lg" />
        Proceed to Checkout
      </button>
      <Link to="/products" className="w-full bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
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
  );
};

export default CartSummary; 