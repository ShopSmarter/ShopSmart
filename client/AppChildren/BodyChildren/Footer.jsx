import React, { Component } from 'react'
import Overall from './FooterChildren/Overall.jsx'
import Cost from './FooterChildren/Cost.jsx'
import { render } from 'react-dom'

class Footer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="footing">
        <Cost />
        <Overall />
      </div>
    )
  }
}
export default Footer