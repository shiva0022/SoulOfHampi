import React from "react";

const Content = () => {
  return (
    <div className="content p-4 w-1/2">
      <div className="m-1 relative">
        <img
          src="/hero-image.jpeg"
          alt="Hampi"
          className="w-full h-auto rounded-[30px] shadow-lg"
        />
        {/* Overlay content on the image */}
        <div className="absolute inset-0 bg-black opacity-34 rounded-[30px] flex flex-col justify-end items-start text-left p-6"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-start text-left p-6">
          <h1 className="text-6xl font-bold mb-4 text-white">
            Welcome to SoulOfHampi
          </h1>
          <p className="text-2xl text-white leading-relaxed">
            Discover the rich heritage and unique products of Hampi. Explore our
            collection of handcrafted items, traditional art, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
