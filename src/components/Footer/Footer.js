import React from "react";
import classes from "./Footer.module.css";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterText}>
        <div>
          <a href="https://www.facebook.com/dickthecitizenband/">
            <img alt="facebook icon" className={classes.Logo} src={Facebook} />
          </a>
          <a href="https://www.instagram.com/dickthecitizen/">
            <img alt="facebook icon" className={classes.Logo} src={Instagram} />
          </a>
        </div>
        <h5>Photography By Steve Lorentzen</h5>
      </div>
    </footer>
  );
};

export default footer;
