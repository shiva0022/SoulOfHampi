import React from "react";

const CategoryHeader = ({ title, emoji, description }) => (
  <div className="mb-8 text-center">
    <div className="text-8xl mb-2 animate-bounce-slow transition-transform hover:scale-110">
      {emoji}
    </div>
    <h1 className="text-3xl font-bold text-[#f5f1e8] mb-2">{title}</h1>
    <p className="text-lg text-[#d4c5a0] max-w-2xl mx-auto">{description}</p>
  </div>
);

export default CategoryHeader; 