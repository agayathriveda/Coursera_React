import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<ShoppingCartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
