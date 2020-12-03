import React, { Component } from "react";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery - cyberart_by_justin";
  },[]);
  return <div className="container-primary"></div>;
};

const GlitchArtGallery = () => {
  return (
    <div>
      <h1>Glitch Art</h1>
    </div>
  );
};

const CreativeCodingGallery = () => {
  return (
    <div>
      <h1>Creative Coding</h1>
    </div>
  );
};

export default Gallery;
