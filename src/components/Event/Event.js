import React from "react";
import classes from "./Event.module.css";
import { format } from "date-fns";

const event = (props) => {
  return (
    <>
      {true ? (
        <div className={classes.Event}>
          <div className={classes.Venue}>{props.event.venue.name}</div>
          <div className={classes.City}>{props.event.venue.city}</div>
          <div className={classes.DateTime}>
            {format(new Date(props.event.datetime), "cccc',' MMMM do',' y  p ")}
          </div>
          <div className={classes.Description}>{props.event.description}</div>
        </div>
      ) : (
        <div>"There are no shows scheduled at this time"</div>
      )}
    </>
  );
};

export default event;
