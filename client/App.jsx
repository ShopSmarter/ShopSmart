import React, { Component } from 'react'
// import { render } from 'react-dom'

//import child components
import Body from './AppChildren/Body.jsx'
import Header from './AppChildren/Header.jsx'
import Footer from './AppChildren/Footer.jsx'

function App() {
  return (
    <div>
      <h1>Hi React is workign</h1>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;