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
    <div className="w-full lg:w-1/2 p-2 sm:p-4 order-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        className="rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl h-[380px] sm:h-[480px] lg:h-[620px]"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent rounded-[20px] sm:rounded-[30px] flex flex-col justify-end items-start p-4 sm:p-6 lg:p-10">
                <div className="mb-4 sm:mb-6 lg:mb-8 transform group-hover:translate-y-[-8px] transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#f5f1e8] mb-2 sm:mb-3 md:mb-4 tracking-wide drop-shadow-2xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#d4c5a0] leading-relaxed font-medium drop-shadow-lg max-w-full lg:max-w-lg mb-3 sm:mb-4 md:mb-5">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-xl font-semibold transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#9d7a5e] text-xs sm:text-sm md:text-base">
                    Explore Category
                  </button>
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
