const express = require('express');
const app = express();


if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

//test if server is working
app.get('/', (req, res, next) => {
  res.send('Yeti Crabs alive on 3005')
})

//server start
app.listen(3005, () => {
  console.log('Listening on 3005');
});
