import React from "react";
import "./styles.css";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        Crypto Hunter<span>.</span>
      </h2>
    </div>
  );
}

export default Footer;
