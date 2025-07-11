import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const HandcraftedSpecials = () => {
  const navigate = useNavigate();
  
  const specialProducts = [
    {
      id: 13,
      title: "Exclusive Hampi Temple Architecture Model",
      price: 4999,
      originalPrice: 6499,
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1000&auto=format&fit=crop",
      category: "Exclusive",
      rating: 5,
    },
    {
      id: 14,
      title: "Handcrafted Silver Filigree Necklace",
      price: 2899,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
      category: "Jewelry",
      rating: 5,
    },
    {
      id: 15,
      title: "Traditional Handloom Silk Dupatta",
      price: 1699,
      originalPrice: 2199,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 16,
      title: "Artisan Carved Sandalwood Box",
      price: 2299,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 17,
      title: "Premium Mysore Silk Painting",
      price: 3499,
      originalPrice: 4299,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Art",
      rating: 5,
    },
    {
      id: 18,
      title: "Handforged Bronze Sculpture",
      price: 5999,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
      rating: 5,
    },
    {
      id: 19,
      title: "Exclusive Kashmir Pashmina Shawl",
      price: 7999,
      originalPrice: 9999,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 5,
    },
    {
      id: 20,
      title: "Handcrafted Gold Plated Jewelry Box",
      price: 4499,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Luxury",
      rating: 5,
    },
    {
      id: 21,
      title: "Traditional Tanjore Painting",
      price: 8999,
      originalPrice: 11999,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Art",
      rating: 5,
    },
    {
      id: 22,
      title: "Master Craftsman Wooden Elephant",
      price: 6999,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
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
        <div className="product-scroll-container flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide px-2 sm:px-4 max-w-full">
          {specialProducts.map((product) => (
            <div key={product.id} className="product-card-container">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button 
            onClick={() => navigate('/products')}
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
