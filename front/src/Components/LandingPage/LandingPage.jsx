import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
import Timer from '../../assets/images/TIMER.png';
import Lamp from '../../assets/images/LAMP.png';
import Day from '../../assets/images/DAY.png';
import Logo from '../../assets/images/LOGO.png';

export default function LandingPage() {
  return (
    <div className="LandingPage-container">
      <div className="LandingPage-Top">
        <div className="Top">
          <h1 className="Landing-Title">GET INSPIRE</h1>
        </div>
        <div className="Bottom">
          <div className="Bottom-1">
            <img alt="logo" className="getinspire-logo" src={Logo} />
          </div>
          <div className="Bottom-2">
            <h2 className="h2-title">Be inspired by the greatest quotes, write your own quotes and test your knowledge in a funny way</h2>
            <p className="Bottom-2-p">
              with GetInspire see life through the eyes of the most famous writers, authors, actors or philosophers in human history
            </p>
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
              <button className="Bottom-Button">LET&apos;S GO</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="LandingPage-Bottom">
        <div className="LandinPage-Bottom-Section">
          <Link to="/home" className="Bot-Img" style={{ textDecoration: 'none' }}>
            <img className="Bot" alt="Quote-Section" src={Day}></img>
          </Link>
          <h2 className="landing-h2">Quote of the day</h2>
          <p className="landing-p">
            Sometimes a quote is more inspiring than a whole book. At GetInspire we bring you three famous quotes every day to keep you motivated
            every moment of the day. Our quotes are selected every 24 hours by our powerful algorithm to make your life a success
          </p>
        </div>
        <div className="LandinPage-Bottom-Section">
          <Link to="/myownquote" className="Bot-Img" style={{ textDecoration: 'none' }}>
            <img className="Bot" alt="Post-Section" src={Lamp}></img>
          </Link>
          <h2 className="landing-h2">Post your own Quote</h2>
          <p className="landing-p">
            With GetInspire, we go beyond a simple quote app. Here you can also inspire thousands of people by posting your own quotes. They will then
            be stored in our database and transmitted to our millions of users during their next connection. You can also vote for quotes from other
            users who have inspired you
          </p>
        </div>
        <div className="LandinPage-Bottom-Section">
          <Link to="/quizz" className="Bot-Img" style={{ textDecoration: 'none' }}>
            <img className="Bot" alt="Quizz-Section" src={Timer} />
          </Link>
          <h2 className="landing-h2">Test your knowledge</h2>
          <p className="landing-p">
            Because you also need a little fun in life, GetInspire offers you some great quotes quizzes to test your knowledge, have fun but also
            learn more about quotes.
          </p>
        </div>
      </div>
    </div>
  );
}
