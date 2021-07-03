import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GrandeCard from './Components/page1/grandecard';
import Grandequote from './Components/filters/Grandequote';
import Quizz from './Components/Quizz/Quizz';
import Post from './Components/PostaQuote/Post';
import LandingPage from './Components/LandingPage/LandingPage';

import './App.css';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={GrandeCard} />
        <Route path="/filters" component={Grandequote} />
        <Route path="/quizz" component={Quizz} />
        <Route path="/myownquote" component={Post} />
      </Switch>
    </div>
  );
}
