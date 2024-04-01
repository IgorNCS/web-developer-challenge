import React from 'react';
import logo from '../assets/bx-logo.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img
                  alt="Logo buildbox"
                  src={logo}
                  className="HeaderLogo"
                />
    </div>
  );
}

export default Header;
