const express = require('express');

const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.getPrice, (req, res) => {
  res.send(res.locals.price);
  // check if we need to send as json?
});
module.exports = router;
