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
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3d2914] mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-[#3d2914] opacity-80 max-w-2xl mx-auto">
            Discover the most popular items that our customers love. These trending products 
            showcase the best of Hampi's cultural heritage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#3d2914] hover:bg-[#2d1f0f] text-[#f5f1e8] px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
            View All Trending Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow; 