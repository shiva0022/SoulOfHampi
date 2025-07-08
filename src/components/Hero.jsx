import React from 'react';
import Content from './Content';
import Slider from './Slider';

const Hero = () => {
  return (
    <div className="hero flex">
      <Content />
      <Slider />
    </div>
  );
}

export default Hero;