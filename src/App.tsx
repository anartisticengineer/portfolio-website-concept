/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './styles/index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Navbar from './components/navbar';
import Gallery from './pages/gallery';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import Footer from './components/footer';
import Series from './pages/series';
import NotFound from './pages/notfound';
import ErrorBoundary from './pages/errorboundary';
import Loading from './components/loading';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        {/* Pages via Route */}
        {isLoading ? <Loading /> : null}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route path="/gallery/:index">
            <Series />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <NotFound />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
