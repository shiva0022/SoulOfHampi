import React from "react";
import ProductCard from "./ProductCard";
import { enhanceProductData } from "../data/products";

const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={enhanceProductData(product)} />
    ))}
  </div>
);

export default ProductGrid; 