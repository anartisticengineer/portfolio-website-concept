import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import AboutPage from "./components/about";
import HomePage from "./components/home";
import ContactPage from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/*Pages via Route */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
