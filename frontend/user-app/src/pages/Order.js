import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../pages/order.css'; // Ensure the CSS file exists or remove if unnecessary

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    numberOfMeals: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.location || !formData.numberOfMeals) {
      setError('Please fill in all fields.');
      return;
    }

    // Create query params from form data
    const queryParams = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      location: formData.location,
      numberOfMeals: formData.numberOfMeals
    });

    // Redirect to the confirmation page with query params
    navigate(`/order/confirmation?${queryParams.toString()}`);
    setResponseMessage('Order successfully submitted!');
  };

  return (
    <div className="form-container">
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            aria-label="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            aria-label="Enter your location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numOfMeals">Number of Meals:</label>
          <input
            type="number"
            id="numOfMeals"
            name="numberOfMeals"
            value={formData.numberOfMeals}
            onChange={handleChange}
            aria-label="Enter the number of meals"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Display success or error message */}
      {responseMessage && (
        <div className="success">
          <p>{responseMessage}</p>
        </div>
      )}
      {error && (
        <div className="error">
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
