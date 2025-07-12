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
          image: "/images/sarees/07849796d1f948bad2639c8d3d10c836.jpg",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 2,
          title: "Handwoven Cotton Ilkal Saree with Gold Thread",
          price: 3200,
          originalPrice: 4200,
          image: "/images/sarees/137cd9f93e1b8c09eaedb4d2f2821af8.jpg",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 3,
          title: "Premium Ilkal Silk Saree with Temple Border",
          price: 5800,
          image: "/images/sarees/1c7485d9d22edb682bc7c5a4478b5c4e.jpg",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 16,
          title: "Classic Red Ilkal Saree with Peacock Motifs",
          price: 3800,
          originalPrice: 4800,
          image: "/images/sarees/21542895214a4eba815f502b3f6d25df.jpg",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 17,
          title: "Elegant Blue Cotton Ilkal with Silver Zari",
          price: 2800,
          originalPrice: 3600,
          image: "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 18,
          title: "Bridal Ilkal Silk Saree with Heavy Border",
          price: 7200,
          originalPrice: 9000,
          image: "/images/sarees/743ad6d71c91dddd91019acfd6ecdff1.jpg",
          category: "Ilkal Sarees",
          rating: 5,
        },
        // Additional products for the category
        {
          id: 43,
          title: "Vintage Ilkal Cotton Saree with Traditional Weave",
          price: 2900,
          originalPrice: 3800,
          image: "/images/sarees/8b691aeb62447e3f95cfc5343db225f1.jpg",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 44,
          title: "Designer Ilkal Silk Saree with Modern Twist",
          price: 6500,
          originalPrice: 8000,
          image: "/images/sarees/a8121d302b4635f75c93007cc91f8d6b.jpg",
          category: "Ilkal Sarees",
          rating: 5,
        },
        {
          id: 45,
          title: "Handloom Ilkal Saree with Geometric Patterns",
          price: 4200,
          originalPrice: 5500,
          image: "/images/sarees/bec8403d28fb80e3bb310be9470859c6.jpg",
          category: "Ilkal Sarees",
          rating: 4,
        },
        {
          id: 46,
          title: "Premium Ilkal Wedding Saree Collection",
          price: 8500,
          originalPrice: 10000,
          image: "/images/sarees/cda4f03ca3634bd2d155aa32520e8e4b.jpg",
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
          image:
            "/images/traditional foods and snacks/21d4fed3220f3d2f35cd53b7c19b0eef.jpg",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 5,
          title: "Local Groundnut Chutney Powder",
          price: 180,
          image:
            "/images/traditional foods and snacks/125637335754342fa5addfd6a101002f.jpg",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 6,
          title: "Authentic Jowar Roti Mix",
          price: 150,
          originalPrice: 200,
          image:
            "/images/traditional foods and snacks/27130747d60745ecf57dd6a6fab195b8.jpg",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 19,
          title: "Spicy Tamarind Gongura Pickle",
          price: 280,
          originalPrice: 350,
          image:
            "/images/traditional foods and snacks/ce348b2f4bf95a5fabc314762ca74be3.jpg",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 20,
          title: "Homemade Sesame Laddu (12 pieces)",
          price: 220,
          image:
            "/images/traditional foods and snacks/a08c2ba0f9a21d09cd59e0dd0d66c6c6.jpg",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 21,
          title: "Traditional Ragi Flour (1kg)",
          price: 120,
          originalPrice: 160,
          image:
            "/images/traditional foods and snacks/e5068840ee813886af0aeda9b08985f6.jpg",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 22,
          title: "Hampi Special Coconut Burfi",
          price: 300,
          originalPrice: 400,
          image:
            "/images/traditional foods and snacks/85eb62403daffc2522514e776bc7109c.jpg",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 23,
          title: "Organic Jaggery Blocks (500g)",
          price: 140,
          image:
            "/images/traditional foods and snacks/846f78c0d8224bdfc17444b4b2f93788.jpg",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 24,
          title: "Mixed Spice Powder Collection",
          price: 380,
          originalPrice: 480,
          image:
            "/images/traditional foods and snacks/7030666c91f0bdaa1116f798c7226273.jpg",
          category: "Traditional Food",
          rating: 5,
        },
        // Additional products
        {
          id: 47,
          title: "Traditional Honey from Local Beekeepers",
          price: 450,
          originalPrice: 600,
          image:
            "/images/traditional foods and snacks/4d6469332c08595879ee5ceae4958882.jpg",
          category: "Traditional Food",
          rating: 5,
        },
        {
          id: 48,
          title: "Homemade Papaya Pickle",
          price: 200,
          originalPrice: 280,
          image:
            "/images/traditional foods and snacks/e9291ef31e9565165ed2af1211c2c38c.jpg",
          category: "Traditional Food",
          rating: 4,
        },
        {
          id: 49,
          title: "Special Bisi Bele Bath Mix",
          price: 190,
          image:
            "/images/traditional foods and snacks/f68d6754a81ad50a4a4146eb075c425f.jpg",
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
          image: "/images/stone carvings/f9ff37b2401df69eccd5646a09307d9a.jpg",
          category: "Stone Carvings",
          rating: 5,
        },
        {
          id: 8,
          title: "Wooden Ganesha Sculpture",
          price: 800,
          image: "/images/stone carvings/ef5b97c2c27b5c6219ef1f26bb7d90de.jpg",
          category: "Wooden Carvings",
          rating: 4,
        },
        {
          id: 9,
          title: "Intricate Stone Elephant Figurine",
          price: 950,
          originalPrice: 1200,
          image: "/images/stone carvings/e0372138703b058c3562b509574884cf.jpg",
          category: "Stone Carvings",
          rating: 5,
        },
        {
          id: 25,
          title: "Hand-carved Wooden Buddha Statue",
          price: 1800,
          originalPrice: 2200,
          image: "/images/stone carvings/d1d50d88ae337796195d386cd7391e22.jpg",
          category: "Wooden Carvings",
          rating: 5,
        },
        {
          id: 26,
          title: "Stone Lotus Flower Wall Art",
          price: 680,
          image: "/images/stone carvings/c8ebcc05c75c0a97146638194dc307c0.jpg",
          category: "Stone Carvings",
          rating: 4,
        },
        {
          id: 27,
          title: "Wooden Krishna Flute Player",
          price: 1200,
          originalPrice: 1500,
          image: "/images/stone carvings/c7b2a924a699d4113c9830f080ba101f.jpg",
          category: "Wooden Carvings",
          rating: 5,
        },
        {
          id: 28,
          title: "Intricately Carved Stone Peacock",
          price: 1450,
          originalPrice: 1800,
          image: "/images/stone carvings/b0e3ea7f7d709aea1f4eba4bef16f607.jpg",
          category: "Stone Carvings",
          rating: 5,
        },
        {
          id: 29,
          title: "Traditional Wooden Mask Collection",
          price: 750,
          image: "/images/stone carvings/8e9bb1f7a2df92158f8bcfd3bb693d11.jpg",
          category: "Wooden Carvings",
          rating: 4,
        },
        {
          id: 30,
          title: "Stone Hanuman Sculpture",
          price: 2200,
          originalPrice: 2800,
          image: "/images/stone carvings/85b628a683953ba2bed52a4d20390317.jpg",
          category: "Stone Carvings",
          rating: 5,
        },
        // Additional products
        {
          id: 50,
          title: "Wooden Dancing Nataraja Sculpture",
          price: 2500,
          originalPrice: 3200,
          image: "/images/stone carvings/76221dbbfe0b746625cc76557d8b4140.jpg",
          category: "Wooden Carvings",
          rating: 5,
        },
        {
          id: 51,
          title: "Stone Carved Temple Pillars Set",
          price: 3500,
          originalPrice: 4500,
          image: "/images/stone carvings/54beeaad3c880ff443665dc033055409.jpg",
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
          image: "/images/pottery/0e53611af724be044015a5dd7469e864.jpg",
          category: "Pottery",
          rating: 4,
        },
        {
          id: 11,
          title: "Handcrafted Terracotta Lamp Set",
          price: 320,
          image: "/images/pottery/2c15ff9cce2e79866ee3450b81b94515.jpg",
          category: "Terracotta",
          rating: 5,
        },
        {
          id: 12,
          title: "Decorative Clay Planters (Set of 3)",
          price: 680,
          originalPrice: 850,
          image: "/images/pottery/4470f5cb265c2ec91b5432c81cb2dfe7.jpg",
          category: "Pottery",
          rating: 4,
        },
        {
          id: 31,
          title: "Large Terracotta Storage Jar",
          price: 850,
          originalPrice: 1100,
          image: "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg",
          category: "Pottery",
          rating: 5,
        },
        {
          id: 32,
          title: "Handpainted Clay Bowls (Set of 6)",
          price: 420,
          image: "/images/pottery/5464839dc1cd2af61062378c70a518f7.jpg",
          category: "Pottery",
          rating: 4,
        },
        {
          id: 33,
          title: "Traditional Terracotta Coffee Cups",
          price: 280,
          originalPrice: 350,
          image: "/images/pottery/79c09aa0f017c452056b8bc202f0618e.jpg",
          category: "Terracotta",
          rating: 4,
        },
        {
          id: 34,
          title: "Decorative Clay Wind Chimes",
          price: 380,
          image: "/images/pottery/b9ed6322c94048a2feef644a9b855696.jpg",
          category: "Pottery",
          rating: 5,
        },
        {
          id: 35,
          title: "Artistic Terracotta Vase Collection",
          price: 620,
          originalPrice: 780,
          image: "/images/pottery/c5854d7184fcfe3e047362a3a4ce2672.jpg",
          category: "Terracotta",
          rating: 4,
        },
        {
          id: 36,
          title: "Traditional Clay Cooking Pot",
          price: 550,
          originalPrice: 700,
          image: "/images/pottery/d212c7515ab9d3fc1ec8ac080585eaaa.jpg",
          category: "Pottery",
          rating: 5,
        },
        // Additional products
        {
          id: 52,
          title: "Decorative Terracotta Garden Sculptures",
          price: 890,
          originalPrice: 1200,
          image: "/images/pottery/d3811730cbce71ecd998dfd3fae42695.jpg",
          category: "Terracotta",
          rating: 5,
        },
        {
          id: 53,
          title: "Traditional Clay Incense Holders",
          price: 150,
          originalPrice: 220,
          image: "/images/pottery/ea7ccc87a9f5aaa8035f6435e4152920.jpg",
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
          image:
            "/images/miniature sculptures and souviners/1aa453f885da016446ae660c1f102e26.jpg",
          category: "Souvenirs",
          rating: 5,
        },
        {
          id: 14,
          title: "Hampi Ruins Brass Sculpture",
          price: 890,
          image:
            "/images/miniature sculptures and souviners/1cad38758266b4a859c52da7f86cc513.jpg",
          category: "Miniature Sculptures",
          rating: 4,
        },
        {
          id: 15,
          title: "Traditional Hampi Key Chain Collection",
          price: 120,
          originalPrice: 180,
          image:
            "/images/miniature sculptures and souviners/2342c49ed891abfe385b99ef19cbbc91.jpg",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 37,
          title: "Miniature Stone Chariot Replica",
          price: 1200,
          originalPrice: 1500,
          image:
            "/images/miniature sculptures and souviners/33884c622fea38280341a7d02aa357f5.jpg",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 38,
          title: "Hampi Magnetic Souvenir Set",
          price: 250,
          originalPrice: 320,
          image:
            "/images/miniature sculptures and souviners/394c1d1375cb96035a40b349b2aec24f.jpg",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 39,
          title: "Bronze Hampi Monument Collection",
          price: 1850,
          originalPrice: 2300,
          image:
            "/images/miniature sculptures and souviners/42b6f85498dae7f3ce474aa246af2889.jpg",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 40,
          title: "Hampi Postcard and Stamp Set",
          price: 180,
          image:
            "/images/miniature sculptures and souviners/5ae0ab25e48e90b522bbfa20a38ea710.jpg",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 41,
          title: "Miniature Vittala Temple with Pillars",
          price: 980,
          originalPrice: 1200,
          image:
            "/images/miniature sculptures and souviners/8ab1bba51cf5da1f236cc3cc9868cc9d.jpg",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 42,
          title: "Hampi Heritage Bookmark Collection",
          price: 150,
          originalPrice: 200,
          image:
            "/images/miniature sculptures and souviners/8dfaae4f6c8f3b28315867f575c4dd6d.jpg",
          category: "Souvenirs",
          rating: 4,
        },
        // Additional products
        {
          id: 54,
          title: "Hampi Elephant Stables Model",
          price: 680,
          originalPrice: 900,
          image:
            "/images/miniature sculptures and souviners/c408a9e30f3653cf260b755656c6a307.jpg",
          category: "Miniature Sculptures",
          rating: 5,
        },
        {
          id: 55,
          title: "Traditional Hampi Calendar Set",
          price: 200,
          originalPrice: 280,
          image:
            "/images/miniature sculptures and souviners/efae85a4c8bd60a13120bd20c6b12a16.jpg",
          category: "Souvenirs",
          rating: 4,
        },
        {
          id: 56,
          title: "Hampi Heritage Photo Frames",
          price: 350,
          originalPrice: 450,
          image:
            "/images/miniature sculptures and souviners/1aa453f885da016446ae660c1f102e26.jpg",
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
