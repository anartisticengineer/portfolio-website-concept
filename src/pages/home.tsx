/* eslint-disable react/jsx-filename-extension */
import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '../components/button';
import SketchHome from '../sketches/sketch-home';

const HomePage: FunctionComponent = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = 'cyberart_by_justin';
  }, []);

  return (
    <main className="container" id="home-page">
      <SketchHome />
      <aside className="animate__animated animate__fadeInUp">
        <h1 className="container__title">Welcome to the cyber art gallery!</h1>
        <Button
          classes="btn--home"
          id="see-latest"
          isSubmit={false}
          onClickFcn={() => history.push('/gallery')}
        >
          See my latest stuff
        </Button>
      </aside>
    </main>
  );
};

export default HomePage;
