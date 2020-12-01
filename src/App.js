import React, { Component } from "react";

import FunctionalComponent from "./components/FunctionalComponent";
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
import Multiply from "./components/Multiply";
import Divide from "./components/Divide";

import "./css/App.css";

class App extends Component {
  render() {

  


    return (
      <div className="App">
        <FunctionalComponent />
        <Addition />
        <Subtraction />
        <Multiply />
        <Divide />
      </div>
      
    );
  }
}

export default App;
