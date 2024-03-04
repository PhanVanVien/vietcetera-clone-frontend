import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Survey from "./components/Survey/Survey";
import MainBlog from "./components/BlogFeed/MainBlog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Banner />
      <Header />
      <Survey />
      <MainBlog />
      <Footer />
    </div>
  );
}

export default App;
