import React, { Component, useState } from 'react'
import { render } from 'react-dom'

class Cost extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      // this is a text element that shows overall cost of all shopping lists
      // changes color to red when over budget
      <div>
        <h3 id="total">Total Cost: $</h3>
      </div>
    )
  }
}

export default Cost