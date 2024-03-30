
import React from 'react';
import './Carts.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();

  // Function to remove item from cart
  const handleRemove = (index) => {
    removeFromCart(index);
  };

  // Function to handle Buy Now click
  const handleBuyNows = () => {
    navigate('/payment');
  };

  // Calculate grand total
  const grandTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="box1">
      <strong><div>Cart Count: {cartItems.length}</div></strong>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="card">
            <div className="item-details">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h1>{item.productid}</h1>
                <h1>{item.name}</h1>
                <h1>{item.subtitle}</h1>
                <h1>{item.price}</h1>
              </div>
            </div>
            <div className="button-group">
              <button
                className="remove-button"
                style={{ backgroundColor: 'red' }}
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
              <button
                className="buy-now-button"
                style={{ backgroundColor: 'info', marginLeft: '10px' }}
                onClick={handleBuyNows}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="grand-total">
        <h1>Grand Total: {grandTotal}</h1>
      </div>
    </div>
  );
}

export default Cart;

