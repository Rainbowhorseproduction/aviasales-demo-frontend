import React, { Component } from "react";
import Header from "./Header";
import Intro from "./intro";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
