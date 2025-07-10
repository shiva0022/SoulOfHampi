import React from "react";
import { FaStar, FaCheck, FaTruck, FaUndo, FaShieldAlt, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

const ProductInfoPanel = ({
  product,
  quantity,
  handleQuantityChange,
  handleAddToCart,
  handleBuyNow,
  isAddedToCart,
}) => (
  <div className="lg:sticky lg:top-8 self-start space-y-6">
    {/* Product Title & Rating */}
    <div className="bg-gradient-to-br from-[#3d2914]/80 to-[#4a3420]/80 backdrop-blur-sm p-4 rounded-xl border border-[#6b5b4b]">
      <h1 className="text-3xl font-bold text-[#f5f1e8] mb-3">{product.title}</h1>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg">
          <span className="font-bold">{product.rating}</span>
          <FaStar className="text-sm" />
        </div>
        <span className="text-[#d4c5a0]">({product.reviewCount} reviews)</span>
      </div>
    </div>
    {/* Price */}
    <div className="bg-gradient-to-br from-[#3d2914]/80 to-[#4a3420]/80 backdrop-blur-sm p-4 rounded-xl border border-[#6b5b4b]">
      <div className="flex flex-wrap items-center gap-4 mb-2">
        <span className="text-4xl font-bold text-[#f5f1e8]">
          ₹{product.price.toLocaleString()}
        </span>
        {product.originalPrice && (
          <>
            <span className="text-xl text-[#d4c5a0] line-through opacity-70">
              ₹{product.originalPrice.toLocaleString()}
            </span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </>
        )}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
        <span className="text-green-500 font-medium">In Stock</span>
        <span className="text-[#d4c5a0] text-sm ml-2">(Fast shipping available)</span>
      </div>
    </div>
    {/* Highlights */}
    <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-xl p-4 border border-[#6b5b4b]">
      <h3 className="text-[#d4c5a0] font-semibold mb-3">Product Highlights</h3>
      <ul className="space-y-2">
        {product.highlights.map((highlight, index) => (
          <li key={index} className="flex items-center gap-2 text-[#f5f1e8]">
            <FaCheck className="text-green-500 text-sm" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
    {/* Quantity & Actions */}
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-[#f5f1e8] font-semibold">Quantity:</span>
        <div className="flex items-center gap-2 bg-[#2d1f0f] rounded-xl p-2 border border-[#6b5b4b]">
          <button
            onClick={() => handleQuantityChange("decrease")}
            disabled={quantity <= 1}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
              quantity <= 1 ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed" : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
            }`}
          >
            <FaMinus />
          </button>
          <span className="min-w-[3rem] text-center font-bold text-[#f5f1e8] text-lg">{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increase")}
            disabled={quantity >= 10}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
              quantity >= 10 ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed" : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
            }`}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          disabled={isAddedToCart}
          className={`flex-1 ${isAddedToCart ? "bg-green-600" : "bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0]"} text-[#3d2914] py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105`}
        >
          {isAddedToCart ? (
            <>
              <FaCheck className="text-white" />
              <span className="text-white">Added to Cart!</span>
            </>
          ) : (
            <>
              <FaShoppingCart />
              ADD TO CART
            </>
          )}
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
        >
          <FaShoppingCart />
          BUY NOW
        </button>
      </div>
    </div>
    {/* Delivery & Service Info */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-xl p-4 border border-[#6b5b4b] text-center">
        <FaTruck className="text-[#d4c5a0] text-2xl mx-auto mb-2" />
        <p className="text-[#f5f1e8] font-semibold">Free Delivery</p>
        <p className="text-[#d4c5a0] text-sm">Tomorrow</p>
      </div>
      <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-xl p-4 border border-[#6b5b4b] text-center">
        <FaUndo className="text-[#d4c5a0] text-2xl mx-auto mb-2" />
        <p className="text-[#f5f1e8] font-semibold">7 Days Return</p>
        <p className="text-[#d4c5a0] text-sm">Policy</p>
      </div>
      <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-xl p-4 border border-[#6b5b4b] text-center">
        <FaShieldAlt className="text-[#d4c5a0] text-2xl mx-auto mb-2" />
        <p className="text-[#f5f1e8] font-semibold">Warranty</p>
        <p className="text-[#d4c5a0] text-sm">1 Year</p>
      </div>
    </div>
  </div>
);

export default ProductInfoPanel; 