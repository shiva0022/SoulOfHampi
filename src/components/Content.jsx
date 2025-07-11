import React from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/products');
  };

  const handleLearnMoreClick = () => {
    navigate('/about');
  };
  return (
    <div className="content p-2 sm:p-4 w-full lg:w-1/2 order-1">
      <div className="m-2 relative group">
        <img
          src="/hero-image.jpeg"
          alt="Hampi"
          className="w-full h-[380px] sm:h-[480px] lg:h-[620px] rounded-[20px] sm:rounded-[30px] shadow-2xl transform transition-all duration-700 object-cover"
        />
        {/* Enhanced overlay with better gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[20px] sm:rounded-[30px] flex flex-col justify-end items-start text-left p-4 sm:p-6 lg:p-8"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-start text-left p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-[#f5f1e8] leading-tight drop-shadow-2xl">
            Welcome to{" "}
            <span className="text-[#d4c5a0] bg-gradient-to-r from-[#d4c5a0] to-[#b08968] bg-clip-text text-transparent">
              SoulOfHampi
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#f5f1e8] leading-relaxed max-w-full lg:max-w-lg drop-shadow-lg font-medium mb-4 sm:mb-6 md:mb-7">
            Discover the rich heritage and unique products of Hampi. Explore our
            collection of handcrafted items, traditional art, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button 
              onClick={handleExploreClick}
              className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-4 sm:px-6 md:px-7 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#9d7a5e] text-center text-sm sm:text-base"
            >
              Explore Collection
            </button>
            <button 
              onClick={handleLearnMoreClick}
              className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] px-4 sm:px-6 md:px-7 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 text-center text-sm sm:text-base"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
