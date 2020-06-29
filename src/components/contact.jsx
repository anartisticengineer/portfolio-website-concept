import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact - cyberart_by_justin";
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target.id);
    let theForm = document.getElementById(event.target.id);
  };

  return (
    <div className="container-primary">
      <span>
        <h1>Contact</h1>
      </span>
      <p>
        Wanna get in touch? Commissions, collaborations, or just wanna say hi?
        Send me an email with the form below, and/or follow me online. :)
      </p>
      {/*Contact form */}
      <form onSubmit={handleSubmit} id="submit-form" autoComplete="off">
        <label htmlFor="first-name">First Name: </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          required
        />
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
          required
        />
        <label htmlFor="form-email">Email: </label>
        <input
          type="email"
          name="form-email"
          id="form-email"
          placeholder="E-mail"
          required
        />
        <label htmlFor="message">Your message: </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Write your message here"
          required
        ></textarea>
        <button type="submit" id="submit-btn">
          Submit
        </button>
      </form>
      <span id="sm-logos">
        <a
          href="https://www.facebook.com/cyberartbyjustin"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://www.instagram.com/cyberart_by_justin/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.behance.net/cyberartbyjustin"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </span>
    </div>
  );
};

export default ContactPage;
