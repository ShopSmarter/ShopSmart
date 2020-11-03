import React, { Component } from 'react';

import { render } from 'react-dom';

function SubContainer(props) {
  const storeName = props.props.marketName;
  const { maxBudget } = props.props.props;
  const { foodsList } = props.props.props;
  const { priceList } = props.props;
  const storeSubtotal = priceList.reduce((a, b) => a + b, 0);

  console.log('budget', maxBudget);

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
