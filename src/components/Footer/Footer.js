import React from "react";
import classes from "./Footer.module.css";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterText}>
        <div>
          <img />
          <img />
        </div>
        <h5>Photography By Steve Lorentzen</h5>
      </div>
    </footer>
  );
};

export default footer;
