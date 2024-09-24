import React from 'react';
import './HeroSection.css'; 
import logo from '../../images/Tiburon-Logo.png'; 
import bannerImage from '../../images/Tiburon-Banner-2.png';

const HeroSection = () => {
  return (
    <div>
    <header className="hero-section">
      <div className="logo">
      <img src={logo} alt="Tiburon Logo" className="logo-image" />
      </div>
      <nav className="nav-links">
        <ul>
          <li className="contact-link" className="alegreya-sans-sc-medium"><a href="#contact-us">CONTACT US</a></li>
        </ul>
      </nav>
    </header>

    <img src={bannerImage} alt="Second Banner" className="full-width-banner" />

    </div>
  );
};

export default HeroSection;
