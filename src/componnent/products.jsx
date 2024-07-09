import React, { useState } from 'react';
import pd1 from './asset/pd1.png'
import pd2 from './asset/pd2.png'
import pd3 from './asset/pd3.png'
import pd4 from './asset/pd4.png'
import pd5 from './asset/pd5.png'
import pd6 from './asset/pd6.png'
import pd7 from './asset/pd7.png'
import pd8 from './asset/pd8.png'
import pd9 from './asset/pd9.png'
import { useNavigate } from 'react-router-dom';


const products = [
  { id: 1, name: 'Lush Bracelet', price: 85.00, image: pd1, rating: 4,  },
  { id: 2, name: 'L’Hal Necklace', price: 60.99, image: pd2, rating: 4, },
  { id: 3, name: 'Gold Love Earrings', price: 50.00, image: pd3, rating: 4, },
  { id: 4, name: 'Frida Crust Ring', price: 110.00, image: pd4, rating: 4, },
  { id: 5, name: 'Pendant de Bu', price: 60.99, image: pd5, rating: 4, },
  { id: 6, name: 'Siu Black Bracelet', price: 53.00, image: pd6, rating: 4 },
  { id: 7, name: 'Opal Bracelet', price: 23.50, image: pd7, rating: 4 },
  { id: 8, name: 'Silver Necklace', price: 60.99, image: pd8, rating: 4 },
  { id: 9, name: 'Love Earrings', price: 50.00, image: pd9, rating: 4 },
];

const Product = ({addToCart}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart function passed from props
    setShowModal(true); // Show modal when product is added to cart
  };

  const handleGoToCart = () => {
    setShowModal(false);
    navigate('/cart');

  };

  const handleContinueShopping = () => {
    setShowModal(false);
  };
  return (
    <div className='  md:px-[50px] lg:px-[100px] px-[45px] '>
      <h2 className="text-center text-2xl md:text-[52px] font-bold py-10 md:pt-[63px] font-serif">NEW ARRIVALS</h2>
      <div className="flex flex-wrap justify-center font-sans gap-10 md:gap-[58px] lg:gap-[116px] pb-10 md:py-[98px]">
        {products.map((product) => (
          <div className="border  border-[#FFC300] rounded-2xl p-6 w-[300px] text-center shadow-lg">
          <div className="flex justify-center">
            
            <img
              src={product.image}
              alt={product.name}
              className="h-[240px] mb-5"
            />
          </div>
    
          <div className="flex flex-col items-start">
            <h3 className="text-[28px] font-medium">{product.name}</h3>
            <div className="flex justify-center py-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < product.rating ? "text-yellow-500" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-[32px] font-medium mb-4">
              ${product.price.toFixed(2)}
            </p>
            <button
                onClick={() => handleAddToCart(product)}
                className="bg-[#C99A9A] text-white py-2 w-[214px] rounded-lg text-2xl "
            >
              Add to cart
            </button>
          </div>
        </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Product added to cart successfully</p>
            <button
              className="mt-4 px-4 py-2 bg-[#C99A9A] w-full text-white rounded"
              onClick={handleGoToCart}
            >
              Go to cart
            </button>
            <button
              className="mt-4 px-4 py-2 w-full"
              onClick={handleContinueShopping}
            >
              Continue shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
