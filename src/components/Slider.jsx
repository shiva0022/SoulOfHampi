// Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  {
    id: 1,
    title: "Traditional Handicrafts",
    image:
      "https://images.unsplash.com/photo-1690541478715-898f26cbc28d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Authentic handmade crafts",
  },
  {
    id: 2,
    title: "Wood & Stone Sculptures",
    image:
      "https://images.unsplash.com/photo-1728599652228-e19042c5141a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ancient art replicas",
  },
  {
    id: 3,
    title: "Textiles & Fabrics",
    image:
      "https://images.unsplash.com/photo-1678705730064-a7ecbab4b3fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Traditional Indian fabrics",
  },
  {
    id: 4,
    title: "Jewelry & Ornaments",
    image:
      "https://images.unsplash.com/photo-1731586249458-c4837bf07de7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Handcrafted jewelry pieces",
  },
  {
    id: 5,
    title: "Artisans & Sovenirs",
    image:
      "https://as1.ftcdn.net/v2/jpg/04/91/88/62/1000_F_491886281_c4pugzKqzh7u04kxhA84g5FsNE8UGz4m.jpg",
    description: "food items & sovenirs",
  },
];

const Slider = () => {
  return (
    <div className="w-1/2 p-4">
      {/* Custom styles for Swiper arrows and pagination using minimal CSS with Tailwind colors */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        className="rounded-[30px] overflow-hidden"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[680px] object-cover rounded-[30px] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[30px] flex flex-col justify-end items-start p-8">
                <div className="mb-6 transform group-hover:translate-y-[-4px] transition-all duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide drop-shadow-lg text-shadow-xl">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-md">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
