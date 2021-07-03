/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';

import Quotecard from './Quotecard';
import Footer from '../footer';
import Nav from '../Nav';

import './Grandequote.css';

export default function Grandequote() {
  const [famousquotes, setFamousquotes] = useState([]);
  const [value, setValue] = useState('famous-quotes');

  useEffect(() => {
    fetch(`https://api.quotable.io/quotes/?tags=${value}&limit=8&maxLength=120`)
      .then((response) => response.json())
      .then((data) => {
        setFamousquotes(data.results);
      });
  }, [value]);

  return (
    <div>
      <Nav />
      <div className="grand-container">
        <div className="button-container">
          <button
            className={value === 'famous-quotes' ? 'category-button-selected' : 'category-button'}
            value="famous-quotes"
            onClick={(e) => setValue(e.target.value)}>
            Famous-Quotes
          </button>
          <button
            className={value === 'wisdom' ? 'category-button-selected' : 'category-button'}
            value="wisdom"
            onClick={(e) => setValue(e.target.value)}>
            Wisdom
          </button>
          <button
            className={value === 'technology' ? 'category-button-selected' : 'category-button'}
            value="technology"
            onClick={(e) => setValue(e.target.value)}>
            Technology
          </button>
          <button
            className={value === 'friendship' ? 'category-button-selected' : 'category-button'}
            value="friendship"
            onClick={(e) => setValue(e.target.value)}>
            Friendship
          </button>
        </div>
        <div className="select-category">
          <select onChange={(e) => setValue(e.target.value)}>
            <option>Please choose category</option>
            <option value="famous-quotes">Famous Quotes</option>
            <option value="wisdom">Wisdom</option>
            <option value="technology">Technology</option>
            <option value="friendship">Friendship</option>
          </select>
        </div>
        <div className="GrandequoteContainer">
          {famousquotes.map((quote, index) => {
            return <Quotecard key={index} content={quote.content} author={quote.author} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
