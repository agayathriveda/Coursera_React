import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: "url('/path-to-your-image.jpg')", height: "100vh", color: "white", textAlign: "center", paddingTop: "20%" }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, where you can find the perfect houseplants for your home!</p>
      <Link to="/products">
        <button style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
