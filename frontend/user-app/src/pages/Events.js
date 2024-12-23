import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import charityImgOne from '../pages/charityone.jpg';
import charityImgTwo from '../pages/charitytwp.jpg';
import charityImgThree from '../pages/charity3.jpg';
import './Events.css';

const events = [
  {
    title: "Feed the Homeless - Charity Event",
    date: "January 15, 2025",
    description: "Join us in feeding the homeless in downtown. Volunteers needed!",
    imageUrl: charityImgOne,
  },
  {
    title: "Community Food Drive",
    date: "February 5, 2025",
    description: "A community food drive to collect non-perishable goods for families in need.",
    imageUrl: charityImgTwo,
  },
  {
    title: "Spring Fundraiser Gala",
    date: "March 20, 2025",
    description: "A fundraising gala with live performances, auctions, and dinner to support our mission.",
    imageUrl: charityImgThree,
  },
];

const Events = () => {
  const generateRegisterLink = (event) => {
    const queryParams = new URLSearchParams();
    queryParams.append("event", event.title);
    queryParams.append("date", event.date);
    queryParams.append("description", event.description);

    return `/register?${queryParams.toString()}`;
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img
              src={event.imageUrl}
              alt={event.title}
              className="event-image"
            />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <Link to={generateRegisterLink(event)} className="register-button">Register</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

