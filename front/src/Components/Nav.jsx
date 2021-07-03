import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 1024) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  return (
    <nav className="getinspire-nav">
      {(toggleMenu || largeur > 992) && (
        <ul className="nav-list">
          <li classeName="test">
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
              Quote Of The Day
            </Link>
          </li>
          <li classeName="test">
            <Link to="/filters" style={{ textDecoration: 'none', color: 'white' }}>
              Filters
            </Link>
          </li>
          <li classeName="test">
            <Link to="/quizz" style={{ textDecoration: 'none', color: 'white' }}>
              Quizz
            </Link>
          </li>
          <li classeName="test">
            <Link to="/myownquote" style={{ textDecoration: 'none', color: 'white' }}>
              Post My Own Quote
            </Link>
          </li>
        </ul>
      )}
      <button onClick={toggleNavSmallScreen} className="btn">
        |||
      </button>
    </nav>
  );
}
