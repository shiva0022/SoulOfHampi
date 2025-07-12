import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryHeader from "../components/CategoryHeader";
import BackButton from "../components/BackButton";
import ProductGrid from "../components/ProductGrid";
import CategoryPatternBackground from "../components/CategoryPatternBackground";
import { getAllProducts } from "../data/products";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});

  // Category mapping for getting products by category
  const categoryMapping = {
    "ilkal-sarees": {
      title: "Ilkal Sarees & Handloom",
      emoji: "🥻",
      description:
        "Exquisite handwoven sarees from Ilkal, featuring traditional kasuti embroidery and authentic silk-cotton blends that represent Karnataka's rich textile heritage.",
      categoryNames: ["Ilkal Sarees"],
    },
    "traditional-food": {
      title: "Traditional Food & Local Snacks",
      emoji: "🍯",
      description:
        "Authentic flavors of Hampi including traditional pickles, spice powders, and local delicacies that capture the essence of Karnataka cuisine.",
      categoryNames: ["Traditional Food"],
    },
    "stone-wooden-carvings": {
      title: "Stone & Wooden Carvings",
      emoji: "🗿",
      description:
        "Masterfully crafted sculptures and carvings inspired by Hampi's architectural marvels, created by skilled local artisans using traditional techniques.",
      categoryNames: ["Stone Carvings", "Wooden Carvings"],
    },
    "pottery-terracotta": {
      title: "Pottery & Terracotta Crafts",
      emoji: "🏺",
      description:
        "Beautiful handcrafted pottery and terracotta items including traditional water pots, decorative lamps, and artistic planters made with local clay.",
      categoryNames: ["Pottery", "Terracotta"],
    },
    "miniature-souvenirs": {
      title: "Miniature Sculptures & Souvenirs",
      emoji: "🏛️",
      description:
        "Perfect keepsakes and collectibles featuring miniature replicas of Hampi's iconic temples and monuments, crafted with attention to detail.",
      categoryNames: ["Miniature Sculptures", "Souvenirs"],
    },
  };

  useEffect(() => {
    const categoryData = categoryMapping[category];
    if (categoryData) {
      // Get all products from products.js
      const allProducts = getAllProducts();

      // Filter products by category names
      const categoryProducts = allProducts.filter((product) =>
        categoryData.categoryNames.includes(product.category)
      );

      setProducts(categoryProducts);
      setCategoryInfo({
        title: categoryData.title,
        emoji: categoryData.emoji,
        description: categoryData.description,
      });
    } else {
      // If category not found, redirect to products page
      navigate("/products");
    }
  }, [category, navigate]);

  const handleBackToProducts = () => {
    navigate("/products");
  };

  if (!products.length) {
    return (
      <div className="min-h-screen py-32 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-[#f5f1e8] mb-4">
            Category Not Found
          </h2>
          <p className="text-lg text-[#d4c5a0] mb-6">
            The requested category doesn't exist.
          </p>
          <BackButton onClick={handleBackToProducts} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] relative overflow-hidden">
      <CategoryPatternBackground
        categoryTitle={categoryInfo.title}
        mainEmoji={categoryInfo.emoji}
      />
      <div className="container-fluid mx-auto w-full">
        <div className="mb-8 animate-fade-in -mt-4">
          <BackButton onClick={handleBackToProducts} />
        </div>
        <CategoryHeader
          title={categoryInfo.title}
          emoji={categoryInfo.emoji}
          description={categoryInfo.description}
        />
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#f5f1e8] mb-4 relative inline-block">
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-[#d4c5a0] to-[#b08968] opacity-30"></span>
              <span className="relative">Featured Collection</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] mx-auto rounded-full"></div>
          </div>
          <ProductGrid products={products} />
        </div>
        {/* Enhanced Call to Action Section - Simplified & Elegant */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Main Content */}
            <div className="bg-gradient-to-br from-[#3d2914]/90 via-[#4a3420]/90 to-[#5a4a3a]/90 rounded-2xl p-12 shadow-xl border border-[#6b5b4b]/30 backdrop-blur-sm">
              <div className="text-4xl mb-6">✨</div>
              <h3 className="text-3xl font-bold text-[#f5f1e8] mb-6">
                Discover More Treasures
              </h3>
              <p className="text-lg text-[#d4c5a0]/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                Explore our complete collection of authentic Hampi treasures,
                each piece telling a story of Karnataka's rich cultural
                heritage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBackToProducts}
                  className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-102"
                >
                  Explore More Categories
                </button>

                <button className="border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-102">
                  Contact Our Artisans
                </button>
              </div>

              {/* Subtle Decorative Elements */}
              <div className="flex justify-center gap-6 mt-8 opacity-40">
                <div className="text-xl">🎨</div>
                <div className="text-xl">✨</div>
                <div className="text-xl">🏺</div>
                <div className="text-xl">🗿</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
