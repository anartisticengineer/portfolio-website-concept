import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import Form from "./form";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact - cyberart_by_justin";
  },[]);

  return (
    <main className="container">
      <h1 className="container__title">Contact</h1>
      <section className="container__content">
        <article>
          <p>
            Wanna get in touch? Commissions, collaborations, or just wanna say hi?
            Send me an email with the form below, and/or follow me online. :)
          </p>
          <Form/>
        </article>
        {/*Social media logos section */}
        <article className="social">
          <p className="social__text">Or follow me on social media. I'm pretty active on there (most of the time).</p>
          <span className="social__logos" id="sm-logos">
            <a
              href="https://www.facebook.com/cyberartbyjustin"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} id="icon-fb" />
            </a>
            <a
              href="https://www.instagram.com/cyberart_by_justin/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} id="icon-ig"/>
            </a>
            <a
              href="https://www.behance.net/cyberartbyjustin"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faBehance} id="icon-behance"/>
            </a>
          </span>
        </article>
      </section>
    </main>
  );
};

export default ContactPage;
