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
import Footer from "./Footer";
import AirlineAdvertising from "./AirlineAdvertising";
import Subscribe from "./Subscribe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopDestinations />
        <CityAdvertisings />
        <TicketPrices />
        <AirlineAdvertising />
        <Subscribe />
        <SpecialOffers />
        <BuyAdvices />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default App;
