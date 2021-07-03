import React from 'react';

import './card.css';

function Card(props) {
  return (
    <div className="Card-container">
      <p className="Card-quote">{props.content}</p>
      <p className="Card-author">{props.author}</p>
    </div>
  );
}

export default Card;
