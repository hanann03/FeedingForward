import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    foodType: '',
    quantity: ''
  });

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
    if (!formData.name || !formData.email || !formData.phone || !formData.type || !formData.foodType || !formData.quantity) {
      alert("Please fill in all fields.");
      return;
    }

    // Create query params from form data
    const queryParams = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      type: formData.type,
      foodType: formData.foodType,
      quantity: formData.quantity
    });

    // Redirect to the confirmation page with query params
    navigate(`/register/confirmation?${queryParams.toString()}`);
  };

  return (
    <div className="form-container">
      <h2>Event Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Are you a:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
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
            name="foodType"
            value={formData.foodType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity of Food:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;