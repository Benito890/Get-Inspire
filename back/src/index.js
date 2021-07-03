const express = require('express');
const cors = require('cors');
const connection = require('./db');
const serverPort = process.env.PORT || 3001;
const app = express();
const Joi = require('joi');
app.use(express.json());
app.use(cors('http://localhost:3000'));

connection.connect((err) => {
 if (err) {
 console.error('error connecting: ' + err.stack);
 } else {
 console.log('connected as id ' + connection.threadId);
 }
});

app.get ('/quotes', (req, res) =>{

  connection.promise().query('SELECT * FROM quotes')

  .then(([results]) => {
    res.status(200).json(results);
})
  .catch((err) => {

    console.error(err);

    res.status(500).send('Error retrieving products from db.');
  });
});

app.get ('/quotes/display', (req, res) =>{

  connection.promise().query('SELECT * FROM quotes ORDER BY likes DESC')

  .then(([results]) => {
    res.status(200).json(results);
})
  .catch((err) => {

    console.error(err);

    res.status(500).send('Error retrieving products from db.');
  });
});

app.post ('/quotes', (req, res) =>{

  const {quote, author} = req.body;

  const { error: validationErrors } = Joi.object({
    quote: Joi.string().max(500).required(),
    author: Joi.string().max(300).required(),
  }).validate({ quote, author }, {abortEarly: false});

  if (validationErrors) {
    res.status(422).json({ errors: validationErrors.details });
  } else {
    connection.promise()
    .query('INSERT INTO quotes (quote, author) VALUES (?, ?)', [quote, author])
    .then(([result]) => {
      const createQuote = { id: result.insertId, quote, author };
      res.json(createQuote);
    }).catch((err) => { console.error(err); res.sendStatus(500); });
  }
}); 

app.patch('/quotes/:id', (req, res) => {

  const { error: validationErrors } = Joi.object({
    likes: Joi.number().min(0),
  }).validate(req.body, { abortEarly: false });

  if (validationErrors)
  return res.status(422).json({ errors: validationErrors.details });
  
  connection.promise()
  .query('UPDATE quotes SET ? WHERE id = ?', [req.body, req.params.id])
  .then(([result]) => {
  res.sendStatus(200);
  })
  .catch((err) => {
  console.error(err);
  res.sendStatus(500);
  });
  });
 
app.listen(serverPort, () => {
  console.log(`Server is running on ${serverPort}`);
});