import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>FeedingForward</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
