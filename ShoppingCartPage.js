import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartPage = ({ cart, setCart }) => {
  const removeFromCart = (plant) => {
    setCart(cart.filter((item) => item.id !== plant.id));
  };

  const updateQuantity = (plant, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === plant.id ? { ...item, quantity: item.quantity + quantity } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const totalCost = cart.reduce((total, plant) => total + plant.price * plant.quantity, 0);

  return (
    <div>
      <header>
        <h1>Shopping Cart</h1>
        <Link to="/products">Continue Shopping</Link>
      </header>
      <div>
        {cart.map((plant) => (
          <div key={plant.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <img src={plant.image} alt={plant.name} style={{ width: '50px', height: '50px' }} />
            <h3>{plant.name}</h3>
            <p>${plant.price} x {plant.quantity} = ${plant.price * plant.quantity}</p>
            <button onClick={() => updateQuantity(plant, 1)}>+</button>
            <button onClick={() => updateQuantity(plant, -1)}>-</button>
            <button onClick={() => removeFromCart(plant)}>Remove</button>
          </div>
        ))}
      </div>
      <h2>Total: ${totalCost}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCartPage;
