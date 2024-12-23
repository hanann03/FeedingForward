import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Welcome to CharityHelp</h1>
        <p>Helping Hands for a Better Tomorrow</p>
      </header>
      
      <section style={sectionStyle}>
        <h2>How You Can Help</h2>
        <p>Every small donation makes a big difference. Join us in making the world a better place.</p>
        <button style={buttonStyle}>Donate Now</button>
      </section>

      <section style={sectionStyle}>
        <h2>Our Mission</h2>
        <p>
          At CharityHelp, we believe in supporting communities in need by providing resources, 
          education, and opportunities to those who need them most.
        </p>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2024 CharityHelp. All rights reserved.</p>
      </footer>
    </div>
  );
}

const headerStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  textAlign: 'center',
  padding: '50px 0',
};

const sectionStyle = {
  padding: '20px',
  textAlign: 'center',
};

const buttonStyle = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '15px 32px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default HomePage;


