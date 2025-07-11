import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryHeader from "../components/CategoryHeader";
import BackButton from "../components/BackButton";
import ProductGrid from "../components/ProductGrid";
import CategoryPatternBackground from "../components/CategoryPatternBackground";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});

  // All products data (in a real app, this would come from an API)
  const allProductsData = {
    "ilkal-sarees": {
      title: "Ilkal Sarees & Handloom",
      emoji: "🥻",
      description:
        "Exquisite handwoven sarees from Ilkal, featuring traditional kasuti embroidery and authentic silk-cotton blends that represent Karnataka's rich textile heritage.",
      products: [
        {
          id: 1,
          title: "Traditional Ilkal Silk Saree with Kasuti Border",
          price: 4500,
          originalPrice: 6000,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 2,
          title: "Handwoven Cotton Ilkal Saree with Gold Thread",
          price: 3200,
          originalPrice: 4200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 3,
          title: "Premium Ilkal Silk Saree with Temple Border",
          price: 5800,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 16,
          title: "Classic Red Ilkal Saree with Peacock Motifs",
          price: 3800,
          originalPrice: 4800,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 17,
          title: "Elegant Blue Cotton Ilkal with Silver Zari",
          price: 2800,
          originalPrice: 3600,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 18,
          title: "Bridal Ilkal Silk Saree with Heavy Border",
          price: 7200,
          originalPrice: 9000,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 5,
        },
        // Additional products for the category
        {
          id: 43,
          title: "Vintage Ilkal Cotton Saree with Traditional Weave",
          price: 2900,
          originalPrice: 3800,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 44,
          title: "Designer Ilkal Silk Saree with Modern Twist",
          price: 6500,
          originalPrice: 8000,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 45,
          title: "Handloom Ilkal Saree with Geometric Patterns",
          price: 4200,
          originalPrice: 5500,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 46,
          title: "Premium Ilkal Wedding Saree Collection",
          price: 8500,
          originalPrice: 10000,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Ilkal Sarees",
          rating: 5,
        },
      ],
    },
    "traditional-food": {
      title: "Traditional Food & Local Snacks",
      emoji: "🍯",
      description:
        "Authentic flavors of Hampi including traditional pickles, spice powders, and local delicacies that capture the essence of Karnataka cuisine.",
      products: [
        {
          id: 4,
          title: "Hampi Special Mango Pickle (500g)",
          price: 250,
          originalPrice: 320,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 5,
          title: "Local Groundnut Chutney Powder",
          price: 180,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 6,
          title: "Authentic Jowar Roti Mix",
          price: 150,
          originalPrice: 200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 19,
          title: "Spicy Tamarind Gongura Pickle",
          price: 280,
          originalPrice: 350,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 20,
          title: "Homemade Sesame Laddu (12 pieces)",
          price: 220,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 21,
          title: "Traditional Ragi Flour (1kg)",
          price: 120,
          originalPrice: 160,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 22,
          title: "Hampi Special Coconut Burfi",
          price: 300,
          originalPrice: 400,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 23,
          title: "Organic Jaggery Blocks (500g)",
          price: 140,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 24,
          title: "Mixed Spice Powder Collection",
          price: 380,
          originalPrice: 480,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 5,
        },
        // Additional products
        {
          id: 47,
          title: "Traditional Honey from Local Beekeepers",
          price: 450,
          originalPrice: 600,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 48,
          title: "Homemade Papaya Pickle",
          price: 200,
          originalPrice: 280,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 49,
          title: "Special Bisi Bele Bath Mix",
          price: 190,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Traditional Food",
          rating: 4,
        },
      ],
    },
    "stone-wooden-carvings": {
      title: "Stone & Wooden Carvings",
      emoji: "🗿",
      description:
        "Masterfully crafted sculptures and carvings inspired by Hampi's architectural marvels, created by skilled local artisans using traditional techniques.",
      products: [
        {
          id: 7,
          title: "Hampi Temple Miniature Stone Carving",
          price: 1200,
          originalPrice: 1500,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Stone Carvings",
          rating: 5,
        },
        {
          id: 8,
          title: "Wooden Ganesha Sculpture",
          price: 800,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Wooden Carvings",
          rating: 4,
        },
        {
          id: 9,
          title: "Intricate Stone Elephant Figurine",
          price: 950,
          originalPrice: 1200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Stone Carvings",
          rating: 5,
        },
        {
          id: 25,
          title: "Hand-carved Wooden Buddha Statue",
          price: 1800,
          originalPrice: 2200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Wooden Carvings",
          rating: 5,
        },
        {
          id: 26,
          title: "Stone Lotus Flower Wall Art",
          price: 680,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Stone Carvings",
          rating: 4,
        },
        {
          id: 27,
          title: "Wooden Krishna Flute Player",
          price: 1200,
          originalPrice: 1500,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Wooden Carvings",
          rating: 5,
        },
        {
          id: 28,
          title: "Intricately Carved Stone Peacock",
          price: 1450,
          originalPrice: 1800,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Stone Carvings",
          rating: 5,
        },
        {
          id: 29,
          title: "Traditional Wooden Mask Collection",
          price: 750,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Wooden Carvings",
          rating: 4,
        },
        {
          id: 30,
          title: "Stone Hanuman Sculpture",
          price: 2200,
          originalPrice: 2800,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Stone Carvings",
          rating: 5,
        },
        // Additional products
        {
          id: 50,
          title: "Wooden Dancing Nataraja Sculpture",
          price: 2500,
          originalPrice: 3200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Wooden Carvings",
          rating: 5,
        },
        {
          id: 51,
          title: "Stone Carved Temple Pillars Set",
          price: 3500,
          originalPrice: 4500,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Stone Carvings",
          rating: 5,
        },
      ],
    },
    "pottery-terracotta": {
      title: "Pottery & Terracotta Crafts",
      emoji: "🏺",
      description:
        "Beautiful handcrafted pottery and terracotta items including traditional water pots, decorative lamps, and artistic planters made with local clay.",
      products: [
        {
          id: 10,
          title: "Traditional Terracotta Water Pot",
          price: 450,
          originalPrice: 600,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Pottery",
          rating: 4,
        },
        {
          id: 11,
          title: "Handcrafted Terracotta Lamp Set",
          price: 320,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Terracotta",
          rating: 5,
        },
        {
          id: 12,
          title: "Decorative Clay Planters (Set of 3)",
          price: 680,
          originalPrice: 850,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Pottery",
          rating: 4,
        },
        {
          id: 31,
          title: "Large Terracotta Storage Jar",
          price: 850,
          originalPrice: 1100,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Pottery",
          rating: 5,
        },
        {
          id: 32,
          title: "Handpainted Clay Bowls (Set of 6)",
          price: 420,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Pottery",
          rating: 4,
        },
        {
          id: 33,
          title: "Traditional Terracotta Coffee Cups",
          price: 280,
          originalPrice: 350,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Terracotta",
          rating: 4,
        },
        {
          id: 34,
          title: "Decorative Clay Wind Chimes",
          price: 380,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Pottery",
          rating: 5,
        },
        {
          id: 35,
          title: "Artistic Terracotta Vase Collection",
          price: 620,
          originalPrice: 780,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Terracotta",
          rating: 4,
        },
        {
          id: 36,
          title: "Traditional Clay Cooking Pot",
          price: 550,
          originalPrice: 700,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Pottery",
          rating: 5,
        },
        // Additional products
        {
          id: 52,
          title: "Decorative Terracotta Garden Sculptures",
          price: 890,
          originalPrice: 1200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Terracotta",
          rating: 5,
        },
        {
          id: 53,
          title: "Traditional Clay Incense Holders",
          price: 150,
          originalPrice: 220,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Pottery",
          rating: 4,
        },
      ],
    },
    "miniature-souvenirs": {
      title: "Miniature Sculptures & Souvenirs",
      emoji: "🏛️",
      description:
        "Perfect keepsakes and collectibles featuring miniature replicas of Hampi's iconic temples and monuments, crafted with attention to detail.",
      products: [
        {
          id: 13,
          title: "Miniature Virupaksha Temple Model",
          price: 550,
          originalPrice: 750,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Souvenirs",
          rating: 5,
        },
        {
          id: 14,
          title: "Hampi Ruins Brass Sculpture",
          price: 890,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Miniature Sculptures",
          rating: 4,
        },
        {
          id: 15,
          title: "Traditional Hampi Key Chain Collection",
          price: 120,
          originalPrice: 180,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 37,
          title: "Miniature Stone Chariot Replica",
          price: 1200,
          originalPrice: 1500,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 38,
          title: "Hampi Magnetic Souvenir Set",
          price: 250,
          originalPrice: 320,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 39,
          title: "Bronze Hampi Monument Collection",
          price: 1850,
          originalPrice: 2300,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 40,
          title: "Hampi Postcard and Stamp Set",
          price: 180,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 41,
          title: "Miniature Vittala Temple with Pillars",
          price: 980,
          originalPrice: 1200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 42,
          title: "Hampi Heritage Bookmark Collection",
          price: 150,
          originalPrice: 200,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Souvenirs",
          rating: 4,
        },
        // Additional products
        {
          id: 54,
          title: "Hampi Elephant Stables Model",
          price: 680,
          originalPrice: 900,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 55,
          title: "Traditional Hampi Calendar Set",
          price: 200,
          originalPrice: 280,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 56,
          title: "Hampi Heritage Photo Frames",
          price: 350,
          originalPrice: 450,
          image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?q=80&w=1000&auto=format&fit=crop",
          category: "Souvenirs",
          rating: 4,
        },
      ],
    },
  };

  useEffect(() => {
    const categoryData = allProductsData[category];
    if (categoryData) {
      setProducts(categoryData.products.slice(0, 10));
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
