import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutPage from "./components/about";
import HomePage from "./components/home";
import ContactPage from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/*Pages via Route */}
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </BrowserRouter>
  );
}

export default App;
