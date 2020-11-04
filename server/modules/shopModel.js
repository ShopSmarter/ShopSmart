const { Db } = require('mongodb');
// const { Pool } = require('pg');
const mongoose = require('mongoose')

// const PG_URI =
//   '	postgres://hdsxmkls:MU9vn_Lyp0yYTCesI2LDnyJ1mpjCYLL7@lallah.db.elephantsql.com:5432/hdsxmkls';

// const pool = new Pool({
//   connectionString: PG_URI,
// });

// Please note our database is set up like this: A table of food names and primary keys.
// Each of these is connected to a foreign key in table for a specific store, which has
// foreign keys connecting to a list of prices and their primary keys. It's a one to many
// to one relationship.That is why anytime you need the price data you have to send
// out three queries and why our query text has a double join. Please see ReadMe
// for suggestions on how to improve this and make database more modular.
const Schema = mongoose.Schema;
//created default ShopSchema for different markets 
const ShopSchema = new Schema({
  shopName: String,
  itemList: Object
})

const Shop = mongoose.model('Shop', ShopSchema);

// Db._document.shopName === 'ralphs'

// //create a new document in database with input criteria
// const ralphs = new Shop({
//   shopName: 'Ralphs',
//   itemList: {
//     bread: 1.49,
//     cheese: 1.99,
//     banana: 0.30,
//     milk: 3.29,
//     apple: 0.59,
//     icecream: 5.99,
//     eggs: 3.49,
//     avocado: 1.25,
//     spaghetti: 1.00
//   }
// })
// ralphs.save((error) => {
//   if (error) {
//     console.log('Oops, something happened');
//   } else {
//     console.log('Data has been saved!')
//   }
// })

// const tj = new Shop( {
//   shopName: `TraderJoe's`,
//   itemList: {
//     bread: 2.29,
//     cheese: 4.99,
//     banana: 0.19,
//     milk: 3.49,
//     apple: 1.49,
//     icecream: 11.99,
//     eggs: 1.49,
//     avocado: 0.50,
//     spaghetti: 0.99
//   }
// })
// tj.save((error) => {
//   if (error) {
//     console.log('Oops, something happened');
//   } else {
//     console.log('Data has been saved!')
//   }
// })

// const wholefoods = new Shop( {
//   shopName: 'WholeFoods',
//   itemList: {
//     bread: 3.29,
//     cheese: 2.99,
//     banana: 0.49,
//     milk: 5.99,
//     apple: 1.99,
//     icecream: 5.49,
//     eggs: 2.99,
//     avocado:1.49,
//     spaghetti:1.39
//   }
// })
// wholefoods.save((error) => {
//   if (error) {
//     console.log('Oops, something happened');
//   } else {
//     console.log('Data has been saved!')
//   }
// })


module.exports = {
  Shop
}

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   },
// };
