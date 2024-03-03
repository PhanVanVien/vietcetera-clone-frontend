import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Banner />
      <Header />
    </div>
  );
}

export default App;
