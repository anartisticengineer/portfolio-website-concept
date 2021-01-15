import React from "react";
import "./assets/styles/index.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import AboutPage from "./components/about";
import HomePage from "./components/home";
import ContactPage from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/*Pages via Route */}
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route path="/gallery"><Gallery/></Route>
        <Route path="/about"><AboutPage/></Route>
        <Route path="/contact"><ContactPage/></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
