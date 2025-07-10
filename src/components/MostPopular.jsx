import React from "react";
import ProductCard from "./ProductCard";

const MostPopular = () => {
  const popularProducts = [
    {
      id: 5,
      title: "Vintage Hampi Architecture Print",
      price: 599,
      originalPrice: 799,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
      category: "Art",
      rating: 5,
    },
    {
      id: 6,
      title: "Handcrafted Silver Anklets",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      category: "Jewelry",
      rating: 5,
    },
    {
      id: 7,
      title: "Traditional Cotton Kurta",
      price: 899,
      originalPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 8,
      title: "Stone Carved Buddha Statue",
      price: 3299,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a]">
      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f1e8] mb-4 relative">
              Most Popular
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Our best-selling products loved by thousands of customers. These
            items represent the essence of Hampi's rich cultural heritage and
            timeless beauty.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 scrollbar-hide">
          {popularProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:scale-105 border border-[#9d7a5e] text-base sm:text-lg">
            Explore All Popular Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
