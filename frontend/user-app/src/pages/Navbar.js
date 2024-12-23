import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../pages/logo.png'; // Add the path to your logo file

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1>FeedingForward</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/order" className={location.pathname === '/order' ? 'active' : ''}>Order</Link>
        <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
      </div>
      <button className="donate-button">Donate</button>
    </nav>
  );
};

export default Navbar;
