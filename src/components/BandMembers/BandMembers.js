import React from "react";
import classes from "./BandMembers.module.css";

const bandMembers = () => {
  return (
    <div className={classes.BandMembers}>
      <h2 className={classes.Title}>Meet the Band!</h2>
      <hr />
      <h3>Steve Pederson</h3>
      <h3>Damien Smith</h3>
      <h3>Erik MacPherson</h3>
      <h3>Steve Lorentzen</h3>
      <h3>Frogs McCormick</h3>
    </div>
  );
};

export default bandMembers;
