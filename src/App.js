import React, { Component } from "react";
import "normalize.css";
import "./fonts/index.css";
import "./App.css";
import Header from "./Header";
import CityAdvertisings from "./CityAdvertisings";
import TopDestinations from "./TopDestinations";
import TicketPrices from "./TicketPrices";
import SpecialOffers from "./SpecialOffers";
import BuyAdvices from "./BuyAdvices";
import MobileApp from "./MobileApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopDestinations />
        <CityAdvertisings />
        <TicketPrices />
        <SpecialOffers />
        <BuyAdvices />
        <MobileApp />
      </div>
    );
  }
}

export default App;
