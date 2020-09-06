import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p> Album and song details</p>
      </div>
      <div clssName="footer__center">
        <p>Player Controls</p>
      </div>
      <div className="footer__right">
        <p>Volume Controls</p>
      </div>
    </div>
  );
}

export default Footer;