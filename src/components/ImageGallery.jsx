import React, { useRef } from "react";
import { FaHeart, FaShare, FaSearch } from "react-icons/fa";

const ImageGallery = ({
  product,
  selectedImage,
  isZoomed,
  setIsZoomed,
  zoomPosition,
  setZoomPosition,
  inWishlist,
  handleWishlistToggle,
  toggleZoom,
  handleImageZoom,
}) => {
  const imageRef = useRef(null);

  // Use selectedImage if provided, otherwise fall back to first image from product images array
  const displayImage =
    selectedImage ||
    (product.images && product.images.length > 0
      ? product.images[0]
      : product.image);

  return (
    <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-2xl p-6 border border-[#6b5b4b]">
      <div
        className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#2d1f0f] to-[#3d2914] ${
          isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        } animate-fade-in-up`}
        onClick={toggleZoom}
        onMouseMove={isZoomed ? handleImageZoom : undefined}
        onMouseLeave={() => setIsZoomed(false)}
        ref={imageRef}
      >
        <img
          src={displayImage}
          alt={product.title}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={{
            ...(isZoomed && {
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }),
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"></div>

        {/* Zoom Icon */}
        <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white opacity-50 hover:opacity-100 transition-opacity">
          <FaSearch className="text-sm" />
        </div>
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleWishlistToggle();
          }}
          className={`absolute top-4 right-4 ${
            inWishlist ? "bg-red-500" : "bg-white/90"
          } p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <FaHeart
            className={inWishlist ? "text-white" : "text-red-500" + " text-lg"}
          />
        </button>
        {/* Share Button */}
        <button
          className="absolute top-4 left-4 bg-white/90 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          onClick={(e) => e.stopPropagation()}
          aria-label="Share product"
        >
          <FaShare className="text-[#3d2914] text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
