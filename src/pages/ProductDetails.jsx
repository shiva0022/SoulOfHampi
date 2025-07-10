import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { getProductById } from "../data/products";
import ProductCard from "../components/ProductCard";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaShare,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaTag,
  FaCheck,
  FaThumbsUp,
  FaUserCircle,
  FaSearch,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const imageRef = useRef(null);

  useEffect(() => {
    const productData = getProductById(id);
    setProduct(productData);

    // Mock fetch of similar products - in a real app, this would be from an API
    // Generate 4 similar products based on the same category
    if (productData) {
      // This is just a sample - in a real app you'd fetch actual similar products
      const mockSimilarProducts = [
        {
          id: "sim1",
          title: `Similar ${productData.category} - Handcrafted Art`,
          price: Math.round(productData.price * 0.9),
          originalPrice: productData.price,
          image:
            "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563208275-4e0976bc3465?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          category: productData.category,
          rating: (4 + Math.random()).toFixed(1),
        },
        {
          id: "sim2",
          title: `Traditional ${productData.category} - Hampi Art`,
          price: Math.round(productData.price * 1.1),
          image:
            "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1601577390902-37e9a8557332?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1569383118649-3e7c8ddb2955?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          category: productData.category,
          rating: (4 + Math.random()).toFixed(1),
        },
        {
          id: "sim3",
          title: `Modern ${productData.category} - Artisan Crafted`,
          price: Math.round(productData.price * 0.8),
          originalPrice: Math.round(productData.price * 1.2),
          image:
            "https://images.unsplash.com/photo-1580650587698-9ddd4c29abe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1580650587698-9ddd4c29abe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1588444650733-d98574632e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1588444837495-c6b736b31508?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          category: productData.category,
          rating: (4 + Math.random()).toFixed(1),
        },
        {
          id: "sim4",
          title: `Premium ${productData.category} - Collectible`,
          price: Math.round(productData.price * 1.3),
          image:
            "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1614018453562-77f6180ce036?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1620808335012-0db7b82b40df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          category: productData.category,
          rating: (4 + Math.random()).toFixed(1),
        },
      ];
      setSimilarProducts(mockSimilarProducts);
    }
  }, [id]);

  const inWishlist = product ? isInWishlist(product.id) : false;

  const handleQuantityChange = (action) => {
    if (action === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 2000);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      navigate("/cart");
    }
  };

  const handleWishlistToggle = () => {
    if (product) {
      if (inWishlist) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }
  };

  const handleImageZoom = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Navigate through images with arrow keys
  const nextImage = () => {
    if (
      product &&
      selectedImage < product.images.length - 1 &&
      !isTransitioning
    ) {
      setIsTransitioning(true);
      setSelectedImage(selectedImage + 1);

      // Reset transitioning state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Match this with the CSS transition duration
    }
  };

  const prevImage = () => {
    if (selectedImage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setSelectedImage(selectedImage - 1);

      // Reset transitioning state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Match this with the CSS transition duration
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] flex items-center justify-center">
        <div className="text-[#f5f1e8] text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914]">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-[#d4c5a0]">
          <Link to="/" className="hover:text-[#f5f1e8] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/products"
            className="hover:text-[#f5f1e8] transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-[#f5f1e8]">{product.title}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-[#3d2914] hover:bg-[#4a3420] p-3 rounded-xl transition-all duration-300 text-[#f5f1e8] border border-[#6b5b4b] hover:border-[#d4c5a0] flex items-center gap-2"
        >
          <FaArrowLeft />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-2xl p-6 border border-[#6b5b4b]">
              <div
                className={`relative aspect-square rounded-xl overflow-hidden bg-white ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
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
                      className={`absolute w-full h-full object-cover ${
                        selectedImage === idx
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-110 z-0"
                      } ${isZoomed ? "!scale-150" : ""}`}
                      style={
                        isZoomed
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
                            }
                      }
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
                      isTransitioning || selectedImage === 0
                        ? "cursor-not-allowed opacity-50"
                        : ""
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
                    disabled={
                      isTransitioning ||
                      selectedImage === product.images.length - 1
                    }
                    className={`w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300 transform hover:scale-110 shadow-lg ${
                      isTransitioning ||
                      selectedImage === product.images.length - 1
                        ? "cursor-not-allowed opacity-50"
                        : ""
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
                          setTimeout(() => {
                            setIsTransitioning(false);
                          }, 700);
                        }
                      }}
                      disabled={isTransitioning}
                      className={`h-2.5 rounded-full transition-all duration-500 ease-in-out cursor-pointer border border-white/40 shadow-sm ${
                        selectedImage === index
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/80 w-2.5"
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
                  className={`absolute top-4 right-4 ${
                    inWishlist ? "bg-red-500" : "bg-white/90"
                  } p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
                  aria-label={
                    inWishlist ? "Remove from wishlist" : "Add to wishlist"
                  }
                >
                  <FaHeart
                    className={`${
                      inWishlist ? "text-white" : "text-red-500"
                    } text-lg`}
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

            {/* Thumbnail Images with indicator for current position */}
            <div className="flex flex-wrap gap-3 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning && selectedImage !== index) {
                      setIsTransitioning(true);
                      setSelectedImage(index);
                      setTimeout(() => {
                        setIsTransitioning(false);
                      }, 700);
                    }
                  }}
                  disabled={isTransitioning}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-500 ease-in-out relative ${
                    selectedImage === index
                      ? "border-[#d4c5a0] scale-110 shadow-lg"
                      : "border-[#6b5b4b] hover:border-[#d4c5a0] hover:shadow-md"
                  } ${isTransitioning ? "opacity-70" : ""}`}
                  aria-label={`Select image ${index + 1}`}
                >
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={image}
                      alt={`Product thumbnail ${index + 1}`}
                      className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                        selectedImage === index
                          ? "scale-110"
                          : "hover:scale-110"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-white/20 transition-opacity duration-300 ${
                        selectedImage === index
                          ? "opacity-0"
                          : "opacity-100 hover:opacity-0"
                      }`}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="lg:sticky lg:top-8 self-start space-y-6">
            {/* Product Title & Rating */}
            <div className="bg-gradient-to-br from-[#3d2914]/80 to-[#4a3420]/80 backdrop-blur-sm p-4 rounded-xl border border-[#6b5b4b]">
              <h1 className="text-3xl font-bold text-[#f5f1e8] mb-3">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg">
                  <span className="font-bold">{product.rating}</span>
                  <FaStar className="text-sm" />
                </div>
                <span className="text-[#d4c5a0]">
                  ({product.reviewCount} reviews)
                </span>
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
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>

              {/* Stock status - Assuming product has this property; if not, you can hardcode for demo */}
              <div className="flex items-center gap-2 mt-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-green-500 font-medium">In Stock</span>
                <span className="text-[#d4c5a0] text-sm ml-2">
                  (Fast shipping available)
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-xl p-4 border border-[#6b5b4b]">
              <h3 className="text-[#d4c5a0] font-semibold mb-3">
                Product Highlights
              </h3>
              <ul className="space-y-2">
                {product.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-[#f5f1e8]"
                  >
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
                      quantity <= 1
                        ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed"
                        : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
                    }`}
                  >
                    <FaMinus />
                  </button>
                  <span className="min-w-[3rem] text-center font-bold text-[#f5f1e8] text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    disabled={quantity >= 10}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      quantity >= 10
                        ? "bg-[#4a3420] text-[#6b5b4b] cursor-not-allowed"
                        : "bg-[#d4c5a0] text-[#3d2914] hover:bg-[#b08968] active:scale-95"
                    }`}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddedToCart}
                  className={`flex-1 ${
                    isAddedToCart
                      ? "bg-green-600"
                      : "bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0]"
                  } text-[#3d2914] py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105`}
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
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-2xl border border-[#6b5b4b] overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-[#6b5b4b]">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#d4c5a0] text-[#3d2914]"
                      : "text-[#f5f1e8] hover:bg-[#4a3420]"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <p className="text-[#f5f1e8] text-lg leading-relaxed">
                    {product.description}
                  </p>
                  <div>
                    <h4 className="text-[#d4c5a0] font-semibold mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-[#f5f1e8]"
                        >
                          <FaCheck className="text-green-500 text-sm" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-3 border-b border-[#6b5b4b]"
                      >
                        <span className="text-[#d4c5a0] font-semibold">
                          {key}:
                        </span>
                        <span className="text-[#f5f1e8]">{value}</span>
                      </div>
                    )
                  )}
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#2d1f0f]/60 rounded-xl p-6 border border-[#6b5b4b]">
                    {/* Overall Rating */}
                    <div className="text-center">
                      <div className="text-5xl font-bold text-[#f5f1e8]">
                        {product.rating}
                      </div>
                      <div className="flex items-center gap-1 justify-center my-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-[#d4c5a0]">
                        Based on {product.reviewCount} reviews
                      </div>
                    </div>

                    {/* Rating Distribution */}
                    <div className="col-span-2 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        // Demo percentages - in real app would come from actual data
                        const percent =
                          rating === 5
                            ? 70
                            : rating === 4
                            ? 20
                            : rating === 3
                            ? 5
                            : rating === 2
                            ? 3
                            : 2;

                        return (
                          <div key={rating} className="flex items-center gap-2">
                            <span className="text-[#d4c5a0] w-6">{rating}</span>
                            <div className="flex items-center">
                              <FaStar className="text-yellow-400" />
                            </div>
                            <div className="flex-1 h-2 bg-[#6b5b4b] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-yellow-400"
                                style={{ width: `${percent}%` }}
                              ></div>
                            </div>
                            <span className="text-[#d4c5a0] w-8">
                              {percent}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Write a Review Section */}
                  <div className="bg-[#2d1f0f]/60 rounded-xl p-6 border border-[#6b5b4b]">
                    <h4 className="text-xl font-semibold text-[#f5f1e8] mb-4">
                      Write a Review
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[#d4c5a0] mb-2">
                          Your Rating
                        </label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              className="text-2xl text-gray-400 hover:text-yellow-400 transition-colors"
                              aria-label={`Rate ${star} stars`}
                            >
                              <FaStar />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[#d4c5a0] mb-2">
                          Your Review
                        </label>
                        <textarea
                          className="w-full bg-[#4a3420] border border-[#6b5b4b] rounded-lg p-3 text-[#f5f1e8] focus:outline-none focus:border-[#d4c5a0]"
                          rows="4"
                          placeholder="Share your thoughts about this product..."
                        ></textarea>
                      </div>
                      <button className="bg-[#d4c5a0] text-[#3d2914] py-2 px-6 rounded-lg font-semibold hover:bg-[#b08968] transition-all duration-300">
                        Submit Review
                      </button>
                    </div>
                  </div>

                  {/* Sample Reviews */}
                  <h4 className="text-xl font-semibold text-[#f5f1e8] mt-8 mb-4">
                    Customer Reviews
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Rajesh Kumar",
                        rating: 5,
                        date: "June 15, 2025",
                        verified: true,
                        comment:
                          "Excellent craftsmanship! The wooden elephant is beautifully carved and looks amazing in my living room.",
                      },
                      {
                        name: "Priya Sharma",
                        rating: 4,
                        date: "May 28, 2025",
                        verified: true,
                        comment:
                          "Great quality product. Fast delivery and secure packaging. Highly recommended!",
                      },
                      {
                        name: "Amit Patel",
                        rating: 5,
                        date: "July 2, 2025",
                        verified: false,
                        comment:
                          "Authentic Hampi artwork. Perfect for gifting. Very happy with the purchase.",
                      },
                    ].map((review, index) => (
                      <div
                        key={index}
                        className="bg-[#2d1f0f] rounded-xl p-4 border border-[#6b5b4b] hover:border-[#d4c5a0] transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-3">
                            <FaUserCircle className="text-[#d4c5a0] text-2xl" />
                            <div>
                              <div className="text-[#f5f1e8] font-semibold flex items-center gap-2">
                                {review.name}
                                {review.verified && (
                                  <span className="bg-green-600/20 text-green-500 text-xs px-2 py-0.5 rounded-full">
                                    Verified Purchase
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <FaStar
                                    key={star}
                                    className={`text-sm ${
                                      star <= review.rating
                                        ? "text-yellow-400"
                                        : "text-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-[#d4c5a0] text-sm">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-[#f5f1e8] mb-3">{review.comment}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1 text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors">
                            <FaThumbsUp className="text-sm" />
                            Helpful
                          </button>
                          <button className="text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors">
                            Report
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-bold text-[#f5f1e8] mb-6 flex items-center">
            <span className="mr-2">You May Also Like</span>
            <div className="flex-grow h-0.5 bg-gradient-to-r from-[#d4c5a0] to-transparent"></div>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Using ProductCard component for similar products */}
            {similarProducts.map((similarProduct) => (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
