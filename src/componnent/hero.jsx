import React from 'react';
import image from './asset/heroImage.png'

const HeroSection = () => {
  return (
    <section className="bg-[#FDF5E6]  lg:px-[100px]  ">
      <div className=" flex flex-col xsm:text-start text-center    xsm:flex-row lg:gap-[113px] items-center">
        <div className="lg:w-1/2 px-5 xsm:py-16 xl:py-[128px] order-1 lg:order-1 max-w-[542px]">
          <h1 className="text-[32px] font-serif md:text-4xl lg:text-5xl font-bold  mb-6">
            Define your style<br />Shop now, discover.
          </h1>
          <p className="text-gray-700 font-sans text-xs md:text-lg mb-8">
            Discover curated jewelry essentials that redefine your style. Explore trends, quality craftsmanship, and timeless elegance, all at your fingertips.
          </p>
          <button className="px-6 font-sans py-3 border border-[#C99A9A] w-[120px] md:w-[267px] rounded-full text-xs md:text-lg  hover:bg-gray-100">
            Shop Now
          </button>
        </div>
        <div className="lg:w-1/2 px-8 mt-8 lg:mt-0 order-2 lg:order-2">
          <img
            src={image}
            alt="hero"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
