import React from "react";
import ProductCard from "./ProductCard";

const HandcraftedSpecials = () => {
  const specialProducts = [
    {
      id: 13,
      title: "Exclusive Hampi Temple Architecture Model",
      price: 4999,
      originalPrice: 6499,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Exclusive",
      rating: 5
    },
    {
      id: 14,
      title: "Handcrafted Silver Filigree Necklace",
      price: 2899,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      category: "Jewelry",
      rating: 5
    },
    {
      id: 15,
      title: "Traditional Handloom Silk Dupatta",
      price: 1699,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 4
    },
    {
      id: 16,
      title: "Artisan Carved Sandalwood Box",
      price: 2299,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#b08968] bg-opacity-10">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3d2914] mb-4">
            Handcrafted Specials
          </h2>
          <p className="text-lg text-[#3d2914] opacity-80 max-w-2xl mx-auto">
            Exclusive collection of premium handcrafted items. Each piece is uniquely 
            created by master artisans preserving ancient techniques.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#3d2914] hover:bg-[#2d1f0f] text-[#f5f1e8] px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
            Discover All Specials
          </button>
        </div>
      </div>
    </section>
  );
};

export default HandcraftedSpecials; 