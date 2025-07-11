import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const TrendingNow = () => {
  const navigate = useNavigate();
  
  const trendingProducts = [
    {
      id: 1,
      title: "Hampi Stone Carved Elephant",
      price: 2499,
      originalPrice: 3499,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
      rating: 5,
    },
    {
      id: 2,
      title: "Traditional Handwoven Silk Saree",
      price: 1899,
      originalPrice: 2499,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 3,
      title: "Ancient Temple Bell Replica",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 4,
      title: "Handcrafted Wooden Jewelry Box",
      price: 1299,
      originalPrice: 1599,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 4,
    },
    {
      id: 5,
      title: "Brass Oil Lamp with Intricate Design",
      price: 649,
      image:
        "https://images.unsplash.com/photo-1609205624349-85a066e55e8c?q=80&w=1000&auto=format&fit=crop",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 6,
      title: "Handwoven Basket Set",
      price: 899,
      originalPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 7,
      title: "Traditional Pottery Vase",
      price: 749,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 8,
      title: "Carved Wooden Photo Frame",
      price: 549,
      originalPrice: 699,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000&auto=format&fit=crop",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 9,
      title: "Miniature Stone Temple",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1000&auto=format&fit=crop",
      category: "Sculptures",
      rating: 5,
    },
    {
      id: 10,
      title: "Handmade Copper Water Bottle",
      price: 999,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      category: "Utility",
      rating: 4,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] overflow-x-hidden">
      <div className="container-fluid mx-auto w-full max-w-full">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f1e8] mb-4">
              Trending Now
            </h2>
          </div>
          <p className="font-primary text-base sm:text-lg lg:text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Discover the most popular items that our customers love. These
            trending products showcase the best of Hampi's cultural heritage and
            craftsmanship.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="product-scroll-container flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide px-2 sm:px-4 max-w-full">
          {trendingProducts.map((product) => (
            <div key={product.id} className="product-card-container">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button 
            onClick={() => navigate('/products')}
            className="font-primary font-medium tracking-wide bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:scale-105 border border-[#9d7a5e] text-base sm:text-lg"
          >
            View All Trending Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
