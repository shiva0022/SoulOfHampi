import React, { useRef } from "react";
import { FaHeart, FaShare, FaSearch, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageGallery = ({
  product,
  selectedImage,
  setSelectedImage,
  isZoomed,
  setIsZoomed,
  zoomPosition,
  setZoomPosition,
  isTransitioning,
  setIsTransitioning,
  inWishlist,
  handleWishlistToggle,
  toggleZoom,
  handleImageZoom,
}) => {
  const imageRef = useRef(null);

  const nextImage = () => {
    if (
      product &&
      selectedImage < product.images.length - 1 &&
      !isTransitioning
    ) {
      setIsTransitioning(true);
      setSelectedImage(selectedImage + 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };
  const prevImage = () => {
    if (selectedImage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setSelectedImage(selectedImage - 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-2xl p-6 border border-[#6b5b4b]">
      <div
        className={`relative aspect-square rounded-xl overflow-hidden bg-white ${
          isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        } animate-fade-in-up`}
        onClick={toggleZoom}
        onMouseMove={isZoomed ? handleImageZoom : undefined}
        onMouseLeave={() => setIsZoomed(false)}
        ref={imageRef}
      >
        <div className="swiper-like-slider relative w-full h-full">
          {product.images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${product.title} - view ${idx + 1}`}
              className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out ${
                selectedImage === idx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
              } ${isZoomed ? "!scale-150" : ""} animate-fade-in-up`}
              style={{
                ...(isZoomed
                  ? {
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      willChange: "transform, opacity, scale",
                      transition:
                        "transform 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), scale 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }
                  : {
                      willChange: "transform, opacity, scale",
                      transition:
                        "transform 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), scale 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }),
                animationDelay: `${idx * 100}ms`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"></div>
        </div>
        {/* Image Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            disabled={isTransitioning || selectedImage === 0}
            className={`w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300 transform hover:scale-110 shadow-lg ${
              isTransitioning || selectedImage === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
            aria-label="Previous image"
          >
            <FaAngleLeft size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            disabled={isTransitioning || selectedImage === product.images.length - 1}
            className={`w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300 transform hover:scale-110 shadow-lg ${
              isTransitioning || selectedImage === product.images.length - 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            aria-label="Next image"
          >
            <FaAngleRight size={16} />
          </button>
        </div>
        {/* Image indicator dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-30">
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                if (!isTransitioning && selectedImage !== index) {
                  setIsTransitioning(true);
                  setSelectedImage(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              disabled={isTransitioning}
              className={`h-2.5 rounded-full transition-all duration-500 ease-in-out cursor-pointer border border-white/40 shadow-sm ${
                selectedImage === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80 w-2.5"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
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
          className={`absolute top-4 right-4 ${inWishlist ? "bg-red-500" : "bg-white/90"} p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <FaHeart className={inWishlist ? "text-white" : "text-red-500" + " text-lg"} />
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
      {/* Thumbnail Images */}
      <div className="flex flex-wrap gap-3 justify-center">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && selectedImage !== index) {
                setIsTransitioning(true);
                setSelectedImage(index);
                setTimeout(() => setIsTransitioning(false), 700);
              }
            }}
            disabled={isTransitioning}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-500 ease-in-out relative animate-fade-in-up-stagger ${
              selectedImage === index ? "border-[#d4c5a0] scale-110 shadow-lg" : "border-[#6b5b4b] hover:border-[#d4c5a0] hover:shadow-md"
            } ${isTransitioning ? "opacity-70" : ""}`}
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={`Select image ${index + 1}`}
          >
            <div className="w-full h-full overflow-hidden relative">
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                  selectedImage === index ? "scale-110" : "hover:scale-110"
                }`}
              />
              <div
                className={`absolute inset-0 bg-white/20 transition-opacity duration-300 ${
                  selectedImage === index ? "opacity-0" : "opacity-100 hover:opacity-0"
                }`}
              ></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 