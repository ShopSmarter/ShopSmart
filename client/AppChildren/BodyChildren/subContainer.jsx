import React, { Component } from 'react';

import { render } from 'react-dom';

function SubContainer(props) {
  // Here wer'e destructuring the props we need. Don't ask me to explain why each prop level is different.
  const storeName = props.props.marketName;
  const { maxBudget } = props.props.props;
  const { foodsList } = props.props.props;
  const { priceList } = props.props;

  // This reducer function calculates the subtotals
  const storeSubtotal = priceList.reduce((a, b) => a + b, 0);

  // This puts each of the items in the food and price array into an array to be rendered.
  const foodRows = [];
  foodsList.forEach((food, index) => {
    foodRows.push(
      <tr className="row" key={index}>
        <td className="row" id="foodBox">
          {food}
        </td>
        <td className="row" id="priceBox">
          {priceList[index]}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h3 className="shop">{storeName}</h3>
      <table className="paper">
        <tbody>
          <tr>
            <th className="col">Food</th>
            <th className="col">Prices</th>
          </tr>
          {foodRows}
        </tbody>
      </table>

      <h3
        // This is a super cool thing we discovered where you can put a conditional on
        // your html elements. This causes the subtotals to turn red when they've gone
        // over the inputted budget.
        style={{ color: storeSubtotal > maxBudget && maxBudget > 0 ? 'red' : 'white' }}
        id="total"
      >
        Total Cost: $ 
{' '}
{storeSubtotal}
      </h3>
    </div>
  );
}

export default SubContainer;
