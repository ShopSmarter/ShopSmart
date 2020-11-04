const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const apiRouter = require('./routes/api.js');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

app.use('/api', apiRouter);

// test if server is working
app.get('/', (req, res) => {
  res.send('Stab-rabbits alive on 3000');
});

// global error handler
app.use('/', (req, res) => {
  res.sendStatus(404);
});

// server start
app.listen(3000, () => {
  console.log('Listening on 3000');
});

module.exports = app;
