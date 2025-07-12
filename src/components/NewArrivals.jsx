import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const navigate = useNavigate();

  const newProducts = [
    {
      id: 9,
      title: "Handwoven Bamboo Basket Set",
      price: 799,
      image:
        "/images/miniature sculptures and souviners/394c1d1375cb96035a40b349b2aec24f.jpg",
      category: "Handicrafts",
      rating: 4,
    },
    {
      id: 10,
      title: "Traditional Brass Oil Lamp",
      price: 649,
      originalPrice: 849,
      image: "/images/pottery/5464839dc1cd2af61062378c70a518f7.jpg",
      category: "Handicrafts",
      rating: 5,
    },
    {
      id: 11,
      title: "Embroidered Silk Cushion Covers",
      price: 449,
      image: "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg",
      category: "Textiles",
      rating: 4,
    },
    {
      id: 12,
      title: "Stone Carved Ganesha Idol",
      price: 1899,
      image: "/images/stone carvings/85b628a683953ba2bed52a4d20390317.jpg",
      category: "Sculptures",
      rating: 5,
    },
    {
      id: 13,
      title: "Handcrafted Leather Journal",
      price: 899,
      originalPrice: 1199,
      image:
        "/images/traditional foods and snacks/7030666c91f0bdaa1116f798c7226273.jpg",
      category: "Stationery",
      rating: 4,
    },
    {
      id: 14,
      title: "Traditional Wooden Comb",
      price: 299,
      image:
        "/images/miniature sculptures and souviners/42b6f85498dae7f3ce474aa246af2889.jpg",
      category: "Personal Care",
      rating: 4,
    },
    {
      id: 15,
      title: "Ceramic Tea Set with Traditional Design",
      price: 1599,
      originalPrice: 1999,
      image: "/images/pottery/79c09aa0f017c452056b8bc202f0618e.jpg",
      category: "Kitchenware",
      rating: 5,
    },
    {
      id: 16,
      title: "Handmade Soaps Gift Set",
      price: 449,
      image: "/images/sarees/743ad6d71c91dddd91019acfd6ecdff1.jpg",
      category: "Personal Care",
      rating: 4,
    },
    {
      id: 17,
      title: "Traditional Rangoli Stencils",
      price: 199,
      originalPrice: 299,
      image: "/images/stone carvings/8e9bb1f7a2df92158f8bcfd3bb693d11.jpg",
      category: "Art",
      rating: 4,
    },
    {
      id: 18,
      title: "Copper Water Jug with Glasses",
      price: 1299,
      image:
        "/images/traditional foods and snacks/846f78c0d8224bdfc17444b4b2f93788.jpg",
      category: "Kitchenware",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] overflow-x-hidden">
      <div className="container-fluid mx-auto w-full max-w-full">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f1e8] mb-4">
              New Arrivals
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Fresh additions to our collection. Discover the latest handcrafted
            treasures that have just arrived from our skilled artisans and
            master craftsmen.
          </p>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="product-scroll-container flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide px-2 sm:px-4 max-w-full">
          {newProducts.map((product) => (
            <div key={product.id} className="product-card-container">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => navigate("/products")}
            className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:scale-105 border border-[#9d7a5e] text-base sm:text-lg"
          >
            See All New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
