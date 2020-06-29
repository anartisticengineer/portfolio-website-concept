import React from "react";

const Footer = () => {
  const whiteTxt = { color: "whitesmoke" };
  let date = new Date();

  return (
    <footer id="foot" style={whiteTxt}>
      <span id="footer-support" style={{ color: "inherit" }}>
        <h4 style={{ color: "inherit" }}>
          Like what you're seeing, and wanna help me out (financially)?
        </h4>
        <p style={{ color: "inherit" }}>Conisder supporting me on Ko-fi!</p>
        <a href="https://ko-fi.com/K3K2S71S" target="_blank">
          <img
            height="36"
            style={{ border: "0px", height: "36px" }}
            src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"
            border="0"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </span>
      {/*From 2020 onwards*/}
      <span style={{ color: "inherit" }}>
        &copy; Justin Johnson{" "}
        {date.getFullYear() === 2020 ? 2020 : `2020 - ${date.getFullYear()}`}
      </span>
    </footer>
  );
};

export default Footer;
