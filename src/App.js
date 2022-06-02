import React from "react";
import Choose from "./components/Choose";
import Client from "./components/Client";
import { CreateandSell } from "./components/CreateandSell";
import Footer from "./components/Footer";
import Hoem from "./components/Hoem";
import MarketPlace from "./components/MarketPlace";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Hoem />
      <Client />
      <CreateandSell />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
