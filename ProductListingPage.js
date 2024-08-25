import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const plants = [
  { id: 1, name: 'Fern', price: 10, image: '/path-to-fern.jpg' },
  { id: 2, name: 'Succulent', price: 15, image: '/path-to-succulent.jpg' },
  // Add more plants here
];

const ProductListingPage = ({ cart, setCart }) => {
  const addToCart = (plant) => {
    setCart([...cart, { ...plant, quantity: 1 }]);
  };

  return (
    <div>
      <header>
        <h1>Paradise Nursery</h1>
        <Link to="/cart">Cart ({cart.length})</Link>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={plant.image} alt={plant.name} style={{ width: '100px', height: '100px' }} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
