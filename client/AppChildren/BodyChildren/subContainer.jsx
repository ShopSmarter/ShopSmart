import React, { Component } from 'react'

import { render } from 'react-dom'

function SubContainer(props){
  const storeName = props.props.marketName;
  return (
    <div>
    <h3 className="shop">{storeName}</h3>
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
    
export default SubContainer;