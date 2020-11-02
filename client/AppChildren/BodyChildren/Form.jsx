// import React, { Component } from 'react'

// function Form() {
//   return (
//     <div>
//       <div>
//         <input type="checkbox" name="store" value="TraderJoes" />Trader Joes
//         <input type="checkbox" name="store" value="Walmart" />Walmart
//         <input type="checkbox" name="store" value="Ralphs" />Ralphs
//       </div>
//       <div>
//         <input type="text" placeholder="Put Food Item Here" />
//         <button type="submit">Add</button>
//         <input type="text" placeholder="Budget" />
//      </div>
//     </div>
//   )
// }

// export default Form

const axios = require('axios').default;

const query = (foodName, storeName) => {
  return axios.get('/api', {
    params: {
      store: storeName,
      food: foodName,
    },
  });
};

const getPrices = (foodName) => {
  const promiseArray = [];
  if (this.state.traderJoesSelected) promiseArray.push(query(foodName, 'tj'));
  if (this.state.ralphsSelected) promiseArray.push(query(foodName, 'ralphs'));
  if (this.state.wholeFoodsSelected) promiseArray.push(query(foodName, 'wf'));
  Promise.all(promiseArray)
    .then((results) => {})
    .catch((error) => {
      console.log('Error', error);
    });
};
