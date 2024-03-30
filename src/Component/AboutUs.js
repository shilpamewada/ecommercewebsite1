import React from 'react';
import './AboutUs.css';
import shoppingImage1 from './shop.jpg'; // Adjust the path
import shoppingImage2 from './shop3.jpg';
import shoppingImage3 from './shop1.jpg';
import shoppingImage4 from './shop2.jpg';
 // Import the Images component

const AboutUs = ({ addToCart }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <strong><h2>Welcome to Myntra</h2></strong> 
        <div className="image-container ">
          <img src={shoppingImage1} alt="Shopping 1" className="shopping-image" />
        </div>
        <p>
          Myntra is your ultimate destination for online shopping. We bring you the latest
          fashion trends, top-quality products, and an unparalleled shopping experience.
          Our mission is to make fashion accessible and affordable for everyone. With a wide
          range of products from top brands, we cater to your every fashion need.
          At Myntra, we believe in delivering not just products but a lifestyle. Explore our
          collections, stay ahead of the fashion curve, and make a statement wherever you go.
        </p>
      </div>
      <br /><br />
      <div className="about-content">
        <div className="image-container ">
          <img src={shoppingImage2} alt="Shopping 1" className="shopping-image" />
        </div>
        <p>
          Shop with confidence at Myntra and enjoy exclusive deals and discounts. Our dedicated
          team works tirelessly to provide you with a seamless shopping experience. Discover the
          joy of finding the perfect outfit for every occasion, right at your fingertips.
        </p>
      </div>
      <br /><br />
      <div className="about-content">
        <div className="image-container ">
          <img src={shoppingImage3} alt="Shopping 1" className="shopping-image" />
        </div>
        <p>
          Embrace your individuality with Myntra's diverse range of styles. Whether you're
          looking for casual wear, formal attire, or the latest accessories, we have it all.
          Our commitment is to empower you to express your unique fashion sense effortlessly.
        </p>
      </div>
      <br /><br />
      <div className="about-content">
        <div className="image-container ">
          <img src={shoppingImage4} alt="Shopping 1" className="shopping-image" />
        </div>
        <p>
          Join the Myntra community today and be a part of the ever-evolving world of fashion.
          Experience the convenience of online shopping like never before. Happy shopping!
        </p>
      </div>
      {/* Pass the addToCart function to the Images component */}
    
    </div>
  );
};

export default AboutUs;
