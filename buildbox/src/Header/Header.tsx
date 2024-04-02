import React from 'react';
import logo from '../assets/bx-logo.png';
import logo2x from '../assets/bx-logo@2x.png';
import logo3x from '../assets/bx-logo@3x.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img
                    src={logo}
                    srcSet={`${logo2x} 2x, ${logo3x} 3x`}
                    alt="Descrição da imagem"
                    className="image"
                />
    </div>
  );
}

export default Header;
