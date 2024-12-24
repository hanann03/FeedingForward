import React, { useState } from 'react';
import '../pages/order.css'; 

const CustomOrderForm = () => {
  const [fullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [mealQuantity, setMealQuantity] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const orderData = {
      fullName,
      Email,
      contactNumber,
      Address,
      mealQuantity,
    };

    try {
      const response = await fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data sent successfully!', data);

      setServerMessage('Your order has been placed successfully!');
      setFormError(''); 
    } catch (error) {
      console.error('Error sending data:', error);

      setServerMessage('');
      setFormError(error.message);
    }
  };

  return (
    <div className="custom-form-container">
      <h2>Order Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-label="Enter your full name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="userEmail">Email Address:</label>
          <input
            type="email"
            id="userEmail"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Enter your email address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            aria-label="Enter your contact number"
            required
            pattern="[0-9]*"
          />
        </div>
        <div className="input-group">
          <label htmlFor="deliveryAddress">Delivery Address:</label>
          <input
            type="text"
            id="deliveryAddress"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            aria-label="Enter your delivery address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mealQuantity">Number of Meals:</label>
          <input
            type="number"
            id="mealQuantity"
            value={mealQuantity}
            onChange={(e) => setMealQuantity(e.target.value)}
            aria-label="Enter the number of meals"
            required
          />
        </div>
        <button type="submit" className="order-submit-btn">Submit Order</button>
      </form>

      {serverMessage && (
        <div className="success-message">
          <p>{serverMessage}</p>
        </div>
      )}
      {formError && (
        <div className="error-message">
          <p><strong>Error:</strong> {formError}</p>
        </div>
      )}
    </div>
  );
};

export default CustomOrderForm;
