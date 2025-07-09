import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420]">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-[#f5f1e8] mb-8 relative">
            About SoulOfHampi
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
          </h1>
          <p className="text-2xl text-[#d4c5a0] max-w-4xl mx-auto leading-relaxed font-medium">
            Discover the ancient heritage and timeless beauty of Hampi through
            our authentic collection of handcrafted treasures
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Section */}
          <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-10 shadow-2xl border border-[#6b5b4b] hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <h2 className="text-4xl font-bold text-[#f5f1e8] mb-8">
              Our Story
            </h2>
            <p className="text-[#d4c5a0] text-lg leading-relaxed mb-6">
              Welcome to SoulOfHampi, where ancient heritage meets modern
              commerce. We are passionate about bringing you the authentic
              essence of Hampi, a UNESCO World Heritage site that stands as a
              testament to India's rich cultural and historical legacy.
            </p>
            <p className="text-[#d4c5a0] text-lg leading-relaxed">
              Our journey began with a simple mission: to share the magnificent
              stories and artistic traditions of this ancient city with the
              world through carefully curated handcrafted products.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-10 shadow-2xl border border-[#6b5b4b] hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <h2 className="text-4xl font-bold text-[#f5f1e8] mb-8">
              Our Mission
            </h2>
            <p className="text-[#d4c5a0] text-lg leading-relaxed mb-6">
              Our carefully curated collection celebrates the spirit of this
              magnificent ancient city, offering products that embody the
              artistic traditions, architectural marvels, and cultural richness
              that make Hampi truly special.
            </p>
            <p className="text-[#d4c5a0] text-lg leading-relaxed">
              Every product tells a story of skilled artisans, timeless
              traditions, and the enduring beauty of one of India's most
              spectacular archaeological sites.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl">🏛️</span>
            </div>
            <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
              Heritage Authentic
            </h3>
            <p className="text-[#d4c5a0] leading-relaxed text-lg">
              Products inspired by the rich architectural and cultural heritage
              of Hampi's ancient temples and monuments
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
              Artisan Crafted
            </h3>
            <p className="text-[#d4c5a0] leading-relaxed text-lg">
              Handcrafted by skilled artisans who preserve traditional
              techniques passed down through generations
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl">🌟</span>
            </div>
            <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
              Quality Promise
            </h3>
            <p className="text-[#d4c5a0] leading-relaxed text-lg">
              Each item is carefully selected to meet our high standards of
              quality and authenticity
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-12 shadow-2xl border border-[#6b5b4b] max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#f5f1e8] mb-6">
              Experience the Soul of Hampi
            </h2>
            <p className="text-[#d4c5a0] text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in celebrating the timeless beauty and cultural richness
              of one of India's most magnificent heritage sites through our curated collection
            </p>
            <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-[#9d7a5e] text-lg">
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
