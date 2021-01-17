import React, { useEffect, useState } from "react";
import profilePhoto from "../images/new profile pic oct 2019 smaller.jpg";
import {fadeUp} from "../scripts/utilities";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me - cyberart_by_justin";
  },[]);

  const [page, changePage] = useState("cv");

  return (
    <main className="container" id="about-page">
      <h1 className={`container__title ${fadeUp()}`}>About Me</h1>
      <section className={`about ${fadeUp()}`}>
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
    <div className="animate__animated animate__fadeInUp">
      <h3 className="container__title">CV</h3>
      <h4>Objective</h4>
        <p>To specialize in digital art and/or creative coding while continuously exploring ways to bring the two together!</p>
      <h4>Education</h4>
        <ul>
          <li>2018 - B.S. in Electrical Engineering (with an emphasis in Digital Signal Processing) at CSU Long Beach</li>
          <li>2020 - Software Developer Apprentice at Techtonic in Boulder, Colorado</li>
        </ul>
      <h4>Notable Projects + Experience</h4>
        <ul>
          <li>(Obviously) MAKING THIS WEBSITE!</li>
          <li>Glitch FX Generator</li>
          <li>Generative Patterns</li>
        </ul>
    </div>
  );
};

const Features = () => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <h3 className="container__title">Features</h3>
      <ul>
        <li>Jun 2018 - CVA Zine:Glitch</li>
        <li>Oct 2018 - fu:bar/expo in Croatia</li>
        <li>Mar 2019 - Daylighted selected artist</li>
        <li>Jun 2020 - Project V4llain + The Glitch Art Bible</li>
      </ul>
    </div>
  );
};
