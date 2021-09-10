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
import { EffectHookFunctions } from './types/componentprops';
import SubmitSuccess from './pages/submitsuccess';
import Shop from './pages/shop';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  const loadingFunctions: EffectHookFunctions = {
    onStart: () => setLoading(false),
    onEnd: () => setLoading(true),
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        {/* Pages via Route */}
        {isLoading ? <Loading /> : null}
        <Switch>
          <Route exact path="/">
            <HomePage onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
          </Route>
          <Route exact path="/gallery">
            <Gallery onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
          </Route>
          <Route path="/gallery/:index">
            <Series onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
          </Route>
          <Route path="/about">
            <AboutPage onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
          </Route>
          <Route path="/shop">
            <Shop onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
          </Route>
          <Route exact path="/contact">
            <ContactPage onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
          </Route>
          <Route exact path="/contact/success">
            <SubmitSuccess onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
          </Route>
          <NotFound onStart={loadingFunctions.onStart} onEnd={loadingFunctions.onEnd} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
