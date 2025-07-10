import React from "react";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const newProducts = [
    {
      id: 9,
      title: "Handwoven Bamboo Basket Set",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 4,
    },
    {
      id: 10,
      title: "Traditional Brass Oil Lamp",
      price: 649,
      originalPrice: 849,
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 11,
      title: "Embroidered Silk Cushion Covers",
      price: 449,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 12,
      title: "Stone Carved Ganesha Idol",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420]">
      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f1e8] mb-4 relative">
              New Arrivals
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Fresh additions to our collection. Discover the latest handcrafted
            treasures that have just arrived from our skilled artisans and
            master craftsmen.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 scrollbar-hide">
          {newProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:scale-105 border border-[#9d7a5e] text-base sm:text-lg">
            See All New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
