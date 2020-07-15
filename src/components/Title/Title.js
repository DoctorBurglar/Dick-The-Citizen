import React from "react";
import classes from "./Title.module.css";

const title = (props) => {
  return (
    <div className={classes.ImageBox} style={props.style ? props.style : null}>
      <h1 className={classes.Title}>{props.title}</h1>
    </div>
  );
};

export default title;
