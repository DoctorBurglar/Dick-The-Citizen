import React from "react";
import classes from "./Picture.module.css";

const picture = (props) => {
  return (
    <>
      <img className={classes.ContactImage} src={props.src} alt={props.alt} />
    </>
  );
};

export default picture;
