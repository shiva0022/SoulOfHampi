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
    <section className="py-20 px-6 bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a]">
      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-bold text-[#f5f1e8] mb-4 relative">
              Handcrafted Specials
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
            </h2>
          </div>
          <p className="text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium">
            Exclusive collection of premium handcrafted items. Each piece is uniquely 
            created by master artisans preserving ancient techniques and cultural heritage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18">
          {specialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-[#9d7a5e] text-lg">
            Discover All Specials
          </button>
        </div>
      </div>
    </section>
  );
};

export default HandcraftedSpecials; 