import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductSection from "../components/ProductSection";

const Products = () => {
  const navigate = useNavigate();

  // Category mapping for navigation
  const categoryRoutes = {
    "Ilkal Sarees & Handloom": "ilkal-sarees",
    "Traditional Food & Local Snacks": "traditional-food",
    "Stone & Wooden Carvings": "stone-wooden-carvings",
    "Pottery & Terracotta Crafts": "pottery-terracotta",
    "Miniature Sculptures & Souvenirs": "miniature-souvenirs",
  };

  const handleViewMore = (categoryTitle) => {
    const route = categoryRoutes[categoryTitle];
    if (route) {
      navigate(`/category/${route}`);
    }
  };
  // Sample product data for each category
  const ilkalSarees = [
    {
      id: 1,
      title: "Traditional Ilkal Silk Saree with Kasuti Border",
      price: 4500,
      originalPrice: 6000,
      image:
        "/images/sarees/743ad6d71c91dddd91019acfd6ecdff1.jpg",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 2,
      title: "Handwoven Cotton Ilkal Saree with Gold Thread",
      price: 3200,
      originalPrice: 4200,
      image:
        "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 3,
      title: "Premium Ilkal Silk Saree with Temple Border",
      price: 5800,
      image:
        "/images/sarees/21542895214a4eba815f502b3f6d25df.jpg",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 16,
      title: "Classic Red Ilkal Saree with Peacock Motifs",
      price: 3800,
      originalPrice: 4800,
      image:
        "/images/sarees/1c7485d9d22edb682bc7c5a4478b5c4e.jpg",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 17,
      title: "Elegant Blue Cotton Ilkal with Silver Zari",
      price: 2800,
      originalPrice: 3600,
      image:
        "/images/sarees/137cd9f93e1b8c09eaedb4d2f2821af8.jpg",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 18,
      title: "Bridal Ilkal Silk Saree with Heavy Border",
      price: 7200,
      originalPrice: 9000,
      image:
        "/images/sarees/8b691aeb62447e3f95cfc5343db225f1.jpg",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 101,
      title: "Festive Green Ilkal with Golden Border",
      price: 4200,
      originalPrice: 5200,
      image:
        "/images/sarees/07849796d1f948bad2639c8d3d10c836.jpg",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 102,
      title: "Contemporary Ilkal with Modern Design",
      price: 3600,
      image:
        "/images/sarees/a8121d302b4635f75c93007cc91f8d6b.jpg",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 103,
      title: "Handloom Ilkal with Traditional Checks",
      price: 2900,
      originalPrice: 3400,
      image:
        "/images/sarees/bec8403d28fb80e3bb310be9470859c6.jpg",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 104,
      title: "Vintage Style Ilkal with Heritage Pattern",
      price: 5200,
      image:
        "/images/sarees/cff51ce0b1b258f4f2c44929eb75156a.jpg",
      category: "Ilkal Sarees",
      rating: 5,
    },
  ];

  const traditionalFood = [
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
    {
      id: 105,
      title: "Homemade Ghee (500ml)",
      price: 480,
      originalPrice: 550,
      image:
        "/images/traditional foods and snacks/4d6469332c08595879ee5ceae4958882.jpg",
      category: "Traditional Food",
      rating: 5,
    },
  ];

  const stoneCarvings = [
    {
      id: 7,
      title: "Hampi Temple Miniature Stone Carving",
      price: 1200,
      originalPrice: 1500,
      image:
        "/images/stone carvings/f9ff37b2401df69eccd5646a09307d9a.jpg",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 8,
      title: "Wooden Ganesha Sculpture",
      price: 800,
      image:
        "/images/stone carvings/ef5b97c2c27b5c6219ef1f26bb7d90de.jpg",
      category: "Wooden Carvings",
      rating: 4,
    },
    {
      id: 9,
      title: "Intricate Stone Elephant Figurine",
      price: 950,
      originalPrice: 1200,
      image:
        "/images/stone carvings/e0372138703b058c3562b509574884cf.jpg",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 25,
      title: "Hand-carved Wooden Buddha Statue",
      price: 1800,
      originalPrice: 2200,
      image:
        "/images/stone carvings/d1d50d88ae337796195d386cd7391e22.jpg",
      category: "Wooden Carvings",
      rating: 5,
    },
    {
      id: 26,
      title: "Stone Lotus Flower Wall Art",
      price: 680,
      image:
        "/images/stone carvings/c8ebcc05c75c0a97146638194dc307c0.jpg",
      category: "Stone Carvings",
      rating: 4,
    },
    {
      id: 27,
      title: "Wooden Krishna Flute Player",
      price: 1200,
      originalPrice: 1500,
      image:
        "/images/stone carvings/c7b2a924a699d4113c9830f080ba101f.jpg",
      category: "Wooden Carvings",
      rating: 5,
    },
    {
      id: 28,
      title: "Intricately Carved Stone Peacock",
      price: 1450,
      originalPrice: 1800,
      image:
        "/images/stone carvings/b0e3ea7f7d709aea1f4eba4bef16f607.jpg",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 29,
      title: "Traditional Wooden Mask Collection",
      price: 750,
      image:
        "/images/stone carvings/8e9bb1f7a2df92158f8bcfd3bb693d11.jpg",
      category: "Wooden Carvings",
      rating: 4,
    },
    {
      id: 30,
      title: "Stone Hanuman Sculpture",
      price: 2200,
      originalPrice: 2800,
      image:
        "/images/stone carvings/85b628a683953ba2bed52a4d20390317.jpg",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 106,
      title: "Carved Wooden Jewelry Box",
      price: 950,
      originalPrice: 1150,
      image:
        "/images/stone carvings/76221dbbfe0b746625cc76557d8b4140.jpg",
      category: "Wooden Carvings",
      rating: 4,
    },
  ];

  const pottery = [
    {
      id: 10,
      title: "Traditional Terracotta Water Pot",
      price: 450,
      originalPrice: 600,
      image:
        "/images/pottery/0e53611af724be044015a5dd7469e864.jpg",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 11,
      title: "Handcrafted Terracotta Lamp Set",
      price: 320,
      image:
        "/images/pottery/2c15ff9cce2e79866ee3450b81b94515.jpg",
      category: "Terracotta",
      rating: 5,
    },
    {
      id: 12,
      title: "Decorative Clay Planters (Set of 3)",
      price: 680,
      originalPrice: 850,
      image:
        "/images/pottery/4470f5cb265c2ec91b5432c81cb2dfe7.jpg",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 31,
      title: "Large Terracotta Storage Jar",
      price: 850,
      originalPrice: 1100,
      image:
        "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg",
      category: "Pottery",
      rating: 5,
    },
    {
      id: 32,
      title: "Handpainted Clay Bowls (Set of 6)",
      price: 420,
      image:
        "/images/pottery/5464839dc1cd2af61062378c70a518f7.jpg",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 33,
      title: "Traditional Terracotta Coffee Cups",
      price: 280,
      originalPrice: 350,
      image:
        "/images/pottery/79c09aa0f017c452056b8bc202f0618e.jpg",
      category: "Terracotta",
      rating: 4,
    },
    {
      id: 34,
      title: "Decorative Clay Wind Chimes",
      price: 380,
      image:
        "/images/pottery/b9ed6322c94048a2feef644a9b855696.jpg",
      category: "Pottery",
      rating: 5,
    },
    {
      id: 35,
      title: "Artistic Terracotta Vase Collection",
      price: 620,
      originalPrice: 780,
      image:
        "/images/pottery/c5854d7184fcfe3e047362a3a4ce2672.jpg",
      category: "Terracotta",
      rating: 4,
    },
    {
      id: 36,
      title: "Traditional Clay Cooking Pot",
      price: 550,
      originalPrice: 700,
      image:
        "/images/pottery/d212c7515ab9d3fc1ec8ac080585eaaa.jpg",
      category: "Pottery",
      rating: 5,
    },
    {
      id: 107,
      title: "Handcrafted Clay Incense Burner",
      price: 250,
      originalPrice: 320,
      image:
        "/images/pottery/d3811730cbce71ecd998dfd3fae42695.jpg",
      category: "Pottery",
      rating: 4,
    },
  ];

  const souvenirs = [
    {
      id: 13,
      title: "Miniature Virupaksha Temple Model",
      price: 550,
      originalPrice: 750,
      image: "/images/miniature sculptures and souviners/1aa453f885da016446ae660c1f102e26.jpg",
      category: "Souvenirs",
      rating: 5,
    },
    {
      id: 14,
      title: "Hampi Ruins Brass Sculpture",
      price: 890,
      image: "/images/miniature sculptures and souviners/1cad38758266b4a859c52da7f86cc513.jpg",
      category: "Miniature Sculptures",
      rating: 4,
    },
    {
      id: 15,
      title: "Traditional Hampi Key Chain Collection",
      price: 120,
      originalPrice: 180,
      image: "/images/miniature sculptures and souviners/2342c49ed891abfe385b99ef19cbbc91.jpg",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 37,
      title: "Miniature Stone Chariot Replica",
      price: 1200,
      originalPrice: 1500,
      image: "/images/miniature sculptures and souviners/33884c622fea38280341a7d02aa357f5.jpg",
      category: "Miniature Sculptures",
      rating: 5,
    },
    {
      id: 38,
      title: "Hampi Magnetic Souvenir Set",
      price: 250,
      originalPrice: 320,
      image: "/images/miniature sculptures and souviners/394c1d1375cb96035a40b349b2aec24f.jpg",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 39,
      title: "Bronze Hampi Monument Collection",
      price: 1850,
      originalPrice: 2300,
      image: "/images/miniature sculptures and souviners/42b6f85498dae7f3ce474aa246af2889.jpg",
      category: "Miniature Sculptures",
      rating: 5,
    },
    {
      id: 40,
      title: "Hampi Postcard and Stamp Set",
      price: 180,
      image: "/images/miniature sculptures and souviners/5ae0ab25e48e90b522bbfa20a38ea710.jpg",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 41,
      title: "Miniature Vittala Temple with Pillars",
      price: 980,
      originalPrice: 1200,
      image: "/images/miniature sculptures and souviners/8ab1bba51cf5da1f236cc3cc9868cc9d.jpg",
      category: "Miniature Sculptures",
      rating: 5,
    },
    {
      id: 42,
      title: "Hampi Heritage Bookmark Collection",
      price: 150,
      originalPrice: 200,
      image: "/images/miniature sculptures and souviners/8dfaae4f6c8f3b28315867f575c4dd6d.jpg",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 108,
      title: "Handcrafted Hampi Map Art",
      price: 450,
      originalPrice: 580,
      image: "/images/miniature sculptures and souviners/efae85a4c8bd60a13120bd20c6b12a16.jpg",
      category: "Souvenirs",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="container-fluid mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f1e8] mb-4 sm:mb-6 relative">
            Our Products
            <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#d4c5a0] max-w-4xl mx-auto leading-relaxed font-medium">
            Discover our authentic Hampi collection featuring handcrafted
            treasures, traditional artifacts, and cultural masterpieces from the
            heart of Karnataka.
          </p>
        </div>
        <ProductSection
          title="Ilkal Sarees & Handloom"
          description="Exquisite handwoven sarees from Ilkal, featuring traditional kasuti embroidery and authentic silk-cotton blends that represent Karnataka's rich textile heritage."
          products={ilkalSarees}
          emoji="🥻"
          onViewMore={() => handleViewMore("Ilkal Sarees & Handloom")}
        />
        <ProductSection
          title="Traditional Food & Local Snacks"
          description="Authentic flavors of Hampi including traditional pickles, spice powders, and local delicacies that capture the essence of Karnataka cuisine."
          products={traditionalFood}
          emoji="🍯"
          onViewMore={() => handleViewMore("Traditional Food & Local Snacks")}
        />
        <ProductSection
          title="Stone & Wooden Carvings"
          description="Masterfully crafted sculptures and carvings inspired by Hampi's architectural marvels, created by skilled local artisans using traditional techniques."
          products={stoneCarvings}
          emoji="🗿"
          onViewMore={() => handleViewMore("Stone & Wooden Carvings")}
        />
        <ProductSection
          title="Pottery & Terracotta Crafts"
          description="Beautiful handcrafted pottery and terracotta items including traditional water pots, decorative lamps, and artistic planters made with local clay."
          products={pottery}
          emoji="🏺"
          onViewMore={() => handleViewMore("Pottery & Terracotta Crafts")}
        />
        <ProductSection
          title="Miniature Sculptures & Souvenirs"
          description="Perfect keepsakes and collectibles featuring miniature replicas of Hampi's iconic temples and monuments, crafted with attention to detail."
          products={souvenirs}
          emoji="🏛️"
          onViewMore={() => handleViewMore("Miniature Sculptures & Souvenirs")}
        />
        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-[#6b5b4b] max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f5f1e8] mb-4 sm:mb-6">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#d4c5a0] leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              We're constantly adding new products to our collection. Contact us
              for custom orders or if you're looking for something specific from
              Hampi's artisan community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-[#9d7a5e] text-sm sm:text-base">
                Custom Orders
              </button>
              <button className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
