import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Top10.com</div>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Partner with us</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Term of use</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
