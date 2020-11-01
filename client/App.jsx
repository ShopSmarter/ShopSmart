import React, { Component } from 'react';
// import { render } from 'react-dom'
import Header from './AppChildren/Header.jsx';
// import child components
import Body from './AppChildren/Body.jsx';
import Footer from './AppChildren/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
