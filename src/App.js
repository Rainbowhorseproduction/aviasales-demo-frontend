import React, { Component } from "react";
import Header from "./Header";
import TopDestinations from "./TopDestinations";
import "normalize.css";
import "./fonts/index.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopDestinations />
      </div>
    );
  }
}

export default App;
