import React, { Component } from "react";
import Header from "./Header";
import "normalize.css";
import "./fonts/index.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
