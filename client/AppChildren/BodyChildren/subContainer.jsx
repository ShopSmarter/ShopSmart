import React, { Component } from 'react'

import { render } from 'react-dom'

function SubContainer(props){
  const storeName = props.props.marketName;
  const storeSubtotal = props.props.priceList.reduce((a,b)=> a+b, 0)
  const foodsList = props.props.props.foodsList
  const priceList = props.props.priceList

  let foodRows = [];
  let priceRows = [];
  foodsList.forEach((food, index)=>{
      foodRows.push(
        <tr className="row" key={index}>
          <td className="row">{food}</td>
        </tr>  
    )
  })
  priceList.forEach((price, index)=>{
    priceRows.push(
      <tr className="row" key={index}>
        <td className="row">{price}</td>
      </tr>
    )
  })


    
  return (
    <div>
    <h3 className="shop">{storeName}</h3>
        <table className="paper">
          <tbody>
            <tr>
              <th className="col">Food</th>
              <th className="col">Prices</th>
           </tr>
            {foodRows}
            {priceRows}
          </tbody>
        </table>
        <h3>Total Cost: ${storeSubtotal}</h3>
    </div>
    )
  }
    
export default SubContainer;