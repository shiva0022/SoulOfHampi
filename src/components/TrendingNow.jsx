import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const TrendingNow = () => {
  const navigate = useNavigate();

  // Handle horizontal scroll with mouse wheel
  const handleWheel = (e) => {
    const container = e.currentTarget;
    const scrollAmount = e.deltaY;
    container.scrollLeft += scrollAmount;
    e.preventDefault();
  };

  const trendingProducts = [
    {
      id: 1,
      title: "Hampi Stone Carved Elephant",
      price: 2499,
      originalPrice: 3499,
      image:
        "/images/miniature sculptures and souviners/5ae0ab25e48e90b522bbfa20a38ea710.jpg",
      category: "Sculptures",
      rating: 5,
    },
    {
      id: 2,
      title: "Traditional Handwoven Silk Saree",
      price: 1899,
      originalPrice: 2499,
      image: "/images/pottery/b9ed6322c94048a2feef644a9b855696.jpg",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 3,
      title: "Ancient Temple Bell Replica",
      price: 899,
      image: "/images/sarees/8b691aeb62447e3f95cfc5343db225f1.jpg",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 4,
      title: "Handcrafted Wooden Jewelry Box",
      price: 1299,
      originalPrice: 1599,
      image: "/images/stone carvings/b0e3ea7f7d709aea1f4eba4bef16f607.jpg",
      category: "Handicrafts",
      rating: 4,
    },
    {
      id: 5,
      title: "Brass Oil Lamp with Intricate Design",
      price: 649,
      image:
        "/images/traditional foods and snacks/85eb62403daffc2522514e776bc7109c.jpg",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 6,
      title: "Handwoven Basket Set",
      price: 899,
      originalPrice: 1199,
      image:
        "/images/miniature sculptures and souviners/8ab1bba51cf5da1f236cc3cc9868cc9d.jpg",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 7,
      title: "Traditional Pottery Vase",
      price: 749,
      image: "/images/pottery/c5854d7184fcfe3e047362a3a4ce2672.jpg",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 8,
      title: "Carved Wooden Photo Frame",
      price: 549,
      originalPrice: 699,
      image: "/images/sarees/a8121d302b4635f75c93007cc91f8d6b.jpg",
      category: "Home Decor",
      rating: 4,
    },
    {
      id: 9,
      title: "Miniature Stone Temple",
      price: 1899,
      image: "/images/stone carvings/c7b2a924a699d4113c9830f080ba101f.jpg",
      category: "Sculptures",
      rating: 5,
    },
    {
      id: 10,
      title: "Handmade Copper Water Bottle",
      price: 999,
      originalPrice: 1299,
      image:
        "/images/traditional foods and snacks/a08c2ba0f9a21d09cd59e0dd0d66c6c6.jpg",
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
        <div
          className="product-scroll-container flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide px-2 sm:px-4 max-w-full"
          onWheel={handleWheel}
          style={{ scrollBehavior: "smooth" }}
        >
          {trendingProducts.map((product) => (
            <div key={product.id} className="product-card-container">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => navigate("/products")}
            className="font-primary tracking-wide bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:scale-105 border border-[#9d7a5e] text-base sm:text-lg"
          >
            View All Trending Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
