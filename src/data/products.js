// Central product data that can be used across the application
export const getAllProducts = () => {
  return [
    // Trending Products
    {
      id: 1,
      title: "Hampi Stone Carved Elephant",
      price: 2499,
      originalPrice: 3499,
      image: "/images/miniature sculptures and souviners/5ae0ab25e48e90b522bbfa20a38ea710.jpg",
      images: [
        "/images/miniature sculptures and souviners/1aa453f885da016446ae660c1f102e26.jpg",
        "/images/miniature sculptures and souviners/1cad38758266b4a859c52da7f86cc513.jpg",
        "/images/miniature sculptures and souviners/33884c622fea38280341a7d02aa357f5.jpg"
      ],
      category: "Sculptures",
      rating: 5,
      reviewCount: 127,
      description: "Exquisitely handcrafted stone elephant sculpture made by skilled artisans from Hampi. This beautiful piece represents the rich cultural heritage of Karnataka and makes a perfect addition to any home or office space.",
      features: [
        "Hand-carved from premium stone",
        "Traditional Hampi craftsmanship",
        "Natural stone finish",
        "Dimensions: 12 x 8 x 6 inches",
        "Weight: 2.5 kg"
      ],
      highlights: [
        "Authentic handmade product",
        "Eco-friendly materials",
        "Unique piece - no two are exactly alike",
        "Perfect for gifting"
      ],
      specifications: {
        "Material": "Natural Stone",
        "Dimensions": "12 x 8 x 6 inches",
        "Weight": "2.5 kg",
        "Origin": "Hampi, Karnataka",
        "Finish": "Natural Stone Polish"
      },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 2,
      title: "Traditional Handwoven Silk Saree",
      price: 1899,
      originalPrice: 2499,
      image: "/images/sarees/bec8403d28fb80e3bb310be9470859c6.jpg",
      images: [
        "/images/sarees/07849796d1f948bad2639c8d3d10c836.jpg",
        "/images/sarees/137cd9f93e1b8c09eaedb4d2f2821af8.jpg",
        "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg"
      ],
      category: "Textiles",
      rating: 4,
      reviewCount: 89,
      description: "Beautiful handwoven silk saree with traditional patterns. Made by expert weavers using age-old techniques passed down through generations.",
      features: [
        "Pure silk material",
        "Traditional weaving technique",
        "Vibrant colors",
        "Length: 6 meters",
        "Includes matching blouse piece"
      ],
      highlights: [
        "Handwoven by skilled artisans",
        "Premium quality silk",
        "Traditional design patterns",
        "Perfect for special occasions"
      ],
      specifications: {
        "Material": "Pure Silk",
        "Length": "6 meters",
        "Width": "1.2 meters", 
        "Origin": "Hampi, Karnataka",
        "Care": "Dry clean only"
      },
      inStock: true,
      deliveryInfo: "Free delivery in 2-3 days",
      returnPolicy: "7 days return policy"
    },
    {
      id: 3,
      title: "Ancient Temple Bell Replica",
      price: 899,
      originalPrice: 1199,
      image: "/images/pottery/ea7ccc87a9f5aaa8035f6435e4152920.jpg",
      images: [
        "/images/stone carvings/31c8f806803a89b67c67faf77ea1ae20.jpg",
        "/images/stone carvings/36f89b26427c2fed4ffec26ede480f45.jpg",
        "/images/stone carvings/54beeaad3c880ff443665dc033055409.jpg"
      ],
      category: "Handicrafts",
      rating: 5,
      reviewCount: 156,
      description: "Authentic replica of ancient temple bells found in Hampi's historic temples. Creates beautiful, resonant sounds perfect for meditation and spiritual practices.",
      features: [
        "Cast in traditional bronze",
        "Hand-finished details",
        "Clear, melodious tone",
        "Height: 8 inches",
        "Includes hanging chain"
      ],
      highlights: [
        "Authentic temple design",
        "High-quality bronze casting",
        "Perfect for meditation",
        "Handcrafted finishing"
      ],
      specifications: {
        "Material": "Bronze",
        "Height": "8 inches",
        "Weight": "600g",
        "Origin": "Hampi, Karnataka",
        "Finish": "Traditional Bronze Polish"
      },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 4,
      title: "Hampi Ruins Photography Print",
      price: 699,
      originalPrice: 899,
      image: "/images/stone carvings/e0372138703b058c3562b509574884cf.jpg",
      images: [
        "/images/miniature sculptures and souviners/394c1d1375cb96035a40b349b2aec24f.jpg",
        "/images/miniature sculptures and souviners/42b6f85498dae7f3ce474aa246af2889.jpg",
        "/images/miniature sculptures and souviners/5ae0ab25e48e90b522bbfa20a38ea710.jpg"
      ],
      category: "Art",
      rating: 4,
      reviewCount: 73,
      description: "Stunning high-quality print of Hampi's ancient ruins captured by professional photographers. Perfect for decorating your home or office with a piece of history.",
      features: [
        "High-resolution print",
        "Premium quality paper",
        "Fade-resistant inks",
        "Available in multiple sizes",
        "Ready to frame"
      ],
      highlights: [
        "Professional photography",
        "Museum-quality print",
        "Authentic Hampi imagery",
        "Perfect for wall art"
      ],
      specifications: {
        "Material": "Premium Art Paper",
        "Print Quality": "300 DPI",
        "Size": "16 x 12 inches",
        "Weight": "200g",
        "Finish": "Matte"
      },
      inStock: true,
      deliveryInfo: "Free delivery in 2-3 days",
      returnPolicy: "7 days return policy"
    },
    // Most Popular Products
    {
      id: 5,
      title: "Vintage Hampi Architecture Print",
      price: 599,
      originalPrice: 799,
      image: "/images/traditional foods and snacks/e5068840ee813886af0aeda9b08985f6.jpg",
      images: [
        "/images/miniature sculptures and souviners/8ab1bba51cf5da1f236cc3cc9868cc9d.jpg",
        "/images/miniature sculptures and souviners/8dfaae4f6c8f3b28315867f575c4dd6d.jpg",
        "/images/miniature sculptures and souviners/c408a9e30f3653cf260b755656c6a307.jpg"
      ],
      category: "Art",
      rating: 5,
      reviewCount: 102,
      description: "Vintage-style architectural print showcasing the magnificent temples and structures of Hampi. A perfect blend of history and artistry.",
      features: [
        "Vintage-style design",
        "High-quality printing",
        "Acid-free paper",
        "Multiple frame options",
        "Archival quality"
      ],
      highlights: [
        "Timeless vintage appeal",
        "Historic architectural details",
        "Perfect conversation piece",
        "Collector's item"
      ],
      specifications: {
        "Material": "Archival Paper",
        "Style": "Vintage",
        "Size": "14 x 10 inches",
        "Weight": "150g",
        "Finish": "Vintage Matte"
      },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 6,
      title: "Handcrafted Silver Anklets",
      price: 1499,
      image: "/images/pottery/2c15ff9cce2e79866ee3450b81b94515.jpg",
      images: [
        "/images/pottery/2c15ff9cce2e79866ee3450b81b94515.jpg",
        "/images/pottery/4470f5cb265c2ec91b5432c81cb2dfe7.jpg",
        "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg"
      ],
      category: "Jewelry",
      rating: 5,
      reviewCount: 67,
      description: "Beautiful handcrafted silver anklets with traditional design.",
      features: ["Pure silver", "Traditional design", "Comfortable fit"],
      highlights: ["Handcrafted jewelry", "Premium silver", "Traditional style"],
      specifications: { "Material": "Silver", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 7,
      title: "Traditional Cotton Kurta",
      price: 899,
      originalPrice: 1199,
      image: "/images/sarees/cff51ce0b1b258f4f2c44929eb75156a.jpg",
      images: [
        "/images/sarees/cff51ce0b1b258f4f2c44929eb75156a.jpg",
        "/images/sarees/deebb34ade30763c56b428160ec90c6c.jpg",
        "/images/sarees/cda4f03ca3634bd2d155aa32520e8e4b.jpg"
      ],
      category: "Textiles",
      rating: 4,
      reviewCount: 89,
      description: "Traditional cotton kurta with comfortable fit and classic design.",
      features: ["Pure cotton", "Traditional cut", "Comfortable fit"],
      highlights: ["Breathable fabric", "Traditional style", "Easy care"],
      specifications: { "Material": "Cotton", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery in 2-3 days",
      returnPolicy: "7 days return policy"
    },
    {
      id: 8,
      title: "Stone Carved Buddha Statue",
      price: 3299,
      image: "/images/stone carvings/ef5b97c2c27b5c6219ef1f26bb7d90de.jpg",
      images: [
        "/images/stone carvings/ef5b97c2c27b5c6219ef1f26bb7d90de.jpg",
        "/images/stone carvings/f9ff37b2401df69eccd5646a09307d9a.jpg",
        "/images/stone carvings/550e4ad91191c69fdee67a1741d10fb3.jpg"
      ],
      category: "Sculptures",
      rating: 5,
      reviewCount: 123,
      description: "Beautifully carved Buddha statue from natural stone.",
      features: ["Natural stone", "Hand carved", "Serene expression"],
      highlights: ["Spiritual significance", "Master craftsmanship", "Natural finish"],
      specifications: { "Material": "Natural Stone", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    // New Arrivals Products
    {
      id: 9,
      title: "Handwoven Bamboo Basket Set",
      price: 799,
      image: "/images/miniature sculptures and souviners/394c1d1375cb96035a40b349b2aec24f.jpg",
      images: [
        "/images/miniature sculptures and souviners/394c1d1375cb96035a40b349b2aec24f.jpg",
        "/images/miniature sculptures and souviners/42b6f85498dae7f3ce474aa246af2889.jpg",
        "/images/miniature sculptures and souviners/5ae0ab25e48e90b522bbfa20a38ea710.jpg"
      ],
      category: "Handicrafts",
      rating: 4,
      reviewCount: 45,
      description: "Beautiful handwoven bamboo basket set perfect for home organization and decoration.",
      features: ["Natural bamboo", "Handwoven design", "Set of 3 baskets", "Eco-friendly"],
      highlights: ["Sustainable material", "Traditional weaving", "Multipurpose use"],
      specifications: { "Material": "Bamboo", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery in 2-3 days",
      returnPolicy: "7 days return policy"
    },
    {
      id: 10,
      title: "Traditional Brass Oil Lamp",
      price: 649,
      originalPrice: 849,
      image: "/images/pottery/5464839dc1cd2af61062378c70a518f7.jpg",
      images: [
        "/images/pottery/5464839dc1cd2af61062378c70a518f7.jpg",
        "/images/pottery/79c09aa0f017c452056b8bc202f0618e.jpg",
        "/images/pottery/b9ed6322c94048a2feef644a9b855696.jpg"
      ],
      category: "Handicrafts",
      rating: 5,
      reviewCount: 67,
      description: "Traditional brass oil lamp with intricate design, perfect for religious ceremonies.",
      features: ["Pure brass construction", "Traditional design", "Easy to clean"],
      highlights: ["Authentic craftsmanship", "Religious significance", "Durable material"],
      specifications: { "Material": "Brass", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 11,
      title: "Embroidered Silk Cushion Covers",
      price: 449,
      image: "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg",
      images: [
        "/images/sarees/4ce921addf51f774aeec8966aa5c7863.jpg",
        "/images/sarees/743ad6d71c91dddd91019acfd6ecdff1.jpg",
        "/images/sarees/8b691aeb62447e3f95cfc5343db225f1.jpg"
      ],
      category: "Textiles",
      rating: 4,
      reviewCount: 32,
      description: "Beautifully embroidered silk cushion covers to enhance your home decor.",
      features: ["Pure silk material", "Hand embroidered", "Set of 2 covers"],
      highlights: ["Premium silk", "Traditional embroidery", "Easy maintenance"],
      specifications: { "Material": "Silk", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery in 2-3 days",
      returnPolicy: "7 days return policy"
    },
    {
      id: 12,
      title: "Stone Carved Ganesha Idol",
      price: 1899,
      image: "/images/stone carvings/85b628a683953ba2bed52a4d20390317.jpg",
      images: [
        "/images/stone carvings/85b628a683953ba2bed52a4d20390317.jpg",
        "/images/stone carvings/8e9bb1f7a2df92158f8bcfd3bb693d11.jpg",
        "/images/stone carvings/b0e3ea7f7d709aea1f4eba4bef16f607.jpg"
      ],
      category: "Sculptures",
      rating: 5,
      reviewCount: 89,
      description: "Exquisitely carved Ganesha idol from natural stone by master craftsmen.",
      features: ["Natural stone", "Hand carved", "Traditional design"],
      highlights: ["Spiritual significance", "Master craftsmanship", "Natural finish"],
      specifications: { "Material": "Natural Stone", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    // Handcrafted Specials Products
    {
      id: 13,
      title: "Exclusive Hampi Temple Architecture Model",
      price: 4999,
      originalPrice: 6499,
      image: "/images/miniature sculptures and souviners/2342c49ed891abfe385b99ef19cbbc91.jpg",
      images: [
        "/images/miniature sculptures and souviners/2342c49ed891abfe385b99ef19cbbc91.jpg",
        "/images/miniature sculptures and souviners/8ab1bba51cf5da1f236cc3cc9868cc9d.jpg",
        "/images/miniature sculptures and souviners/8dfaae4f6c8f3b28315867f575c4dd6d.jpg"
      ],
      category: "Exclusive",
      rating: 5,
      reviewCount: 23,
      description: "Detailed miniature model of famous Hampi temple architecture.",
      features: ["Detailed architecture", "Premium materials", "Collector's item"],
      highlights: ["Museum quality", "Historical accuracy", "Limited edition"],
      specifications: { "Material": "Mixed Media", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 14,
      title: "Handcrafted Silver Filigree Necklace",
      price: 2899,
      image: "/images/pottery/4470f5cb265c2ec91b5432c81cb2dfe7.jpg",
      images: [
        "/images/pottery/4470f5cb265c2ec91b5432c81cb2dfe7.jpg",
        "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg",
        "/images/pottery/c5854d7184fcfe3e047362a3a4ce2672.jpg"
      ],
      category: "Jewelry",
      rating: 5,
      reviewCount: 67,
      description: "Exquisite silver filigree necklace crafted by skilled artisans.",
      features: ["Pure silver", "Filigree work", "Traditional design"],
      highlights: ["Handcrafted jewelry", "Premium silver", "Traditional technique"],
      specifications: { "Material": "Silver", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 15,
      title: "Traditional Handloom Silk Dupatta",
      price: 1699,
      originalPrice: 2199,
      image: "/images/sarees/1c7485d9d22edb682bc7c5a4478b5c4e.jpg",
      images: [
        "/images/sarees/1c7485d9d22edb682bc7c5a4478b5c4e.jpg",
        "/images/sarees/21542895214a4eba815f502b3f6d25df.jpg",
        "/images/sarees/a8121d302b4635f75c93007cc91f8d6b.jpg"
      ],
      category: "Textiles",
      rating: 4,
      reviewCount: 45,
      description: "Beautiful handloom silk dupatta with traditional patterns.",
      features: ["Pure silk", "Handloom weave", "Traditional patterns"],
      highlights: ["Authentic handloom", "Premium silk", "Traditional design"],
      specifications: { "Material": "Silk", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery in 2-3 days",
      returnPolicy: "7 days return policy"
    },
    {
      id: 16,
      title: "Artisan Carved Sandalwood Box",
      price: 2299,
      image: "/images/stone carvings/54beeaad3c880ff443665dc033055409.jpg",
      images: [
        "/images/stone carvings/54beeaad3c880ff443665dc033055409.jpg",
        "/images/stone carvings/76221dbbfe0b746625cc76557d8b4140.jpg",
        "/images/stone carvings/c7b2a924a699d4113c9830f080ba101f.jpg"
      ],
      category: "Handicrafts",
      rating: 5,
      reviewCount: 78,
      description: "Beautifully carved sandalwood box with intricate designs.",
      features: ["Pure sandalwood", "Hand carved", "Aromatic wood"],
      highlights: ["Natural fragrance", "Master craftsmanship", "Premium wood"],
      specifications: { "Material": "Sandalwood", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 17,
      title: "Premium Mysore Silk Painting",
      price: 3499,
      originalPrice: 4299,
      image: "/images/traditional foods and snacks/27130747d60745ecf57dd6a6fab195b8.jpg",
      images: [
        "/images/traditional foods and snacks/27130747d60745ecf57dd6a6fab195b8.jpg",
        "/images/traditional foods and snacks/4d6469332c08595879ee5ceae4958882.jpg",
        "/images/traditional foods and snacks/7030666c91f0bdaa1116f798c7226273.jpg"
      ],
      category: "Art",
      rating: 5,
      reviewCount: 34,
      description: "Premium Mysore silk painting with traditional motifs.",
      features: ["Silk canvas", "Traditional motifs", "Gold accents"],
      highlights: ["Museum quality", "Traditional art", "Gold detailing"],
      specifications: { "Material": "Silk", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 18,
      title: "Handforged Bronze Sculpture",
      price: 5999,
      image: "/images/miniature sculptures and souviners/33884c622fea38280341a7d02aa357f5.jpg",
      images: [
        "/images/miniature sculptures and souviners/33884c622fea38280341a7d02aa357f5.jpg",
        "/images/miniature sculptures and souviners/efae85a4c8bd60a13120bd20c6b12a16.jpg",
        "/images/miniature sculptures and souviners/c408a9e30f3653cf260b755656c6a307.jpg"
      ],
      category: "Sculptures",
      rating: 5,
      reviewCount: 56,
      description: "Handforged bronze sculpture by master metalworkers.",
      features: ["Pure bronze", "Hand forged", "Traditional technique"],
      highlights: ["Master craftsmanship", "Durable material", "Artistic value"],
      specifications: { "Material": "Bronze", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 19,
      title: "Exclusive Kashmir Pashmina Shawl",
      price: 7999,
      originalPrice: 9999,
      image: "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg",
      images: [
        "/images/pottery/4a77370f27cbe85183d654fea9cc505c.jpg",
        "/images/pottery/d212c7515ab9d3fc1ec8ac080585eaaa.jpg",
        "/images/pottery/d3811730cbce71ecd998dfd3fae42695.jpg"
      ],
      category: "Textiles",
      rating: 5,
      reviewCount: 89,
      description: "Exclusive Kashmir Pashmina shawl with superior quality.",
      features: ["Pure Pashmina", "Hand woven", "Soft texture"],
      highlights: ["Premium quality", "Luxury item", "Traditional weave"],
      specifications: { "Material": "Pashmina", "Origin": "Kashmir" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 20,
      title: "Handcrafted Gold Plated Jewelry Box",
      price: 4499,
      image: "/images/sarees/21542895214a4eba815f502b3f6d25df.jpg",
      images: [
        "/images/sarees/21542895214a4eba815f502b3f6d25df.jpg",
        "/images/sarees/bec8403d28fb80e3bb310be9470859c6.jpg",
        "/images/sarees/cda4f03ca3634bd2d155aa32520e8e4b.jpg"
      ],
      category: "Luxury",
      rating: 5,
      reviewCount: 45,
      description: "Handcrafted jewelry box with gold plating and velvet interior.",
      features: ["Gold plated", "Velvet interior", "Multiple compartments"],
      highlights: ["Luxury finish", "Handcrafted", "Premium materials"],
      specifications: { "Material": "Wood with Gold Plating", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 21,
      title: "Traditional Tanjore Painting",
      price: 8999,
      originalPrice: 11999,
      image: "/images/stone carvings/76221dbbfe0b746625cc76557d8b4140.jpg",
      images: [
        "/images/stone carvings/76221dbbfe0b746625cc76557d8b4140.jpg",
        "/images/stone carvings/c8ebcc05c75c0a97146638194dc307c0.jpg",
        "/images/stone carvings/d1d50d88ae337796195d386cd7391e22.jpg"
      ],
      category: "Art",
      rating: 5,
      reviewCount: 67,
      description: "Traditional Tanjore painting with gold foil work.",
      features: ["Gold foil work", "Traditional technique", "Religious motifs"],
      highlights: ["Museum quality", "Gold detailing", "Traditional art"],
      specifications: { "Material": "Canvas with Gold Foil", "Origin": "Tamil Nadu" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    },
    {
      id: 22,
      title: "Master Craftsman Wooden Elephant",
      price: 6999,
      image: "/images/traditional foods and snacks/4d6469332c08595879ee5ceae4958882.jpg",
      images: [
        "/images/traditional foods and snacks/4d6469332c08595879ee5ceae4958882.jpg",
        "/images/traditional foods and snacks/846f78c0d8224bdfc17444b4b2f93788.jpg",
        "/images/traditional foods and snacks/85eb62403daffc2522514e776bc7109c.jpg"
      ],
      category: "Sculptures",
      rating: 5,
      reviewCount: 78,
      description: "Master craftsman carved wooden elephant with intricate details.",
      features: ["Premium wood", "Hand carved", "Intricate details"],
      highlights: ["Master craftsmanship", "Premium wood", "Artistic value"],
      specifications: { "Material": "Premium Wood", "Origin": "Hampi, Karnataka" },
      inStock: true,
      deliveryInfo: "Free delivery by tomorrow",
      returnPolicy: "7 days return policy"
    }
  ];
};

export const getProductById = (id) => {
  const products = getAllProducts();
  return products.find(product => product.id === parseInt(id));
};
