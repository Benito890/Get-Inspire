import React, { useState, useEffect } from 'react';

import audio from '../../assets/sounds/negatif.wav';
import audio2 from '../../assets/sounds/positif.wav';

import './RandomQuote.css';

export default function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState({});
  const [randomAuthors, setRandomAuthors] = useState([]);
  const [score, setScore] = useState(0);
  const [questioncount, setQuestioncount] = useState(1);
  const [timer, setTimer] = useState(60);
  const [bestScore, setBestScore] = useState(0);

  const playAudio = () => {
    new Audio(audio).play();
  };

  const playAudio2 = () => {
    new Audio(audio2).play();
  };

  useEffect(() => {
    const chrono = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      } else {
        clearInterval(chrono);
      }
    }, 1000);
    return () => clearInterval(chrono);
  }, [timer]);

  const handleReplay = () => {
    setTimer(60);
    setQuestioncount(1);
    setScore(0);
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const handleButton = (e) => {
    if (e.target.value === randomQuote.author) {
      const newScore = score + 1;
      setScore(newScore);
      const count = questioncount + 1;
      setQuestioncount(count);
      playAudio2();
    } else {
      const count = questioncount + 1;
      setQuestioncount(count);
      playAudio();
    }
  };

  function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
  }

  const authors = [];
  useEffect(() => {
    fetch('https://api.quotable.io/random?maxLength=100')
      .then((resp) => resp.json())
      .then((data) => {
        authors.push(data.author);
        setRandomQuote(data);
      });
    fetch('https://api.quotable.io/random')
      .then((resp) => resp.json())
      .then((data) => {
        authors.push(data.author);
        fetch('https://api.quotable.io/random')
          .then((resp) => resp.json())
          .then((data) => {
            authors.push(data.author);
            fetch('https://api.quotable.io/random')
              .then((resp) => resp.json())
              .then((data) => {
                authors.push(data.author);
                shuffleArray(authors);
                setRandomAuthors(authors);
              });
          });
      });
  }, [questioncount]);

  return (
    <div className="quizz-box">
      <div className="counter">
        <span className="counter-span">Timer : {timer}</span>
        <span className="counter-span">Score : {score}</span>
        <span className="counter-span-1">BestScore : {bestScore}</span>
        <span className="counter-span-1">Question : {questioncount}</span>
      </div>
      {timer === 0 ? (
        <div className="quizz-container">
          <p className="quizz-quote">
            Your score is {score} correct answer for {questioncount} questions
          </p>
          <div className="container-button">
            <button onClick={handleReplay} className="answer-button play-button">
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div className="quizz-quote-container">
          <p className="quizz-quote">{randomQuote.content}</p>
          <div className="container-button">
            {randomAuthors.map((randomauthor, index) => (
              <button className="answer-button" key={index} onClick={handleButton} value={randomauthor}>
                {randomauthor}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
