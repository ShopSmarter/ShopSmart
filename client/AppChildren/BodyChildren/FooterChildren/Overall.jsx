import React, { Component } from 'react';
import { render } from 'react-dom';

function Overall(props) {
  // These are all the props we need. I know, prop drilling is bad for the environment.
  const {
    traderJoesList,
    ralphsList,
    wholeFoodsList,
    traderJoesSelected,
    wholeFoodsSelected,
    ralphsSelected,
  } = props.props;

  // This makes sure the only average prices being compared are those that have been selected.
  // The bracket notation is used because the words are rendered directly on the page and thus
  // need to be formated correctly as two words.

  const checkedPriceList = {};
  if (traderJoesSelected) checkedPriceList['Trader Joes'] = traderJoesList;
  if (wholeFoodsSelected) checkedPriceList['Whole Foods'] = wholeFoodsList;
  if (ralphsSelected) checkedPriceList.Ralphs = ralphsList;

  // find best average price
  const averages = {};
  for (const key in checkedPriceList) {
    averages[key] = checkedPriceList[key].reduce((a, b) => a + b, 0);
  }
  const bestAveragePrice = Math.min(...Object.values(averages));
  const bestStore = Object.keys(averages).find((key) => averages[key] === bestAveragePrice);

  // Toggle between showing and not showing the the best price.

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
          {bestStore}
{' '}
has the best average price of ${bestAveragePrice}
        </h1>
      </div>
    </div>
  );
}
export default Overall;
