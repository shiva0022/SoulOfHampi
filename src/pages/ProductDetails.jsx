import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { getProductById } from "../data/products";
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
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const productData = getProductById(id);
    setProduct(productData);
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {/* Wishlist Button */}
                <button
                  onClick={handleWishlistToggle}
                  className={`absolute top-4 right-4 ${
                    inWishlist ? "bg-red-500" : "bg-white/90"
                  } p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
                >
                  <FaHeart
                    className={`${
                      inWishlist ? "text-white" : "text-red-500"
                    } text-lg`}
                  />
                </button>
                {/* Share Button */}
                <button className="absolute top-4 left-4 bg-white/90 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                  <FaShare className="text-[#3d2914] text-lg" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-[#d4c5a0] scale-110"
                      : "border-[#6b5b4b] hover:border-[#d4c5a0]"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div>
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
            <div className="flex items-center gap-4">
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
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#f5f1e8]">
                        {product.rating}
                      </div>
                      <div className="flex items-center gap-1 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-[#d4c5a0] text-sm">
                        {product.reviewCount} reviews
                      </div>
                    </div>
                  </div>

                  {/* Sample Reviews */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "Rajesh Kumar",
                        rating: 5,
                        comment:
                          "Excellent craftsmanship! The wooden elephant is beautifully carved and looks amazing in my living room.",
                      },
                      {
                        name: "Priya Sharma",
                        rating: 4,
                        comment:
                          "Great quality product. Fast delivery and secure packaging. Highly recommended!",
                      },
                      {
                        name: "Amit Patel",
                        rating: 5,
                        comment:
                          "Authentic Hampi artwork. Perfect for gifting. Very happy with the purchase.",
                      },
                    ].map((review, index) => (
                      <div
                        key={index}
                        className="bg-[#2d1f0f] rounded-xl p-4 border border-[#6b5b4b]"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <FaUserCircle className="text-[#d4c5a0] text-2xl" />
                          <div>
                            <div className="text-[#f5f1e8] font-semibold">
                              {review.name}
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
                        <p className="text-[#f5f1e8]">{review.comment}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1 text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors">
                            <FaThumbsUp className="text-sm" />
                            Helpful
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
      </div>
    </div>
  );
};

export default ProductDetails;
