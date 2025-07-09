import React from "react";

const Products = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420]">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-[#f5f1e8] mb-6 relative">
            Our Products
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
          </h1>
          <p className="text-2xl text-[#d4c5a0] max-w-3xl mx-auto leading-relaxed font-medium">
            Discover our authentic Hampi collection featuring handcrafted treasures, traditional artifacts, and cultural masterpieces.
          </p>
        </div>
        
        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-12 shadow-2xl border border-[#6b5b4b] max-w-4xl mx-auto">
          <div className="text-8xl mb-6">🏛️</div>
          <h2 className="text-4xl font-bold text-[#f5f1e8] mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-[#d4c5a0] leading-relaxed mb-8 max-w-2xl mx-auto">
            We're curating an extensive collection of authentic Hampi products. Our team is working hard to bring you the finest handcrafted items from skilled artisans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-[#9d7a5e]">
              Get Notified
            </button>
            <button className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Explore Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
