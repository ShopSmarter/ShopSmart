import React, { Component } from 'react';
import { render } from 'react-dom';
import Overall from './FooterChildren/Overall.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footing">
        <Overall props={this.props.props}/>
      </div>
    );
  }
}
export default Footer;
