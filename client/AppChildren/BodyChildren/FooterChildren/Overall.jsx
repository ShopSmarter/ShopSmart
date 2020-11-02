import React, { Component } from 'react'
import { render } from 'react-dom'

class Overall extends Component {
  constructor(props){
    super(props)
   
  }
  render() {
    return (
      <div className="foot">
        <div className="inline">
        <h3 className="oneShop">Only Have Time For One Trip? See Which Store is Cheapest</h3>
        </div>
        <button className="lets" type="submit">Let's See</button>
      </div>
    )
  }
}
export default Overall