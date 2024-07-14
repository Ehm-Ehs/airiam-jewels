import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const queryParams = {
    organization_id: '53eccaaa761c4d93913a883b533b5022',
    reverse_sort: false,
    page: 1,
    size: 10,
    Appid: 'FR547RC9WE6AGXV',
    Apikey: '4840f88a65d1492f960f2b780810c3c020240712231259254747',
  };

  const buildApiUrl = () => {
    const query = new URLSearchParams(queryParams).toString();
    return `/api/products?${query}`;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(buildApiUrl());
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowModal(true);
  };

  const handleGoToCart = () => {
    setShowModal(false);
    navigate('/cart');
  };

  const handleContinueShopping = () => {
    setShowModal(false);
  };

  const handleProductClick = (unique_id) => {
    navigate(`/product/${unique_id}`);
  };

  return (
    <div className='md:px-[50px] lg:px-[100px] px-[45px]'>
      <h2 className="text-center text-2xl md:text-[52px] font-bold py-10 md:pt-[63px] font-serif">NEW ARRIVALS</h2>
      <div className="flex flex-wrap justify-center font-sans gap-10 md:gap-[58px] lg:gap-[116px] pb-10 md:py-[98px]">
        {products.map((product) => (
          <div
            key={product.unique_id}
            className="border border-[#FFC300] rounded-2xl p-6 w-[300px] text-center shadow-lg"
            onClick={() => handleProductClick(product.unique_id)}
          >
            <div className="flex justify-center">
              <img
                src={product.photos[0]?.url || '/path/to/default/image.jpg'}
                alt={product.name}
                className="h-[240px] mb-5"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-[28px] font-medium">{product.name}</h3>
              <p className="text-[32px] font-medium mb-4">
                NGN {product.current_price[0].NGN[0].toFixed(2)}
              </p>
             <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-[#C99A9A] text-white py-2 w-[214px] rounded-lg text-2xl "
              >
                Add to cart
              </button >
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
