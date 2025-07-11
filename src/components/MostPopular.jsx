import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const MostPopular = () => {
  const navigate = useNavigate();
  
  const popularProducts = [
    {
      id: 5,
      title: "Vintage Hampi Architecture Print",
      price: 599,
      originalPrice: 799,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Art",
      rating: 5,
    },
    {
      id: 6,
      title: "Handcrafted Silver Anklets",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
      category: "Jewelry",
      rating: 5,
    },
    {
      id: 7,
      title: "Traditional Cotton Kurta",
      price: 899,
      originalPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1622290291468-a28f7020eef4?q=80&w=1000&auto=format&fit=crop",
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
    {
      id: 9,
      title: "Handwoven Hemp Bag",
      price: 449,
      originalPrice: 599,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
      category: "Accessories",
      rating: 4,
    },
    {
      id: 10,
      title: "Traditional Incense Holder",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1609205624349-85a066e55e8c?q=80&w=1000&auto=format&fit=crop",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 11,
      title: "Carved Sandalwood Box",
      price: 1899,
      originalPrice: 2299,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 12,
      title: "Traditional Brass Diya Set",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1609205624349-85a066e55e8c?q=80&w=1000&auto=format&fit=crop",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 13,
      title: "Embroidered Wall Hanging",
      price: 799,
      originalPrice: 999,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Art",
      rating: 4,
    },
    {
      id: 14,
      title: "Handmade Paper Journal",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000&auto=format&fit=crop",
      category: "Stationery",
      rating: 4,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] overflow-x-hidden">
      <div className="container-fluid mx-auto w-full max-w-full">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f1e8] mb-4">
              Most Popular
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Our best-selling products loved by thousands of customers. These
            items represent the essence of Hampi's rich cultural heritage and
            timeless beauty.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="product-scroll-container flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide px-2 sm:px-4 max-w-full">
          {popularProducts.map((product) => (
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
            Explore All Popular Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
