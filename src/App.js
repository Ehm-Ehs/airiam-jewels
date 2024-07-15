import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './componnent/product/cart';
import Checkout from './componnent/product/checkout';
import Navbar from './componnent/navbar';
import Footer from './componnent/footer';
import Home from './componnent/index';
import ProductDetails from './componnent/product/productDescription';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const queryParams = {
    organization_id: process.env.REACT_APP_ORG_ID,
    reverse_sort: false,
    page: 1,
    size: 10,
    Appid: process.env.REACT_APP_APP_ID,
    Apikey: process.env.REACT_APP_API_KEY,
  };

  const buildApiUrl = () => {
    const query = new URLSearchParams(queryParams).toString();
    return `https://timbu-get-all-products.reavdev.workers.dev/products?${query}`;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(buildApiUrl());
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
    
        setProducts(data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
console.log(products)
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.current_price[0].NGN[0] * item.quantity, 0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} totalPrice={totalPrice} />} />
        <Route 
          path="/product/:unique_id" 
          element={<ProductDetails 
            products={products} 
            addToCart={addToCart} 
            updateQuantity={updateQuantity} 
            cartItems={cartItems} 
          />} 
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={totalPrice} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
