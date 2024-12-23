import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const email = queryParams.get('email');
  const phone = queryParams.get('phone');
  const type = queryParams.get('type');
  const foodType = queryParams.get('foodType');
  const quantity = queryParams.get('quantity');

  return (
    <div>
      <h2>Registration Confirmed</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Type: {type}</p>
      <p>Food Type: {foodType}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default ConfirmationPage;
