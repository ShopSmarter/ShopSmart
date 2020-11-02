const { Pool } = require('pg');

const PG_URI =
  '	postgres://hdsxmkls:MU9vn_Lyp0yYTCesI2LDnyJ1mpjCYLL7@lallah.db.elephantsql.com:5432/hdsxmkls';

const pool = new Pool({
  connectionString: PG_URI,
});

// Please note our

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
