import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import Navbar from "./components/navbar";
import AboutPage from "./components/about";
import HomePage from "./components/home";
import ContactPage from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/*Pages via Route */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
