import React, { Component } from 'react';

function Form() {
  return (
    <div>
      {/* checkbox list of grocery stores for user to select */}
      <div>
        <input type="checkbox" name="store" value="TraderJoes">
          Trader Joes
        </input>
        <input type="checkbox" name="store" value="Walmart">
          Gelsons
        </input>
        <input type="checkbox" name="store" value="Ralphs">
          Ralphs
        </input>
        <input type="checkbox" name="store" value="Vons">
          Vons
        </input>
        <input type="checkbox" name="store" value="Pavillions">
          Pavillions
        </input>
        <input type="checkbox" name="store" value="Whole Foods">
          Whole Foods
        </input>
      </div>
      {/* input field for user to put food item */}
      <div>
        <input type="text" placeholder="Put Food Item Here" />
        <button type="submit">Add</button>
        {/* input field for user to put max budget */}
        <input type="text" placeholder="Budget" />
      </div>
    </div>
  );
}
