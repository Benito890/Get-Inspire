import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Card from './card';

import './quote.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Quote() {
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('quoteOftheDay')));
  const [date, setDate] = useState(JSON.parse(localStorage.getItem('date')));
  const [month, setMonth] = useState(JSON.parse(localStorage.getItem('month')));
  const myDate = new Date().getDate();
  const myMonth = new Date().getMonth();

  useEffect(() => {
    if (!result || myDate != date || myMonth != month) {
      const quotesOfTheDay = [];
      fetch('https://api.quotable.io/random')
        .then((resp) => resp.json())
        .then((data) => {
          quotesOfTheDay.push(data);
          fetch('https://api.quotable.io/random')
            .then((resp) => resp.json())
            .then((data) => {
              quotesOfTheDay.push(data);
              fetch('https://api.quotable.io/random')
                .then((resp) => resp.json())
                .then((data) => {
                  quotesOfTheDay.push(data);
                  localStorage.setItem('quoteOftheDay', JSON.stringify(quotesOfTheDay));
                  localStorage.setItem('month', JSON.stringify(myMonth));
                  localStorage.setItem('date', JSON.stringify(myDate));
                  setDate(myDate);
                  setMonth(myMonth);
                  setResult(quotesOfTheDay);
                });
            });
        });
    }
  }, []);

  return (
    <Carousel>
      {result &&
        result.map((quote, i) => {
          return (
            <div key={i} className="caroussel-container">
              <Card key={i} content={quote.content} author={quote.author} />
            </div>
          );
        })}
    </Carousel>
  );
}

export default Quote;
