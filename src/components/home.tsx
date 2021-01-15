import React, { useEffect } from "react";
import { useHistory } from "react-router";
import SketchHome from "../assets/sketches/sketch-home";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "cyberart_by_justin";
  },[]);

  return (
    <main className="container" id="home-page">
        <SketchHome/>
        <aside className="animate__animated animate__fadeInUp">
          <h1 className="container__title">Welcome to the cyber art gallery!</h1>
          <button className="btn btn--home" onClick={() => {history.push('/gallery')}}>See my latest stuff</button>
        </aside> 
    </main>
  );
};

export default HomePage;
