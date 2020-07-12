import React, { Component } from "react";
import DTC from "../../assets/Dtc.jpg";
import classes from "./Contact.module.css";

class Contact extends Component {
  render() {
    return (
      <>
        <img
          className={classes.ContactImage}
          style={{
            display: "block",
            width: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
          src={DTC}
        />
        <div>
          FOR BOOKING AND PRESS INQUIRIES, PLEASE CONTACT
          DICKTHECITIZEN@GMAIL.COM
        </div>
      </>
    );
  }
}

export default Contact;
