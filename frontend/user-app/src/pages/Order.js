import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../pages/order.css'; // Ensure the CSS file exists or remove if unnecessary

const CustomOrderForm = () => {
  const [orderData, setOrderData] = useState({
    fullName: '',
    userEmail: '',
    contactNumber: '',
    deliveryAddress: '',
    mealQuantity: ''
  });

  const [serverMessage, setServerMessage] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the field is contactNumber, ensure only digits are entered
    if (name === 'contactNumber' && isNaN(value)) {
      return; // Prevent non-numeric input
    }

    setOrderData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!orderData.fullName || !orderData.userEmail || !orderData.contactNumber || !orderData.deliveryAddress || !orderData.mealQuantity) {
      setFormError('Please fill in all fields.');
      return;
    }

    // Create query params from form data
    const queryParams = new URLSearchParams({
      fullName: orderData.fullName,
      userEmail: orderData.userEmail,
      contactNumber: orderData.contactNumber,
      deliveryAddress: orderData.deliveryAddress,
      mealQuantity: orderData.mealQuantity
    });

    // Redirect to the confirmation page with query params
    navigate(`/order/confirmation?${queryParams.toString()}`);
    setServerMessage('Order successfully submitted!');
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
            name="fullName"
            value={orderData.fullName}
            onChange={handleInputChange}
            aria-label="Enter your full name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="userEmail">Email Address:</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={orderData.userEmail}
            onChange={handleInputChange}
            aria-label="Enter your email address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={orderData.contactNumber}
            onChange={handleInputChange}
            aria-label="Enter your contact number"
            required
            pattern="[0-9]*" // Ensures only numbers are inputted
          />
        </div>
        <div className="input-group">
          <label htmlFor="deliveryAddress">Delivery Address:</label>
          <input
            type="text"
            id="deliveryAddress"
            name="deliveryAddress"
            value={orderData.deliveryAddress}
            onChange={handleInputChange}
            aria-label="Enter your delivery address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mealQuantity">Number of Meals:</label>
          <input
            type="number"
            id="mealQuantity"
            name="mealQuantity"
            value={orderData.mealQuantity}
            onChange={handleInputChange}
            aria-label="Enter the number of meals"
            required
          />
        </div>
        <button type="submit" className="order-submit-btn">Submit Order</button>
      </form>

      {/* Display success or error message */}
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
