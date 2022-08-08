import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/precos">Preços</Link>
        </li>
        <li>
          <Link to="/treinamento">Treinamento</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff', cursor: 'pointer' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff', cursor: 'pointer' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
