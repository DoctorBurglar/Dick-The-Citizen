import React from "react";
import classes from "./Picture.module.css";

const picture = (props) => {
  return (
    <>
      <img className={classes.ContactImage} src={props.src} />
    </>
  );
};

export default picture;
