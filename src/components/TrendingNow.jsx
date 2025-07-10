import React from "react";
import ProductCard from "./ProductCard";

const TrendingNow = () => {
  const trendingProducts = [
    {
      id: 1,
      title: "Hampi Stone Carved Elephant",
      price: 2499,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
      rating: 5
    },
    {
      id: 2,
      title: "Traditional Handwoven Silk Saree",
      price: 1899,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 4
    },
    {
      id: 3,
      title: "Ancient Temple Bell Replica",
      price: 899,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 5
    },
    {
      id: 4,
      title: "Handcrafted Wooden Jewelry Box",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 4
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420]">
      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-bold text-[#f5f1e8] mb-4 relative">
              Trending Now
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
            </h2>
          </div>
          <p className="text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium">
            Discover the most popular items that our customers love. These trending products 
            showcase the best of Hampi's cultural heritage and craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-[#9d7a5e] text-lg">
            View All Trending Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow; 