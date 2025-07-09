import React from "react";
import ProductCard from "./ProductCard";

const MostPopular = () => {
  const popularProducts = [
    {
      id: 5,
      title: "Vintage Hampi Architecture Print",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
      category: "Art",
      rating: 5
    },
    {
      id: 6,
      title: "Handcrafted Silver Anklets",
      price: 1499,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      category: "Jewelry",
      rating: 5
    },
    {
      id: 7,
      title: "Traditional Cotton Kurta",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 4
    },
    {
      id: 8,
      title: "Stone Carved Buddha Statue",
      price: 3299,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#b08968] bg-opacity-10">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3d2914] mb-4">
            Most Popular
          </h2>
          <p className="text-lg text-[#3d2914] opacity-80 max-w-2xl mx-auto">
            Our best-selling products loved by thousands of customers. These items 
            represent the essence of Hampi's rich cultural heritage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#3d2914] hover:bg-[#2d1f0f] text-[#f5f1e8] px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
            Explore All Popular Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostPopular; 