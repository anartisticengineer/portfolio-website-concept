import React, { useEffect, useState } from "react";
import profilePhoto from "../assets/images/new profile pic oct 2019 smaller.jpg";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me - cyberart_by_justin";
  },[]);

  const [page, changePage] = useState("cv");

  return (
    <main className="container" id="about-page">
      <h1 className="container__title">About Me</h1>
      <section className="about">
        {/**Grid 1 */}
        <article className="about__article">
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={profilePhoto} alt="profile" id="about-profile-photo"/>
          </div>
          <h2 className="container__title">Who am I?</h2>
          <p>
            I am a digital artist/creative coder currently based in Denver,
            Colorado. I've been doing digital art since about 2017 and creative
            coding since 2016. As I've grown as an artist over the years, I've been
            discovering more ways to combine art and technology.
          </p>
          <p>
            Specializing primarily in glitch art, much of my best works come from
            destroying my photos on purpose. Datamoshing, breaking pixels, pixel
            sorting, all of that good stuff. I've used my creative coding skills to
            create my own tool for glitching artworks; a tool whose influence can be
            seen in much of my latest artworks.
          </p>
        </article>
        {/** */}
        <article className="about__article">
          <div id="cv-or-features">
            <button className="btn" id="cv-btn" onClick={() => changePage("cv")}>
              CV
            </button>
            <button className="btn" id="features-btn" onClick={() => changePage("features")}>
              Features
            </button>
          </div>
          {/*This will be the CV or Features */}
          {page === "cv" ? <CV /> : <Features />}
        </article>
      </section>
    </main>
  );
};

export default AboutPage;

const CV = () => {
  return (
    <div>
      <h3 className="container__title">CV</h3>
      <ul>
        <li>Objective</li>
        <li>Education</li>
      </ul>
    </div>
  );
};

const Features = () => {
  return (
    <div>
      <h3 className="container__title">Features</h3>
      <ul>
        <li>Jun 2018 - CVA Zine:Glitch</li>
        <li>Oct 2018 - fu:bar/expo in Croatia</li>
        <li>Mar 2019 - Daylighted selected artist</li>
        <li>Jun 2020 - Project V4llain</li>
      </ul>
    </div>
  );
};
