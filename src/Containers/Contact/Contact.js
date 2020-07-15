import React, { Component } from "react";
import DTC1 from "../../assets/DickTheCitizen-1.jpg";
import classes from "./Contact.module.css";
import Picture from "../../components/Picture/Picture";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";

class Contact extends Component {
  render() {
    return (
      <>
        <Picture
          src={DTC1}
          title="Contact"
          alt="Dick the Citizen looks dapper in suits and smiles while lead singer Steve Pederson straightens his tie"
        />
        <div className={classes.Contact}>
          <Title title="Contact" />
          <div className={classes.Booking}>
            <h3 className={classes.BookingMessage}>
              FOR BOOKING AND PRESS INQUIRIES, PLEASE CONTACT:
            </h3>
            <h2>DICKTHECITIZEN@GMAIL.COM</h2>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Contact;
