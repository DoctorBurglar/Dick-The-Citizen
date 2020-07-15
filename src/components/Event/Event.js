import React from "react";
import classes from "./Event.module.css";
import { format } from "date-fns";

const event = ({ event }) => {
  return (
    <>
      {true ? (
        <div className={classes.Event}>
          <div className={classes.Venue}>{event.venue.name}</div>
          <div className={classes.City}>{event.venue.city}</div>
          <div className={classes.DateTime}>
            {format(new Date(event.datetime), "cccc',' MMMM do',' y  p ")}
          </div>
          <div className={classes.Description}>{event.description}</div>
        </div>
      ) : (
        <div>"There are no shows scheduled at this time"</div>
      )}
    </>
  );
};

export default event;
