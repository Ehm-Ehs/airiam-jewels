import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = ({ products, addToCart, updateQuantity, cartItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { unique_id } = useParams();
  const product = products.find((p) => p.unique_id === unique_id);

  useEffect(() => {
    if (product) {
      const cartItem = cartItems.find((item) => item.id === product.id);
      if (cartItem) {
        setQuantity(cartItem.quantity);
      }
    }
  }, [cartItems, product]);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowModal(true);
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleGoToCart = () => {
    setShowModal(false);
    navigate("/cart");
  };

  const handleContinueShopping = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-4 text-center">{product.name}</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          {product.photos && product.photos.length > 0 && (
            <img
              src={product.photos[0].url}
              alt={product.name}
              className="w-full h-auto max-w-md"
            />
          )}
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <div className="text-lg mb-4">{product.description}</div>
          <p className="text-xl font-medium mb-4">
            Price: ₦{product.current_price[0]?.NGN[0]?.toFixed(2)}
          </p>
          <div className="flex items-center mb-4">
            <p className="bg-[#00C62B24] rounded-xl border-[#00C62B] text-center px-[10px] py-2">
              In stock
            </p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleDecreaseQuantity}
              className="text-lg border rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center"
            >
              -
            </button>
            <span className="px-2 sm:text-2xl">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="text-lg border rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-[#C99A9A] text-white py-2 w-full rounded-lg text-2xl"
          >
            Add to cart
          </button>
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
      </div>
    </div>
  );
};

export default ProductDetails;
