import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="kasa black.jpg" alt="Logo" />
      </div>
      <div className="footer__text">
        © 2020 Kasa. All <span>rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
