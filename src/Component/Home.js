import React from 'react';
import Products from './Products';
import Contact from './Contact';
import { BrowserRouter } from 'react-router-dom';
import Images from './Images';

function Home({ addToCart }) {
  return (
    <div className='hero'>
      <div className="card text-bg-dark text-white border-0">
        <img src="/assets/pexels-cottonbro-6069978.jpg" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title  display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          </div>
        </div>
      </div>

      <Products addToCart={addToCart} /> {/* Pass addToCart as a prop to Products */}
      <Images addToCart={addToCart} />
      <Contact />


    </div>
  );
}

export default Home;
