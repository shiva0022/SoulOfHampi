import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({
  title,
  description,
  products,
  emoji,
  onViewMore,
}) => (
  <div className="mb-20">
    <div className="text-center mb-12">
      <div className="text-6xl mb-4">{emoji}</div>
      <h2 className="text-4xl font-bold text-[#f5f1e8] mb-4">{title}</h2>
      <p className="text-lg text-[#d4c5a0] max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
    <div className="overflow-x-auto scrollbar-hide pt-8">
      <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
    <div className="text-center mt-8">
      <button
        onClick={onViewMore}
        className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
      >
        View More {title}
      </button>
    </div>
  </div>
);

export default ProductSection;
