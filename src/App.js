import React from "react";
import "./App.css";
import "./styles/MediaQueries.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Shortener from "./components/Shortener";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="App">
      <div className="centered-screen">
        <Header />
        <GetStarted />
        <Shortener />
        <Statistics />
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
