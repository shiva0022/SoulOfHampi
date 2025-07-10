import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbNav = ({ productTitle }) => (
  <div className="flex items-center gap-2 mb-6 text-[#d4c5a0]">
    <Link to="/" className="hover:text-[#f5f1e8] transition-colors">
      Home
    </Link>
    <span>/</span>
    <Link to="/products" className="hover:text-[#f5f1e8] transition-colors">
      Products
    </Link>
    <span>/</span>
    <span className="text-[#f5f1e8]">{productTitle}</span>
  </div>
);

export default BreadcrumbNav; 