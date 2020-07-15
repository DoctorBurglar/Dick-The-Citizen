import React, { Component } from "react";
import Picture from "../../components/Picture/Picture";
import DTC9 from "../../assets/DickTheCitizen-9.jpg";
import classes from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <img
          className={classes.HomePicture}
          src={DTC9}
          alt="Dick the Citizen looking serious.  Seriously cool"
        />
        <Title
          title="DICK THE CITIZEN"
          style={{
            height: "40vw",
          }}
        />

        <Footer />
      </div>
    );
  }
}

export default Home;
