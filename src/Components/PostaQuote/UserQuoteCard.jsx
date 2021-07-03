import React, { useState } from 'react';

import './UserQuoteCard.css';

export default function UserQuoteCard(props) {
  const [likeCount, setLikeCount] = useState(props.like);
  const [userLike, setUserLike] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setUserLike(!userLike);
    if (userLike != true) {
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: likeCount + 1 }),
      };
      fetch(`http://localhost:5000/quotes/${props.id}`, requestOptions).then(() => setLikeCount(likeCount + 1));
    } else {
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: likeCount - 1 }),
      };
      fetch(`http://localhost:5000/quotes/${props.id}`, requestOptions).then(() => setLikeCount(likeCount - 1));
    }
  };

  return (
    <div className="UserQuoteCardContainer">
      <p className="UserQuoteCardP UserQuoteCardP2">{props.quote}</p>
      <p className="UserQuoteCardP">{props.author}</p>
      <span className="userLike">Likes: {likeCount}</span>
      <button className={userLike ? 'liked-button' : 'unliked-button'} onClick={handleClick}>
        Like
      </button>
    </div>
  );
}
