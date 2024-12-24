import React from 'react';
import './Home.css';
import FoodDonation from '../pages/video1.mp4'; 

const Home = () => {
  return (
    <div className="home-page">
      
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={FoodDonation} type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
        
        <div className="overlay-text">
          <h1>END HUNGER!</h1>
          <p>
            Millions of families in the world go hungry every year. Help us provide them with enough to eat.
          </p>
        </div>
      </div>

      
      <div className="sections-container">
        
        <div className="row">
          <section className="section mission">
            <h2>Our MISSION</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
              double click me to add your own content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </section>
          <section className="section support">
            <h2>Support Us</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
              double click me to add your own content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </section>
        </div>

        
        <div className="row">
          <section className="section news">
            <h2>LATEST NEWS</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
              double click me to add your own content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </section>
          <section className="section subscribe">
            <h2>SUBSCRIBE</h2>
            <p>Subscribe to Our Newsletter</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
