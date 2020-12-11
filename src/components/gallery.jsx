import React from "react";
import { useEffect } from "react";
import { embedMaterial } from "../scripts/embed";

const Gallery = () => {

  useEffect(() => {
    document.title = "Gallery - cyberart_by_justin";
  },[]);

  return <main className="container">
    <h1 className="container__title">Gallery</h1>
    <p>Below, you'll find my latest works (that are on Instagram)!</p>
    {/*I definitely didn't want to use this, but the embed site gives me very little of a choice :P */}
    <section className="gallery" dangerouslySetInnerHTML={{__html:embedMaterial}}></section>
  </main>;
};

export default Gallery;
