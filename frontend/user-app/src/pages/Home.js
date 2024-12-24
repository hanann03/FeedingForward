import React from 'react';
import './Home.css';
import FoodDonation from '../pages/video1.mp4'; 
import MissionImage from '../pages/mission.jpg'; 
import SupportImage from '../pages/driveone.jpg'; 
import DriveTwoImage from '../pages/drivetwo.jpg'; 
import DriveThreeImage from '../pages/drivethree.jpeg'; 

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
            Millions of families go hungry every year. Help us provide them with food.
          </p>
        </div>
      </div>

      {/* New Introduction Section */}
      <div className="introduction-section">
        <h2>Welcome to FeedingForward</h2>
        <p>
          Hunger is one of the most pressing issues facing millions of families around the world. At our core, we believe in a world where everyone has access to the food they need to thrive. This mission is only possible with your support. Together, we can make a real impact in ending hunger and building sustainable solutions.
        </p>
        <p>
          As we work to fight hunger and create change, we invite you to explore how you can help. Join us in providing food, raising awareness, and working towards a future where no one goes to bed hungry.
        </p>
      </div>

      <div className="sections-container">
        <section className="section mission">
          <img src={MissionImage} alt="Our Mission" className="section-image" />
          <div className="section-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to end hunger by providing food and creating sustainable solutions for communities in need. Together, we can make a real impact.
            </p>
            <p>
              Through community partnerships, we aim to ensure no one goes to bed hungry.
            </p>
          </div>
        </section>

        <section className="section support">
          <img src={SupportImage} alt="Support Us" className="section-image" />
          <div className="section-text">
            <h2>Support Us</h2>
            <p>
              Your support fuels our work. Donate, volunteer, or raise awareness to help us expand our reach.
            </p>
            <p>
              Even small actions can create big changes in the fight against hunger.
            </p>
          <br></br>
          <br></br>
          <br></br>
            <h3>
              Instapay number:
            </h3>
            <p>
             01032937463
            </p>
          </div>
        </section>

        <section className="section impact">
          <img src={DriveTwoImage} alt="Impact Stories" className="section-image" />
          <div className="section-text">
            <h2>Impact Stories</h2>
            <p>
              Read inspiring stories of those whose lives have been transformed through your support.
            </p>
            <p>
              These stories highlight the tangible difference we’re making together.
            </p>
          </div>
        </section>

        <section className="section help">
          <img src={DriveThreeImage} alt="How You Can Help" className="section-image" />
          <div className="section-text">
            <h2>How You Can Help</h2>
            <p>
              Whether by donating, volunteering, or spreading the word, you can be a part of the solution.
            </p>
            <p>
              Join us in the fight against hunger and help us build a better future.
            </p>
          </div>
        </section>
      </div>

      <footer className="footer">
        <h3>Join Us in Ending Hunger</h3>
        <p>Support our mission and help create a world where no one goes to bed hungry.</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
