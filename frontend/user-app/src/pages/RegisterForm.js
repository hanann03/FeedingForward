import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      name,
      email,
      phone,
      type,
      foodType,
      quantity,
    };

    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data sent successfully!', data);

      setServerMessage('Registration submitted successfully!');
      setFormError('');
    } catch (error) {
      console.error('Error sending data:', error);

      setServerMessage('');
      setFormError(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Event Registration Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Are you a:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select One</option>
            <option value="donor">Donor</option>
            <option value="volunteer">Volunteer</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="foodType">What is the food type you're bringing?</label>
          <input
            type="text"
            id="foodType"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity of Food:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
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

export default RegisterForm;