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
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 2,
      title: "Handwoven Cotton Ilkal Saree with Gold Thread",
      price: 3200,
      originalPrice: 4200,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 3,
      title: "Premium Ilkal Silk Saree with Temple Border",
      price: 5800,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 16,
      title: "Classic Red Ilkal Saree with Peacock Motifs",
      price: 3800,
      originalPrice: 4800,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 17,
      title: "Elegant Blue Cotton Ilkal with Silver Zari",
      price: 2800,
      originalPrice: 3600,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 18,
      title: "Bridal Ilkal Silk Saree with Heavy Border",
      price: 7200,
      originalPrice: 9000,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 5,
    },
    {
      id: 101,
      title: "Festive Green Ilkal with Golden Border",
      price: 4200,
      originalPrice: 5200,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 102,
      title: "Contemporary Ilkal with Modern Design",
      price: 3600,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 103,
      title: "Handloom Ilkal with Traditional Checks",
      price: 2900,
      originalPrice: 3400,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      category: "Ilkal Sarees",
      rating: 4,
    },
    {
      id: 104,
      title: "Vintage Style Ilkal with Heritage Pattern",
      price: 5200,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 5,
    },
    {
      id: 5,
      title: "Local Groundnut Chutney Powder",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 4,
    },
    {
      id: 6,
      title: "Authentic Jowar Roti Mix",
      price: 150,
      originalPrice: 200,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 4,
    },
    {
      id: 19,
      title: "Spicy Tamarind Gongura Pickle",
      price: 280,
      originalPrice: 350,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 5,
    },
    {
      id: 20,
      title: "Homemade Sesame Laddu (12 pieces)",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 4,
    },
    {
      id: 21,
      title: "Traditional Ragi Flour (1kg)",
      price: 120,
      originalPrice: 160,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 4,
    },
    {
      id: 22,
      title: "Hampi Special Coconut Burfi",
      price: 300,
      originalPrice: 400,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 5,
    },
    {
      id: 23,
      title: "Organic Jaggery Blocks (500g)",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 4,
    },
    {
      id: 24,
      title: "Mixed Spice Powder Collection",
      price: 380,
      originalPrice: 480,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      category: "Traditional Food",
      rating: 5,
    },
    {
      id: 105,
      title: "Homemade Ghee (500ml)",
      price: 480,
      originalPrice: 550,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 8,
      title: "Wooden Ganesha Sculpture",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Wooden Carvings",
      rating: 4,
    },
    {
      id: 9,
      title: "Intricate Stone Elephant Figurine",
      price: 950,
      originalPrice: 1200,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 25,
      title: "Hand-carved Wooden Buddha Statue",
      price: 1800,
      originalPrice: 2200,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Wooden Carvings",
      rating: 5,
    },
    {
      id: 26,
      title: "Stone Lotus Flower Wall Art",
      price: 680,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Stone Carvings",
      rating: 4,
    },
    {
      id: 27,
      title: "Wooden Krishna Flute Player",
      price: 1200,
      originalPrice: 1500,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Wooden Carvings",
      rating: 5,
    },
    {
      id: 28,
      title: "Intricately Carved Stone Peacock",
      price: 1450,
      originalPrice: 1800,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 29,
      title: "Traditional Wooden Mask Collection",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
      category: "Wooden Carvings",
      rating: 4,
    },
    {
      id: 30,
      title: "Stone Hanuman Sculpture",
      price: 2200,
      originalPrice: 2800,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Stone Carvings",
      rating: 5,
    },
    {
      id: 106,
      title: "Carved Wooden Jewelry Box",
      price: 950,
      originalPrice: 1150,
      image:
        "https://images.unsplash.com/photo-1585129332289-96baaaa73050?q=80&w=1000&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 11,
      title: "Handcrafted Terracotta Lamp Set",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Terracotta",
      rating: 5,
    },
    {
      id: 12,
      title: "Decorative Clay Planters (Set of 3)",
      price: 680,
      originalPrice: 850,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 31,
      title: "Large Terracotta Storage Jar",
      price: 850,
      originalPrice: 1100,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Pottery",
      rating: 5,
    },
    {
      id: 32,
      title: "Handpainted Clay Bowls (Set of 6)",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Pottery",
      rating: 4,
    },
    {
      id: 33,
      title: "Traditional Terracotta Coffee Cups",
      price: 280,
      originalPrice: 350,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Terracotta",
      rating: 4,
    },
    {
      id: 34,
      title: "Decorative Clay Wind Chimes",
      price: 380,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Pottery",
      rating: 5,
    },
    {
      id: 35,
      title: "Artistic Terracotta Vase Collection",
      price: 620,
      originalPrice: 780,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Terracotta",
      rating: 4,
    },
    {
      id: 36,
      title: "Traditional Clay Cooking Pot",
      price: 550,
      originalPrice: 700,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
      category: "Pottery",
      rating: 5,
    },
    {
      id: 107,
      title: "Handcrafted Clay Incense Burner",
      price: 250,
      originalPrice: 320,
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Souvenirs",
      rating: 5,
    },
    {
      id: 14,
      title: "Hampi Ruins Brass Sculpture",
      price: 890,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Miniature Sculptures",
      rating: 4,
    },
    {
      id: 15,
      title: "Traditional Hampi Key Chain Collection",
      price: 120,
      originalPrice: 180,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 37,
      title: "Miniature Stone Chariot Replica",
      price: 1200,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Miniature Sculptures",
      rating: 5,
    },
    {
      id: 38,
      title: "Hampi Magnetic Souvenir Set",
      price: 250,
      originalPrice: 320,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 39,
      title: "Bronze Hampi Monument Collection",
      price: 1850,
      originalPrice: 2300,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Miniature Sculptures",
      rating: 5,
    },
    {
      id: 40,
      title: "Hampi Postcard and Stamp Set",
      price: 180,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 41,
      title: "Miniature Vittala Temple with Pillars",
      price: 980,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      category: "Miniature Sculptures",
      rating: 5,
    },
    {
      id: 42,
      title: "Hampi Heritage Bookmark Collection",
      price: 150,
      originalPrice: 200,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
      category: "Souvenirs",
      rating: 4,
    },
    {
      id: 108,
      title: "Handcrafted Hampi Map Art",
      price: 450,
      originalPrice: 580,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
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
