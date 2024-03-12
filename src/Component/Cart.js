import React from 'react';
import './Carts.css'; // Import the CSS file

function Cart({ cartItems, removeFromCart }) {
  // Function to remove item from cart
  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="box1">
      {cartItems.map((item, index) => (
        <div key={index} className="card">
          <div>
            <img src={item.image} alt={item.name} />
            <button
              className="remove-button"
              onClick={() => handleRemove(item)}
            >
              Remove
            </button>
          </div>
          <h1 style={{ fontSize: '1rem' }}>{item.productid}</h1>
          <h1 style={{ fontSize: '1.5rem' }}>{item.name}</h1>
          <h1 style={{ fontSize: '1rem' }}>{item.subtitle}</h1>
          <h1 style={{ fontSize: '1rem' }}>{item.price}</h1>
        </div>
      ))}
    </div>
  );
}

export default Cart;
