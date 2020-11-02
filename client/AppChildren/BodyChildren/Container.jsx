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
          props={{ props: this.props.props, marketName: 'Whole Foods' }}
          key="WholeFoods"
        />
      );
      // markets.push(<SubContainer props={'Whole Foods'} key={'WholeFoods'}/>)
    }
    if (this.props.props.traderJoesSelected) {
      markets.push(
        <SubContainer
          props={{ props: this.props.props, marketName: 'Trader Joes' }}
          key="TraderJoes"
        />
      );
    }
    if (this.props.props.ralphsSelected) {
      markets.push(
        <SubContainer props={{ props: this.props.props, marketName: 'Ralphs' }} key="Ralphs" />
      );
    }
    return <div className="marketsDisplay">{markets}</div>;
  }
}

export default Container;
