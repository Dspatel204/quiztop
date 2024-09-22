import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Top10.com</div>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Partner with us</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Term of use</a></li>
        </ul>
      </div>
      <p>&copy; 2009 - 2024 Natural Intelligence Ltd. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
