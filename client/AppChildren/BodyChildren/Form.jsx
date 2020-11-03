import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import logo from './wholeFoods.png';
import logos from './traders.png';
import logoss from './ralphs.png';
import Footer from './Footer.jsx';
import Container from './Container.jsx';

/* Query request to retrieve prices based on inputted food */

const query = (foodName, storeName) => {
  return axios.get('/api/', {
    params: {
      store: storeName,
      food: foodName,
    },
  });
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // These switch from true/false based on which stores have been selected to
      // display
      wholeFoodsSelected: false,
      traderJoesSelected: false,
      ralphsSelected: false,
      // This contains a list of all food items that the user has inputted, which
      // is needed to render
      foodsList: [],
      // These individually contain the prices of all food items that have been queried
      // in the same order as the food list.
      wholeFoodsList: [],
      traderJoesList: [],
      ralphsList: [],
      // This holds the result of calculating the total price for each list.
      wholeFoodsSubtotal: 0,
      traderJoesSubtotal: 0,
      ralphsSubtotal: 0,
      // This is a temp variable to hold whatever the user has inputted into the
      // food item input until they click add and it's pushed into the foodList array.
      food: '',
      // This holds whatever budget value the user has inputted.
      maxBudget: 0,
    };
    this.storeClick = this.storeClick.bind(this);
    this.onFoodInput = this.onFoodInput.bind(this);
    this.onBudgetInput = this.onBudgetInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // tracks user click of store to display store "card"
  storeClick(store) {
    if (!this.state[store]) {
      this.setState((prevState) => {
        return {
          ...prevState,
          [store]: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          [store]: false,
        };
      });
    }
  }

  // captures food input in food key
  onFoodInput(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        food: e.target.value,
      };
    });
    console.log('State.food', this.state.food);
  }

  // captures food input in food key
  onBudgetInput(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        maxBudget: e.target.value,
      };
    });
  }

  // pushes captured food key into array of foodsList
  onSubmit(e) {
    e.preventDefault();
    // We're setting up a new array to update the food list in state, using
    // this.state.food, which is the user's input into the food item input.
    const newFoodsList = [...this.state.foodsList, this.state.food];

    // Here we're spreading in the current arrays for each store in state
    // PLEASE NOTE that these contain prices.
    const newWholeFoodsList = [...this.state.wholeFoodsList];
    const newRalphsList = [...this.state.ralphsList];
    const newTraderJoesList = [...this.state.traderJoesList];

    // Each query pulls the price of the item from the database and pushes it
    // into these arrays and then uses setState to overwrite the old
    // arrays.

    query(this.state.food, 'tj').then((result) => {
      newTraderJoesList.push(result.data);
      this.setState({
        foodsList: newFoodsList,
        traderJoesList: newTraderJoesList,
      });
    });
    query(this.state.food, 'wf').then((result) => {
      newWholeFoodsList.push(result.data);
      this.setState({
        wholeFoodsList: newWholeFoodsList,
      });
    });
    query(this.state.food, 'ralphs').then((result) => {
      newRalphsList.push(result.data);
      this.setState({
        ralphsList: newRalphsList,
      });
    });
  }

  render() {
    return (
      <div>
        <div id="middle" className="TopInput">
          {/* These are the logos for each store with the onclick functionality. */}
          <input
            onClick={() => this.storeClick('wholeFoodsSelected')}
            type="image"
            className="logos"
            src={logo}
            alt="WholeFoods"
          />
          <input
            onClick={() => this.storeClick('traderJoesSelected')}
            type="image"
            className="logos"
            src={logos}
            alt="Traders"
          />
          <input
            onClick={() => this.storeClick('ralphsSelected')}
            type="image"
            className="logos"
            src={logoss}
            alt="Ralphs"
          />
        </div>
        <div className="BottomInputs">
          <form onSubmit={this.onSubmit} id="inputs">
            {/* Input field to enter food items */}
            <input
              onChange={this.onFoodInput}
              className="field"
              type="text"
              placeholder="Food Item"
            />
            {/* click submit button for food */}
            <input className="btn" type="submit" value="+" />
          </form>
          <div className="budget">
            {/* Input field to enter budget */}
            <input
              onChange={this.onBudgetInput}
              className="field"
              type="text"
              placeholder="Max Budget"
            />
          </div>
        </div>
        <Container props={this.state} />
        <Footer props={this.state} />
      </div>
    );
  }
}

export default Form;
