import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  const categories = [
    {
      id: 1,
      title: "Traditional Handicrafts",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Authentic handmade crafts",
    },
    {
      id: 2,
      title: "Stone Sculptures",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0c6df09712e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ancient art replicas",
    },
    {
      id: 3,
      title: "Textiles & Fabrics",
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Traditional Indian fabrics",
    },
    {
      id: 4,
      title: "Jewelry & Ornaments",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted jewelry pieces",
    },
    {
      id: 5,
      title: "Antique Collectibles",
      image:
        "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Rare historical items",
    },
  ];
  return (
    <div className="w-1/2 p-4">
      {/* Custom styles for carousel controls - minimal CSS needed for deep customization */}
      <style>{`
        .carousel .carousel-status { display: none; }
        .carousel .control-dots {
          margin: 0 !important;
          padding: 12px 0 !important;
        }
        .carousel .control-dots .dot {
          background: rgba(245, 241, 232, 0.6) !important;
          box-shadow: none !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          border-radius: 50% !important;
        }
        .carousel .control-dots .dot.selected {
          background: #f5f1e8 !important;
        }
      `}</style>

      <div className="m-1 rounded-[30px] overflow-hidden shadow-lg bg-[#c5b693] bg-opacity-20 backdrop-blur-sm">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showArrows={false}
          showIndicators={true}
          swipeable={true}
          emulateTouch={true}
          className="rounded-[30px] overflow-hidden"
        >
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[400px] object-cover rounded-[30px] transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[30px] flex flex-col justify-end items-start p-6">
                <div className="bg-[#3d2914] bg-opacity-70 backdrop-blur-sm rounded-lg p-4 mb-4 transform transition-all duration-300 group-hover:bg-opacity-80">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#f5f1e8] mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-lg text-[#f5f1e8] opacity-90 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
