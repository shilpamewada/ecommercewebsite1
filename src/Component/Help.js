
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Help.css';

const Help = ({ onFormToggle }) => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    alert('Your record has been recorded successfully');
    console.log(formdata);
    try {
      let response = await axios.post('http://localhost:3004/fetchtable', formdata);
      console.log(response);
      if (response.status === 200) {
        navigate('/Register');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
    console.log(formdata);
  };

  return (
    <div className="help-container">
      <h2>Need Help with Myntra Shopping?</h2>
      <p>
        If you have any queries or need assistance related to your Myntra shopping experience,
        please feel free to contact our support team. We are here to help you!
      </p>
      <p>
        You can reach us through the contact form below or visit our{' '}
        <a href="https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fcontactus" target="_blank" rel="noopener noreferrer">
          Help Center
        </a>{' '}
        for frequently asked questions.
      </p>
      <form className="help-form" onSubmit={handlesubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formdata.name} onChange={handleInputChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formdata.email} onChange={handleInputChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formdata.message} onChange={handleInputChange} required />

        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Help;
