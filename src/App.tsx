/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles/index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Gallery from './pages/gallery';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import Footer from './components/footer';

const App = () => (
  <BrowserRouter>
    <Navbar />
    {/* Pages via Route */}
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
