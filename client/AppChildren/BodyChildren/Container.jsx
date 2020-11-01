import React, { Component } from 'react'
import { render } from 'react-dom'

class Container extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
      <h3 className="shop">Whole Foods</h3>
  <table className="paper">
      <tr>
          <th className="col">Food</th>
          <th className="col">Prices</th>
      </tr>
      <tr>
        <th className="row">{}</th>
        <th>{}</th>
      </tr>
      <tr>
        <th className="row">{}</th>
        <th>{}</th>
      </tr>
      <tr>
        <th className="row">{}</th>
        <th>{}</th>
      </tr>
  </table>
  </div>
    )
  }
  // const [cost, setCost] = useState(0
 
}
export default Container 