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
  res.send('Yeti Crabs alive on 3005');
});

// global error handler
app.use('/', (req, res) => {
  res.sendStatus(404);
});

// server start
app.listen(3005, () => {
  console.log('Listening on 3005');
});

module.exports = app;
