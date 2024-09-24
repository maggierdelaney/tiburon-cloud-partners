import React from 'react';
import './FooterBanner.css'; // Assuming you'll add styles separately in a CSS file
import linkedin from '../../images/LI-In-Bug.png';

const FooterBanner = () => {
  return (
    <footer className="footer-banner" id="contact-us">
      <div className="footer-section contact-info">
        <p className="bold"><strong>EMAIL</strong></p>
        <p className="small">info@tiburoncloud.com</p>
        <p className="bold"><strong>OFFICE</strong></p>
        <p className="small">+1(602)295-7405</p>
        <p className="bold"><strong>FAX</strong></p>
        <p className="small">+1(888)436-5418</p>
      </div>

      <div className="footer-section address">
        <p className="bold"><strong>ADDRESS</strong></p>
        <p className="small">530 E McDowell Rd.</p>
        <p className="small">Suite 107-615</p>
        <p className="small">Phoenix, AZ 85004</p>
      </div>

      <div className="footer-section social-media">
        <a href="https://www.linkedin.com/in/scottdelaney/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <br />
        <br />
        <p >© 2024 Tiburon Cloud Partners. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterBanner;
