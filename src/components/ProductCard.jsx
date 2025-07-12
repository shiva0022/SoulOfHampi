import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaPlus,
  FaMinus,
  FaCheck,
} from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, title, price, image, images, category, rating, originalPrice } =
    product;
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  // Use the first image from images array if available, otherwise use the single image
  const displayImage = images && images.length > 0 ? images[0] : image;

  const inWishlist = isInWishlist(id);

  const handleQuantityDecrease = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (quantity < 10) {
      // Set a reasonable maximum limit
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product, quantity);
    setIsAdded(true);

    // Reset the "added" state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${id}`} className="block">
      <div
        className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl shadow-2xl border border-[#6b5b4b] transform transition-all duration-500 ease-in-out group hover:shadow-2xl w-[280px] sm:w-[300px] md:w-[320px] lg:w-[320px] h-[380px] sm:h-[400px] md:h-[420px] mx-auto relative overflow-hidden flex flex-col flex-shrink-0 cursor-pointer"
        style={{
          transform: "translateZ(0)",
          willChange: "transform, box-shadow",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateZ(0) scale(1.03) translateY(-4px)";
          e.currentTarget.style.boxShadow =
            "0 30px 60px -12px rgba(0, 0, 0, 0.4)";
          e.currentTarget.style.zIndex = "5";

          // Scale the image on hover
          const img = e.currentTarget.querySelector(".product-image");
          if (img) {
            img.style.transform = "scale(1.05)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateZ(0) scale(1) translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 20px 25px -5px rgba(0, 0, 0, 0.2)";
          e.currentTarget.style.zIndex = "1";

          // Reset the image scale
          const img = e.currentTarget.querySelector(".product-image");
          if (img) {
            img.style.transform = "scale(1)";
          }
        }}
      >
        {/* Full Width Product Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#2d1f0f] to-[#3d2914] h-40 sm:h-44 md:h-48">
          <img
            src={displayImage}
            alt={title}
            className="product-image absolute w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{
              willChange: "transform",
              transition: "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

          {/* Wishlist Button */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-30">
            <button
              onClick={handleWishlistToggle}
              className={`${
                inWishlist
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-white/90 hover:bg-red-50"
              } backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out`}
              style={{ willChange: "transform, background-color" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaHeart
                className={`${
                  inWishlist ? "text-white" : "text-[#3d2914]"
                } text-xs sm:text-sm transition-colors duration-300 ease-in-out`}
              />
            </button>
          </div>

          {/* Discount Badge */}
          {originalPrice && (
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
              <span className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] text-[#3d2914] px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                {Math.round(((originalPrice - price) / originalPrice) * 100)}%
                OFF
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
            <span className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Compact Product Information */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2 sm:space-y-3">
            {/* Product Title & Rating in same row */}
            <div className="flex justify-between items-start gap-2">
              <h3
                className="font-bold text-[#f5f1e8] text-sm sm:text-base md:text-lg leading-tight flex-1 group-hover:text-[#d4c5a0] transition-colors duration-300 h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {title}
              </h3>
              <div className="flex items-center gap-1 flex-shrink-0 mt-1">
                <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                <span className="text-xs sm:text-sm text-[#d4c5a0] font-semibold">
                  {rating}
                </span>
              </div>
            </div>

            {/* Price & Quantity in same row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#f5f1e8]">
                  ₹{price.toLocaleString()}
                </span>
                {originalPrice && (
                  <span className="text-xs sm:text-sm text-[#d4c5a0] opacity-70 line-through">
                    ₹{originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Compact Quantity Counter */}
              <div className="flex items-center gap-1 sm:gap-2 bg-[#2d1f0f] rounded-lg p-1 border border-[#6b5b4b]">
                <button
                  onClick={handleQuantityDecrease}
                  disabled={quantity <= 1}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center transition-all duration-200 ${
                    quantity <= 1
                      ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed"
                      : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
                  }`}
                >
                  <FaMinus className="text-xs" />
                </button>

                <span className="min-w-[1.25rem] sm:min-w-[1.5rem] text-center font-bold text-[#f5f1e8] text-xs sm:text-sm">
                  {quantity}
                </span>

                <button
                  onClick={handleQuantityIncrease}
                  disabled={quantity >= 10}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center transition-all duration-200 ${
                    quantity >= 10
                      ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed"
                      : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
                  }`}
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* Separated Action Buttons - Always at bottom */}
          <div className="mt-3 sm:mt-4 relative" style={{ zIndex: 15 }}>
            <div className="flex gap-1.5 sm:gap-2">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 ${
                  isAdded
                    ? "bg-green-600 hover:bg-green-600"
                    : "bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0]"
                } text-[#3d2914] py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl font-bold flex items-center justify-center gap-1 sm:gap-2 shadow-lg transition-all duration-300 ease-in-out border border-[#9d7a5e] hover:shadow-xl transform hover:scale-102 relative`}
                style={{
                  willChange: "transform, box-shadow, background",
                  zIndex: 20,
                }}
              >
                {isAdded ? (
                  <>
                    <FaCheck className="text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm text-white">
                      Added!
                    </span>
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm">
                      ₹{(price * quantity).toLocaleString()}
                    </span>
                  </>
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  navigate(`/product/${id}`);
                }}
                className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl font-bold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-102 flex items-center justify-center text-xs sm:text-sm relative"
                style={{
                  willChange: "transform, box-shadow, background",
                  zIndex: 20,
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
