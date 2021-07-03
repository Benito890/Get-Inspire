import React from 'react';

import RandomQuote from './RandomQuote';
import Nav from '../Nav';
import Footer from '../footer';

import './Quizz.css';

export default function Quizz() {
  return (
    <div>
      <Nav />
      <div className="Quizz-container">
        <RandomQuote />
      </div>
      <Footer />
    </div>
  );
}
