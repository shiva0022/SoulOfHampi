import React from 'react';
import Hero from '../components/Hero';
import TrendingNow from '../components/TrendingNow';
import MostPopular from '../components/MostPopular';
import NewArrivals from '../components/NewArrivals';
import HandcraftedSpecials from '../components/HandcraftedSpecials';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrendingNow />
      <MostPopular />
      <NewArrivals />
      <HandcraftedSpecials />
    </div>
  );
}

export default Home;