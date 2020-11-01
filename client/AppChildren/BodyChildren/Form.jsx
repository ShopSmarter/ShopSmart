import React, { Component } from 'react'

function Form() {
  return (
    <div>
      <div>
        <input type="checkbox" name="store" value="TraderJoes" />Trader Joes
        <input type="checkbox" name="store" value="Walmart" />Walmart
        <input type="checkbox" name="store" value="Ralphs" />Ralphs
      </div>
      <div>
        <input type="text" placeholder="Put Food Item Here" />
        <button type="submit">Add</button>
        <input type="text" placeholder="Budget" />
     </div>
    </div>
  )
}

export default Form