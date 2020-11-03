const { Pool } = require('pg');

const PG_URI =
  '	postgres://hdsxmkls:MU9vn_Lyp0yYTCesI2LDnyJ1mpjCYLL7@lallah.db.elephantsql.com:5432/hdsxmkls';

const pool = new Pool({
  connectionString: PG_URI,
});

// Please note our database is set up like this: A table of food names and primary keys.
// Each of these is connected to a foreign key in table for a specific store, which has
// foreign keys connecting to a list of prices and their primary keys. It's a one to many
// to one relationship.That is why anytime you need the price data you have to send
// out three queries and why our query text has a double join. Please see ReadMe
// for suggestions on how to improve this and make database more modular.

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
