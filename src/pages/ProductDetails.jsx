import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
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
  const location = useLocation();
  const selectedImage = location.state?.selectedImage;
  const passedProductData = location.state?.productData;
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const imageRef = useRef(null);

  useEffect(() => {
    // Use passed product data if available, otherwise fetch by ID
    let productData = passedProductData;

    if (!productData) {
      productData = getProductById(id);
    }

    setProduct(productData);

    // Mock fetch of similar products - in a real app, this would be from an API
    // Generate 4 similar products based on the same category
    if (productData) {
      // This is just a sample - in a real app you'd fetch actual similar products
      const mockSimilarProducts = [
        {
          id: "sim1",
          title: "Traditional Spicy Pickle Dish",
          price: Math.round(productData.price * 0.9),
          originalPrice: productData.price,
          image:
            "/images/miniature sculptures and souviners/8ab1bba51cf5da1f236cc3cc9868cc9d.jpg",
          images: [
            "/images/miniature sculptures and souviners/8ab1bba51cf5da1f236cc3cc9868cc9d.jpg",
            "/images/miniature sculptures and souviners/8dfaae4f6c8f3b28315867f575c4dd6d.jpg",
            "/images/miniature sculptures and souviners/c408a9e30f3653cf260b755656c6a307.jpg",
          ],
          category: productData.category,
          rating: (4 + Math.random()).toFixed(1),
        },
        {
          id: "sim2",
          title: "Handcrafted Pottery Lanterns",
          price: Math.round(productData.price * 1.1),
          image: "/images/pottery/ea7ccc87a9f5aaa8035f6435e4152920.jpg",
          images: [
            "/images/pottery/ea7ccc87a9f5aaa8035f6435e4152920.jpg",
            "/images/pottery/efff4b34f6eb52444743f54560ef1ec3.jpg",
            "/images/pottery/d212c7515ab9d3fc1ec8ac080585eaaa.jpg",
          ],
          category: productData.category,
          rating: (4 + Math.random()).toFixed(1),
        },
        {
          id: "sim3",
          title: "Elegant Woman in Ilkal Saree",
          price: Math.round(productData.price * 0.8),
          originalPrice: Math.round(productData.price * 1.2),
          image: "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg",
          images: [
            "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg",
            "/images/sarees/743ad6d71c91dddd91019acfd6ecdff1.jpg",
            "/images/sarees/a8121d302b4635f75c93007cc91f8d6b.jpg",
          ],
          category: productData.category,
          rating: (4 + Math.random()).toFixed(1),
        },
        {
          id: "sim4",
          title: "Intricately Carved Stone Sculpture",
          price: Math.round(productData.price * 1.3),
          image: "/images/stone carvings/31c8f806803a89b67c67faf77ea1ae20.jpg",
          images: [
            "/images/stone carvings/31c8f806803a89b67c67faf77ea1ae20.jpg",
            "/images/stone carvings/36f89b26427c2fed4ffec26ede480f45.jpg",
            "/images/stone carvings/54beeaad3c880ff443665dc033055409.jpg",
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
    <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2d1f0f] to-[#3d2914] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-full">
        <BreadcrumbNav productTitle={product.title} />
        <div className="-mt-2 sm:-mt-4">
          <BackButton onClick={() => navigate(-1)} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-up">
          <ImageGallery
            product={product}
            selectedImage={selectedImage}
            isZoomed={isZoomed}
            setIsZoomed={setIsZoomed}
            zoomPosition={zoomPosition}
            setZoomPosition={setZoomPosition}
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
        <div className="animate-fade-in-up">
          <SimilarProducts similarProducts={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
