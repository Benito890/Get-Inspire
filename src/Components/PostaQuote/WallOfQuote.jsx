import React, { useEffect, useState } from 'react';

import UserQuoteCard from './UserQuoteCard';

import './WallOfQuote.css';

export default function WallOfQuote() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/quotes/display')
      .then((resp) => resp.json())
      .then((data) => {
        setArray(data);
      });
  }, []);

  return (
    <div className="wallQuote-container">
      {array &&
        array.map((selectedQuote, index) => {
          return (
            <UserQuoteCard key={index} quote={selectedQuote.quote} author={selectedQuote.author} like={selectedQuote.likes} id={selectedQuote.id} />
          );
        })}
    </div>
  );
}
