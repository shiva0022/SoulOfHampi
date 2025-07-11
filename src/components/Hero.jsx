import React from "react";
import Content from "./Content";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row min-h-[550px] lg:min-h-[650px] gap-1 lg:gap-2 items-start lg:items-center overflow-x-hidden max-w-full">
      {/* Content comes first on mobile/tablet, then slider */}
      <Content />
      <Slider />
    </div>
  );
};

export default Hero;
