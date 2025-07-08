import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#3d2914] mb-6">
            About SoulOfHampi
          </h1>
          <p className="text-xl text-[#3d2914] max-w-3xl mx-auto leading-relaxed">
            Discover the ancient heritage and timeless beauty of Hampi through
            our authentic collection
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#3d2914] mb-6">
              Our Story
            </h2>
            <p className="text-[#3d2914] text-lg leading-relaxed mb-4">
              Welcome to SoulOfHampi, where ancient heritage meets modern
              commerce. We are passionate about bringing you the authentic
              essence of Hampi, a UNESCO World Heritage site that stands as a
              testament to India's rich cultural and historical legacy.
            </p>
            <p className="text-[#3d2914] text-lg leading-relaxed">
              Our journey began with a simple mission: to share the magnificent
              stories and artistic traditions of this ancient city with the
              world.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#3d2914] mb-6">
              Our Mission
            </h2>
            <p className="text-[#3d2914] text-lg leading-relaxed mb-4">
              Our carefully curated collection celebrates the spirit of this
              magnificent ancient city, offering products that embody the
              artistic traditions, architectural marvels, and cultural richness
              that make Hampi truly special.
            </p>
            <p className="text-[#3d2914] text-lg leading-relaxed">
              Every product tells a story of skilled artisans, timeless
              traditions, and the enduring beauty of one of India's most
              spectacular archaeological sites.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-[#b08968] bg-opacity-40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏛️</span>
            </div>
            <h3 className="text-xl font-bold text-[#3d2914] mb-3">
              Heritage Authentic
            </h3>
            <p className="text-[#3d2914] leading-relaxed">
              Products inspired by the rich architectural and cultural heritage
              of Hampi
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#b08968] bg-opacity-40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-[#3d2914] mb-3">
              Artisan Crafted
            </h3>
            <p className="text-[#3d2914] leading-relaxed">
              Handcrafted by skilled artisans who preserve traditional
              techniques
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#b08968] bg-opacity-40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌟</span>
            </div>
            <h3 className="text-xl font-bold text-[#3d2914] mb-3">
              Quality Promise
            </h3>
            <p className="text-[#3d2914] leading-relaxed">
              Each item is carefully selected to meet our high standards of
              quality
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#b08968] bg-opacity-30 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-[#3d2914] mb-4">
              Experience the Soul of Hampi
            </h2>
            <p className="text-[#3d2914] text-lg mb-6 max-w-2xl mx-auto">
              Join us in celebrating the timeless beauty and cultural richness
              of one of India's most magnificent heritage sites
            </p>
            <button className="bg-[#3d2914] hover:bg-[#2d1f0f] text-[#f5f1e8] px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
