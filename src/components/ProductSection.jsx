import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { enhanceProductData } from "../data/products";

const ProductSection = ({
  title,
  description,
  products,
  emoji,
  onViewMore,
}) => {
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

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-4xl font-bold text-[#f5f1e8] mb-4">{title}</h2>
        <p className="text-lg text-[#d4c5a0] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Products Horizontal Scroll with Navigation */}
      <div
        className="relative pt-8 max-w-full lg:px-16"
        style={{ overflow: "visible" }}
      >
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
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
            overflowY: "visible",
          }}
        >
          <div className="flex gap-6 pb-4 pt-6 min-w-max px-2 sm:px-4 lg:px-0">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0">
                <ProductCard product={enhanceProductData(product)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onViewMore}
          className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          View More {title}
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
