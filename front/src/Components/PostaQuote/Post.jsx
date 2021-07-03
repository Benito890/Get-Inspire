import React from 'react';

import WallOfQuote from './WallOfQuote';
import PostQuote from './PostQuote';
import Nav from '../Nav';
import Footer from '../footer';

import './post.css';

export default function Post() {
  return (
    <div>
      <Nav />
      <div className="post-container">
        <PostQuote />
        <WallOfQuote />
      </div>
      <Footer />
    </div>
  );
}
