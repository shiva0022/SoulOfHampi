import React from "react";

const Content = () => {
  return (
    <div className="content p-2 w-1/2">
      <div className="m-2 relative group">
        <img
          src="/hero-image.jpeg"
          alt="Hampi"
          className="w-full h-auto rounded-[30px] shadow-2xl transform transition-all duration-700"
        />
        {/* Enhanced overlay with better gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[30px] flex flex-col justify-end items-start text-left p-8"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-start text-left p-8">
          <h1 className="text-6xl font-bold mb-6 text-[#f5f1e8] leading-tight drop-shadow-2xl">
            Welcome to{" "}
            <span className="text-[#d4c5a0] bg-gradient-to-r from-[#d4c5a0] to-[#b08968] bg-clip-text text-transparent">
              SoulOfHampi
            </span>
          </h1>
          <p className="text-2xl text-[#f5f1e8] leading-relaxed max-w-lg drop-shadow-lg font-medium">
            Discover the rich heritage and unique products of Hampi. Explore our
            collection of handcrafted items, traditional art, and more.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-8 py-4 rounded-xl font-semibold transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#9d7a5e]">
              Explore Collection
            </button>
            <button className="bg-transparent border-2 border-[#d4c5a0] text-[#f5f1e8] hover:bg-[#d4c5a0] hover:text-[#3d2914] px-8 py-4 rounded-xl font-semibold transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
