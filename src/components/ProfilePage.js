import React from 'react';
import '../App.css'; // Add your custom CSS here

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-left">
        <img
          src="https://via.placeholder.com/150"  // Replace with actual profile image
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
        <button className="book-session-btn">Book session</button>
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

        <h3>Available on</h3>
        <div className="available-options">
          <span>In-person</span>
          <span>Video/Voice call</span>
        </div>

        <h3>I offer therapy for</h3>
        <div className="therapy-areas">
          <span>Anxiety</span>
          <span>Depression</span>
          <span>Relationship Issues</span>
          <span>Stress Management</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
