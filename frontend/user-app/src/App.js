import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Order from './pages/Order';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Register from './pages/RegisterForm'; // Import Register component

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


