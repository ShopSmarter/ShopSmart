import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './AppChildren/Header.jsx'
//import child components
// import Body from './AppChildren/Body.jsx'
// import Footer from './AppChildren/BodyChildren/Footer.jsx'
import styles from '../styles.css'
import Form from './AppChildren/BodyChildren/Form.jsx'
import Container from './AppChildren/BodyChildren/Container.jsx'
import Footer from './AppChildren/BodyChildren/Footer.jsx'

function App() {
return (
    <div>
      <Header />
      <Form />
      <Container  />
      <Footer />
    </div>
  )
}
export default App