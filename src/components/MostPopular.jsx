import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const MostPopular = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle horizontal scroll with mouse wheel
  const handleWheel = (e) => {
    const container = e.currentTarget;
    const scrollAmount = e.deltaY;
    container.scrollLeft += scrollAmount;
    e.preventDefault();
  };

  // Drag scrolling functions
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const container = scrollContainerRef.current;
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Navigation functions
  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const popularProducts = [
    {
      id: 5,
      title: "Vintage Hampi Architecture Print",
      price: 599,
      originalPrice: 799,
      image:
        "/images/miniature sculptures and souviners/2342c49ed891abfe385b99ef19cbbc91.jpg",
      category: "Art",
      rating: 5,
    },
    {
      id: 6,
      title: "Handcrafted Silver Anklets",
      price: 1499,
      image: "/images/pottery/4470f5cb265c2ec91b5432c81cb2dfe7.jpg",
      category: "Jewelry",
      rating: 5,
    },
    {
      id: 7,
      title: "Traditional Cotton Kurta",
      price: 899,
      originalPrice: 1199,
      image: "/images/sarees/1c7485d9d22edb682bc7c5a4478b5c4e.jpg",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 8,
      title: "Stone Carved Buddha Statue",
      price: 3299,
      image: "/images/stone carvings/54beeaad3c880ff443665dc033055409.jpg",
      category: "Sculptures",
      rating: 5,
    },
    {
      id: 9,
      title: "Handwoven Hemp Bag",
      price: 449,
      originalPrice: 599,
      image:
        "/images/traditional foods and snacks/27130747d60745ecf57dd6a6fab195b8.jpg",
      category: "Accessories",
      rating: 4,
    },
    {
      id: 10,
      title: "Traditional Incense Holder",
      price: 299,
      image:
        "/images/miniature sculptures and souviners/33884c622fea38280341a7d02aa357f5.jpg",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 11,
      title: "Carved Sandalwood Box",
      price: 1899,
      originalPrice: 2299,
      image: "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 12,
      title: "Traditional Brass Diya Set",
      price: 599,
      image: "/images/sarees/21542895214a4eba815f502b3f6d25df.jpg",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 13,
      title: "Embroidered Wall Hanging",
      price: 799,
      originalPrice: 999,
      image: "/images/stone carvings/76221dbbfe0b746625cc76557d8b4140.jpg",
      category: "Art",
      rating: 4,
    },
    {
      id: 14,
      title: "Handmade Paper Journal",
      price: 349,
      image:
        "/images/traditional foods and snacks/4d6469332c08595879ee5ceae4958882.jpg",
      category: "Stationery",
      rating: 4,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] overflow-x-hidden">
      <div className="container-fluid mx-auto w-full max-w-full">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f1e8] mb-4">
              Most Popular
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Our best-selling products loved by thousands of customers. These
            items represent the essence of Hampi's rich cultural heritage and
            timeless beauty.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#c4915c] hover:bg-[#e8b678] text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ zIndex: 10 }}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#c4915c] hover:bg-[#e8b678] text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ zIndex: 10 }}
          >
            <FaChevronRight size={20} />
          </button>

          <div
            ref={scrollContainerRef}
            className="product-scroll-container flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide px-2 sm:px-4 max-w-full cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
          >
            {popularProducts.map((product) => (
              <div key={product.id} className="product-card-container">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => navigate("/products")}
            className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:scale-105 border border-[#9d7a5e] text-base sm:text-lg"
          >
            Explore All Popular Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
