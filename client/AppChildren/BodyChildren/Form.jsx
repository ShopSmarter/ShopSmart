import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import logo from './wholeFoods.png';
import logos from './traders.png';
import logoss from './ralphs.png';
import Footer from './Footer.jsx';
import Container from './Container.jsx';

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
      marketNames: ['Whole Foods', 'Trader Joes', 'Ralphs'],
      wholeFoodsSelected: false,
      wholeFoodsSubtotal: 0,
      traderJoesSelected: false,
      traderJoesSubtotal: 0,
      ralphsSelected: false,
      ralphsSubtotal: 0,
      foodsList: [],
      food: '',
      maxBudget: 0,
    };
    this.storeClick = this.storeClick.bind(this);
    this.onFoodType = this.onFoodType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getPrices = this.getPrices.bind(this);
  }

  getPrices(foodName) {
    const promiseArray = [];
    if (this.state.traderJoesSelected) promiseArray.push(query(foodName, 'tj'));
    if (this.state.ralphsSelected) promiseArray.push(query(foodName, 'ralphs'));
    if (this.state.wholeFoodsSelected) promiseArray.push(query(foodName, 'wf'));
    Promise.all(promiseArray)
      .then((results) => {
        console.log('Results', results);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

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
  onFoodType(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        food: e.target.value,
      };
  
  }

  // pushes captured food key into array of foodsList
  onSubmit(e) {
    e.preventDefault();
    this.getPrices(this.state.food);
    this.setState((prevSte) => {
      return {
        ...prevState,
        foodsList: this.state.foodsList.concat(this.state.food),
      };
    });
  }

  render() {
    console.log(this.state.foodsList);
    return (
      <div>
        <div id="middle" className="TopInput">
          {/* store selection inputs */}
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
            {/* food search */}
            <input
              onChange={this.onFoodType}
              className="field"
              type="text"
              placeholder="Food Item"
            />
            {/* click submit button for food */}
            <input className="btn" type="submit" value="+" />
            {/* <button onClick={this.onFoodInput} className="btn" type="submit">+</button> */}
          </form>
          <div className="budget">
            {/* budget input */}
            <input className="field" type="text" placeholder="Max Budget" />
          </div>
        </div>
        <Container props={this.state} />
        <Footer props={this.state} />
      </div>
    );
  }
}

export default Form;
