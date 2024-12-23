import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const email = queryParams.get('email');
  const phoneNumber = queryParams.get('phoneNumber');
  const locationParam = queryParams.get('location');
  const numberOfMeals = queryParams.get('numberOfMeals');

  return (
    <div>
      <h2>Order Confirmed</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone Number:</strong> {phoneNumber}</p>
      <p><strong>Location:</strong> {locationParam}</p>
      <p><strong>Number of Meals:</strong> {numberOfMeals}</p>
    </div>
  );
};

export default OrderConfirmationPage;
