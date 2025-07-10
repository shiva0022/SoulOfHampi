import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { getProductById } from "../data/products";
import ProductCard from "../components/ProductCard";
import BreadcrumbNav from "../components/BreadcrumbNav";
import BackButton from "../components/BackButton";
import ImageGallery from "../components/ImageGallery";
import ProductInfoPanel from "../components/ProductInfoPanel";
import ProductTabs from "../components/ProductTabs";
import SimilarProducts from "../components/SimilarProducts";
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <BreadcrumbNav productTitle={product.title} />
        <div className="-mt-2 sm:-mt-4">
          <BackButton onClick={() => navigate(-1)} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-up">
          <ImageGallery
            product={product}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            isZoomed={isZoomed}
            setIsZoomed={setIsZoomed}
            zoomPosition={zoomPosition}
            setZoomPosition={setZoomPosition}
            isTransitioning={isTransitioning}
            setIsTransitioning={setIsTransitioning}
            inWishlist={inWishlist}
            handleWishlistToggle={handleWishlistToggle}
            toggleZoom={toggleZoom}
            handleImageZoom={handleImageZoom}
          />
          <ProductInfoPanel
            product={product}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            handleAddToCart={handleAddToCart}
            handleBuyNow={handleBuyNow}
            isAddedToCart={isAddedToCart}
          />
        </div>
        <ProductTabs
          product={product}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="animate-fade-in-up-stagger">
          <SimilarProducts similarProducts={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
