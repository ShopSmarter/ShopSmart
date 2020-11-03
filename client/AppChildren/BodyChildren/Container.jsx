import React, { Component } from 'react';
import { render } from 'react-dom';
import SubContainer from './subContainer.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const markets = [];
    if (this.props.props.wholeFoodsSelected) {
      markets.push(
        <SubContainer
          props={{
            props: this.props.props,
            marketName: 'Whole Foods',
            subTotal: this.props.props.wholeFoodsSubtotal,
            priceList: this.props.props.wholeFoodsList,
          }}
          key="wholeFoodsList"
        />
      );
      // markets.push(<SubContainer props={'Whole Foods'} key={'WholeFoods'}/>)
    }
    if (this.props.props.traderJoesSelected) {
      markets.push(
        <SubContainer
          props={{
            props: this.props.props,
            marketName: 'Trader Joes',
            subTotal: this.props.props.traderJoesSubtotal,
            priceList: this.props.props.traderJoesList,
          }}
          key="traderJoesList"
        />
      );
    }
    if (this.props.props.ralphsSelected) {
      markets.push(
        <SubContainer
          props={{
            props: this.props.props,
            marketName: 'Ralphs',
            subTotal: this.props.props.ralphsSubtotal,
            priceList: this.props.props.ralphsList,
          }}
          key="ralphsList"
        />
      );
    }
    return <div className="marketsDisplay">{markets}</div>;
  }
}

export default Container;
