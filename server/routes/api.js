const express = require('express');

const router = express.Router();
const shopControllers = require('../controllers/shopController');

// This router handles our axios fetch requests to get prices and sends them back to the
// front end.

router.use('/', shopControllers.getPrice, async (req, res) => {
  try {
    console.log('trying', res.locals.price);
    res.json(res.locals.price);
  } catch (err) {
    // check if we need to send as json?
    console.log('error', err);
    res.sendStatus(400);
  }
});
module.exports = router;
