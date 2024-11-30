import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook for navigation
import '../App.css'; // Custom styling for landing page

const LandingPage = () => {
  const navigate = useNavigate(); // To navigate programmatically

  const handleLearnMoreClick = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div className="landing-container">
      {/* Banner Section */}
      <div className="banner-section">
        <img 
        //   src="https://via.placeholder.com/1920x500" // Replace with actual banner image
          src="banner.jpg" // Replace with actual banner image
          alt="Banner"
          className="banner-image"
        />
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-left">
            <img
              src="dp.png"  // Replace with actual image
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <h1>Swetha Varma</h1>
              <p>Consultant Clinical Psychologist</p>
              <p>10+ Years of experience</p>
              <p>Starts at ₹1,200/Session</p>
              <p>Block A2, Delhi</p>
            </div>
            <button className="learn-more-btn" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>

          <div className="profile-right">
            <h2>About me</h2>
            <p>
              Hello, I’m Swetha, a licensed therapist dedicated to guiding individuals
              through life’s challenges with empathy and expertise. With over 10 years of
              experience, I specialize in helping clients manage anxiety, depression, and
              relationship issues through personalized, evidence-based practices.
            </p>
            <a href="#">Read more</a>

            <h3>Credentials</h3>
            <ul>
              <li>Ph.D. in Clinical Psychology - Harvard University</li>
              <li>M.A. in Counseling - University of California, Berkeley</li>
              <li>Licensed Professional Counselor (LPC) - State of DEF</li>
              <li>Certified Cognitive Behavioral Therapist (CBT)</li>
              <li>Member, American Psychological Association (APA)</li>
              <li>10+ years of experience in individual and group therapy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
