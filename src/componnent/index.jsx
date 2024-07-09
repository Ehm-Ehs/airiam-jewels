import React from 'react';
import Hero from './hero';
import Products from './products';
import '../App.css'

const Home = ({ addToCart }) => {
  return (
    <div className="text-[#353535]">
      <Hero />
      <Products addToCart={addToCart} />
    </div>
  );
};

export default Home;
