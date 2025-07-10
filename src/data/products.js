// Central product data that can be used across the application
export const getAllProducts = () => {
  return [
    // Trending Products
    {
      id: 1,
      title: "Hampi Stone Carved Elephant",
      price: 2499,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=600&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=600&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=600&auto=format&fit=crop"
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
    // Add more products as needed...
  ];
};

export const getProductById = (id) => {
  const products = getAllProducts();
  return products.find(product => product.id === parseInt(id));
};
