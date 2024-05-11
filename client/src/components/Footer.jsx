import React from "react";
import Logo from "../img/logo.jpeg";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" width="50px" height="50px" />
      <span>
        Made with 🩶 and <b>React.js</b>.
      </span>
    </footer>
  );
}

export default Footer;
