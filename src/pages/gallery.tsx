import React, { FunctionComponent } from "react";
import { useEffect } from "react";
import { embedMaterial } from "../scripts/embed";
import utils from "../scripts/utilities";

const Gallery: FunctionComponent = () => {

  const {fadeUp} = utils;

  useEffect(() => {
    document.title = "Gallery - cyberart_by_justin";
  },[]);

  return <main className="container">
    <h1 className={`container__title ${fadeUp()}`}>Gallery</h1>
    <p id="gallery-description">Some posts of my latest stuff on Instagram!</p>
    {/*I definitely didn't want to use this, but the embed site gives me very little of a choice :P */}
    <section className={`gallery ${fadeUp()}`} dangerouslySetInnerHTML={{__html:embedMaterial}}></section>
  </main>;
};

export default Gallery;
