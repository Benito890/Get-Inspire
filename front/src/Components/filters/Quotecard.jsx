import React from 'react';

import './Quotecard.css';

export default function Quotecard(props) {
  return (
    <div className="QuotecardContainer">
      <p className="quote">{props.content}</p>
      <p className="author">{props.author}</p>
    </div>
  );
}
