import React from "react";
import ProductCard from "./ProductCard";

const SimilarProducts = ({ similarProducts }) => (
  <div className="mt-16 mb-8">
    <h2 className="text-2xl font-bold text-[#f5f1e8] mb-6 flex items-center">
      <span className="mr-2">You May Also Like</span>
      <div className="flex-grow h-0.5 bg-gradient-to-r from-[#d4c5a0] to-transparent"></div>
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {similarProducts.map((similarProduct, idx) => (
        <div
          key={similarProduct.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${idx * 120}ms` }}
        >
          <ProductCard product={similarProduct} />
        </div>
      ))}
    </div>
  </div>
);

export default SimilarProducts; 