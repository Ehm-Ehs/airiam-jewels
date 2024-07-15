import React from 'react';
import Hero from './hero';
import Products from './products';
import '../App.css'

const Home = ({ addToCart,products }) => {
  return (
    <div className="text-[#353535]">
      <Hero />
      <Products products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
