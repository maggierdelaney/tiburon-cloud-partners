import React from 'react';
import './HeroSection.css'; // Optional: for styling

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="logo">YourLogo</div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">News & Views</a></li>
          <li className="contact-link"><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeroSection;
