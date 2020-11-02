import React, { Component } from 'react'
import logo from './wholeFoods.png'
import logos from './traders.png'
import logoss from './ralphs.png'
import Footer from './Footer.jsx'
import Container from './Container.jsx'
import { render } from 'react-dom'

// *******WE'RE SORRY!********
class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      marketNames: ['Whole Foods', 'Trader Joes', 'Ralphs'],
      wholeFoodsSelected: false,
      wholeFoodsSubtotal: 0,
      traderJoesSelected: false,
      traderJoesSubtotal: 0,
      ralphsSelected: false,
      ralphsSubtotal: 0,
      foodsList: [],
      food: '',
      maxBudget: 0
    }
   this.storeClick = this.storeClick.bind(this)
   this.onFoodType = this.onFoodType.bind(this)
   this.onSubmit = this.onSubmit.bind(this)
  }

storeClick(store) { 
if (!this.state[store]) {
  this.setState((prevState)=>{
    return{
      ...prevState,
      [store] : true
    }
  })
  console.log(this.state)
}
else {
  this.setState((prevState)=>{
    return{
      ...prevState,
      [store] : false
    }
  })
  console.log(this.state)
}
}

//captures food input in food key
onFoodType(e){
  console.log(e);
  this.setState((prevState)=>{
    return{
      ...prevState,
      food: e.target.value
    }   
  });
}

//pushes captured food key into array of foodsList
onSubmit(e) { 
  e.preventDefault();
  this.setState((prevState)=>{
    return{
      ...prevState,
      foodsList: this.state.foodsList.concat(this.state.food)
    }   
  });
}

  render(){
    console.log(this.state.foodsList)
    return (
      <div>
        <div id="middle" className="TopInput">
          {/* store selection inputs */}
          <input onClick={() => this.storeClick('wholeFoodsSelected')} type="image" className="logos"src={logo} alt="WholeFoods"></input>
          <input onClick={() => this.storeClick('traderJoesSelected')} type="image" className="logos"src={logos} alt="Traders"></input>
          <input onClick={() => this.storeClick('ralphsSelected')} type="image" className="logos"src={logoss} alt="Ralphs"></input>
        </div>
        <div className="BottomInputs">
        <form onSubmit={this.onSubmit} id="inputs">
          {/* food search */}
          <input onChange={this.onFoodType} className="field" type="text" placeholder="Food Item" />
          {/* click submit button for food */}
          <input className='btn' type="submit" value='+'/>
        {/* <button onClick={this.onFoodInput} className="btn" type="submit">+</button> */}
        </form>
        <div className="budget">
          {/* budget input */}
          <input className="field" type="text" placeholder="Max Budget" />
       </div>
       
        </div>
        <Container props={this.state} />
        <Footer props={this.state} />
      </div>
    )
  }
}

export default Form