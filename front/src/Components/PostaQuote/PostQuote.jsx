import React, { useState } from 'react';

import './PostQuote.css';

export default function PostQuote() {
  const [userQuote, setUserQuote] = useState();
  const [userAuthor, setUserAuthor] = useState();
  const postQuote = { quote: userQuote, author: userAuthor };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postQuote),
    };
    fetch('http://localhost:5000/quotes', requestOptions).then((response) => response.json());

    setUserQuote('');
    setUserAuthor('');
  };

  return (
    <div className="addQuote-container">
      <h2>Post your own inspiring quote</h2>
      <form className="postQuoteform" onSubmit={handleSubmit}>
        <div className="ul-container">
          <div className="postQuoteContent">
            <label className="name-input" htmlFor="name">
              Your name
            </label>
            <br></br>
            <input className="input-quote" type="text" value={userAuthor} onChange={(e) => setUserAuthor(e.target.value)} required />
          </div>
          <div className="postQuoteContent">
            <label className="name-input" htmlFor="message">
              Your inspiring quote
            </label>
            <br></br>
            <textarea className="textarea-quote" type="text" value={userQuote} onChange={(e) => setUserQuote(e.target.value)} required></textarea>
          </div>
          <div>
            <button className="postQuoteButton" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
