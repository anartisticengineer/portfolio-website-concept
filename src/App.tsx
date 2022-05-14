/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './styles/index.scss';
import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
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
    onStart: () => {
      window.scrollTo(0, 0);
      setLoading(false);
    },
    onEnd: () => setLoading(true),
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        {/* Pages via Route */}
        {isLoading ? <Loading /> : null}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <Gallery
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
          <Route
            path="/gallery/:title"
            element={
              <Series
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
          <Route
            path="/contact/success"
            element={
              <SubmitSuccess
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFound
                onStart={loadingFunctions.onStart}
                onEnd={loadingFunctions.onEnd}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
