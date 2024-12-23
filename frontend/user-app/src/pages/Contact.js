import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../pages/Contact.css'; // Make sure to style your Contact page

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="detail-item">
          <h2>Phone Number</h2>
          <p>(123) 456-7890</p>
        </div>
        <div className="detail-item">
          <h2>Email</h2>
          <p>example@example.com</p>
        </div>
        <div className="detail-item">
          <h2>Location</h2>
          <p>123 Your Street, Your City, Your Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
