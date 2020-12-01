import React, { Component } from 'react'

class Addition extends Component {

    state={
        total:0,
        num1:0, 
        num2:0
    }
    setNum=(e, num)=>{
        console.log(e.target.value)
        this.setState({
            [num]: e.target.value
        })
    }
    getTotal=()=>{
        const grandTotal = parseInt(this.state.num1)+parseInt(this.state.num2)
       
    
    this.setState({
        // sets numbers in textbox back to zero
        total: grandTotal,
        num1:0, 
        num2:0,
        })
    }



    render() {
        return (
<div className="container">
    <h1>Add with React!</h1>

  <div className="add">
  <input type="number"
  name="num1"
  placeholder="Enter your first number"
  value={this.state.num1}
  onChange={ (e) => this.setNum(e, 'num1') }
/>

    <span>+</span>
    <input type="number"
  name="num2"
  placeholder="Enter your first number"
  value={this.state.num2}
  onChange={ (e) => this.setNum(e, 'num2') }
/>
    
    <button onClick={this.getTotal}>=</button>
    <h3>Addition results go here!</h3>
    <p>{this.state.total}</p>
  </div>
</div>


       )
    }
}






export default Addition
