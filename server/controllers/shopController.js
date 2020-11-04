const { findDOMNode } = require('react-dom');
const { Shop } = require('../modules/shopModel');
const mongoose = require('mongoose');

const shopControllers = {};

// This will pull the price from database when user types in food

shopControllers.getPrice = async (req, res, next) => {
  // We'll be getting our search parameters off of req.body once everything is put together. For now,
  // we're using these as placeholders

  const { store } = req.query;
  const { food } = req.query;

  // This text string contains our query. It joins our three tables - food, price and whichever store we're looking at
  // and returns the price. The bling operator is used to pass in variables for our parameterized query, which are defined in our
  // values array.

  // Please note parameterized queries for things inputted by users are needed to prevent SQL injection attacks that could
  // happen by using template literals etc. We use template literals for the store because that's all internal -- there's no
  // direct input from clients as they're only selecting from an available list of stores. You cannot use parameterized queries
  // for table or column names so we're using template literals for those instead.

  const values = [food];
  const query = {shopName: "WholeFoods"};

  // Film.find({ _id: FILM_ID }, (err, data) => {
  //   //console.log(data);
  //   res.locals.currFilm = data[0];
  //   next();
  
  // Here we run our query. The returned value should be an array containing an object with the key of price_amount and the value of
  // an integer. We convert it into a number with two decimals because all prices are being stored as integers (ie 299 rather than 2.99).
  // try {
  //   await db.query(text, values).then((data) => {
  //     const result = data.rows[0].price_amount / 100;
  //     res.locals.price = result;
  //   });

  //   return next();
  // } catch (err) {
  //   return next({ err });
  // }

  try {
    await Shop.findOne(query).then((data) => {
      console.log(data);
      const result = data;
      res.locals.price = result;
    });

    console.log(response);
    return next();
  } catch (err) {
    return next({ err });
  }
//   db.find({})
//     .then((data) => {
//       console.log(data[0]);
//       const result = data;
//       res.locals.price = result;
//     })
//     .catch((err) => {if (err) console.log(err)})

//     console.log(response);
//     return next();
  
// };


//get Price for 

}

module.exports = shopControllers;