import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const HandcraftedSpecials = () => {
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

  // Handle drag scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Navigation buttons
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

  const specialProducts = [
    {
      id: 13,
      title: "Spiced Millet Powder Blend",
      price: 4999,
      originalPrice: 6499,
      image:
        "/images/miniature sculptures and souviners/2342c49ed891abfe385b99ef19cbbc91.jpg",
      category: "Exclusive",
      rating: 5,
    },
    {
      id: 14,
      title: "Warli Art Pottery Vases",
      price: 2899,
      image: "/images/pottery/4470f5cb265c2ec91b5432c81cb2dfe7.jpg",
      category: "Jewelry", // Ideally should be "Home Decor" or "Handicrafts"
      rating: 5,
    },
    {
      id: 15,
      title: "Beige and Pink Silk Saree",
      price: 1699,
      originalPrice: 2199,
      image: "/images/sarees/1c7485d9d22edb682bc7c5a4478b5c4e.jpg",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 16,
      title: "Wooden Carved Goddess Statue",
      price: 2299,
      image: "/images/stone carvings/54beeaad3c880ff443665dc033055409.jpg",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 17,
      title: "Festive Indian Sweets Platter",
      price: 3499,
      originalPrice: 4299,
      image:
        "/images/traditional foods and snacks/27130747d60745ecf57dd6a6fab195b8.jpg",
      category: "Art", // Ideally should be "Food"
      rating: 5,
    },
    {
      id: 18,
      title: "Spiced Ground Lentil Mix",
      price: 5999,
      image:
        "/images/miniature sculptures and souviners/33884c622fea38280341a7d02aa357f5.jpg",
      category: "Sculptures", // Should ideally be "Food"
      rating: 5,
    },
    {
      id: 19,
      title: "Traditional Clay Lamps Collection",
      price: 7999,
      originalPrice: 9999,
      image: "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg",
      category: "Textiles", // Should ideally be "Handicrafts" or "Home Decor"
      rating: 5,
    },
    {
      id: 20,
      title: "Classic Kerala Kasavu Saree",
      price: 4499,
      image: "/images/sarees/21542895214a4eba815f502b3f6d25df.jpg",
      category: "Luxury",
      rating: 5,
    },
    {
      id: 21,
      title: "Temple Style Wooden Carving",
      price: 8999,
      originalPrice: 11999,
      image: "/images/stone carvings/76221dbbfe0b746625cc76557d8b4140.jpg",
      category: "Art",
      rating: 5,
    },
    {
      id: 22,
      title: "Traditional Kheer Dessert",
      price: 6999,
      image:
        "/images/traditional foods and snacks/4d6469332c08595879ee5ceae4958882.jpg",
      category: "Sculptures", // Should ideally be "Food"
      rating: 5,
    },
  ];


  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] overflow-x-hidden">
      <div className="container-fluid mx-auto w-full max-w-full">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f1e8] mb-4">
              Handcrafted Specials
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Exclusive collection of premium handcrafted items. Each piece is
            uniquely created by master artisans preserving ancient techniques
            and cultural heritage.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="relative lg:px-16">
          {/* Navigation Buttons - Hidden on mobile and tablet */}
          <button
            onClick={scrollToPrev}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#c4915c] hover:bg-[#e8b678] text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ zIndex: 10 }}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={scrollToNext}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#c4915c] hover:bg-[#e8b678] text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ zIndex: 10 }}
          >
            <FaChevronRight size={20} />
          </button>

          <div
            ref={scrollContainerRef}
            className="product-scroll-container flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide px-2 sm:px-4 lg:px-0 max-w-full cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
          >
            {specialProducts.map((product) => (
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
            Discover All Specials
          </button>
        </div>
      </div>
    </section>
  );
};

export default HandcraftedSpecials;
