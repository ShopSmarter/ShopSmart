import React, { Component } from 'react';
import { render } from 'react-dom';

function Overall(props) {
  const { priceList, traderJoesSelected, wholeFoodsSelected, ralphsSelected } = props.props;

  const checkedPriceList = {};
  if (traderJoesSelected) checkedPriceList['Trader Joes'] = priceList.traderJoes;
  if (wholeFoodsSelected) checkedPriceList['Whole Foods'] = priceList.wholeFoods;
  if (ralphsSelected) checkedPriceList.Ralphs = priceList.ralphs;

  // find best average price
  const averages = {};
  for (const key in checkedPriceList) {
    averages[key] = checkedPriceList[key].reduce((a, b) => a + b, 0);
  }
  const bestAveragePrice = Math.min(...Object.values(averages));
  const bestStore = Object.keys(averages).find((key) => averages[key] === bestAveragePrice);

  // show best average price

  function showMeTheMoney() {
    const x = document.getElementById('showMeTheMoney');
    if (x.style.display === 'none') {
      x.style.display = '';
    } else {
      x.style.display = 'none';
    }
  }
  return (
    <div className="foot">
      <div className="inline">
        <h3 className="oneShop">Only Have Time For One Trip? See Which Store is Cheapest</h3>
      </div>
      <button onClick={showMeTheMoney} className="lets" type="submit">
        Let me see!
      </button>
      <div style={{ display: 'none' }} id="showMeTheMoney">
        <h1>
          {bestStore} has the best average price of ${bestAveragePrice}
        </h1>
      </div>
    </div>
  );
}
export default Overall;
